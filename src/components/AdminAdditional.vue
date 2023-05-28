<template>
  <div class="admin__table-wrapper">
    <div class="admin__table-block">
      <h2 class="admin__subtitle">Добавление тегов</h2>
      <table class="table admin__table-additional">
        <tr>
          <th>Название</th>
          <th>Удалить/Добавить</th>
        </tr>
        <tr>
          <td>
            <input class="admin__table-input newUser" type="text" placeholder="Тег"  v-model.trim.lazy="tag">
          </td>
          <td>
            <img class="admin__table-edit" src="@/images/png/save.png" alt="save" @click="sendTags">
          </td>
        </tr>
        <tr v-for="tag in tags.slice().reverse()" :id="tag.id">
          <td>{{ tag.name }}</td>
          <td>
            <img class="admin__table-edit" src="@/images/png/remove.png" alt="remove" @click="removeTag(tag.id)">
          </td>
        </tr>
      </table>
    </div>
    <div class="admin__table-block">
      <h2 class="admin__subtitle mt50">Добавление предметов</h2>
      <table class="table admin__table-additional">
        <tr>
          <th>Название</th>
          <th>Удалить/Добавить</th>
        </tr>
        <tr>
          <td>
            <input class="admin__table-input newUser" type="text" placeholder="Предмет" v-model.trim.lazy="subject">
          </td>
          <td>
            <img class="admin__table-edit" src="@/images/png/save.png" alt="save" @click="sendSubjects">
          </td>
        </tr>
        <tr v-for="subject in subjects.slice().reverse()" :id="subject.id">
          <td>{{ subject.name }}</td>
          <td>
            <img class="admin__table-edit" src="@/images/png/remove.png" alt="remove" @click="removeSubject(subject.id)">
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
import axios from "axios";

export default {
  name: "AdminAdditional",
  setup() {
    onMounted(async () => {
      await store.dispatch('setAllTags')
      await store.dispatch('setAllSubjects')
    })

    let tag = ref(''),
        subject = ref('');

    const store = useStore()
    const tags = computed(() => store.getters.getTags)
    const subjects = computed(() => store.getters.getSubjects)


    const sendTags = async function () {
      if (tag.value.length > 3) {
        await axios.post('tags', {
          name: tag.value
        }).then(async res => {
          store.commit('setNotificationInfo', {titleValue: 'Успех', text: 'Тег добавлен успешно!', mode: 'success'});
          tag.value = ''
          await store.dispatch('setAllTags')
        }).catch(error => console.log(error))
        document.documentElement.scrollTop = 0;
      }
      else {
        store.commit('setNotificationInfo', {titleValue: 'Упс', text: 'Название тега должно быть больше трех символов в длину', mode: 'danger'});
      }
    }

    const sendSubjects = async function () {
      if(subject.value.length > 3) {
        await axios.post('subjects', {
          name: subject.value
        }).then(async res => {
          store.commit('setNotificationInfo', {
              titleValue: 'Успех',
              text: 'Предмет добавлен успешно!',
              mode: 'success'
            })
          await store.dispatch('setAllSubjects')
          subject.value = ''
        }).catch(error => console.log(error))
        document.documentElement.scrollTop = 0;
      }
      else {
        store.commit('setNotificationInfo', {titleValue: 'Упс', text: 'Название предмета должно быть больше трех символов в длину', mode: 'danger'});
      }
    }

    const removeSubject = async function (id) {
      await axios.delete('subjects/' + id).then(async res => {
        store.commit('setNotificationInfo', {titleValue: 'Успех', text: 'Предмет успешно удален!', mode: 'success'});
        await store.dispatch('setAllSubjects')
      }).catch(error => console.log(error))
      document.documentElement.scrollTop = 0;
    }

    const removeTag = async function (id) {
      await axios.delete('tags/' + id).then(async res => {
        store.commit('setNotificationInfo', {titleValue: 'Успех', text: 'Тег успешно удален!', mode: 'success'});
        await store.dispatch('setAllTags')
      }).catch(error => console.log(error))
      document.documentElement.scrollTop = 0;
    }
    return {
      tags, subjects,
      sendTags,sendSubjects,
      removeSubject, removeTag,
      tag, subject
    }
  }
}
</script>

<style scoped>

</style>
