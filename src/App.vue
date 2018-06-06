<template lang="pug">
  #app
    h1 {{ msg }}
    p {{ person.name }}
    p(v-show="showValue") {{ value }}
    p(v-if="showValue") {{ value }}
    p(v-else-if="true") {{ 'algo mas' }}
    p(v-else) {{ 'lo ultimo' }}

    ul
      li(v-for="item in items") {{ item }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Vue!',
      person: {
        name: 'William'
      },
      showValue: true,
      value: 'Algo',
      items: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="scss">
 @import './scss/main.scss'
</style>
