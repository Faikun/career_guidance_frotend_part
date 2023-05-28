<template>
  <div class="profession" v-if="prof.length > 0">
    <h1 class="profession__title">{{ this.$route.params.prof }}</h1>
    <div class="profession__article">
      <div class="profession__author">Admin</div>
      <div class="profession__date">11 марта 2023</div>
    </div> <!-- ./profession__article -->
    <div class="profession__image">
      <img :src="getImgUrl(prof[0].image)" alt="image">
    </div>
    <div class="profession__contents">
      <h2 class="profession__contents-title">Содержание</h2>
      <ul class="profession__contents-list">
        <li class="profession__contents-item">
          <a href="#description">Описание</a>
        </li>
        <li class="profession__contents-item">
          <a href="#whatToDo">Что нужно делать</a>
        </li>
        <li class="profession__contents-item">
          <a href="#know">Что нужно знать</a>
        </li>
        <li class="profession__contents-item">
          <a href="#money">Сколько можно заработать</a>
        </li>
        <li class="profession__contents-item">
          <a href="#study">Где можно обучиться</a>
        </li>
      </ul>
    </div>
    <div class="profession__info" v-for="array in prof">
      <h2 class="profession__info-title" id="description">Описание</h2>
      <div class="profession__info-text">{{ array.description }}</div>
      <h2 class="profession__info-title" id="whatToDo">Что нужно делать</h2>
      <div class="profession__info-text">{{ array.whatMakes }}</div>
      <h2 class="profession__info-title" id="know">Что нужно знать</h2>
      <div class="profession__info-text">{{ array.whatShouldKnow }}</div>
      <h2 class="profession__info-title" id="money">Сколько можно заработать</h2>
      <div class="profession__info-text">{{ array.money }}</div>
      <h2 class="profession__info-title" id="study">Где можно обучиться</h2>
      <div class="profession__info-text">
        <ul v-if="university.filter((el) => el.tags.some(tag => tag.name.includes(array.category))).map((el) => el.name).length > 0">
          <li v-for="item in university.filter((el) => el.tags.some(tag => tag.name.includes(array.category))).map((el) => el.name)">
            <router-link :to="'/university/' + item">{{ item }}</router-link>
          </li>
        </ul>
        <span v-else>Список пуст</span>
      </div>
    </div><!-- ./profession__info -->
  </div><!-- ./profession -->
  <div class="spin-wrapper" v-else>
    <div class="spinner"></div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import axios from "axios";

export default {
  name: "Profession",
  setup() {
    let store = useStore();

    onMounted( async () => {
      await store.dispatch('initialProfessionsList')
      await store.dispatch('setAllUniversities')
    })

    let route = useRoute();
    const profArray = computed(() => Object.values(store.getters.getProfessionsArray).filter((el) => el.name === route.params.prof))

    let university = computed(() => store.getters.getUniversity);
    const getImgUrl = function (img) {
      if(img.includes('http'))
        return img

      return require('@/images/Prof/Certain/' + img);
    }
    return {
      store,
      prof: profArray,
      university,
      getImgUrl
    }
  }
}
</script>

<style scoped>

</style>
