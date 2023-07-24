<template>
  <el-container style="height:100%">
    <el-header style="line-height: 60px; backgroud-color: rgb(255, 255, 255); position: fixed">
      <div>
        <i class="iconfont icon-bilibili"></i>
      </div>
    </el-header>
    <el-main
      style="background-color: #fafafa; width:100%; margin-top: 60px; height:100%; margin-bottom:0px"
    >
      <el-row
        justify="center"
        type="flex"
        style="margin: 10px auto; width:1100px; background-color: rgb(255, 255, 255);"
      >
        <el-col>
          <el-row justify="center" type="flex" style=" text-align:center">
            <el-col :span="9">
              <el-upload
                style="margin-top:10px;"
                drag
                action="/"
                :http-request="handleHttpRequest"
                :data="{SavePath: this.Path.url}"
                :on-success="handleVideoSuccess"
                :before-upload="beforeUploadVideo"
                :on-progress="uploadVideoProcess"
                :on-remove="handleRemoveFile"
              >
                <i v-if="Plus" class="el-icon-upload"></i>
                <div v-if="Plus" class="el-upload__text">
                  拖拽到此处也可上传
                  <br />
                  <el-button>上传视频</el-button>
                </div>
                <el-progress
                  v-if="videoFlag == true"
                  type="circle"
                  :percentage="videoUploadPercent"
                  style="margin-top:30px;"
                ></el-progress>
                <div class="el-upload__tip" slot="tip">只能上传mp4/flv/avi文件，且不超过300M</div>
              </el-upload>
            </el-col>
          </el-row>
          <el-row justify="center" type="flex">
            <el-col>
              <el-form
                :model="videoForm"
                label-position="left"
                label-width="100px"
                style="margin: 20px 50px;"
              >
                <el-form-item label="封面">
                  <el-upload
                    class="avatar-uploader"
                    action="http://localhost:8090/apix/video/minio/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="标题">
                  <el-input v-model="videoForm.title" style="width:800px"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                  <el-radio v-model="videoForm.type" label="0">自制</el-radio>
                  <el-radio v-model="videoForm.type" label="1">转载</el-radio>
                </el-form-item>
                <el-form-item label="分区">
                  <el-cascader
                    v-model="videoForm.zone"
                    :options="zones"
                    @change="handleCascaderChange"
                  ></el-cascader>
                </el-form-item>
                <el-form-item label="标签">
                  <tag-select :tagList="recommendTags"></tag-select>
                </el-form-item>
                <el-form-item label="简介">
                  <el-input
                    type="textarea"
                    :rows="5"
                    placeholder="请输入内容"
                    v-model="videoForm.description"
                    style="width:800px"
                  ></el-input>
                </el-form-item>
                <el-form-item label="定时发布">
                  <el-switch v-model="videoForm.scheduled"></el-switch>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" style="margin-left:80px" @click="handleSubmission">立即投稿</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {
  taskInfo,
  initTask,
  preSignUrl,
  merge,
  getZoneTree,
  getRecommendTags,
  uploadVieo
} from "../lib/api";
import md5 from "../lib/md5";
import Queue from "promise-queue-plus";
import axios from "axios";
import TagSelect from "../components/common/tagSelect.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "upload",
  components: { TagSelect },
  data() {
    //这里存放数据
    return {
      videoForm: {
        cover: "",
        title: "",
        type: "0",
        zone: 1,
        tags: [],
        description: "",
        scheduled: false,
        objectKey: "",
        bucketName: "",
        duration: 0
      },
      recommendTags: [],
      imageUrl: "",
      zones: [],
      videoFlag: false,
      videoUploadDone: false,
      Plus: true,
      Path: {
        url: "F:/video/videoUpload"
      },
      videoUploadPercent: 0,
      fileUploadChunkQueue: {}
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    /**
     * 移除文件列表中的文件
     * 如果文件存在上传队列任务对象，则停止该队列的任务
     */
    handleRemoveFile(uploadFile, uploadFiles) {
      const queueObject = this.fileUploadChunkQueue[uploadFile.uid];
      if (queueObject) {
        queueObject.stop();
        this.fileUploadChunkQueue[uploadFile.uid] = undefined;
      }
    },
    handleUpload(file, taskRecord, options) {
      let lastUploadedSize = 0; // 上次断点续传时上传的总大小
      let uploadedSize = 0; // 已上传的大小
      const totalSize = file.size || 0; // 文件总大小
      let startMs = new Date().getTime(); // 开始上传的时间
      const { exitPartList, chunkSize, chunkNum, fileIdentifier } = taskRecord;
      console.log(exitPartList, chunkSize, chunkNum, fileIdentifier);
      // 获取从开始上传到现在的平均速度（byte/s）
      const getSpeed = () => {
        // 已上传的总大小 - 上次上传的总大小（断点续传）= 本次上传的总大小（byte）
        const intervalSize = uploadedSize - lastUploadedSize;
        const nowMs = new Date().getTime();
        // 时间间隔（s）
        const intervalTime = (nowMs - startMs) / 1000;
        return intervalSize / intervalTime;
      };

      const uploadNext = async partNumber => {
        const start = new Number(chunkSize) * (partNumber - 1);
        const end = start + new Number(chunkSize);
        const blob = file.slice(start, end);
        const { code, data, msg } = await preSignUrl({
          identifier: fileIdentifier,
          partNumber: partNumber
        });
        if (code === 200 && data) {
          await axios.request({
            url: data,
            method: "PUT",
            data: blob,
            headers: { "Content-Type": "application/octet-stream" }
          });
          return Promise.resolve({
            partNumber: partNumber,
            uploadedSize: blob.size
          });
        }
        return Promise.reject(`分片${partNumber}， 获取上传地址失败`);
      };

      /**
       * 更新上传进度
       * @param increment 为已上传的进度增加的字节量
       */
      const updateProcess = increment => {
        increment = new Number(increment);
        const { onProgress } = options;
        let factor = 1000; // 每次增加1000 byte
        let from = 0;
        // 通过循环一点一点的增加进度
        while (from <= increment) {
          from += factor;
          uploadedSize += factor;
          const percent = Math.round((uploadedSize / totalSize) * 100).toFixed(
            2
          );
          onProgress({ percentage: percent });
        }

        const speed = getSpeed();
        const remainingTime =
          speed != 0
            ? Math.ceil((totalSize - uploadedSize) / speed) + "s"
            : "未知";
        console.log(
          "剩余大小：",
          (totalSize - uploadedSize) / 1024 / 1024,
          "mb"
        );
        console.log("当前速度：", (speed / 1024 / 1024).toFixed(2), "mbps");
        console.log("预计完成：", remainingTime);
      };
      return new Promise(resolve => {
        const failArr = [];
        const queue = Queue(5, {
          retry: 3, //Number of retries
          retryIsJump: false, //retry now?
          workReject: function(reason, queue) {
            failArr.push(reason);
          },
          queueEnd: function(queue) {
            resolve(failArr);
          }
        });
        this.fileUploadChunkQueue[file.uid] = queue;
        for (let partNumber = 1; partNumber <= chunkNum; partNumber++) {
          const exitPart = (exitPartList || []).find(
            exitPart => exitPart.partNumber == partNumber
          );
          if (exitPart) {
            // 分片已上传完成，累计到上传完成的总额中,同时记录一下上次断点上传的大小，用于计算上传速度
            lastUploadedSize += new Number(exitPart.size);
            updateProcess(exitPart.size);
          } else {
            queue.push(() =>
              uploadNext(partNumber).then(res => {
                // 单片文件上传完成再更新上传进度
                updateProcess(res.uploadedSize);
              })
            );
          }
        }
        if (queue.getLength() == 0) {
          // 所有分片都上传完，但未合并，直接return出去，进行合并操作
          resolve(failArr);
          return;
        }
        queue.start();
      });
    },
    async getTaskInfo(file) {
      let task;
      const identifier = await md5(file);
      const { code, data, msg } = await taskInfo(identifier);
      console.log(code, data, msg);
      if (code === 200) {
        task = data;
        if (!task) {
          const initTaskData = {
            identifier,
            fileName: file.name,
            totalSize: file.size,
            chunkSize: 5 * 1024 * 1024
          };
          const { code, data, msg } = await initTask(initTaskData);
          console.log(data);
          if (code === 200) {
            task = data;
          } else {
            this.$notify.error({
              title: "文件上传错误",
              message: msg
            });
          }
        }
      } else {
        console.log("开始任务");
        this.$notify.error({
          title: "文件上传错误",
          message: msg
        });
      }
      return task;
    },
    //执行分片上传
    async handleHttpRequest(options) {
      const file = options.file;
      const task = await this.getTaskInfo(file);
      if (task) {
        console.log(task);
        const { finished, path, taskRecord } = task;
        const { fileIdentifier: identifier } = taskRecord;
        if (finished) {
          return { code: 200, path, taskRecord };
        } else {
          const errorList = await this.handleUpload(file, taskRecord, options);
          if (errorList.length > 0) {
            this.$notify.error({
              title: "文件上传错误",
              message: "部分分片上次失败，请尝试重新上传文件"
            });
            return;
          }
          const { code, data, msg } = await merge(identifier);
          if (code === 200) {
            return { code, path };
          } else {
            this.$notify.error({
              title: "文件上传错误",
              message: msg
            });
          }
        }
      } else {
        this.$notify.error({
          title: "文件上传错误",
          message: "获取上传任务失败"
        });
      }
    },
    // 视频上传前执行
    beforeUploadVideo(file) {
      //   const isLt300M = file.size / 1024 / 1024 < 300
      if (
        [
          "video/mp4",
          "video/ogg",
          "video/flv",
          "video/avi",
          "video/wmv",
          "video/rmvb"
        ].indexOf(file.type) === -1
      ) {
        this.$message.error("请上传正确的视频格式");
        return false;
      }else{
        this.getVideoDuration(file)
      }
      //   if (!isLt300M) {
      //     this.$message.error('上传视频大小不能超过300MB哦!')
      //     return false
      //   }
    },
    // 视频上传过程中执行
    uploadVideoProcess(event, file, fileList) {
      this.Plus = false;
      this.videoFlag = true;
      this.videoUploadPercent = Number(file.percentage.toFixed(0));
    },
    // 视频上传成功是执行
    handleVideoSuccess(res, file) {
      this.Plus = false;
      this.videoFlag = true;
      this.videoUploadPercent = 100;
      console.log(res);
      // 如果为200代表视频保存成功
      if (res.code == 200) {
        // 接收视频传回来的名称和保存地址
        // 至于怎么使用看你啦~
        this.videoUploadDone = true;
        this.videoForm.title = res.taskRecord.fileName.substring (0,res.taskRecord.fileName.lastIndexOf ('.'));
        this.videoForm.bucketName = res.taskRecord.bucketName;
        this.videoForm.objectKey = res.taskRecord.objectKey;
        this.$message.success("视频上传成功！");
      } else {
        this.$message.error("视频上传失败，请重新上传！");
      }
    },
    getVideoDuration(file) {
      var url = URL.createObjectURL(file);
      var audioElement = new Audio(url);
      var self = this;
      var result;
      audioElement.addEventListener("loadedmetadata", function() {
        // 视频时长值的获取要等到这个匿名函数执行完毕才产生
        result = audioElement.duration; //得到时长为秒，小数，182.36
        this.videoForm.duration = parseInt(result); //转为int值
        console.log(this.videoForm.duration)
      });
    },
    getZones() {
      getZoneTree().then(res => {
        let tree = this.transferToZoneTree(res.data.tree);
        console.log(tree);
        this.zones = tree;
      });
    },
    transferToZoneTree(tree) {
      let zones = [];
      if (tree) {
        for (var i = 0; i < tree.length; i++) {
          let node = { value: tree[i].catId, label: tree[i].name };
          if (tree[i].children) {
            node.children = this.transferToZoneTree(tree[i].children);
          }
          zones.push(node);
        }
      }
      return zones;
    },
    handleCascaderChange(value) {
      console.log(value);
      getRecommendTags(value[value.length - 1]).then(res => {
        console.log(res);
        this.recommendTags = res.data;
      });
    },
    handleSubmission(){
      uploadVieo(this.videoForm).then(res=>{
        console.log(res)
        if (res.code == 200) {
        this.$message.success("投稿成功！");
      } else {
        this.$message.error("投稿失败，请重新上传！");
      }
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getZones();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style>
.el-upload {
  margin-top: 10px;
}
.el-main {
  padding: 0;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-cascader-panel {
  height: 200px;
}
</style>