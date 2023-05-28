<template>
  <div class="test">
    <h1 class="test__title">{{ name }}</h1>
    <Suspense>
      <test-template
        :name="name"
      ></test-template>
    </Suspense>
  </div>
  <Suspense>
    <comments></comments>
  </Suspense>
</template>

<script>
import Comments from "@/components/Comments.vue";
import TestTemplate from "@/components/TestTemplate.vue";

export default {
  name: "Test",
  components: {TestTemplate, Comments },
  props: ['name'],
}
</script>
