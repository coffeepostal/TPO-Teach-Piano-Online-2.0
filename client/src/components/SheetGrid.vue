<template>
  <div id="grid">
    <div class="grid-practice" v-show="sheetType === 'practice'">
      <div class="grid-tile" v-for="(grid, index) in repeat">
        <div class="measure" v-for="(measure, index) in measures">
          <div class="inner-measure">{{ index +1 }}</div>
        </div>
      </div>
    </div>

    <div class="grid-random" v-show="sheetType === 'random'">
      <div class="measure" v-for="(measure, index) in randomizedMeasures">
        <div class="inner-measure">{{ randomizedMeasures[index] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SheetGrid",
  props: {
    // msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#grid {
  .grid-random,
  .grid-practice {
    display: grid;
  }

  .grid-practice {
    grid-template-columns: repeat(2, 264pt);
    grid-gap: 12pt;

    .grid-tile {
      display: grid;
      grid-template-columns: repeat(8, 33pt);
      grid-auto-rows: 33pt;
      border-top: 1px solid black;
      border-left: 1px solid black;
    }
  }

  .grid-random {
    grid-template-columns: repeat(16, 33pt);
    grid-auto-rows: 33pt;
    border-top: 1px solid black;
    border-left: 1px solid black;
    margin: 0 6pt;
  }
}
.measure {
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  padding: 5px;
  .inner-measure {
    width: 100%;
    height: 100%;
    color: rgba($black, $alpha: 0.5);
    font-size: 0.75rem;
  }
}
</style>
