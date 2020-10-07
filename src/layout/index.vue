<template>
  <div>
    <el-container>
      <el-header>
        <Menu />
      </el-header>
      <el-main>
        <Content />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Content from "@/components/Content";
//import { mapState } from 'vuex'
export default {
  name: "Layout",
  components: {
    Menu,
    Content,
  },
};
</script>

<style scoped>
</style>