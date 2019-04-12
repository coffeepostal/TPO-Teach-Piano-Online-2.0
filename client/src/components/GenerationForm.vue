<template>
  <div id="generation-form">
    <fieldset class="title">
      <input
        id="toggle-on"
        class="toggle toggle-left"
        name="toggle"
        type="radio"
        value="practice"
        v-model="sheet"
        checked
      >
      <label for="toggle-on" class="btn">Practice Sheets</label>
      <input
        id="toggle-off"
        class="toggle toggle-right"
        name="toggle"
        type="radio"
        value="random"
        v-model="sheet"
      >
      <label for="toggle-off" class="btn">Random Numbers</label>
    </fieldset>

    <fieldset>
      <legend>Piece Title:</legend>
      <input type="text" v-model="piece" placeholder="Input Piece Title" name="piece">
    </fieldset>

    <fieldset>
      <legend>Composer</legend>
      <input
        type="text"
        v-model="composer"
        placeholder="Input Composer's Name (optional)"
        name="composer"
      >
    </fieldset>

    <fieldset>
      <legend>Student's Name:</legend>
      <input
        type="text"
        v-model="student"
        placeholder="Input Student's Name (optional)"
        name="student"
      >
    </fieldset>

    <fieldset v-show="sheet === 'practice'">
      <legend>Number of Measures</legend>
      <input v-model.number="measures" @keyup="repeatRange" type="number" min="1" max="96">
    </fieldset>

    <fieldset v-show=" sheet==='random'">
      <legend>Starting Measure</legend>
      <input v-model.number=" startingMeasure" @keyup="repeatRange" type="number" min="1">
    </fieldset>

    <fieldset v-show="sheet === 'random'">
      <legend>Ending Measure</legend>
      <input v-model.number="endingMeasure" @keyup="repeatRange" type="number">
    </fieldset>

    <fieldset>
      <legend>{{ repeatType }}</legend>
      <input v-model.number="repeat" @keyup="repeatRange" type="number" min="1">
    </fieldset>

    <fieldset>
      <legend title="We require an email address to track uses">Email Address ❓</legend>
      <input type="email" placeholder="example@example.com">
    </fieldset>

    <button @click="exportPDF">Export PDF</button>
  </div>
</template>

<script>
export default {
  name: "GenerationForm",
  data() {
    return {
      sheet: "practice",
      student: "",
      piece: "",
      composer: "",
      date: moment().format("dddd, MMMM Do YYYY"),
      measures: 40,
      measuresMax: 96,
      repeat: 1,
      repeatMax: 6,
      startingMeasure: 13,
      endingMeasure: 28,
      measureRange: [],
      numberOfLargemeasuresMax: 210,
      numberOfSmallmeasuresMax: 336
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#generation-form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  .title {
    grid-column: 1 / -1;
  }
  button {
    grid-column: 2 / 3;
    background: $primary-color;
    color: white;
    padding: 20px 40px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 3px;
    cursor: pointer;
    transition: background 0.25s;
    &:hover {
      background: darken($primary-color, 10%);
    }
  }
}
</style>
