<template>
<div class="wrapper">
  <div class="borders">
    <ul>
      <li v-for="(text, q) of items" :key=q>{{ text }}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    items: {
      require: true,
      type: Array
    }
  },
}
</script>

<style scoped>
.wrapper {
  border-left: 1px solid #e2e3e7;
  max-width: 15rem;
  height: 100%;
  font-size: 1rem;
}
.borders {
  margin: 0;
  padding-left: 1rem;
  height: 100%;
}
ul {
  top: 0;
  position: sticky;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: left;
  list-style: none;
}

ul li {
  padding-top: 1rem;
  position:relative
}
/*
li:not(:last-child) {
  border-bottom: 1px solid #e2e3e7;
  margin-bottom: 0.5rem;
}*/

</style>