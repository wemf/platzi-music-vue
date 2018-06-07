<template lang="pug">
  #app
    label(for="name") Nombre
    input(v-model="name" id="name" name="name")
    button(v-on:click="format") Formatear Nombre

    p {{ formattedName }}
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      name: '',
      formattedName: ''
    }
  },

  methods: {
    format () {
      this.formattedName = this.name.split(' ').join('-')
    }
  }
}
</script>

<style lang="scss">
 @import './scss/main.scss'
</style>
