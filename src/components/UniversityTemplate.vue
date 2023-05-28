<template>
  <div class="university__info">
    <h2 class="university__title" id="general">Общее</h2>
    <ul class="university__info-text">
      <li class="university__info-item">
        <span>Название:</span>
        <span>{{ university.name }}</span>
      </li>
      <li class="university__info-item">
        <span>Статус:</span>
        <span>{{ university.status }}</span>
      </li>
      <li class="university__info-item">
        <span>Лого:</span>
        <img :src="getImgUrl(university.image)">
      </li>
      <li class="university__info-item">
        <span>Местоположение:</span>
        <span>{{ university.location }}</span>
      </li>
      <li class="university__info-item">
        <span>Рейтинг:</span>
        <span>{{ university.rating }}</span>
      </li>
      <li class="university__info-item">
        <span>Проходные баллы:</span>
        <span>{{ university.passScores }}</span>
      </li>
      <li class="university__info-item">
        <span>Бюджетных мест:</span>
        <span>{{ university.budget }}</span>
      </li>
      <li class="university__info-item">
        <span>Внебюджетных мест:</span>
        <span>{{ university.offBudget }}</span>
      </li>
    </ul>
    <h2 class="university__info-title" id="subjects">Предметы</h2>
    <ul class="university__info-text list">
      <li v-for="subject in university.subjects" :key="subject">{{ subject.name }}</li>
    </ul>
    <h2 class="university__info-title" id="description">Описание</h2>
    <div class="university__info-text">{{ university.description }}</div>
    <h2 class="university__info-title" id="benefits">Преимущества</h2>
    <ul class="university__info-text list">
      <li v-for="benefit in benefits">{{ benefit }}</li>
    </ul>
    <h2 class="university__info-title" id="request">Подать заявку на поступление в данный университет</h2>
    <span class="university__info-text">Если вы заинтересованы в конкретном университете, то мы можем помочь вам с подачей заявки.
      Просто нажмите на кнопку ниже, чтобы перейти к форме заявки. </span>
    <router-link :to="'/request/' + uniName" class="university__info-btn btn green">Подать заявку</router-link>
  </div><!-- ./university___info -->
</template>

<script>
import {useStore} from "vuex";
import {useRoute} from "vue-router";

export default {
  name: "UniversityTemplate",
  props: ['uniName'],
  async setup() {
    const store = useStore();
    const route = useRoute();
    await store.dispatch('setAllUniversities')

    let university = store.getters.getUniversity.filter((el) => el.name === route.params.uniName);

    const getImgUrl = function (img) {
      if(img.includes('http'))
        return img
      return require('@/images/' + img);
    }

    const benefits = university[0].benefits.split(',');
    return {
      university: university[0],
      benefits, getImgUrl
    }
  }
}
</script>

<style scoped>

</style>
