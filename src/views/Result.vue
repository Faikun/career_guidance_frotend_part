<template>
<div class="result">
  <h1 class="result__title">Результаты</h1>
  <h3 class="test__completed">Поздравляем! Вы успешно сдали тест - {{ finalRes.name }}</h3>
  <h4 class="test__completed-bottom">Профессии, которые вам подходят: </h4>

  <slider-swiper
      v-if="store.getters.getAuth"
      :array="finalRes.result"
  ></slider-swiper>

  <div v-else class="result__auth">
    <div class="result__statement">Чтобы увидеть результат, пожалуйста, пройдите регистрацию или войдите в свою учётную запись</div>
    <div class="result__auth-links">
      <a href="#" @click="auth">Войти в аккаунт</a>
      <a href="#" @click="auth">Зарегестрироваться</a>
    </div>
  </div><!-- ./result__auth -->
  <comments></comments>
</div><!-- ./result -->
</template>

<script>
import Comments from "@/components/Comments.vue";
import {useStore} from "vuex";
import {computed, watch} from "vue";
import {useRouter} from "vue-router";
import SliderSwiper from "@/components/SliderSwiper.vue";

export default {
  name: "Result",
  components: {SliderSwiper, Comments},
  setup() {
    let store = useStore();
    let auth = function () {
      store.commit('toggleOpenedAuth');
      document.body.style.overflow = "hidden";
    }
    let finalRes = {
      name: '',
      result: []
    };

    const isAuth = computed(() => store.getters.getAuth)
    const users = computed(() => store.getters.getUsers)

    if(isAuth.value) {
      const result = JSON.parse(localStorage.getItem('test'))
      finalRes['name'] = result.name
      finalRes['result'] = result.result
    }

    watch(isAuth, (newValue, oldValue) => {
      if(newValue) {
        const result = JSON.parse(localStorage.getItem('test'));
        users.value.filter((el) => el.id.toString() === store.getters.getUserId)[0].history = JSON.stringify(result);
        finalRes['name'] = result.name
        finalRes['result'] = result.result
      }
    })

    return {
      store,
      auth,
      finalRes
    }
  }
}
</script>
