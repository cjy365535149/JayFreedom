<template>
  <el-form class="actorForm" ref="form" :model="actor" label-width="80px">
    <el-form-item label="ActorID">
      <el-input v-model="actor.actorId" @input="getActorById"></el-input>
    </el-form-item>
    <el-form-item  label="FirstName">
      <el-input disabled v-model="actor.firstName"></el-input>
    </el-form-item>
    <el-form-item label="LastName">
      <el-input disabled v-model="actor.lastName"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { getActor } from "@/api/actor";
export default {
  name: "Jay",
  data: function () {
    return {
      actor: {
        actorId: null,
        firstName: null,
        lastName: null,
      }
    };
  },
  components: {},
  //jay add start
  methods: {
    getActorById: function () {
      var that = this;
      
      getActor({ actorId: this.actor.actorId })
        .then(function (data) {
          console.log(data);
          //that.actorId = data.actorId;
          that.actor.firstName = data.firstName;
          that.actor.lastName = data.lastName;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  computed: {
    routeActorId: function () {
      this.actor.actorId = this.$route.params.actorId;
      return this.$route.params.actorId;
    },
  },
  watch: {
    routeActorId(val) {
      this.getActorById();
    },
  },
  created() {
    this.getActorById();
  },
  //jay add end
};
</script>
<style lang='scss' scoped>
.actorForm {
  width:500px;
  text-align:center;
  margin:auto;
}
</style>