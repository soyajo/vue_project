<template>
  <div>
    <h1>Hello {{userName}}</h1>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  // 데이터 바인딩이 쉽기 때문에 자바스크립트 보다 좋음
  // 단반향. 데이터 바인딩
  data () {
    return {
      userName: 'John Doe',
      message: 'Welcome soyajo',
      arr: [],
      obj: {}
    }
  }
}
</script>

<style scoped>
/*
 * scoped : 전체 적용 x , 사용안하면 모든 view 에 적용
*/
.text-red {
  color: red;
}
</style>
