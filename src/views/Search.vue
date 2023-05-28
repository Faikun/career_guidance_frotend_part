<template>
  <div class="searchPage">
    <h1 class="searchPage__title">Результаты по запросу {{ text }}</h1>

    <h2 class="searchPage__subtitle">Тесты:</h2>
    <search-tests
      :requestText="text"
      :key="text"
    >
    </search-tests>

    <h2 class="searchPage__subtitle">Университеты:</h2>
    <search-universities
        :requestText="text"
        :key="text"
    >
    </search-universities>

    <h2 class="searchPage__subtitle">Профессии:</h2>
    <search-professions
        :requestText="text"
        :key="text"
    >
    </search-professions>
  </div><!-- ./searchPage -->
</template>

<script>
import SearchTests from "@/components/SearchTests.vue";
import SearchUniversities from "@/components/SearchUniversity.vue";
import SearchProfessions from "@/components/SearchProfession.vue";
import {getCurrentInstance, onMounted, watch} from "vue";
import {useStore} from "vuex";

export default {
  name: "Search",
  props: ['text'],
  components: { SearchTests, SearchUniversities, SearchProfessions },
  setup() {
    const store= useStore()
    onMounted(() => store.dispatch('setAllUniversities'))
  }
}
</script>
