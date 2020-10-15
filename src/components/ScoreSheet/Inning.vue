<template>
<div class ="Inning">
  {{inning1}}
</div>
    
</template>

<script>
export default {
  name: 'Inning',
  props: {
    msg: String, 
    inning1: Number
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import '../../assets/styles/common.css';

</style>
