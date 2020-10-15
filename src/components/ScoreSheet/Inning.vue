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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.Inning {
  text-align: center;
}
</style>
