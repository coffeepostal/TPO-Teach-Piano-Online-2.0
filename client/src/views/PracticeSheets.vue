<template>
  <div id="app">
    <Message messages="messages"/>

    <header id="header">
      <div id="header-content">
        <h1>Welcome!</h1>
        <p>Please choose between the Practice Sheet Generator and the Random Number Generator.</p>

        <GenerationForm/>
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
          <SheetCopyright/>

          <SheetInfo/>

          <SheetGrid :generated/>

          <SheetFooter/>

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
import GenerationForm from "@/components/GenerationForm.vue";
import SheetCopyright from "@/components/SheetCopyright.vue";
import SheetInfo from "@/components/SheetInfo.vue";
import SheetGrid from "@/components/SheetGrid.vue";
import SheetFooter from "@/components/SheetFooter.vue";

export default {
  name: "home",
  components: {
    Messages,
    GenerationForm,
    SheetCopyright,
    SheetInfo,
    SheetGrid,
    SheetFooter
  },
  data() {
    return {
      generated: {
        sheetType: "practice",
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
      },
      messages: []
    };
  }
};
</script>
