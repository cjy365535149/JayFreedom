<template>
  <div class="Echarts">
    <!--<div id="main" style="width: 600px;height:400px;"></div> -->
    <MixChart/>
  </div>
</template>

<script>
import MixChart from '@/components/MixChart'
export default {

  name: 'Echarts',
  components:{
      MixChart
  },
  methods:{
	  myEcharts(){
	
	}
  },
  mounted() {
  	this.myEcharts();
  }
}
</script>

<style>

</style>