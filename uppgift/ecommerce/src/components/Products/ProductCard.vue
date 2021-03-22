<template>
  <router-link :to="'/product/details/' + product.id" class="card">
    <p>ID: {{ product.id }}</p>
    <p>NAME: {{ product.name }}</p>
    <p>PRICE: {{ product.price }}</p>
     <p>DESCRIPTION: {{ product.description }}</p>
  </router-link>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
  .card {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 2rem;
  }
</style>