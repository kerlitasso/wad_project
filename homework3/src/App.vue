<template>
  <div id="app">
    <AppHeader />
    <router-view /> <!-- This renders the active page -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app > * {
  flex: 0 0 auto;
}

#app main {
  flex: 1 1 auto;
}
</style>
