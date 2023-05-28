<template>
<div class="history">
  <h1 class="history__title">История</h1>
  <div class="history__wrapper">
    <div v-if="history.length === 0" class="history__empty">
      <span class="history__empty-text mb20">К сожалению, вы пока не прошли ни одно из предложенных тестов.</span>
      <div class="history__empty-wrapper">
        <span class="history__empty-text">Желате пройти тестирование?</span>
        <router-link class="history__empty-link" to="/tests">Список тестов</router-link>
      </div>
    </div><!-- ./history__empty -->
    <div v-else>
      <h2 class="history__subtitle">Тест на профориентацию</h2>
      <ul class="result__show">
        <li v-for="item in history.result" class="result__show-item" @click="goToProf(item)">
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
  </div><!-- ./history__wrapper -->
</div><!-- ./history -->
</template>

<script>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {computed, onMounted} from "vue";

export default {
  name: "History",
  setup() {
    onMounted(async () => store.dispatch('initialProfessionsList'))
    let store = useStore();
    let router = useRouter();
    const professionsArray = computed(() => store.getters.getProfessionsArray);
    let finalRes = {
      name: '',
      result: []
    };

    const result = JSON.parse(localStorage.getItem('test'));
    if (result) {
      finalRes['name'] = result.name
      finalRes['result'] = result.result
    }

    const goToProf = function (name) {
      const prof = professionsArray.value.filter((el) => el.name.toLowerCase() === name.toLowerCase())[0];
      router.push({ name: 'Profession', params: { name: prof.category, prof: prof.name }})
    }

    return {
      history: finalRes,
      goToProf
    }
  }
}
</script>

