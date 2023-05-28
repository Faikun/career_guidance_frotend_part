<template>
  <div class="prof">
    <div class="prof__info">
      <div class="prof__title">{{ routeName }}</div>
      <div class="prof__text">По прохождению данного теста, вы узнаете к чему вы предрасположены,
        таким образом, данный тест поможет вам с определением вашей профориентации</div>

      <Suspense>
      <prof-orientation-template
        :routeName="routeName"
        />
      </Suspense>

    </div><!-- ./prof__info -->
    <div class="prof__image">
      <video autoplay loop src="../images/gif/Main.mp4"></video>
    </div><!-- ./prof__image -->
  </div><!-- ./prof -->
</template>

<script>
import {useRoute} from "vue-router";
import {computed} from "vue";
import {useStore} from "vuex";
import ProfOrientationTemplate from "@/components/ProfOrientationTemplate.vue";

export default {
  name: "ProfOrientation",
  components: {ProfOrientationTemplate},
  setup() {
    const route = useRoute();
    const routeName = computed(() => route.params.name);

    return {
      routeName
    }
  }
}
</script>
