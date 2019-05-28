<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
/* Typography */
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i|Oswald|Source+Serif+Pro");
@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

#app {
  font-family: "Source Serif Pro", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  font-family: "Source Serif Pro", serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
h1 {
  font-family: "Oswald", "Montserrat", sans-serif;
  font-size: 3rem;
  color: $primary-color;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1rem;
}
h5 {
  font-size: 1rem;
  margin-top: 1rem;
}
h6 {
  font-family: "Source Serif Pro", serif;
  font-size: 1rem;
  font-style: italic;
  color: $secondary-color;
}
p {
  font-size: 1rem;
}
.inner-cell {
  color: rgba($black, 0.25);
  font-size: 0.75rem;
  font-weight: 700;
  font-style: italic;
}

// Tooltip
.tooltip {
  display: block !important;
  z-index: 10000;
  width: 320px;

  .tooltip-inner {
    background: $primary-color;
    color: white;
    border-radius: 0px;
    padding: 20px;
    font-family: "Source Serif Pro", serif;
    font-size: 1rem;
    line-height: 1.25;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 10px;
    border-color: $primary-color;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
</style>
