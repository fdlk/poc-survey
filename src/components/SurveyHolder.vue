<template>
  <div>
    <survey
      v-if="survey"
      :survey="survey">
    </survey>
  </div>
</template>

<script>
import {Survey, Model} from 'survey-vue'
import {mapState} from 'vuex'

export default {
  components: {
    Survey
  },
  data() {
    return {
      survey: new Model()
    }
  },
  computed: {
    ...mapState(['model'])
  },
  methods: {
    reset() {
      this.survey.clear()
      this.survey.fromJSON(this.model)
      this.survey.render()
    }
  },
  watch: {
    model: {
      immediate: true,
      handler () {
       this.reset()
      }
    }
  }
}
</script>