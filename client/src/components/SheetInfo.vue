<template>
  <div id="info">
    <div v-if="piece || composer || student">
      <h4>{{ piece }}</h4>
      <h4 v-show="composer">by {{ composer }}</h4>
      <h5>{{ student }}</h5>
    </div>
    <div v-else>
      <h6>Please input info above...</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "SheetInfo",
  props: {
    // msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#info {
  // background: blue;
}
</style>
