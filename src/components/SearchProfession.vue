<template>
  <div class="exactProfession__table">
    <table class="table">
      <tr>
        <th>Профессия</th>
        <th>Описание</th>
      </tr>
      <tr v-for="prof in filteredArray" :key="prof.name">
        <td><a href="#" @click="goToProf(prof)">{{ prof.name }}</a></td>
        <td>{{ prof.description }}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "SearchProfession",
  props: ['requestText'],
  setup(props) {
    onMounted( () => store.dispatch('initialProfessionsList'))
    const store = useStore();
    const router = useRouter();
    const profArray = computed(() => store.getters.getProfessionsArray);
    let filteredArray = profArray.value.filter((el) => el.name.toLowerCase().includes(props.requestText.toLowerCase()));

    let goToProf = function (prof) {
      router.push({name: 'Profession', params: { name: prof.category, prof: prof.name }}) ;
    }
    return {
      filteredArray,
      goToProf
    }
  }
}
</script>

<style scoped>

</style>
