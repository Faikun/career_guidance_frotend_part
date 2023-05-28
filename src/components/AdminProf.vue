<template>
  <h2 class="admin__subtitle mt50">Добавление профессий</h2>
  <div class="admin__prof">
    <div class="admin__prof-item">
      <label for="name">Название</label>
      <input type="text" id="name" v-model.trim.lazy="profName" placeholder="Название">
    </div>
    <div class="admin__prof-item">
      <label for="category">Категория</label>
      <select id="category" v-model="profCategory">
        <option value="IT">Information Technology</option>
        <option value="Medicine">Медицина</option>
        <option value="Economy">Экономика</option>
        <option value="Management">Менеджмент</option>
        <option value="Art">Арт</option>
        <option value="Science">Наука</option>
        <option value="Marketing">Маркетинг и реклама</option>
        <option value="Finance">Финансы и бухгалтерия</option>
        <option value="Jour">Журналистика и медиа</option>
        <option value="Law">Юриспруденция</option>
        <option value="Education">Образование</option>
        <option value="Design">Дизайн</option>
        <option value="Trade">Торговля и продажи</option>
        <option value="Logistics">Логистика</option>
      </select>
    </div>
    <div class="admin__prof-item">
      <label for="image">Изображение</label>
      <input placeholder="Ссылка на фотографию" type="text" id="image" v-model.trim.lazy="profImage">
    </div>
    <div class="admin__prof-item">
      <label for="description">Описание</label>
      <textarea id="description" v-model.trim.lazy="profDescription" placeholder="Описание"></textarea>
    </div>
    <div class="admin__prof-item">
      <label for="whatMakes">Чем занимается</label>
      <textarea id="whatMakes" v-model.trim.lazy="profMakes" placeholder="Деятельность"></textarea>
    </div>
    <div class="admin__prof-item">
      <label for="whatShouldKnow">Что должен знать</label>
      <textarea id="whatShouldKnow" v-model.trim.lazy="profKnows" placeholder="Знания"></textarea>
    </div>
    <div class="admin__prof-item">
      <label for="money">Сколько зарабатывает</label>
      <textarea id="money" v-model.trim.lazy="profMoney" placeholder="Заработок"></textarea>
    </div>
    <button type="button" class="btn green admin__btn" @click="addProf">Добавить профессию</button>
  </div><!-- ./admin__prof -->
</template>

<script>
import {ref} from "vue";
import category from "@/store/modules/category";
import {useStore} from "vuex";

export default {
  name: "AdminProf",
  setup() {
    const store = useStore()
    let profName = ref(''),
        profCategory = ref('IT'),
        profImage = ref(''),
        profDescription = ref(''),
        profMakes = ref(''),
        profKnows = ref(''),
        profMoney = ref('');

    const checkLength = (prof) => prof.value !== '' && prof.value.length > 0

    const addProf = function () {
      if(
          checkLength(profName) && checkLength(profCategory) &&
          checkLength(profImage) && checkLength(profDescription) &&
          checkLength(profMakes) && checkLength(profKnows) &&
          checkLength(profMoney))
      {
        const data = {
          category: category.state.category.name[profCategory.value],
          categoryImage: category.state.category.img[profCategory.value],
          image: profImage.value,
          name: profName.value,
          description: profDescription.value,
          whatMakes: profMakes.value,
          whatShouldKnow: profKnows.value,
          money:profMoney.value
        }
        store.commit('setNotificationInfo', { titleValue: 'Успех', text: 'Вы успешно добавили новую профессию', mode: 'success'} );
        profCategory.value = '';
        profImage.value = '';
        profName.value = '';
        profDescription.value = '';
        profMakes.value = '';
        profKnows.value = '';
        profMoney.value = '';
        document.documentElement.scrollTop = 0;
        store.commit('addProf', data);
      }
      else {
        alert('Заполните все поля')
      }
    }
    return {
      profName, profCategory, profImage, profDescription, profMakes, profKnows, profMoney,
      addProf,
    }
  }
}
</script>

<style scoped>

</style>
