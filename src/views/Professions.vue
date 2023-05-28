<template>
<div class="professions">
  <h1 class="professions__title">Профессии</h1>

  <div class="professions__wrapper">
    <div class="test__block" v-for="prof in output" :key="prof.name" @click="openProfessionList(prof)">
      <img class="test__block-img" :src="prof.img" alt="image">
      <span class="tests__name">{{ prof.name }}</span>
    </div>
  </div><!-- ./professions__wrapper -->

</div><!-- ./professions -->
</template>

<script>
import {computed, onMounted, reactive, ref} from "vue";
import router from "@/router";
import store from "@/store";
import {useStore} from "vuex";

export default {
  name: "Professions",
  setup() {
    let searchProf = ref();
    const store = useStore();

    const category = computed(() => store.getters.getProfCategory);

    const categoryName = Object.values(Object.values(category.value)[0])
    const categoryImg = Object.values(Object.values(category.value)[1])

    let output = []
    for (let i = 0; i < categoryName.length; i++) {
      output.push({
        name: categoryName[i],
        img: categoryImg[i]
      })
    }

    let openProfessionList = function (prof) {
      router.push({name: 'Exact_Professions', params: {name: prof.name}});
    }


    return {
      searchProf,
      openProfessionList,
      output
    }
  }
}
</script>

<style scoped>

</style>
