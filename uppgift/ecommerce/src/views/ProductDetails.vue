<template>
  <div class="card">
    <h1>{{ product.name }}</h1>
    <p>id: {{ id }}</p>
    <h3>PRICE: {{ product.price }}</h3>
    <h3>PRICE + TAX: {{ product.taxPrice }}</h3>
       <h3>DESCRIPTION: {{ product.description }}</h3>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  methods: {
    ...mapActions(['getProduct'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProduct(this.id)
  }
}
</script>

<style scoped>
  .card {
    width: 80%;
    margin: 2rem auto;
    border: 1px solid #4b4b4b;
    border-radius: 10px;
    padding: 1rem;
    min-height: 50vh;
  }
</style>