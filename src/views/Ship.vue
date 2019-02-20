<template>
  <div
    class="ship"
    v-if="ship"
  >
    <h2 class="ship__title">Name: {{ship.name}}</h2>
    <div class="ship__desc">Model: {{ship.model}}</div>
    <div class="ship__desc">Class: {{ship.starship_class}}</div>
    <div class="ship__desc">Manufacturer: {{ship.manufacturer}}</div>
    <div class="ship__desc">Passengers: {{ship.passengers}}</div>
    <div class="ship__desc">Cost(credits): {{ship.cost_in_credits}}</div>
    <div class="ship__desc">Length: {{ship.length}}</div>
    <div class="ship__desc">Speed(atmosphering): {{ship.max_atmosphering_speed}}</div>
    <div class="ship__desc">Crew: {{ship.crew}}</div>
    <div class="ship__desc">Cargo capacity: {{ship.cargo_capacity}}</div>
    <div class="ship__desc">Consumables: {{ship.consumables}}</div>
    <div class="ship__desc">Hyperdrive rating: {{ship.hyperdrive_rating}}</div>
    <div class="ship__desc">MGLT: {{ship.MGLT}}</div>
    <template v-if="ship.pilots.length > 0">
      <h3 class="ship__subtitle">Pilots</h3>
      <ul>
        <li
          v-for="(pilot, a) in ship.pilots"
          :key="a"
        >{{pilot}}</li>
      </ul>
    </template>
    <h3 class="ship__subtitle">Films</h3>
    <ul>
      <li
        v-for="(film, j) in ship.films"
        :key="j"
      >{{film}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    ship () {
      return this.$store.state.ship
    }
  },
  mounted () {
    if (!this.ship) {
      const id = this.$route.params.id
      this.$store.dispatch('GET_SHIP', id)
    }
  }
}
</script>

<style scoped lang="scss">
.ship {
  width: 400px;
  text-align: left;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

  &__title {
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
  }
  &__subtitle {
    font-size: 20px;
    margin: 10px 0;
  }
  &__desc {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    padding: 10px 0;
  }
}
</style>
