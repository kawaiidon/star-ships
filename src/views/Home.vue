<template>
  <div class="home">
    <input
      class="search"
      type="text"
      v-model="search"
      placeholder="SEARCH"
    >
    <ShipCard
      v-for="(ship, i) in ships"
      :key="i"
      :ship="ship"
    />
    <div
      class="pagination"
      v-if="ships"
    >
      <div
        class="pagination__btn"
        :class="{hide: !previousPage}"
        @click="changePagination(previousPage)"
      >prev</div>
      <div
        class="pagination__btn"
        :class="{hide: !nextPage}"
        @click="changePagination(nextPage)"
      >next</div>
    </div>
  </div>
</template>

<script>
import ShipCard from '@/components/ShipCard.vue'

export default {
  name: 'home',
  components: {
    ShipCard
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ships () {
      return this.$store.getters.ships(this.search)
    },
    previousPage () {
      return this.$store.state.shipsData.previous
    },
    nextPage () {
      return this.$store.state.shipsData.next
    }
  },
  mounted () {
    if (!this.ships) {
      this.$store.dispatch('GET_SHIPS_DATA')
    }
    if (this.$route.query.search) {
      this.search = this.$route.query.search
    }
  },
  methods: {
    changePagination (url) {
      if (url) {
        this.search = ''
        let pageNum = url.split('=')[1]
        this.$store.dispatch('GET_SHIPS_DATA', pageNum)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.search {
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 300px;
  font-size: 30px;
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  box-sizing: border-box;
  transition: 0.2s;
  &::placeholder {
    opacity: 0.2;
  }
  &:focus {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.8);
  }
}
.pagination {
  display: flex;
  justify-content: center;
  &__btn {
    cursor: pointer;
    margin: 0 20px;
    text-transform: uppercase;
    transition: 0.2s;
    &.hide {
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>
