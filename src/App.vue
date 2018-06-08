<template lang="pug">
  #app
    label(for="title") Titulo Tarea
    input(
      type="text",
      name="title",
      id="title",
      placeholder="Titulo",
      v-model="newTask.title"
      )
    label(for="time") Hora Tarea
    input(
      type="number",
      name="time",
      id="time",
      placeholder="Hora",
      v-model="newTask.time"
      )
    button(@click="addTask") Agregar tarea
    button(@click="cancel") Cancelar
    p {{ name }}
    p Total de Horas Trabajadas {{ totalTime }}
    div(v-show="!tasks.length")
      p No hay tareas
    div(v-show="tasks.length")
      ul
        li(v-for="(task, index) in tasks") {{ task.title }} - {{ task.time }}
          button(@click="removeTask(index)") &times

</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      name: 'TAREAS',
      tasks: [],
      newTask: { title: '', time: 0 }
    }
  },

  created () {
    this.tasks = JSON.parse(window.localStorage.getItem('tasks')) || []
  },

  computed: {
    totalTime () {
      let total = 0
      this.tasks.forEach(elem => {
        total += parseInt(elem.time)
      })
      return total
    }
  },

  methods: {
    addTask () {
      if (this.newTask.title !== '' && this.newTask.time !== 0) {
        this.tasks.push({
          title: this.newTask.title,
          time: this.newTask.time
        })
        window.localStorage.setItem('tasks', JSON.stringify(this.tasks))
        this.newTask.title = ''
        this.newTask.time = 0
      }
    },
    cancel () {
      this.newTask.title = ''
      this.newTask.time = 0
    },
    removeTask (index) {
      this.tasks.splice(index, 1)
      window.localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }

}
</script>

<style lang="scss">
 @import './scss/main.scss';
</style>
