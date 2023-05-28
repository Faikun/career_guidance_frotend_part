<template>
<div class="university">
  <h1 class="university__title">Университет: {{ uniName }}</h1>
  <div class="university__wrapper">
    <div class="profession__article">
      <div class="profession__author">Admin</div>
      <div class="profession__date">26 марта 2023</div>
    </div> <!-- ./profession__article -->

    <div class="university__contents">
      <h2 class="university__contents-title">Содержание</h2>
      <ul class="university__contents-list">
        <li class="university__contents-item">
          <a href="#general">Общее</a>
        </li>
        <li class="university__contents-item">
          <a href="#subjects">Предметы</a>
        </li>
        <li class="university__contents-item">
          <a href="#description">Описание</a>
        </li>
        <li class="university__contents-item">
          <a href="#benefits">Преимущества</a>
        </li>
        <li class="university__contents-item">
          <a href="#request">Подать заявку</a>
        </li>
      </ul><!-- ./university__contents-list -->
    </div><!-- ./university -->

    <Suspense>
      <university-template :uniName="universityName"></university-template>
    </Suspense>


  </div><!-- ./university__wrapper -->
</div><!-- ./university -->
</template>

<script>
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import UniversityTemplate from "@/components/UniversityTemplate.vue";

export default {
  name: "University",
  components: {UniversityTemplate},
  props: ['uniName'],
  setup(props) {
    return {
      universityName: props.uniName
    }
  }
}
</script>

<style scoped>

</style>
