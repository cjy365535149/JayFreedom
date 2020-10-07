<template>
  <div>
  <el-table class="actorForm"
    :data="tableData"
    border>
    <el-table-column
      prop="actorId"
      label="Actor ID">
    </el-table-column>
    <el-table-column
      prop="firstName"
      label="First Name">
    </el-table-column>
    <el-table-column
      prop="lastName"
      label="Last Name">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { getActor, getAllActor } from "@/api/actor"
export default {
  name: "Jay",
  data: function () {
    return {
      tableData:null
    };
  },
  components: {},
  //jay add start
  methods: {
    getAllActor: function () {
      var that = this;
        getAllActor().then(function (data) {
          console.log(data);
          that.tableData = data
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  computed:{

  },
  created() {
    console.log(this.tableData);
    this.getAllActor();
  },
  //jay add end
};
</script>
<style lang='scss' scoped>
.actorForm {
  width:700px;
  text-align:center;
  margin:auto;
}
</style>
