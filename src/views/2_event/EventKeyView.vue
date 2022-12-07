<template>
  <div>
<!--    <input type="search" name="" id="" @keyup="checkEnter($event)" v-model="searchText">-->
    <input type="search" name="" id="" @keyup.enter="doSearch" v-model="searchText">
    <button @click="doSearch">조회</button>
    <button type="submit" @click.prevent="doSearch">조회</button>
  </div>
</template>

<script>
// keyup.(키보드자판 주요키) 하면 주요키 클릭 시 이벤트 발생.  (중요!!)
// .enter
// .tab
// .delete
// .esc
// .space
// .up
// .down
// .left
// .right
// .stop - event.stopPropagation()
// .prevent - event.preventDefault()
// 등등
export default {
  name: 'EventKeyView',
  components: {},
  data () {
    return {
      searchText: ''
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
  methods: {
    doSearch () {
      console.log(this.searchText)
    },
    checkEnter (event) {
      // event.stopPropagation()
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>

<style scoped>

</style>
