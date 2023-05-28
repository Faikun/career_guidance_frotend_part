<template>
<div class="footer">
  <div class="container">
    <div class="footer__wrapper">

      <div class="footer__block">
        <div class="footer__block-title">Тесты</div>
        <div><router-link to="/tests" class="footer__block-link">Тесты на профориентацию</router-link></div>
      </div><!-- ./footer__block -->

      <div class="footer__block">
        <div class="footer__block-title">Выбор профессии</div>
        <div><router-link to="/professions" class="footer__block-link">Список профессий</router-link></div>
        <div><router-link  to="/faq" class="footer__block-link">FAQ</router-link></div>
      </div><!-- ./footer__block -->

      <div class="footer__block">
        <div class="footer__block-title">Поступление в вуз</div>
        <div><router-link to="/" class="footer__block-link">Куда поступать?</router-link></div>
        <div><router-link to="/" class="footer__block-link">Вузы Казахстана</router-link></div>
      </div><!-- ./footer__block -->

      <div class="footer__block">
        <div class="footer__block-title">Полезное</div>
        <div><router-link to="/" class="footer__block-link">Контакты</router-link></div>
        <div><a @click="login" href="#" class="footer__block-link">Вход</a></div>
        <div><router-link to="/" class="footer__block-link">Статьи</router-link></div>
      </div><!-- ./footer__block -->
    </div><!-- ./footer__wrapper -->
  </div><!-- ./container -->
</div><!-- ./footer -->
</template>

<script>
import store from "@/store";

export default {
  name: "TheFooter",
  setup() {

    const login = function () {
      if(store.getters.getAuth) {
        store.commit('setNotificationInfo', { titleValue: 'Упс', text: 'Похоже, что вы уже авторизованы', mode: 'danger'} )
      }
      else {
        store.commit('toggleOpenedAuth');
        document.body.style.overflow = "hidden";
      }
    };
    return {
      login,
      store
    }
  }
}
</script>

<style scoped>

</style>
