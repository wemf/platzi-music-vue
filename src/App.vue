<template lang="pug">
  #app
    label(for="name") Nombre
    input(v-model="name" id="name")
    label(for="lastName") Apellido
    input(v-model="lastName" id="lastName")
    label(for="birthyear") Año de Nacimiento
    input(type="number" v-model="birthyear" id="birthyear")
    label(for="birthmonth") Mes de Nacimiento
    input(type="number" v-model="birthmonth" id="birthmonth")
    label(for="birthday") Dia de Nacimiento
    input(type="number" v-model="birthday" id="birthday")
    p {{ fullName }}
    p {{ age }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      lastName: '',
      birthyear: '',
      birthmonth: '',
      birthday: ''
    }
  },

  computed: {
    fullName () {
      return `${this.name} ${this.lastName}`
    },
    age () {
      if (this.birthyear === '' || this.birthmonth === '' || this.birthday === '') {
        return ''
      }
      var birthDate = new Date(this.birthyear, this.birthmonth, this.birthday)
      var diffMs = Date.now() - birthDate.getTime()
      var ageDt = new Date(diffMs)
      return Math.abs(ageDt.getUTCFullYear() - 1970)
    }
  }
}
</script>

<style lang="scss">
 @import './scss/main.scss'
</style>
