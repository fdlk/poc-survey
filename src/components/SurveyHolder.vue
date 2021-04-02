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
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  components: {
    Survey
  },
  data() {
    const survey = new Model({})
    survey.onStarted.add(this.start)
    survey.onComplete.add(this.onComplete)
    return {
      survey
    }
  },
  computed: {
    ...mapState(['model', 'location'])
  },
  methods: {
    ...mapActions(['start', 'save']),
    ...mapMutations(['setLocation']),
    async onComplete(_sender, {
        showDataSaving,
        showDataSavingSuccess,
        showDataSavingError
      }) {
      showDataSaving('Saving...')
      try {
        await this.save(this.survey.data)
        showDataSavingSuccess('Saved!')
      } catch(error) {
        showDataSavingError(error.message)
      }
    },
    reset() {
      if(this.survey) {
        this.setLocation(null)
        this.survey.clear()
        this.survey.fromJSON(this.model)
        this.survey.render()
      }
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