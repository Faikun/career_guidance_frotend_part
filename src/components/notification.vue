<template>
<div class="notification" :class="mode">
  <div class="notification__intro">
    <h2 class="notification__name">{{ title }}</h2>
    <div class="notification__image" @click="store.commit('setNotificationBool')">
      <img src="../images/png/Close.png" alt="close">
    </div>
  </div><!-- ./notification__intro -->
  <p class="notification__text">{{ text }}</p>
</div><!-- ./notification -->
</template>

<script>
import store from "@/store";

export default {
  name: "notification",
  props: ['title', 'text', 'mode'],
  setup() {
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
