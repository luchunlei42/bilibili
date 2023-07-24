<!--  -->
<template>
  <div class>
    <el-form>
      <el-form-item>
        <el-select
          @focus="closeIt"
          ref="selectIt"
          v-model="selected"
          multiple
          filterable
          allow-create
          remote
          clearable
          default-first-option
          placeholder="按回车键Enter创建标签"
          style="width: 800px"
        >
          <el-option
            v-for="item in tagList"
            :key="item.tagId"
            :label="item.name"
            :value="item.tagId"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="推荐标签: " style="margin-top: 20px">
        <el-tag
          v-for="item in tagList"
          :key="item.tagId"
          type="info"
          @click="handleSelect(item)"
        >{{ item.name }}</el-tag>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "TagSelect",
  props: {
    tagList: {
      type: Array,
      default: () => []
    }
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      selected: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleSelect(tag) {
      if (!this.selected.find(item => item == tag.tagId)) {
        this.selected.push(tag.tagId);
      }
    },
    closeIt() {
      this.$refs.selectIt.blur();
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
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
.el-tag + .el-tag {
  margin-left: 10px;
}
</style>