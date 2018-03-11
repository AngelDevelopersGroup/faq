<template>
<div>
  <quote text="ВНИМАНИЕ! Это цитата"/>
  <markdown>
The time of **NOW**
### Solar System Exploration, 1950s – 1960s

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley
  </markdown>
</div>
</template>

<script>
import markdown from 'vue-markdown'
import quote from '@/components/quote'

export default {
  components: { quote, markdown }
}
</script>

<style scoped>
.text {
  padding-right: 1rem;
}
</style>
