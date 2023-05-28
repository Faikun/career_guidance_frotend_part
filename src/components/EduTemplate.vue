<template>
  <div class="edu__search">
    <div class="edu__search-intro">
      <input type="text" placeholder="Введите вуз" v-model.lazy="edu">
      <button class="button" type="button" @click="searchEdu(true)">Поиск</button>
    </div><!-- ./edu__search__intro -->
    <div class="edu__search-additional">
      <select class="edu__search-block" v-model="status">
        <option value="Статус: Любой">Статус: Любой</option>
        <option value="государственный">Государственный</option>
        <option value="частный">Частный</option>
      </select><!-- ./edu__search-block -->
      <select class="edu__search-block" v-model="area">
        <option value="Область обучения">Область обучения</option>
        <option value="Pedagogy">Педагогический</option>
        <option value="Technology">Технический</option>
        <option value="Medicine">Медицина</option>
        <option value="Engineering">Инженерия</option>
        <option value="Business">Бизнес</option>
        <option value="Natural sciences">Естествознание</option>
        <option value="Economics">Экономика</option>
        <option value="Agriculture">Сельское хозяйство</option>
        <option value="Law">Закон</option>
        <option value="Music">Музыка</option>
        <option value="Arts">Искусство</option>
        <option value="Education">Образование</option>
      </select><!-- ./edu__search-block -->
      <div class="edu__search-subjects" @click="dropdownActive = !dropdownActive">
        <span>Предметы ЕНТ</span>
        <img src="../images/png/arrow_toButton.png" alt="arrow">
        <div class="edu__dropdown" :class="dropdownActive ? 'active' : ''" @click.stop>
          <div class="edu__dropdown-item" v-for="subject in sub">
            <label :for="subject.id">{{ subject.name }}</label>
            <input type="checkbox" :id="subject.id" v-model="checkedSubjects[subject.name]">
          </div>
        </div><!-- ./edu__dropdown -->
      </div><!-- ./edu__search-subjects -->
      <div class="edu__checkbox">
        <label for="mildep">военная кафедра</label>
        <input type="checkbox" id="mildep" v-model="military">
      </div><!--./edu__checkbox -->
      <div class="edu__checkbox">
        <label for="hostel">общежитие</label>
        <input type="checkbox" id="hostel" v-model="hotel">
      </div><!--./edu__checkbox -->
    </div><!-- ./edu__search-additional -->
  </div><!-- ./edu__search -->

  <section class="edu__results" v-if="searchDone">
    <ul class="edu__results-list">
      <li class="edu__results-top">
        <span>Найдено: {{ searchEdu().length }}</span>
        <span>Проходной балл</span>
        <span>Бюджетных мест</span>
        <span>Внебюджетных мест</span>
      </li>
      <li class="edu__results-block" v-for="edu in searchEdu()">
        <div class="edu__results-data first">
          <router-link :to="'/university/' + edu.name" href="#" class="edu__results-link">
            <img class="edu__results-logo" :src="getImgUrl(edu.image)" alt="logo">
            <h2>{{ edu.name }}</h2>
          </router-link>
          <div class="edu__results-additional">
            <span v-if="edu.hasHotel">Общежитие</span>
            <span v-if="edu.hasMilitaryDepartment">Военная кафедра</span>
          </div>
        </div>
        <div class="edu__results-data">
          {{ edu.passScores }}
        </div>
        <div class="edu__results-data">
          {{ edu.budget }}
        </div>
        <div class="edu__results-data">
          {{ edu.offBudget }}
        </div>
      </li>
    </ul>
  </section><!-- ./edu__results -->

</template>

<script>
import {useStore} from "vuex";
import {computed, onMounted, reactive, ref} from "vue";
import axios from "axios";

export default {
  name: "EduTemplate",
  props: ['city'],
  async setup(props) {
    const store = useStore()

    onMounted(() => searchEdu());

    await store.dispatch('setAllUniversities')
    let universities = store.getters.getUniversity;

    let dropdownActive = ref(false);
    let searchDone = ref(false);

    let edu = ref('');
    let status = ref('Статус: Любой');
    let area = ref('Область обучения');

    let sub = await axios.get('subjects').then(data => data.data)

    let checkedSubjects = reactive({});
    sub.forEach(el => checkedSubjects[el.name] = false)

    let hotel = ref(false),
        military = ref(false);

    let findCity = computed(() => universities.filter((el) => el.location === props.city));
    let findSub = computed(() => Object.entries(checkedSubjects));

    const getImgUrl = function (img) {
      if(img.includes('http'))
        return img
      return require('@/images/' + img);
    }


    let searchEdu = function () {
      let city = findCity.value;

      if(edu.value.length > 0)
        city = city.filter((el) => el.name.toUpperCase().match(edu.value.toUpperCase()))

      if(status.value !== 'Статус: Любой')
        city = city.filter((el) => el.status === status.value)

      if(area.value !== 'Область обучения')
        city = city.filter((el) => el.tags.some(el => el.name.includes(area.value)))

      if(military.value)
        city = city.filter((el) => el.hasMilitaryDepartment === true)

      if(hotel.value)
        city = city.filter((el) => el.hasHotel === true)

      let checkedValue = findSub.value.filter(el => el[1] === true).map(el => el[0])
      if(checkedValue.length > 0) {
        for(let i = 0; i < checkedValue.length; i++) {
          city = city.filter((el) => el.subjects.some(subject => subject.name.includes(checkedValue[i])))
        }
      }

      searchDone.value = true;
      return city
    }

    return {
      dropdownActive,
      searchEdu, edu,
      searchDone,
      status, area,
      hotel, military,
      getImgUrl,
      sub, checkedSubjects
    }
  }
}
</script>

<style scoped>

</style>
