<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is Jay's personal vue project</h1>
    <el-button
      type="primary"
      icon="el-icon-postcard"
      @click="contactVisible = true"
      >Contact</el-button
    >
    <el-dialog
      title="Wechat"
      :visible.sync="contactVisible"
      width="350px"
      :before-close="handleClose">
      <img class="author" src="../../static/WX-JAY.jpg" />
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    
  },
  data() {
    return {
      contactVisible: false,
    };
  },
};
</script>

<style>
.author {
  height: 300px;
}
</style>
