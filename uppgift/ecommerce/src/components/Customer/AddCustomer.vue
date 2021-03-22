<template>
  <form class="row py-5" @submit.prevent="onSubmit">
    <div class="col-10">
      <div class="form-outline border-bottom">
        <input type="text" id="cname" class="form-control form-control-lg" v-model="customerName" />
        <label class="form-label" for="cname">Enter Customer Name</label>
      </div>
    </div>
    <div class="col-auto">
      <button class="btn btn-primary">ADD CUSTOMER</button>
    </div>
  </form>
</template>


<script>
export default {

}
</script>

<style>

</style>