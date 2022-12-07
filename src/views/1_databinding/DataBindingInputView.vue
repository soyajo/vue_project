<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="myFuction">클릭</button>
    <button @click="changeData">변경</button>
    <br>
    <input type="text" v-model="num1"/> +
    <input type="text" v-model="num2"/> +
    <span>{{num1 + num2}}</span>
    <br>
    <input type="text" v-model.number="num3"/> +
    <input type="text" v-model.number="num4"/> +
    <span>{{num3 + num4}}</span>
  </div>
</template>

<script>
export default {
  // 양방향 데이터 바인딩 기능 ( 중요!! ) - v-modal
  // 앵귤러 - 첫 양반향 데이터 바인딩
  // 리엑트 - 첫 가상 돔을 이용한 빠른 화면 전환, 하지만 양뱡향 데이터 바인딩이 안됨..
  // vue - 가상 돔, 양방향 데이터 바인딩 가능.
  name: 'DataBindingInputView',
  components: {},
  data () {
    return {
      userId: 'soya',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
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
    myFuction () {
      console.log(this.userId)
    },
    changeData () {
      this.userId = 'ssoya'
    }
  }
}
</script>

<style scoped>

</style>
