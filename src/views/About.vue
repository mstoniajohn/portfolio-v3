<template>
  <div>
    <h1>ABout</h1>
    <!-- <Photos /> -->
    {{coins}}
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Photos from '../components/Photos'

export default {
  components: {Photos},
  props:['term'],
  setup(){
     const coins = ref(null)
     const error = ref(null)
 
    onMounted(() =>{
       axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (coins.value = response))
    });
    return {coins}
  }



}
</script>

<style>

</style>