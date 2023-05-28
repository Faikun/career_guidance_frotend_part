<template>
<div class="edu">
  <h1 class="edu__title">Вузы города {{ $route.params.city }}</h1>

  <Suspense>
    <edu-template
      :city="$route.params.city"
    ></edu-template>
  </Suspense>

</div><!-- ./edu -->
</template>

<script>
import {computed, onMounted, reactive, ref} from "vue";
import store from "@/store";
import {useRoute} from "vue-router";
import EduTemplate from "@/components/EduTemplate.vue";

export default {
  name: "Edu",
  components: {EduTemplate},
}
</script>

<style scoped>

</style>
