<template>
<div class="account">
  <h1 class="account__title">Профиль</h1>
  <div class="account__wrapper">
    <div class="account__item">
      <span class="account__item-text">Имя</span>
      <span class="account__item-input">
        <input disabled type="text" v-model.trim="name" ref="nameRef">
      </span>
    </div><!-- ./account__item -->
    <div class="account__item">
      <span class="account__item-text">Почта</span>
      <span class="account__item-input">
        <input :disabled="disabled" type="text" v-model.trim="mail" ref="mailRef">
      </span>
    </div><!-- ./account__item -->
    <div class="account__item">
      <span class="account__item-text">Пароль</span>
      <span class="account__item-input">
        <input :disabled="disabled" type="password" v-model.trim="password" ref="passwordRef">
      </span>
    </div><!-- ./account__item -->
    <div class="account__item">
      <span class="account__item-text">Город</span>
      <span class="account__item-input">
        <select v-model="location" :disabled="disabled">
          <option :selected="location === 'Алматы'" value="Алматы">Алматы</option>
          <option :selected="location === 'Нур-Султан'" value="Нур-Султан">Нур-Султан</option>
          <option :selected="location === 'Шымкент'" value="Шымкент">Шымкент</option>
          <option :selected="location === 'Туркестан'" value="Туркестан">Туркестан</option>
        </select>
      </span>
    </div><!-- ./account__item -->
  </div><!--./account__wrapper -->
  <button v-if="disabled" type="button" class="account__button btn white" @click="changeData">Изменить данные</button>
  <div v-else>
    <button type="button" class="account__button btn green" @click="saveChanges">Сохранить изменения</button>
    <a href="#" @click="cancelChange">Отмена</a>
  </div>
  <div class="account__back">
    <a href="#" @click="$router.go(-1)">Назад</a>
  </div>
</div><!-- ./account -->
</template>

<script>
import {onMounted, ref, watch} from "vue";
import {useStore} from "vuex";
import store from "@/store";
import router from "@/router";
import axios from "axios";

export default {
  name: "Account",
  methods: {
    router() {
      return router
    }
  },
  setup() {
    onMounted(() => {
      name.value = users.filter((el) => el.id === parseInt(userId))[0].username
      mail.value = users.filter((el) => el.id === parseInt(userId))[0].email
      location.value = users.filter((el) => el.id === parseInt(userId))[0].location
      status.value = users.filter((el) => el.id === parseInt(userId))[0].role
    })

    let store = useStore(),
        name = ref(''),
        mail = ref(''),
        password = ref(''),
        location = ref(''),
        status = ref(''),
        users = store.getters.getUsers,
        userId = store.getters.getUserId,
        disabled = ref(true),
        isSmthChanged = ref(false);


    let namePattern = /^[a-zA-Z0-9_-]{4,16}$/;
    let passwordPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    let mailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    const nameRef = ref(null),
          passwordRef = ref(null),
          mailRef = ref(null);

    let validation = function () {
      function nameFunction() {
        if (!namePattern.test(name.value)) {
          nameRef.value.style.outline = '1px solid red';
          return false
        } else {
          nameRef.value.style.outline = '1px solid black';
          return true
        }
      }

      function mailFunction() {
        if (!mailPattern.test(mail.value)) {
          mailRef.value.style.outline = '1px solid red';
          return false
        } else {
          mailRef.value.style.outline = '1px solid black';
          return true
        }
      }

      function passwordFunction() {
        if (!passwordPattern.test(password.value)) {
          passwordRef.value.style.outline = '1px solid red';
          return false
        } else {
          passwordRef.value.style.outline = '1px solid black';
          return true
        }
      }

      if (nameFunction() && mailFunction() && passwordFunction()) {
        return true
      } else {
        return false
      }
    }

    let changeData = function () {
      this.disabled = false;
      passwordRef.value.type = 'text';
      password.value = ''

      watch(name, (count, prevCount) => isSmthChanged.value = true);
      watch(mail, (count, prevCount) => isSmthChanged.value = true);
      watch(password, (count, prevCount) => isSmthChanged.value = true);
      watch(location, (count, prevCount) => isSmthChanged.value = true);
    }

    let cancelChange = function () {
      this.disabled = true
      passwordRef.value.type = 'password';
      password.value = '*****************'
    }

    let changeUserData = function () {
      const {data} = axios.put('user/' + userId, {
        username: name.value,
        email: mail.value,
        password: password.value,
        location: location.value
      })

      disabled.value = true;
      store.commit('setNotificationInfo', { titleValue: 'Успех', text: 'Данные успешно изменены', mode: 'success'} )
      isSmthChanged.value = false;
      passwordRef.value.type = 'password';
    }

    let saveChanges = function () {
      if(isSmthChanged.value) {
        if(validation()) {
          changeUserData();
        }
      }
      else {
        store.commit('setNotificationInfo', { titleValue: 'Упс', text: 'Похоже вы ничего не изменили', mode: 'danger'} )
      }
    }

    return {
      name, mail, password, location,
      nameRef, passwordRef, mailRef,
      saveChanges, changeData, cancelChange,
      disabled
    }
  }
}
</script>

<style scoped>

</style>
