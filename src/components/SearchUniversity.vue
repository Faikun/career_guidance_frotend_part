<template>
  <section class="edu__results">
    <ul class="edu__results-list">
      <li class="edu__results-top">
        <span>Найдено: {{ searchEdu.length }}</span>
        <span>Проходной балл</span>
        <span>Бюджетных мест</span>
        <span>Внебюджетных мест</span>
      </li>
      <li class="edu__results-block" v-for="edu in searchEdu">
        <div class="edu__results-data first">
          <router-link :to="'/university/' + edu.name" href="#" class="edu__results-link">
            <img class="edu__results-logo" :src="getImgUrl(edu.image)" alt="logo">
            <h2>{{ edu.name }}</h2>
          </router-link>
          <div class="edu__results-additional">
            <span v-if="edu.hotel">Общежитие</span>
            <span v-if="edu.military">Военная кафедра</span>
          </div>
        </div>
        <div class="edu__results-data">
          {{ edu.passScores }}
        </div>
        <div class="edu__results-data">
          {{ edu.budget }}
        </div>
        <div class="edu__results-data">
          {{ edu.offBudget }}
        </div>
      </li>
    </ul>
  </section><!-- ./edu__results -->
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "SearchUniversity",
  props: ['requestText'],
  setup(props) {
    const store = useStore();
    const getEdu = computed(() => store.getters.getUniversity);
    const searchEdu = getEdu.value.filter((el) => el.name.toLowerCase().includes(props.requestText.toLowerCase()));

    const getImgUrl = function (img) {
      if(img.includes('http'))
        return img
      return require('@/images/' + img);
    }

    return {
      searchEdu,
      getImgUrl
    }
  }
}
</script>

<style scoped>

</style>
