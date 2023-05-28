<template>
<div class="exactProfessions">
  <h1 class="exactProfessions__title">{{ this.$route.params.name }}</h1>
  <span class="exactProfessions_text">Все профессии категории "{{ this.$route.params.name }}" на этой странице с кратким описанием</span>
  <div class="exactProfession__table" v-if="profs.length > 0">
    <table class="table">
      <tr>
        <th>Профессия</th>
        <th>Описание</th>
      </tr>
      <tr v-for="prof in profs" :key="prof.name">
        <td><router-link :to="{name: 'Profession', params: { name: prof.category, prof: prof.name }}">{{ prof.name }}</router-link></td>
        <td>{{ prof.description }}}</td>
      </tr>
    </table>
  </div>
  <div class="spin-wrapper" v-else>
    <div class="spinner"></div>
  </div>
</div><!-- ./exactProfessions -->
</template>

<script>
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

export default {
  name: "exactProfessions",
  setup() {
    onMounted( () => store.dispatch('initialProfessionsList'))
    const route = useRoute()
    const store = useStore()
    let profs = computed(() => Object.values(store.getters.getProfessionsArray).filter(el => el.category === route.params.name));

    return {
      profs
    }
  }
}
</script>
