<template>
  <swiper
    :modules="modules"
    :loop="true"
    :pagination="{ clickable: true }"
    :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
    :breakpoints="{
        320: {
         slidesPerView: 1,
         spaceBetween: 10
      },
        480: {
         slidesPerView: 2,
         spaceBetween: 15
      },
        640: {
         slidesPerView: 3,
         spaceBetween: 20
        },
        1000: {
         slidesPerView: 4,
         spaceBetween: 25
        }
      }"
  >
    <swiper-slide v-for="profession in prof" :key="profession" @click="goToProf(profession.name)">
      <div class="result_slide">
        <div class="result__img">
          <img :src="getImgUrl(profession.image)" alt="food">
        </div>
        <span class="result__name">{{ profession.name }}</span>
        <span class="result__description">{{ truncateText(profession.description, 125) }}</span>
        <span class="result__detail">Подробнее</span>
      </div>
    </swiper-slide>

    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

  </swiper>
</template>

<script>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Autoplay, Pagination, A11y} from 'swiper'
import {Swiper, SwiperSlide } from 'swiper/vue'
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

export default {
  name: 'SliderSwiper',
  props: ['array', 'res'],
  setup (props) {
    onMounted(async () => store.dispatch('initialProfessionsList'))
    const router = useRouter()
    const store = useStore()

    let prof = computed(() => store.getters.getProfessionsArray.filter((el) => props.array.includes(el.name.toLowerCase())));

    const goToProf = function (name) {
      const prof = store.getters.getProfessionsArray.filter((el) => el.name.toLowerCase() === name.toLowerCase())[0];
      router.push({ name: 'Profession', params: { name: prof.category, prof: prof.name }})
    }

    const getImgUrl = function (img) {
      if(img.includes('http'))
        return img

      return require('@/images/Prof/Certain/' + img);
    }

    const truncateText = function (text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '...';
      } else {
        return text;
      }
    }

    return {
      modules: [Autoplay, Pagination, A11y],
      goToProf,
      prof,
      getImgUrl,
      truncateText
    }
  },
  components: {
    Swiper, SwiperSlide
  }
}
</script>

<style>
  .swiper, .swiper-container {
    min-height: 500px;
  }
</style>
