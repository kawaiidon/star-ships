<template>
  <div
    class="ship"
    @click="showShipInfo(shipId)"
  >
    <div class="ship__title">{{ship.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'ShipCard',
  props: {
    ship: Object
  },
  methods: {
    showShipInfo (id) {
      this.$store.dispatch('GET_SHIP', id).then(data => {
        this.$router.push(`/ship/${id}`)
      })
    }
  },
  computed: {
    shipId () {
      return this.ship.url.match(/([^\/]*)\/*$/)[1]
    }
  }
}
</script>

<style scoped lang="scss">
.ship {
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  margin: 20px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
}
</style>
