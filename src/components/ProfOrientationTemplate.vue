<template>
  <div class="prof__details">
    <div class="prof__details-block">
      <img class="prof__details-img" src="../images/png/Check.png" alt="questions">
      <span>{{ testQuestionsNum ? testQuestionsNum : 'Неизвестное количество' }} вопросов</span>
    </div>
    <div class="prof__details-block">
      <img class="prof__details-img" src="../images/png/Time.png" alt="Time">
      <span>{{ testQuestionsNum ? '20' : 'Неизвестное количество' }} мин</span>
    </div>
  </div><!-- ./prof__details -->
  <button type="button" class="btn green" @click="testQuestionsNum ? $router.push({name: 'test', props: {name: routeName}}) : ''">Начать</button>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "ProfOrientationTemplate",
  props: ['routeName'],
  async setup(props) {
    let store = useStore();
    await store.dispatch("initialQuestionList");

    const tests = computed(() => store.getters.getTests);
    let testQuestionsNum;

    try {
      const test = tests.value.filter((el) => el.name === props.routeName)[0].questions;
      let allTest = []

      for (let i = 0; i < test.length; i++) {
        const innerArray = test[i].questions;
        for (let j = 0; j < innerArray.length; j++) {
          allTest.push(innerArray[j]);
          allTest[allTest.length-1]['isAnswered'] = false;
          allTest[allTest.length-1]['name'] = test[i].name;
        }
      }
      testQuestionsNum = allTest.length
    }
    catch (e) {
      console.log(e.message)
    }

    return {
      testQuestionsNum
    }
  }
}
</script>

<style scoped>

</style>
