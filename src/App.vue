<template>
  <div id="app">
    <v-header v-show="$store.state.hasShow"></v-header>
    <router-view/>
    <v-footer v-show="$store.state.hasShow"></v-footer>
  </div>
</template>

<script>
  import VHeader from 'components/v-header'
  import VFooter from 'components/v-footer'

  export default {
    name: 'App',

    data () {
      return {
      }
    },

    components: {
      VHeader,
      VFooter
    }
  }
</script>

<style>
  @import 'assets/styles/index.scss';

  #app {
    min-width: 1220px;
    height: 100%;
    min-height: calc(100vh - 454px);
    background: #ededed;
    overflow: hidden;
    width: 100%;
  }
</style>
