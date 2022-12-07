<template>
  <div>
    <div>
      <input type="radio" name="" id="html" value="HTML" v-model="favoriteLang">
      <label htmlFor="html">HTML</label>
    </div>
    <div>
      <input type="radio" name="" id="css" value="CSS" v-model="favoriteLang">
      <label htmlFor="css">CSS</label>
    </div>
    <div>
      <input type="radio" name="" id="js" value="JS" v-model="favoriteLang">
      <label htmlFor="js">JS</label>
    </div>
    <div>선택한 지역 : {{ favoriteLang }}</div>
  </div>
</template>

<script>
export default {
  name: 'DataBindingCheckboxView',
  components: {},
  data () {
    return {
      favoriteLang: ''
    }
  },
  setup () {
  },
  created () {
  },
  mounted () {
  },
  unmounted () {
  },
  methods: {}
}
</script>

<style scoped>

</style>
