<template>
  <div class="Menu">
    <el-menu
      :default-active="activeIndex2"
      router
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/Home">HomePage</el-menu-item>
      <el-menu-item index="/ActorList">Demo:ActorList</el-menu-item>
      <el-submenu index="/ActorSearch">
        <template slot="title">Demo:ActorSearch</template>
        <el-menu-item index="/ActorSearch/1">Actor 1</el-menu-item>
        <el-menu-item index="/ActorSearch/2">Actor 2</el-menu-item>
        <el-menu-item index="/ActorSearch/3">Actor 3</el-menu-item>
        <el-menu-item index="/ActorSearch/4">Actor 4</el-menu-item>
        <el-menu-item index="/ActorSearch/5">Actor 5</el-menu-item>
        <el-menu-item index="/ActorSearch/6">Actor 6</el-menu-item>
      </el-submenu>
      <el-menu-item index="/Echarts">Demo:Echarts</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>