<template>
<div class="reset">
  <h1 class="reset__title">Сброс пароля</h1><!--./reset__title -->
  <div class="reset__info">Укажите вашу почту для сброса пароля</div>
  <div class="reset__mail">
    <span class="reset__mail-text">Email</span>
    <div class="reset__mail-input">
      <input type="text" placeholder="Почта">
    </div>
    <div class="reset__mail-button btn blue">Отправить</div>
    <router-link to="/tests" class="reset__back">Назад</router-link>
  </div><!-- ./reset__mail -->
</div><!-- ./reset -->
</template>

<script>
export default {
  name: "Reset"
}
</script>

<style scoped>

</style>
