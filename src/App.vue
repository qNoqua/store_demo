<template>
  <div>
    <component :is='layout'>
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
export default {
  name: 'App',
  components: {
    MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout) + 'Layout'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
    background: rgba(255, 254, 251, 0.8);

}
</style>
