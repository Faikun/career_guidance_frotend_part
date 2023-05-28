<template>
  <h2 class="admin__subtitle">Управление пользователями</h2>
  <table class="table admin__table">
    <tr>
      <th>Логин</th>
      <th>Почта</th>
      <th>Пароль</th>
      <th>Статус</th>
      <th>Город</th>
      <th>Изменить</th>
      <th>Удалить</th>
    </tr>
    <tr v-for="(user, index) in users.slice().reverse()" :key="index">
      <td>
        <input
            :disabled="!inputDisabled[index]"
            :value="user.username"
            class="admin__table-input"
            :class="inputDisabled[index] ? 'active' : ''"
            ref="userName"
        >
      </td>
      <td>
        <input
            :disabled="!inputDisabled[index]"
            :value="user.email"
            class="admin__table-input"
            :class="inputDisabled[index] ? 'active' : ''"
            ref="userMail"
        >
      </td>
      <td>
        <input
            :disabled="!inputDisabled[index]"
            value="********"
            class="admin__table-input"
            :class="inputDisabled[index] ? 'active' : ''"
            ref="userPassword"
        >
      </td>
      <td>
        <select
            :disabled="!inputDisabled[index]"
            class="admin__table-select"
            ref="userStatus"
            :class="inputDisabled[index] ? 'active' : ''"
        >
          <option :selected="user.role === 'ROLE_USER'" value="ROLE_USER">user</option>
          <option :selected="user.role === 'ROLE_ADMIN'" value="ROLE_ADMIN">admin</option>
        </select>
      </td>
      <td>
        <select
            :disabled="!inputDisabled[index]"
            class="admin__table-input"
            ref="userLocation"
            :class="inputDisabled[index] ? 'active' : ''"
        >
          <option :selected="user.location === 'Алматы'" value="Алматы">Алматы</option>
          <option :selected="user.location === 'Нур-Султан'" value="Нур-Султан">Нур-Султан</option>
          <option :selected="user.location === 'Шымкент'" value="Шымкент">Шымкент</option>
          <option :selected="user.location === 'Туркестан'" value="Туркестан">Туркестан</option>
        </select>
      </td>
      <td>
        <img
            v-if="!inputDisabled[index]"
            class="admin__table-edit"
            src="@/images/png/edit.png"
            alt="edit"
            @click="editClick(index)"
        >
        <img
            v-else
            class="admin__table-edit"
            src="@/images/png/save.png"
            alt="edit"
            @click="saveData(user, index)">
      </td>
      <td>
        <img
            v-if="user.role === 'ROLE_USER'"
            class="admin__table-edit"
            src="@/images/png/remove.png"
            alt="edit"
            @click="remove(user)"
        >
      </td>
    </tr>
    <tr>
      <td>
        <input class="admin__table-input newUser" placeholder="Имя" type="text" v-model="newUser.username">
      </td>
      <td>
        <input class="admin__table-input newUser" placeholder="Почта" type="text" v-model="newUser.email">
      </td>
      <td>
        <input class="admin__table-input newUser" placeholder="Пароль" type="text" v-model="newUser.password">
      </td>
      <td>
        <select v-model="newUser.status" class="admin__table-select newUser">
          <option value="ROLE_USER">user</option>
          <option value="ROLE_ADMIN">admin</option>
        </select>
      </td>
      <td>
        <select v-model="newUser.location" class="admin__table-select newUser">
          <option value="Almaty">Алматы</option>
          <option value="Нур-Султан">Нур-Султан</option>
          <option value="Шымкент">Шымкент</option>
          <option value="Туркестан">Туркестан</option>
        </select>
      </td>
      <td colspan="2">
        <button type="button" class="btn green small" @click="create">Создать</button>
      </td>
    </tr>
  </table><!-- ./admin__wrapper -->
</template>

<script>
import {computed, onMounted, reactive, ref, watch} from "vue";
import {useStore} from "vuex";
import axios from "axios";

export default {
  name: "AdminUser",
  setup() {
    onMounted(async () => await store.dispatch("setAllUsers"))
    let store = useStore();
    let users = computed(() => store.getters.getUsers);

    let inputDisabled = reactive([]);
    for (let i = 0; i < users.value.length; i++) {
      inputDisabled.push(false)
    }

    let newUser = reactive({
      username: '',
      email: '',
      password: '',
      status: 'ROLE_USER',
      location: 'Almaty'
    })

    let newUsers = document.getElementsByClassName('newUser');

    const userName = ref(''),
        userMail = ref(''),
        userPassword = ref(''),
        userStatus = ref(''),
        userLocation = ref('');

    const editClick = function (index) {
      inputDisabled[index] = !inputDisabled[index]
      userPassword.value[index].value = ''
    }

    let saveData = async function (user, index) {
      let data = {
        username: userName.value[index].value,
        email: userMail.value[index].value,
        role: userStatus.value[index].value,
        location: userLocation.value[index].value
      }
      if(userPassword.value[index].value) {
        data["password"] = userPassword.value[index].value
      }
      axios.put('user/' + user.id, data)
          .then(res => {
            try {
              if(res.status === 200) {
                store.commit('setNotificationInfo', { titleValue: 'Успех', text: `Данные пользователя ${userName.value[index].value} успешно обновлены!`, mode: 'success'});
                store.dispatch('setAllUsers')
              }
            }
            catch (e) {
              console.log(e)
            }

            try {
              const data = res.response.data
              const error = data.error;

              if(error) {
                store.commit('setNotificationInfo', { titleValue: 'Упс', text: error, mode: 'danger'} );
              }
            }
            catch (e) {
              console.log(e)
            }

          })
          .catch(el => console.log(el.message))
      userPassword.value[index].value = '*********'
      inputDisabled[index] = false;
    }

    let remove = function (user) {
      let id = users.value.indexOf(user);
      axios.delete('user/' + user.id).then(e => {
        if(e.status === 200) {
          store.commit('removeUser', id);
          store.dispatch('setAllUsers')
          store.commit('setNotificationInfo', { titleValue: 'Успех', text: `Вы успешно удалили пользователя ${user.username}`, mode: 'success'} );
        }
        else {
          store.commit('setNotificationInfo', { titleValue: 'Упс', text: `Что-то пошло не так`, mode: 'danger'} );
        }
      })
    }

    watch(users, (newUser, prevUser) => {
      console.log(store.getters.getUsers)
    });

    let create = function () {
      axios.post('user', {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        role: newUser.status,
        location: newUser.location
      }).then(e => {
        if (e.status === 200) {
          newUser.username = '';
          newUser.email = '';
          newUser.password = '';
          newUser.role = 'ROLE_USER';
          for (let i = 0; i < newUsers.length; i++) {
            newUsers[i].style.border = '1px solid black'
          }
          store.commit('setNotificationInfo', {
            titleValue: 'Успех',
            text: 'Вы успешно добавили нового пользователя',
            mode: 'success'
          });
          store.dispatch('setAllUsers')
        }
        else {
          const data = e.response.data
          const error = data.error;

          if(error) {
            store.commit('setNotificationInfo', { titleValue: 'Упс', text: error, mode: 'danger'} );
          }
        }
        document.documentElement.scrollTop = 0;
      })
    }

    return {
      users,
      inputDisabled,
      saveData, remove, create,
      userName, userMail, userPassword, userStatus, userLocation,
      newUser,
      editClick
    }
  }
}
</script>

<style scoped>

</style>
