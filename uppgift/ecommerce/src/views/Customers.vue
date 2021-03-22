<template>
<div container mt-3 pt-5>
    <add-customer />
    <customer-list />

</div>
  
</template>

<script>
import AddCustomer from '../components/Customer/AddCustomer.vue'
import CustomerList from '../components/Customer/CustomerList.vue'

export default {
  components: 
  { AddCustomer, CustomerList },
  
  name: 'Customers',
 
}
</script>


<style>

</style>