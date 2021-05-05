<template>
  <div class="container">
    <q-select 
    outlined 
    :options="countries" 
    v-model="selectedCountry"
    label="Select Country"
    class="my-15"
    @input="updateCountry"
    >
    </q-select>
    <Chart></Chart>
  </div>
</template>
<script>
import Chart from '../components/Chart.js'
export default {
  components:{
    Chart
  },
  computed:{
    rates(){
      return this.$store.state.rates
    }
  },
  methods: {
    updateCountry(event){
      console.log(event);
      this.$store.commit('updateCountry',event.target);
    }
  },
  data(){
    return{
      countries: ["Australija","Kanada","Češka","SAD","Poljska"],
      selectedCountry: 'Australija'
    }
  }
}
</script>
<style src="../styles/view.sass" lang="sass">
</style>
