<template lang="pug">
  .content
    p.is-128x128
      img()
    p
      strong {{ }}
      small {{ }}
    p
      audio(controls)
</template>
<script>
export default {
  data () {
    return {
      track: {}
    }
  }
}
</script>

