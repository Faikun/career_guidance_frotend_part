<template>
<div class="tests">
  <div class="tests__title">Тесты на профориентацию:</div>
  <div class="tests__wrapper">
    <div class="test__block" v-for="test in tests" :key="test.name" @click="$router.push({name: 'prof', params: {name: test.name}})">
      <img class="test__block-img" :src="test.image" alt="image">
      <span class="tests__name">{{ test.name }}</span>
    </div><!-- ./test__block -->
  </div><!-- ./tests__wrapper -->
</div><!-- ./tests -->
</template>

<script>
import {computed} from "vue";
import router from "@/router";
import {useStore} from "vuex";

export default {
  name: "Tests",
  components: {Notification},
  props: ['name'],
  setup () {
    const store = useStore();
    const tests = computed(() => store.getters.getTests);
    return {
      tests: tests.value
    }
  }
}
</script>
