<template>
  <div class="stat">
    <p>{{ type }} {{current}}</p>
    <ul v-for="c in dice" v-bind:key="c.id">
      <li>
        <input type="checkbox" @change="current+=1">
        {{c.id}}
      </li>
    </ul>
    fine
  </div>
</template>

<script>
export default {
  name: 'stat',
  props: {
    type: String,
    max: Number,
    active: Number
  },
  data: function (params) {
    return {
      dice: []
    }
  },
  created: function (params) {
    let startActive = this.active
    for (let i = 0; i < this.max; i++) {
      this.dice.push({ id: i, active: (startActive--) > 0 })
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
