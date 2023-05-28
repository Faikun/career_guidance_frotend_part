<template>
  <div class="tests" v-if="tests.length > 0">
    <div class="tests__wrapper">
      <div class="test__block" v-for="test in tests" :key="test.name" @click="$router.push({name: 'prof', params: {name: test.name}})">
        <img class="test__block-img" :src="test.image" alt="image">
        <span class="tests__name">{{ test.name }}</span>
      </div><!-- ./test__block -->
    </div><!-- ./tests__wrapper -->
  </div><!-- ./tests -->
  <span v-else>Список пуст</span>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "SearchTests",
  props: ['requestText'],
  setup(props) {
    const store = useStore();
    const getTests = computed(() => store.getters.getTests);
    const tests = getTests.value.filter((el) => el.name.toLowerCase().includes(props.requestText.toLowerCase()));

    return {
      tests
    }
  }
}
</script>

<style scoped>

</style>
