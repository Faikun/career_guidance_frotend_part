<template>
<div class="auth" v-if="store.getters.getOpenedAuth">
  <div class="auth__mask" @click="closeAuthBlock"></div><!-- ./login__mask -->

  <form v-if="isLogin" class="auth__wrapper" @submit.prevent="auth">
    <div class="auth__intro">
      <h1 class="auth__name">Вход</h1>
      <img class="auth__close" src="../images/png/Close.png" alt="close" @click="closeAuthBlock">
    </div><!--./auth__intro -->
    <div class="auth__inputs">
      <div class="auth__inputs-item">
        <input placeholder="Логин" type="text" v-model.trim="name" ref="mailRef">
      </div><!-- ./auth__inputs-item -->
      <div class="auth__inputs-item">
        <input placeholder="Пароль" type="password" v-model.trim="password" ref="passwordRef">
        <img
             @click="passwordToggle(passwordRef, passwordImage)"
             class="auth__inputs-itemEye"
             src="../images/png/eye_opened.png"
             alt="visible/invisible password"
             ref="passwordImage"
        >
      </div><!-- ./auth__inputs-item -->
    </div><!-- ./auth__inputs -->
    <button type="submit" class="btn blue auth__button">Войти</button><!-- ./auth__button -->
    <router-link to="/reset" class="auth__forgot" @click="store.commit('toggleOpenedAuth')">Забыли пароль?</router-link>
    <button class="auth__reg" type="button" @click="isLogin = false">Быстрая регистрация</button>
  </form><!-- ./auth__wrapper -->

  <form v-else class="auth__wrapper">
    <div class="auth__intro">
      <h1 class="auth__name">Регистрация</h1>
      <img class="auth__close" src="../images/png/Close.png" alt="close" @click="closeAuthBlock">
    </div><!--./auth__intro -->
    <div class="auth__inputs">
      <div class="auth__inputs-item">
        <input placeholder="Логин" type="text" v-model.trim="name" ref="nameReg">
      </div><!-- ./auth__inputs-item -->
      <div class="auth__inputs-item">
        <input placeholder="Почта" type="text" v-model.trim="mail" ref="mailReg">
      </div><!-- ./auth__inputs-item -->
      <div class="auth__inputs-item">
        <input placeholder="Пароль" type="password" v-model.trim="password" ref="passwordRef">
        <img
            @click="passwordToggle(passwordRef, passwordImage)"
            class="auth__inputs-itemEye"
            src="../images/png/eye_opened.png"
            alt="visible/invisible password"
            ref="passwordImage"
        >
      </div><!-- ./auth__inputs-item -->
      <div class="auth__inputs-item">
        <input placeholder="Подтвердить пароль" type="password" v-model.trim="repeatedPassword" ref="passwordRef_2">
        <img
            @click="passwordToggle(passwordRef_2, passwordImage_2)"
            class="auth__inputs-itemEye"
            src="../images/png/eye_opened.png"
            alt="visible/invisible password"
            ref="passwordImage_2"
        >
      </div><!-- ./auth__inputs-item -->
      <div class="auth__inputs-item">
        <select name="" id="" v-model="selectLocation" ref="selectLocationRef">
          <option value>Выберите город</option>
          <option selected value="Алматы">Алматы</option>
          <option value="Нур-Султан">Нур-Султан</option>
          <option value="Шымкент">Шымкент</option>
          <option value="Туркестан">Туркестан</option>
        </select>
      </div>

    </div><!-- ./auth__inputs -->
    <button type="submit" class="auth__button btn blue" @click.prevent="register">Регистрация</button><!-- ./auth__button -->
    <a @click="isLogin = true" class="auth__forgot" href="#">Назад</a>
  </form><!-- ./auth__wrapper -->

</div><!-- ./auth -->
</template>

<script>
import {computed, ref} from "vue";
import store from "@/store";
import axios from "axios";
export default {
  name: "Login",
  async setup () {
    let isLogin = ref(true)
    await store.dispatch("setAllUsers");

    function parseJWT(token) {
      let base64Url = token.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    }

    let token = localStorage.getItem('jwt_token')
    if(token) {
      const userData = parseJWT(token)
      const user = computed(() => store.getters.getUsers.filter((el) => el.username === userData.sub))
      if(userData.auth === 'ROLE_ADMIN')
        store.commit('setAdmin');

      store.commit('setAuth');
      store.commit('setUserId', store.getters.getUsers.filter((el) => el.username === user.value[0].username).map(map => map.id).toString());
    }

    const passwordImage = ref(null)
    const passwordRef = ref(null)
    const passwordImage_2 = ref(null)
    const passwordRef_2 = ref(null)
    const mailRef = ref(null)
    const selectLocationRef = ref(null)

    const nameReg = ref(null);
    const mailReg = ref(null);

    let name = ref('');
    let mail = ref('');
    let password = ref('');
    let repeatedPassword = ref('');
    let selectLocation = ref('')

    let closeAuthBlock = function () {
      store.commit('toggleOpenedAuth');
      document.body.style.overflow = "auto";
    }

    let passwordToggle = function (passRef, passImage) {
      passRef.setAttribute('type',
          passRef.getAttribute('type') === 'password' ? 'text' : 'password');
      passImage.setAttribute('src',
          passImage.getAttribute('src') === require('../images/png/eye_opened.png') ?
              require('../images/png/eye_closed.png') : require('../images/png/eye_opened.png'));
    }

    let auth = async () => {
      let user = store.getters.getUsers.filter((el) => el.username === name.value);
      user ? user = user[0] : console.log('Такой пользователь не найден')

      try {
        const {data} = await axios
            .post('auth/login', {
              username: name.value,
              password: password.value
            }).catch(e => console.log(e.message))

        if (data) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
          localStorage.setItem('jwt_token', data.token);

          console.log(user.role)

          if(user.role === 'ROLE_ADMIN') {
            store.commit('setAdmin');
          }
          store.commit('setAuth');
          store.commit('setUserId', store.getters.getUsers.filter((el) => el.username === name.value).map(map => map.id).toString());
          closeAuthBlock();
          store.commit('setNotificationInfo', { titleValue: 'Успех', text: 'Авторизация успешно пройдена', mode: 'success'} )
        }
        else {
          mailRef.value.style.outline = '1px solid red';
          passwordRef.value.style.outline = '1px solid red';
        }
      }
      catch (e) {
        console.log('Ошибка: ', e.message)
      }
    }

    function passwordEqualFunction() {
      if (password.value !== repeatedPassword.value) {
        passwordRef_2.value.style.outline = '1px solid red';
        return false
      } else {
        passwordRef_2.value.style.outline = '1px solid black';
        return true
      }
    }

    let register = async function () {
      if (passwordEqualFunction()) {
        const data = await axios.post('auth/register',{
          username: name.value,
          email: mail.value,
          password: password.value,
          location: selectLocation.value
        }).then((e) => {
          if(e.request.status !== 200) {
            const error = e.response.data.error
            console.log(error)
            error.includes("Username shouldn\'t be empty") || error.includes("Username must contain between 3 and 20 characters") ? nameReg.value.style.outline = '1px solid red' : nameReg.value.style.outline = '1px solid black';
            error.includes("Email address should not be empty") || error.includes("Invalid email address") ? mailReg.value.style.outline = '1px solid red' : mailReg.value.style.outline = '1px solid black';
            error.includes("Password should not be empty") || error.includes("Password must contain between 5 and 32 characters") ? passwordRef.value.style.outline = '1px solid red' : passwordRef.value.style.outline = '1px solid black';
            error.includes('Password should contain 1 Uppercase letter 1 digit and 1 special symbol and more than 6 characters') ? passwordRef.value.style.outline = '1px solid red' : passwordRef.value.style.outline = '1px solid black';
            error.includes("Location should not be empty") ? selectLocationRef.value.style.outline = '1px solid red' : selectLocationRef.value.style.outline = '1px solid black';
          }
          else {
            return e.data
          }
        }).catch(e => console.error(e.message))

        if (data) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
          localStorage.setItem('jwt_token', data.token);
          await store.dispatch('setAllUsers')
          store.commit('setAuth');
          store.commit('setUserId', store.getters.getUsers.filter((el) => el.email === mail.value).map(map => map.id).toString());
          closeAuthBlock();
          store.commit('setNotificationInfo', { titleValue: 'Успех', text: 'Регистрация успешно пройдена', mode: 'success'} )
        }
      }
    }

    return {
      name, mail, password, repeatedPassword, selectLocation,
      passwordToggle,
      passwordImage, passwordRef, passwordImage_2, passwordRef_2, selectLocationRef,
      store,
      closeAuthBlock,
      isLogin,
      auth, register,
      nameReg, mailReg, mailRef
    }
  }
}

</script>

<style scoped>

</style>
