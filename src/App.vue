<template>
  <div id="app">
    <nav-bar/>
    <router-view class="page"/>
  </div>
</template>

<script>
import nav from './components/nav'

export default {
  components: { 'nav-bar': nav }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif|Open+Sans|Istok+Web|PT+Sans|Yanone+Kaffeesatz:300|Open+Sans+Condensed:300,700|Oswald:300,400|Roboto|Open+Sans&subset=cyrillic');

html {
  font: 16px 'Oswald', sans-serif;
}
body {
  background-color: #fff;
}
#app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 1fr;
  font-family: 'Noto+Serif', Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212121;
}
.page {
  font-family: 'Noto+Serif', Georgia, serif;
  padding: 1rem;
  font-size: 1.2rem;
  grid-template-columns: 1fr auto;
}
</style>
