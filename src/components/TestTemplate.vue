<template>
  <div class="test__questionCounter">Вопрос {{ questionNum + 1 }}</div>

  <div class="test__question">
    <div class="test__question-name"> {{ allTest[questionNum].question }}</div>
    <div class="test__question-answers">
      <div class="test__question-answer" @click="nextQuestion(questionNum, allTest[questionNum], allTest[questionNum].score)">Да</div>
      <div class="test__question-answer" @click="nextQuestion(questionNum, allTest[questionNum], allTest[questionNum].score * -1)">Нет</div>
      <div class="test__question-answer" @click="nextQuestion(questionNum, allTest[questionNum], 0)">Затрудняюсь ответить</div>
    </div>
  </div><!-- ./test__question -->
  <div class="test__passed">
    Вы ответили на
    {{ checkQuestionCompleted }}
    из {{ allTest.length }} вопросов
  </div>
  <div class="test__questionNums">
    <div
        :class="allTest[num-1].isAnswered ? 'active': ''"
        v-for="num in allTest.length"
        @click="questionNum = num-1"
        class="test__questionNum">{{ num }}</div>
  </div><!-- ./test__questionNums -->
</template>

<script>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import router from "@/router";
import axios from "axios";

export default {
  name: "TestTemplate",
  props: ['name'],
  async setup(props) {
    let questionNum = ref(0);
    const store = useStore();
    const route = useRoute();

    await store.dispatch("initialQuestionList");

    const tests = computed(() => store.getters.getTests);
    const routeName = computed(() => route.params.name);
    const test = tests.value.filter((el) => el.name === routeName.value)[0].questions;
    let allTest = []

    for (let i = 0; i < test.length; i++) {
      const innerArray = test[i].questions;
      for (let j = 0; j < innerArray.length; j++) {
        allTest.push(innerArray[j]);
        allTest[allTest.length-1]['isAnswered'] = false;
        allTest[allTest.length-1]['name'] = test[i].name;
      }
    }

    let firstUnanswered = computed(() => test.findIndex(test => test.isAnswered === false));
    let checkQuestionCompleted = computed(() => allTest.reduce((accumulator, currentValue) => accumulator + (currentValue.isAnswered ? 1 : 0), 0));

    const sendAnswers = async function (chosenAns) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          keyName: chosenAns
        }
      }
      let {data} = await axios.post('profession/getProfessionsByKey', null, config)
      return data
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    let total = {
      'человек-природа' : 0,
      'человек-техника' : 0,
      'человек-знаковая система' : 0,
      'человек-искусство' : 0,
      'человек-человек' : 0
    };

    function getMaxKeys(obj) {
      let max = -Infinity;
      let maxKeys = [];

      for (let key in obj) {
        let val = obj[key];
        if (typeof val === 'number' && val >= max) {
          if (val > max) {
            max = val;
            maxKeys = [key];
          } else {
            maxKeys.push(key);
          }
        }
      }

      return maxKeys;
    }


    let nextQuestion = async function (question, answer, chosenAnswer) {
      if (checkQuestionCompleted.value + 1 !== allTest.length) {
        allTest[question].isAnswered = true
        total[allTest[question].name] += chosenAnswer
        if (firstUnanswered.value > -1) {
          questionNum.value = firstUnanswered.value;
        } else {
          questionNum.value++;
        }
      }
      else {
        let max = getMaxKeys(total)
        let result = [];
        for (let i = 0; i < max.length; i++) {
          let data = await sendAnswers(getMaxKeys(total)[i]);
          result.push(data)
        }

        let newResult = []

        for (let i = 0; i < result[0].length; i++) {
          newResult.push(result[0][i].name)
        }

        if (store.getters.getAuth) {
          const {data} = await axios.post('history', {
            name: props.name,
            result: JSON.stringify(newResult)
          })

          localStorage.setItem('test', JSON.stringify({ name: props.name, result: newResult}))

          await axios.put('user/' + store.getters.getUserId, {
            history: {
              id: data.id,
              name: data.name,
              result: data.result
            }
          })
        }
        else {
          localStorage.setItem('test', JSON.stringify({ name: props.name, result: newResult}))
        }
        setTimeout(() => {
          router.push('/result');
        }, 250);
      }
    }
    return {
      questionNum,
      test,
      nextQuestion,
      checkQuestionCompleted,
      allTest: shuffleArray(allTest)
    }
  }
}
</script>

<style scoped>

</style>
