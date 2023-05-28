<template>
  <div class="nav">
    <div class="container">
      <div class="nav__wrapper">
        <div class="nav__logo">
          <img src="../images/png/logo.png" alt="logo">
        </div><!-- ./nav__logo -->

        <nav class="nav__links" :class="toggle ? 'shown' : ''">
          <router-link to="/tests" class="nav__link">Тесты</router-link>
          <router-link v-if="store.getters.getAdmin" to="/admin" class="nav__link">Админ</router-link>
          <div class="nav__link dropdown">
            <span>Выбрать профессию</span>
            <img class="nav__arrow" src="../images/png/arrow_toButton.png" alt="arrow">

            <div class="dropdown__content">
              <router-link to="/tests">Тесты на выбор профессии</router-link>
              <router-link to="/professions">Все профессии</router-link>
              <router-link to="/faq">FAQ: Как выборать профессию</router-link>
            </div>
          </div><!-- ./nav__link -->
          <div class="nav__link dropdown">
            <span>Поступить в вуз</span>
            <img class="nav__arrow" src="../images/png/arrow_toButton.png" alt="arrow">

            <div class="dropdown__content">
              <router-link to="/edu/Алматы">Вузы Алматы</router-link>
              <router-link to="/edu/Нур-Султан">Вузы Нур-Султана</router-link>
              <router-link to="/edu/Шымкент">Вузы Шымкента</router-link>
              <a href="#"
                 v-if="store.getters.getAuth"
                 @click="$router.push(`/edu/${location}`)"
              >
                Вузы в вашем городе</a>
            </div>
          </div><!-- ./nav__link -->
        </nav><!-- ./nav__links -->

        <div class="burger__item" @click="toggle = !toggle">
          <button class="burger" :class="toggle ? 'shown' : ''" type="button">
            <span class="burger-item">Menu</span>
          </button>
        </div>

        <div class="nav__right">
          <div class="nav__search" @click="searchActive = !searchActive">
            <img src="../images/png/Search.png" alt="Search">
          </div>
          <div class="nav__account">
            <img src="../images/png/Account.png" alt="Account" @click="showAccBlock">
            <div class="dropdown__account" :class="account ? 'active' : ''">
              <a @click="goToAcc">Аккаунт</a>
              <a @click="goToHistory">История</a>
              <a href="#" @click="exitAcc">Выход</a>
            </div>
          </div>
        </div><!-- ./nav__right -->
      </div><!-- ./nav__wrapper -->

      <transition name="fadeHeight">
        <div class="search" v-if="searchActive">
          <input
              class="search__input"
              type="text"
              v-model.trim="search"
              placeholder="Введите тест, профессию или вуз"
              @keyup.enter="searchFunction"
          >
          <img class="search__icon" src="../images/png/Search.png" alt="icon" @click="searchFunction">
        </div><!-- ./search -->
      </transition>

    </div><!-- ./container -->
  </div><!-- ./nav -->

  <div class="container">
    <notification
        v-if="notification.openedNotification"
        :title="notification.title"
        :text="notification.text"
        :mode="notification.mode"
    ></notification>
  </div>

</template>

<script>
import {computed, onMounted, ref} from "vue";
import Notification from "@/components/notification.vue";
import router from "@/router";
import {useStore} from "vuex";

export default {
  name: "TheNavbar",
  components: { Notification },
  setup() {
    const store = useStore()

    onMounted( () => store.dispatch('setAllUsers'))
    const users = computed(() => store.getters.getUsers);

    let search = ref('');
    let account = ref('');
    let searchActive = ref(false);
    let toggle = ref(false);
    const storeGetters = computed(() => store.getters);
    let notification = store.getters.getNotificationInfo;

    let searchFunction = function () {
      router.push('/search/' + search.value);
      searchActive.value = true;
    }

    let exitAcc = async function () {
      // await axios.post('logout', {}, {withCredentials: true});

      localStorage.removeItem('jwt_token')
      store.commit('setAuth')
      account.value = !account.value;
      store.commit('setNotificationInfo', {titleValue: 'Успех', text: 'Вы успешно вышли со своего аккаунта', mode: 'success'} );
      await router.push('/')
    }

    let showAccBlock = function () {
      if (store.getters.getAuth) {
        account.value = !account.value;
      }
      else {
        store.commit('toggleOpenedAuth');
        document.body.style.overflow = "hidden";
        document.documentElement.scrollTop = 0;
      }
    }

    let goToAcc = function () {
      router.push('/account');
      account.value = !account.value;
    };

    let goToHistory = function () {
      router.push('/history');
      account.value = !account.value;
    }

    let location = computed(() => users.value.filter((el) => el.id.toString() === store.getters.getUserId)[0].location)

    return {
      search,
      searchActive,
      toggle,
      account,
      showAccBlock,
      store, storeGetters,
      exitAcc,
      notification,
      goToAcc, goToHistory,
      location,
      searchFunction
    }
  }
}
</script>

<style>
  .fadeHeight-enter-from {
    max-height: 0;
    opacity: 0;
  }
  .fadeHeight-enter-active,
  .fadeHeight-leave-active {
    transition: all .5s ease-in-out;
  }
  .fadeHeight-leave-from {
    max-height: 230px;
    opacity: 1;
  }
  .fadeHeight-leave-to
  {
    opacity: 0;
    max-height: 0;
  }

</style>
