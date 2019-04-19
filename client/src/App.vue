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
</style>
