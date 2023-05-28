<template>
  <h2 class="admin__subtitle mt50">Добавление универов</h2>
  <form class="admin__universities" @submit.prevent="sendUniversity">
    <div class="admin__universities-item">
      <label for="name">Название</label>
      <input type="text" id="name" v-model.trim.lazy="formUniversity['name']" placeholder="Название">
    </div>
    <div class="admin__universities-item">
      <label for="image">Картинка</label>
      <input type="text" id="image" placeholder="Ссылка на фотографию" v-model.trim.lazy="formUniversity['image']">
    </div>
    <div class="admin__universities-item">
      <label for="description">Описание</label>
      <input type="text" id="description" placeholder="Описание" v-model.trim.lazy="formUniversity['description']">
    </div>
    <div class="admin__universities-item">
      <label for="benefits">Преимущества</label>
      <input type="text" id="benefits" placeholder="Преимущества" v-model.trim.lazy="formUniversity['benefits']">
    </div>
    <div class="admin__universities-item">
      <label for="location">Город</label>
      <input type="text" id="location" placeholder="Город" v-model.trim.lazy="formUniversity['location']">
    </div>
    <div class="admin__universities-item">
      <label for="passScores">Проходные баллы</label>
      <input type="number" id="passScores" placeholder="Проходные баллы" v-model.trim.lazy="formUniversity['passScores']">
    </div>
    <div class="admin__universities-item">
      <label for="website">Сайт универа</label>
      <input type="text" id="website" placeholder="Сайт" v-model.trim.lazy="formUniversity['link']">
    </div>
    <div class="admin__universities-item">
      <label for="tags">Теги</label>
      <select class="multiple" id="tags" v-model.trim.lazy="formUniversity['tags']" multiple>
        <option :value="tag" v-for="tag in tags" :key="tag.id">{{tag.name}}</option>
      </select>
    </div>
    <div class="admin__universities-item">
      <label for="subjects">Предметы</label>
      <select class="multiple" id="subjects" v-model.trim.lazy="formUniversity['subjects']" multiple>
        <option :value="subject" v-for="subject in subjects" :key="subject.id">{{subject.name}}</option>
      </select>
    </div>
    <div class="admin__universities-item">
      <label for="status">Статус</label>
      <select id="status" v-model.trim.lazy="formUniversity['status']">
        <option value="государственный">Государственный</option>
        <option value="частный" >Частный</option>
      </select>
    </div>
    <div class="admin__universities-item">
      <label for="budget">Бюджетных мест</label>
      <input type="number" id="budget" placeholder="Бюджетных мест" v-model.trim.lazy="formUniversity['budget']">
    </div>
    <div class="admin__universities-item">
      <label for="offBudget">Внебюджетных мест</label>
      <input type="number" id="offBudget" placeholder="Внебюджетных мест" v-model.trim.lazy="formUniversity['offBudget']">
    </div>
    <div class="admin__universities-item">
      <label for="rating">Рейтинг</label>
      <input type="number" id="rating" min="1" max="10" placeholder="1-10" v-model.trim.lazy="formUniversity['rating']">
    </div>
    <div class="admin__universities-item">
      <label for="hasHotel">Общежитие</label>
      <input type="checkbox" id="hasHotel" placeholder="Общежитие" v-model.trim.lazy="formUniversity['hasHotel']">
    </div>
    <div class="admin__universities-item">
      <label for="hasMilitaryDepartment">Военная кафедра</label>
      <input type="checkbox" placeholder="Военная кафедра" id="hasMilitaryDepartment" v-model.trim.lazy="formUniversity['hasMilitaryDepartment']">
    </div>
    <button type="submit" class="btn green admin__btn">Отправить</button>
  </form><!-- ./admin__universities -->
</template>

<script>
import {computed, onMounted} from "vue";
import {useStore} from "vuex";
import axios from "axios";

export default {
  name: "AdminUniversity",
  setup() {
    onMounted(async () => {
      await store.dispatch('setAllTags')
      await store.dispatch('setAllSubjects')
    })

    const store= useStore()
    let formUniversity = {
      hasHotel: false,
      hasMilitaryDepartment: false,
      status: 'государственный'
    }

    const tags = computed(() => store.getters.getTags)
    const subjects = computed(() => store.getters.getSubjects)

    const sendUniversity = async function() {
      const response = await axios.post('universities', {
        name: formUniversity.name,
        tags: formUniversity.tags.map(item => ({id: item.id, name: item.name})),
        subjects: formUniversity.subjects.map(item => ({id: item.id, name: item.name})),
        status: formUniversity.status,
        image: formUniversity.image,
        benefits: formUniversity.benefits,
        location: formUniversity.location,
        passScores: formUniversity.passScores,
        budget: formUniversity.budget,
        offBudget: formUniversity.offBudget,
        hasHotel: formUniversity.hasHotel,
        hasMilitaryDepartment: formUniversity.hasMilitaryDepartment,
        description: formUniversity.description,
        rating: formUniversity.rating,
        link: formUniversity.link,
      }).then(res => {

        try {
          if(res.status === 200) {
            store.commit('setNotificationInfo', { titleValue: 'Успех', text: 'Университет добавлен успешно!', mode: 'success'} );
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

      }).catch(error => console.log(error))
      document.documentElement.scrollTop = 0;
    }

    return {
      formUniversity,
      tags, subjects,
      sendUniversity
    }
  }
}
</script>

<style scoped>

</style>
