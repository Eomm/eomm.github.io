<template>
  <div class="status">
    <div class="dices">
      <b-container>
        <b-row>
          <b-col cols="3">{{ type }} ({{ value }})</b-col>
          <b-col><b-button size="sm" @click="handleValue(-1)">➖</b-button></b-col>
          <b-col cols="7">
            <b-progress class="mt-2" :max="max" show-value>
              <b-progress-bar :value="value" variant="success"></b-progress-bar>
            </b-progress>
          </b-col>
          <b-col><b-button size="sm" @click="handleValue(1)">➕</b-button></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import BProgress from 'bootstrap-vue/es/components/progress/progress'
import BProgressBar from 'bootstrap-vue/es/components/progress/progress-bar'
import BButton from 'bootstrap-vue/es/components/button/button'

export default {
  name: 'stat',
  components: {
    BProgress,
    BProgressBar,
    BButton
  },
  props: {
    type: String,
    min: { type: Number, default: 0 },
    max: { type: Number, default: 3 },
    value: Number
  },
  data: function (params) {
    return {
      dice: []
    }
  },
  created: function (params) {
    this.value = +this.value
  },
  methods: {
    handleValue: function (inc) {
      const newValue = this.value + inc
      if (newValue > this.max || newValue < this.min) {
        return
      }
      this.value = newValue
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dices {
  /* float: right; */
}
</style>
