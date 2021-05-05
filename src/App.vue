<template>
<q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title style="color:#F04F2E;font-size:25px">
          <q-avatar>
            <img src="./assets/logo.png">
          </q-avatar>
          Sartura
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to="/currency" label="By Currency" />
        <q-route-tab to="/country" label="By Country" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',

  components: {
    
  },
  created(){
    this.$store.dispatch('getRates')
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
