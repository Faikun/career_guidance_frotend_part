<template>
<div class="request">
  <h1 class="request__title">Подача заявки на поступление в универ</h1>
  <h2 class="request__university">Универ: {{ uniName }}</h2>

  <form class="request__documents" @submit.prevent="makeARequest">
    <h3 class="request__documents-title">Необходимые документы</h3>
    <div class="request__documents-item">
      <label for="iin">Введите свой ИИН</label>
      <input class="request__documents-iin" type="number" placeholder="ИИН" id="iin" v-model.trim="IIN">
    </div>
    <div class="request__documents-item">
      <label for="application">Заявление о приеме документа</label>
      <input type="file" @change="application" id="application">
    </div>
    <div class="request__documents-item">
      <label for="education">Подлинник документа об образовании</label>
      <input type="file" @change="education" id="education">
    </div>
    <div class="request__documents-item">
      <label for="photo">Фотографии размером 3х4 см</label>
      <input type="file" @change="photo" id="photo">
    </div>
    <div class="request__documents-item">
      <label for="medCertificate">Медицинская справка формы № 075-У</label>
      <input type="file" @change="medCertificate" id="medCertificate">
    </div>
    <div class="request__documents-item">
      <label for="fluorography">Снимок флюрографии</label>
      <input type="file" @change="fluorography" id="fluorography">
    </div>
    <div class="request__documents-item">
      <label for="healthPassport">Паспорт здоровья;</label>
      <input type="file" @change="healthPassport" id="healthPassport">
    </div>
    <div class="request__documents-item">
      <label for="satisfaction">Удостворение личности или свидетельство о рождении</label>
      <input type="file" @change="satisfaction" id="satisfaction">
    </div>
    <button type="submit" class="request__documents-btn btn green">Подать документы</button>
  </form><!-- ./request__documents -->
</div><!-- ./request -->
</template>

<script>
import {reactive, ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  name: "Request",
  props: ['uniName'],
  setup() {
    const store = useStore();
    const router = useRouter();
    const noFiles = reactive({
      application: true,
      education: true,
      photo: true,
      medCertificate: true,
      fluorography: true,
      healthPassport: true,
      satisfaction: true,
    });
    const IIN = ref(''),
        application = (e) => noFiles.application = !e.target.files.length,
        education = (e) => noFiles.education = !e.target.files.length,
        photo = (e) => noFiles.photo = !e.target.files.length,
        medCertificate = (e) => noFiles.medCertificate = !e.target.files.length,
        fluorography = (e) => noFiles.fluorography = !e.target.files.length,
        healthPassport = (e) => noFiles.healthPassport = !e.target.files.length,
        satisfaction = (e) => noFiles.satisfaction = !e.target.files.length;
    const validation = function () {
      if(IIN.value.toString().length !== 12) {
        return false
      }
      if(Object.keys(noFiles).map((key) => noFiles[key]).filter((el) => el === true).length) {
        return false
      }
      return true
    }
    let makeARequest = function () {
      if(validation()) {
        router.push('/tests');
        store.commit('setNotificationInfo', { titleValue: 'Успех', text: 'Ваша заявка успешно отправлена. Пожалуйста, ожидайте', mode: 'success'} );
      }
      else {
        store.commit('setNotificationInfo', { titleValue: 'Упс', text: 'Похоже вы добавили не все файлы или неверно ввели ИИН', mode: 'danger'} );
      }
    }
    return {
      makeARequest,
      IIN, application, education, photo,
      medCertificate, fluorography, healthPassport, satisfaction
    }
  }
}
</script>

<style scoped>

</style>
