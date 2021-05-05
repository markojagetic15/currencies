<template>
  <div class="container">
    <q-select 
    outlined 
    :options="currency" 
    v-model="selectedCurrency"
    label="Select Currency"
    class="my-15"
    @input="updateCurrency">
    </q-select>
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from '../components/Chart.js'
export default {
  name: 'ByCurrency',
  components: {
    Chart
  },
  computed:{
    rates(){
      return this.$store.state.rates
    }
  },
  methods: {
    updateCurrency(e){
      console.log(e)
      this.$store.commit('updateCurency',e.target)
    }
  },
  data(){
    return{
      currency: ["EUR", "USD", "GBP", "AUD"],
      selectedCurrency: 'EUR'
    }
  }
}
</script>