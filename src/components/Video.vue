<template>
  <div class>
    <div style="background-color: white;z-index:999;">
      <off-nav></off-nav>
    </div>

    <div class="video-container-v1">
      <div class="left-container scroll-sticky">
        <div class="video-info-container" style="width: 668px;">
          <h1 class="video-title" v-html="video.title"></h1>
          <div class="video-info-detail">
            <div class="video-info-detail-list">
              <span class="view item">
                <svg
                  class="view-icon"
                  style="width:20px;height:20px;"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 4.040041666666666C7.897383333333334 4.040041666666666 6.061606666666667 4.147 4.765636666666667 4.252088333333334C3.806826666666667 4.32984 3.061106666666667 5.0637316666666665 2.9755000000000003 6.015921666666667C2.8803183333333333 7.074671666666667 2.791666666666667 8.471183333333332 2.791666666666667 9.998333333333333C2.791666666666667 11.525566666666668 2.8803183333333333 12.922083333333333 2.9755000000000003 13.9808C3.061106666666667 14.932983333333334 3.806826666666667 15.666916666666667 4.765636666666667 15.744683333333336C6.061611666666668 15.849716666666666 7.897383333333334 15.956666666666667 10 15.956666666666667C12.10285 15.956666666666667 13.93871666666667 15.849716666666666 15.234766666666667 15.74461666666667C16.193416666666668 15.66685 16.939000000000004 14.933216666666667 17.024583333333336 13.981216666666668C17.11975 12.922916666666667 17.208333333333332 11.526666666666666 17.208333333333332 9.998333333333333C17.208333333333332 8.470083333333333 17.11975 7.073818333333334 17.024583333333336 6.015513333333334C16.939000000000004 5.063538333333333 16.193416666666668 4.329865000000001 15.234766666666667 4.252118333333334C13.93871666666667 4.147016666666667 12.10285 4.040041666666666 10 4.040041666666666zM4.684808333333334 3.255365C6.001155 3.14862 7.864583333333334 3.0400416666666668 10 3.0400416666666668C12.13565 3.0400416666666668 13.999199999999998 3.148636666666667 15.315566666666667 3.2553900000000002C16.753416666666666 3.3720016666666672 17.890833333333333 4.483195 18.020583333333335 5.925965000000001C18.11766666666667 7.005906666666667 18.208333333333336 8.433 18.208333333333336 9.998333333333333C18.208333333333336 11.56375 18.11766666666667 12.990833333333335 18.020583333333335 14.0708C17.890833333333333 15.513533333333331 16.753416666666666 16.624733333333335 15.315566666666667 16.74138333333333C13.999199999999998 16.848116666666666 12.13565 16.95666666666667 10 16.95666666666667C7.864583333333334 16.95666666666667 6.001155 16.848116666666666 4.684808333333334 16.7414C3.2467266666666665 16.624750000000002 2.1092383333333338 15.513266666666667 1.9795200000000002 14.070383333333334C1.8823900000000002 12.990000000000002 1.7916666666666667 11.562683333333334 1.7916666666666667 9.998333333333333C1.7916666666666667 8.434066666666666 1.8823900000000002 7.00672 1.9795200000000002 5.926381666666667C2.1092383333333338 4.483463333333334 3.2467266666666665 3.371976666666667 4.684808333333334 3.255365z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.23275 9.1962C12.851516666666667 9.553483333333332 12.851516666666667 10.44665 12.232683333333332 10.803866666666666L9.57975 12.335600000000001C8.960983333333335 12.692816666666667 8.1875 12.246250000000002 8.187503333333334 11.531733333333333L8.187503333333334 8.4684C8.187503333333334 7.753871666666667 8.960983333333335 7.307296666666667 9.57975 7.66456L12.23275 9.1962z"
                    fill="currentColor"
                  />
                </svg>
                {{video.view+1}}
              </span>
              <span class="dm item" data-v-b1eaede6>
                <svg
                  class="dm-icon"
                  style="width:20px;height:20px;"
                  data-v-b1eaede6
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 4.040041666666666C7.897383333333334 4.040041666666666 6.061606666666667 4.147 4.765636666666667 4.252088333333334C3.806826666666667 4.32984 3.061106666666667 5.0637316666666665 2.9755000000000003 6.015921666666667C2.8803183333333333 7.074671666666667 2.791666666666667 8.471183333333332 2.791666666666667 9.998333333333333C2.791666666666667 11.525566666666668 2.8803183333333333 12.922083333333333 2.9755000000000003 13.9808C3.061106666666667 14.932983333333334 3.806826666666667 15.666916666666667 4.765636666666667 15.744683333333336C6.061611666666668 15.849716666666666 7.897383333333334 15.956666666666667 10 15.956666666666667C12.10285 15.956666666666667 13.93871666666667 15.849716666666666 15.234766666666667 15.74461666666667C16.193416666666668 15.66685 16.939000000000004 14.933216666666667 17.024583333333336 13.981216666666668C17.11975 12.922916666666667 17.208333333333332 11.526666666666666 17.208333333333332 9.998333333333333C17.208333333333332 8.470083333333333 17.11975 7.073818333333334 17.024583333333336 6.015513333333334C16.939000000000004 5.063538333333333 16.193416666666668 4.329865000000001 15.234766666666667 4.252118333333334C13.93871666666667 4.147016666666667 12.10285 4.040041666666666 10 4.040041666666666zM4.684808333333334 3.255365C6.001155 3.14862 7.864583333333334 3.0400416666666668 10 3.0400416666666668C12.13565 3.0400416666666668 13.999199999999998 3.148636666666667 15.315566666666667 3.2553900000000002C16.753416666666666 3.3720016666666672 17.890833333333333 4.483195 18.020583333333335 5.925965000000001C18.11766666666667 7.005906666666667 18.208333333333336 8.433 18.208333333333336 9.998333333333333C18.208333333333336 11.56375 18.11766666666667 12.990833333333335 18.020583333333335 14.0708C17.890833333333333 15.513533333333331 16.753416666666666 16.624733333333335 15.315566666666667 16.74138333333333C13.999199999999998 16.848116666666666 12.13565 16.95666666666667 10 16.95666666666667C7.864583333333334 16.95666666666667 6.001155 16.848116666666666 4.684808333333334 16.7414C3.2467266666666665 16.624750000000002 2.1092383333333338 15.513266666666667 1.9795200000000002 14.070383333333334C1.8823900000000002 12.990000000000002 1.7916666666666667 11.562683333333334 1.7916666666666667 9.998333333333333C1.7916666666666667 8.434066666666666 1.8823900000000002 7.00672 1.9795200000000002 5.926381666666667C2.1092383333333338 4.483463333333334 3.2467266666666665 3.371976666666667 4.684808333333334 3.255365z"
                    fill="currentColor"
                  />
                  <path
                    d="M13.291666666666666 8.833333333333334L8.166666666666668 8.833333333333334C7.890526666666666 8.833333333333334 7.666666666666666 8.609449999999999 7.666666666666666 8.333333333333334C7.666666666666666 8.057193333333334 7.890526666666666 7.833333333333334 8.166666666666668 7.833333333333334L13.291666666666666 7.833333333333334C13.567783333333335 7.833333333333334 13.791666666666668 8.057193333333334 13.791666666666668 8.333333333333334C13.791666666666668 8.609449999999999 13.567783333333335 8.833333333333334 13.291666666666666 8.833333333333334z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.541666666666666 12.166666666666666L9.416666666666668 12.166666666666666C9.140550000000001 12.166666666666666 8.916666666666666 11.942783333333333 8.916666666666666 11.666666666666668C8.916666666666666 11.390550000000001 9.140550000000001 11.166666666666668 9.416666666666668 11.166666666666668L14.541666666666666 11.166666666666668C14.817783333333335 11.166666666666668 15.041666666666668 11.390550000000001 15.041666666666668 11.666666666666668C15.041666666666668 11.942783333333333 14.817783333333335 12.166666666666666 14.541666666666666 12.166666666666666z"
                    fill="currentColor"
                  />
                  <path
                    d="M6.5 8.333333333333334C6.5 8.609449999999999 6.27614 8.833333333333334 6 8.833333333333334L5.458333333333333 8.833333333333334C5.182193333333334 8.833333333333334 4.958333333333334 8.609449999999999 4.958333333333334 8.333333333333334C4.958333333333334 8.057193333333334 5.182193333333334 7.833333333333334 5.458333333333333 7.833333333333334L6 7.833333333333334C6.27614 7.833333333333334 6.5 8.057193333333334 6.5 8.333333333333334z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.750000000000001 11.666666666666668C7.750000000000001 11.942783333333333 7.526140000000001 12.166666666666666 7.25 12.166666666666666L6.708333333333334 12.166666666666666C6.432193333333334 12.166666666666666 6.208333333333334 11.942783333333333 6.208333333333334 11.666666666666668C6.208333333333334 11.390550000000001 6.432193333333334 11.166666666666668 6.708333333333334 11.166666666666668L7.25 11.166666666666668C7.526140000000001 11.166666666666668 7.750000000000001 11.390550000000001 7.750000000000001 11.666666666666668z"
                    fill="currentColor"
                  />
                </svg>
                {{video.danmakuCount?video.danmakuCount:0}}
              </span>
              <span class="pubdate-ip item" data-v-b1eaede6>
                <span class="pubdate" data-v-b1eaede6>
                  <span class="pubdate-text" data-v-b1eaede6>{{ video.pubDate }}</span>
                </span>
                <!---->
              </span>
            </div>
          </div>
        </div>
        <div id="videoplayer">
          <!-- <video src="http://127.0.0.1:8090/apix/video/play?videoId=396" style="width: 688px"></video> -->
          <d-player
            :options="options"
            @play="play"
            ref="player"
            style="width: 688px;height: 376px;"
          ></d-player>
          <div>
            <div class="sending-bar"><b>338</b>人正在看，已装填 6451 条弹幕</div>
          </div>
        </div>
          <toolbar style="background: white;"></toolbar>
      </div>
      <div class="right-container is-in-large-ab">
        <div class="right-container-inner scroll-sticky">
          <div class="up-panel-container">
            <div class="up-info-container" data-v-13b082da data-v-51976f94>
              <div class="up-info--left" data-v-13b082da>
                <div class="up-avatar-wrap" data-v-1a81d392 data-v-13b082da>
                  <a
                    href="//space.bilibili.com/382135157"
                    target="_blank"
                    class="up-avatar"
                    data-v-1a81d392
                  >
                    <div
                      class="bili-avatar"
                      style="width: 48px;height:48px;transform: translate(0px, 0px);"
                    >
                      <img
                        class="bili-avatar-img bili-avatar-face bili-avatar-img-radius"
                        data-src="//i2.hdslb.com/bfs/face/55ba32ab681153ab924d26b7d3f9338431792417.jpg@96w_96h_1c_1s_!web-avatar.avif"
                        alt
                        src="//i2.hdslb.com/bfs/face/55ba32ab681153ab924d26b7d3f9338431792417.jpg@96w_96h_1c_1s_!web-avatar.avif"
                      />

                      <span
                        class="bili-avatar-icon bili-avatar-right-icon bili-avatar-icon-personal bili-avatar-size-48"
                      ></span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="up-info--right" data-v-13b082da>
                <div class="up-info__detail" data-v-13b082da>
                  <div class="up-detail" data-v-079d0296 data-v-13b082da>
                    <div class="up-detail-top" data-v-079d0296>
                      <!---->
                      <a
                        href="//space.bilibili.com/382135157"
                        target="_blank"
                        class="up-name is_vip"
                        style="color:#FB7299;"
                        data-v-079d0296
                      >
                        {{ member.nickName }}
                        <span class="mask" data-v-079d0296></span>
                      </a>
                      <a
                        href="//message.bilibili.com/#whisper/mid382135157"
                        target="_blank"
                        class="send-msg"
                        data-v-079d0296
                      >
                        <i class="van-icon-videodetails_messag" data-v-079d0296></i>
                        发消息
                      </a>
                    </div>
                    <div
                      title="各种更新，商务合作+v： xdcm6668"
                      class="up-description up-detail-bottom"
                      data-v-079d0296
                    >{{ member.sign }}</div>
                  </div>
                </div>
                <div class="up-info__btn-panel" data-v-13b082da>
                  <div class="upinfo-btn-panel" data-v-1e89c9b3 data-v-13b082da>
                    <!---->
                    <!---->
                    <!---->
                    <div class="default-btn new-charge-btn charge-btn-loaded" style data-v-1e89c9b3>
                      <div class="charge-btn-icon" data-v-1e89c9b3>
                        <img
                          src="https://i0.hdslb.com/bfs/garb/item/33e2e72d9a0c855f036b4cb55448f44af67a0635.png@.png"
                          alt
                          data-v-1e89c9b3
                        />
                      </div>
                      <span data-v-1e89c9b3>充电</span>
                    </div>
                    <div class="default-btn follow-btn b-gz not-follow" style data-v-1e89c9b3>
                      <span class="follow-btn-inner" data-v-1e89c9b3>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="follow-btn-icon"
                          data-v-1e89c9b3
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.25098 8.75V13.25C7.25098 13.6642 7.58676 14 8.00098 14C8.41519 14 8.75098 13.6642 8.75098 13.25V8.75H13.251C13.6652 8.75 14.001 8.41421 14.001 8C14.001 7.58579 13.6652 7.25 13.251 7.25H8.75098V2.75C8.75098 2.33579 8.41519 2 8.00098 2C7.58676 2 7.25098 2.33579 7.25098 2.75V7.25H2.75098C2.33676 7.25 2.00098 7.58579 2.00098 8C2.00098 8.41421 2.33676 8.75 2.75098 8.75H7.25098Z"
                            fill="currentColor"
                          />
                        </svg>
                        关注 23.5万
                      </span>
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-container>
      <!-- 头部导航模块 -->
      <!-- <nav-bar2 :hotsearch="hotData"></nav-bar2> -->
    </el-container>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { videoEntity } from "../lib/api";
export default {
  name: "video",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      videoId: 0,
      video: {},
      member: {},
      options: {
        screenshot: true,
        video: {
          url: "",
          pic: ""
        },
        autoplay: false,
        contextmenu: [
          {
            text: "GitHub",
            link: "https://github.com/MoePlayer/vue-dplayer"
          }
        ],
        subtitle: {
          url: "",
          type: "webvtt",
          fontSize: "25px",
          bottom: "10%",
          color: "#b7daff"
        },
        danmaku: {
          id: "9E2E3368B56CDBB4",
          api: "https://api.prprpr.me/dplayer/",
          token: "tokendemo",
          maximum: 1000,
          addition: ["https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142"],
          user: "DIYgod",
          bottom: "15%",
          unlimited: true,
          speedRate: 0.5
        }
      },
      player: null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    play() {
      console.log("play callback");
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.videoId = this.$route.params.id;
    videoEntity(this.videoId).then(res => {
      console.log(res);
      this.video = res.data;
      this.member = res.data.memberInfo;
      //this.options.video.url = "http://127.0.0.1:8090/apix/video/play?videoId=396";
      this.player.switchVideo({
        url: "http://127.0.0.1:8090/apix/video/play?videoId=396"
      });
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.player = this.$refs.player.dp;
  },
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
/* .el-header {
  box-shadow: 0 2px 4px #00000014;
  width: 100%;
  position: relative;
} */
#videoplayer {
  width: 688px;
  box-shadow: 0 0 8px #F1F2F3;
  z-index: 100;
  position: relative;
}
.main_row {
  width: 1100px;
  margin: 0 auto;
}
.video-info-container {
  height: 104px;
  box-sizing: border-box;
  padding-top: 22px;
}
.video-info-container .video-title {
  font-size: 20px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  color: #18191c;
  line-height: 28px;
  margin-bottom: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.video-info-detail {
  font-size: 13px;
  color: #9499a0;
  display: flex;
  align-items: center;
  height: 24px;
  line-height: 18px;
  position: relative;
  overflow: hidden;
}
.video-info-detail-list {
  display: flex;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
}
.video-info-detail .video-info-detail-list .view,
.video-info-detail .video-info-detail-list .dm {
  display: inline-flex;
  align-items: center;
}
.video-info-detail .video-info-detail-list .item {
  flex-shrink: 0;
  margin-right: 12px;
  overflow: hidden;
}
.video-info-detail .video-info-detail-list .view .view-icon,
.video-info-detail .video-info-detail-list .dm .view-icon,
.video-info-detail .video-info-detail-list .view .dm-icon,
.video-info-detail .video-info-detail-list .dm .dm-icon {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.video-info-detail .video-info-detail-list .pubdate-ip {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 24px;
  font-size: 0px;
}
.video-info-detail .video-info-detail-list .pubdate-ip .pubdate .pubdate-text {
  font-size: 13px;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.video-container-v1 {
  max-width: 2540px;
  min-width: 1080px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
  position: relative;
}
.video-container-v1 {
  width: auto;
  padding: 0 10px;
}
.video-container-v1 .left-container.scroll-sticky {
  position: sticky;
  height: fit-content;
  z-index: 1;
}
.video-container-v1 .left-container {
  position: relative;
}
.left-container {
  width: 668px;
}
.video-container-v1 .right-container {
  width: 350px;
  flex: none;
  margin-left: 30px;
  position: relative;
  pointer-events: none;
}
.video-container-v1
  .right-container
  .right-container-inner.scroll-sticky[data-v-66bd1e0b] {
  position: sticky;
}
.video-container-v1 .right-container .right-container-inner[data-v-66bd1e0b] {
  padding-bottom: 250px;
}
.video-container-v1 .right-container .right-container-inner *[data-v-66bd1e0b] {
  pointer-events: all;
}
.up-info-container[data-v-13b082da] {
  box-sizing: border-box;
  height: 104px;
  display: flex;
  align-items: center;
}
.up-info-container .up-info--right[data-v-13b082da] {
  margin-left: 12px;
  flex: 1;
  overflow: auto;
}
.up-avatar-wrap[data-v-1a81d392] {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.up-avatar-wrap .up-avatar[data-v-1a81d392] {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #c9ccd0;
}
.bili-avatar {
  display: block;
  position: relative;
  background-image: url(data:image/gif;base64,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);
  background-size: cover;
  border-radius: 50%;
  margin: 0;
  padding: 0;
}
.bili-avatar-img-radius {
  border-radius: 50%;
}
.bili-avatar-img {
  border: none;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
}
.bili-avatar-face {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
.bili-avatar * {
  margin: 0;
  padding: 0;
}
.bili-avatar-img-radius {
  border-radius: 50%;
}
.bili-avatar .bili-avatar-size-60,
.bili-avatar .bili-avatar-size-50,
.bili-avatar .bili-avatar-size-48 {
  width: 18px;
  height: 18px;
  bottom: -1px;
}
.up-info-container .up-info--right[data-v-13b082da] {
  margin-left: 12px;
  flex: 1;
  overflow: auto;
}
.up-info-container .up-info--right .up-info__detail[data-v-13b082da] {
  margin-bottom: 5px;
}
.up-detail .up-detail-top[data-v-079d0296] {
  display: flex;
  align-items: center;
}
.up-detail .up-detail-top .up-name[data-v-079d0296] {
  font-size: 15px;
  color: #18191c;
  font-weight: 500;
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 12px;
  max-width: calc(100% - 12px - 56px);
}
.up-detail .up-detail-top .send-msg[data-v-079d0296] {
  color: #61666d;
  font-size: 13px;
  transition: color 0.3s;
  flex-shrink: 0;
}
.up-detail .up-description[data-v-079d0296] {
  margin-top: 2px;
  font-size: 13px;
  line-height: 16px;
  height: 16px;
  color: #9499a0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.upinfo-btn-panel[data-v-1e89c9b3] {
  clear: both;
  display: flex;
  margin-top: 5px;
  white-space: nowrap;
}
.upinfo-btn-panel .new-charge-btn.charge-btn-loaded[data-v-1e89c9b3] {
  background-color: transparent;
  border: 1px solid #ff6699;
}
.upinfo-btn-panel .new-charge-btn[data-v-1e89c9b3] {
  margin-right: 12px;
  flex-shrink: 0;
  width: 109px;
  color: #ff6699;
}
.upinfo-btn-panel .default-btn[data-v-1e89c9b3] {
  box-sizing: border-box;
  padding: 0;
  line-height: 30px;
  height: 30px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #c9ccd0;
  position: relative;
  transition: 0.3s all;
}
.upinfo-btn-panel .new-charge-btn .charge-btn-icon[data-v-1e89c9b3] {
  width: 20px;
  height: 20px;
  margin-right: 4px;
  display: flex;
}
.upinfo-btn-panel .follow-btn.not-follow[data-v-1e89c9b3] {
  background: #00aeec;
  color: #ffffff;
}
.upinfo-btn-panel .follow-btn[data-v-1e89c9b3] {
  flex: 1 1 auto;
  max-width: 200px;
}
.upinfo-btn-panel .default-btn[data-v-1e89c9b3] {
  box-sizing: border-box;
  padding: 0;
  line-height: 30px;
  height: 30px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #c9ccd0;
  position: relative;
  transition: 0.3s all;
}
.upinfo-btn-panel .follow-btn .follow-btn-inner[data-v-1e89c9b3] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.upinfo-btn-panel
  .follow-btn
  .follow-btn-inner
  .follow-btn-icon[data-v-1e89c9b3] {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
svg:not(:root) {
  overflow: hidden;
}
.sending-bar{
  height: 56px;
  width: 100%;
  padding-left: 12px;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  display: flex;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
}
</style>