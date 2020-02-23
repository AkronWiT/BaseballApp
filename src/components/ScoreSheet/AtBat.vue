<template>
 <div>
   <div id="plays" class="top">
     <span v-for="play in plays" :key="play">
          {{play}}
     </span>
  </div>
   <div class="bottom">
        <div id="runs">
            <span v-for="run in runs" :key="run">
                {{run}}
            </span>
        </div>
        <div id="hits">
          <span v-for="hit in hits" :key="hit">
                {{hit}}
          </span>
        </div>
   </div>
</div>
  
</template>

<script>
export default {
  name: 'AtBat',
  props: {
    plays: {
      type: Array,
      default: () => [],
    },
    hits:{
      type: Array,
      default: () => [],
    },
    runs:{
      type: Array,
      default: () => [],
    }
  }
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
#plays {
  border:1px solid blue;
}
#runs {
  float:left;
  border:1px solid blue;
}
#hits {
  float:right;
  border:1px solid blue;
}
</style>
