<template>
  <nav>
    <router-link to="/" class="logo">LOGO</router-link>
    <div>
      <router-link class="link" to="/" exact>Home</router-link>
      <router-link class="link" to="/about" exact>About</router-link>
      <router-link class="link" to="/products" exact>Products</router-link>
       <router-link class="link" to="/Customers"  exact >Customers</router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background: #290464;
    color: #fff;
  }
  .logo {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .link {
    color: #fff;
    text-decoration: none;
    padding: 1.5rem 1rem;
    display: inline-block;
    position: relative;
  }
  .link:hover {
    color: #a5a5a5;
  }

  .link.router-link-active::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #f9fd00;
    left: 1rem;
    bottom: 1.2rem;
    right: 1.7rem;
  }
</style>