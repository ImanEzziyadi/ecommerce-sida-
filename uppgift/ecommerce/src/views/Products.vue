<template>
  <div class="products">
    <aside>
      <div class="buttons">
        <button @click="changeComp('Grid')"><i class="fas fa-th-large"></i></button>
        <button @click="changeComp('List')"><i class="fas fa-list"></i></button>
      </div>
      <br>
      <form>
        <div>
          <input type="text" placeholder="search..." v-model="searchVal" @keyup="search(searchVal)">
        </div>
      </form>
      <br>
      <div>
        <a href="#">Filter</a>
      </div>
    </aside>
    <div class="content">
      <component :is="comp" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Grid from '../components/Products/Grid'
import List from '../components/Products/List'
export default {
  name: 'Products',
  components: {
    Grid,
    List
  },
  data() {
    return {
      // comp: 'Grid'
      searchVal: ''
    }
  },
  computed: {
    ...mapGetters(['comp'])
  },
  methods: {
    ...mapActions(['changeComp', 'search'])
  }
}
</script>

<style scoped>
  .products {
    display: flex;
  }
  aside {
    flex: 2;
    background: #424242;
    padding: 2rem;
    min-height: calc(100vh - 66.29px);
  }
  .content {
    flex: 10;
  }
  a {
    color: #fff;
  }
  .buttons button {
    padding: 0.2rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }
</style>