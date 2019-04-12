<template>
  <div id="footer">
    <div class="footer-column">
      <h4 class="footer-column-title">Weekly Missions</h4>
      <div class="footer-column-number">1</div>
      <div class="footer-column-box"></div>
      <div class="footer-column-number">2</div>
      <div class="footer-column-box"></div>
      <div class="footer-column-number">3</div>
      <div class="footer-column-box"></div>
    </div>

    <div class="footer-column">
      <h4 class="footer-column-title">Lesson Goals</h4>
      <div class="footer-column-number">1</div>
      <div class="footer-column-box"></div>
      <div class="footer-column-number">2</div>
      <div class="footer-column-box"></div>
      <div class="footer-column-number">3</div>
      <div class="footer-column-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SheetFooter",
  props: {
    // msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#footer {
  // background: red;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 18pt;

  .footer-column {
    display: grid;
    grid-template-columns: 15pt auto;
    grid-template-rows: repeat(4, 22pt);
  }

  .footer-column-title {
    grid-column: 1 / 3;
  }

  .footer-column-number,
  .footer-column-box {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
  }

  .footer-column-box {
    border-left: 0;
  }
}
</style>
