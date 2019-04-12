<template>
  <div id="app">
    <Message messages="messages"/>

    <header id="header">
      <div id="header-content">
        <h1>Welcome!</h1>
        <p>Please choose between the Practice Sheet Generator and the Random Number Generator.</p>

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
      </div>

      <div id="header-controls">
        <a href="#" @click="showHideControls">
          <div class="control">
            <div id="bar-1" class="header-control-bar"></div>
            <div id="bar-2" class="header-control-bar"></div>
            <div id="bar-3" class="header-control-bar"></div>
            <div id="bar-4" class="header-control-bar"></div>
          </div>
        </a>
      </div>
    </header>

    <div id="container">
      <div id="paper">
        <div id="page">
          <div id="copyright">
            <img src="img/tpo-yellowcat.jpg">
          </div>

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

          <div id="grid">
            <div class="grid-practice" v-show="sheet === 'practice'">
              <div class="grid-tile" v-for="(grid, index) in repeat">
                <div class="measure" v-for="(measure, index) in measures">
                  <div class="inner-measure">{{ index +1 }}</div>
                </div>
              </div>
            </div>

            <div class="grid-random" v-show="sheet === 'random'">
              <div class="measure" v-for="(measure, index) in randomizedMeasures">
                <div class="inner-measure">{{ randomizedMeasures[index] }}</div>
              </div>
            </div>
          </div>

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

          <div id="logo-date">
            <div id="logo">
              <img src="img/tpo-logo.jpg">
            </div>
            <div id="date">
              <h4>{{ date }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Messages from "@/components/Messages.vue";

export default {
  name: "home",
  components: {
    Messages
  },
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
      numberOfSmallmeasuresMax: 336,
      messages: []
    };
  }
};
</script>
