<template>
  <div id="copyright">
    <img src="img/tpo-yellowcat.jpg">
  </div>
</template>

<script>
export default {
  name: "SheetCopyright",
  props: {
    // msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#copyright {
  text-align: right;
  img {
    height: 8pt;
    width: auto;
  }
}
</style>
