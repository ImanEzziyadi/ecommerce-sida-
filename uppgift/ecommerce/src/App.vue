<template>
  <div>
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.btn {
  margin: 1rem 0 0 1rem;
  padding: .5rem .8rem;
  border-radius: 10px;
  border: none;
  outline: none;
  background: #201d1d;
  color: #fff;
  cursor: pointer;
}
.btn:hover {
  box-shadow: 0 0 5px 0 #201d1d;
}
.btn:active {
  background: #000;
  box-shadow: none;
}
</style>
