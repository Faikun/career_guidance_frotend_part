<template>
<div class="comments" v-if="commentsArray.length > 0">
  <h2 class="comments__title">Поделитесь со своми впечатлениями ({{ commentsArray.length }})</h2>
  <div class="comments__leaveAComment">
    <span class="comments__stars">
      <input type="radio" name="rating" value="5" id="5" @click="starSave($event.target.value)"><label for="5">☆</label>
      <input type="radio" name="rating" value="4" id="4" @click="starSave($event.target.value)"><label for="4">☆</label>
      <input type="radio" name="rating" value="3" id="3" @click="starSave($event.target.value)"><label for="3">☆</label>
      <input type="radio" name="rating" value="2" id="2" @click="starSave($event.target.value)"><label for="2">☆</label>
      <input type="radio" name="rating" value="1" id="1" @click="starSave($event.target.value)"><label for="1">☆</label>
    </span>
    <div class="comments__input">
      <input
          class="comments__input-input"
          type="text"
          placeholder="Напишите комментарий"
          v-on:keyup.enter="leaveAComment"
          v-model.trim="inputComment"
      >
      <img
          class="comments__input-img"
          src="../images/png/ArrowToRightBlue.png"
          alt="arrow"
          @click="leaveAComment"
      >
    </div>
  </div><!-- ./comments__leaveAComment -->
  <div class="comments__list">
    <div class="comments__item" v-for="(comment, idx) in Object.values(commentsArray)" :key="comment">
      <div class="comments__user">
        <div class="comments__user-name">{{ comment.user }}</div>
        <div class="comments__user-date">{{ comment.date }}</div>
        <div class="comments__user-stars">
          <img src="../images/png/Star-black.png" alt="star" v-for="item in parseInt(comment.stars)">
        </div>
      </div><!-- ./comments__user -->
      <div class="comments__item-text">{{ comment.comment }}</div>
      <div class="comments__item-interaction">
        <div class="comments__item-response">
          <div class="comments__item-likes">
            <img
                @click="putLikeDis(comment, comment.usersIdLikes, comment.usersIdDislikes, 'liked', 'disliked', idx)"
                class="comments__item-interactionImage"
                :class="isActive(comment.usersIdLikes) ? 'active' : ''"
                src="../images/png/mdi_like.png"
                alt="likes">
            <span>{{ comment.usersIdLikes.count }}</span>
          </div>
          <div class="comments__item-dislikes">
            <img
                @click="putLikeDis(comment, comment.usersIdDislikes, comment.usersIdLikes, 'disliked', 'liked', idx)"
                class="comments__item-interactionImage"
                :class="isActive(comment.usersIdDislikes) ? 'active' : ''"
                src="../images/png/mdi_dislike.png"
                alt="dislike">
            <span>{{ comment.usersIdDislikes.count }}</span>
          </div><!-- ./comments__item-dislikes -->
        </div><!-- ./comments__item-response -->
      </div><!-- ./comments__item-interaction -->
    </div><!-- ./comments__item -->
  </div><!-- ./comments__list -->
</div><!-- ./comments -->
  <div class="spin-wrapper" v-else>
    <div class="spinner"></div>
  </div>
</template>

<script>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "Comments",
  setup () {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('initialCommentsList')
    })

    const isActive = function (state) {
      console.log(state)
      if(state.users && store.getters.getUserId) {
        if(state.users.includes(parseInt(store.getters.getUserId))) {
          return true
        }
        else {
          return false
        }
      }
      else {
        return false
      }
    }

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = dd + '-' + mm + '-' + yyyy;

    let starsCount = ref(0);
    let inputComment = ref('');

    let starSave = function (star) {
      starsCount.value = star;
    }

    const saveData = async function (comment, main, mainInter, idx, oppositeInter) {
      let bodyResult = comment

      if(main === 'liked') {
        bodyResult['usersIdLikes'] = {
          count: mainInter.count,
          users: mainInter.users
        }

        if (oppositeInter.users != undefined) {
          bodyResult['usersIdDislikes'] = {
            count: oppositeInter.count,
            users: oppositeInter.users
          }
        }
      }
      else if(main === 'disliked') {
        bodyResult['usersIdDislikes'] = {
          count: mainInter.count,
          users: mainInter.users
        }

        if (oppositeInter.users != undefined) {
          bodyResult['usersIdLikes'] = {
            count: oppositeInter.count,
            users: oppositeInter.users
          }
        }
      }
      await fetch('https://proffesion-choose-default-rtdb.firebaseio.com/comments/' + commentsKeys.value[idx] + '.json', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyResult)
      })
    }

    let putLikeDis = async function (comment, mainInter, oppositeInter, main, reverse, idx) {
      let userId = parseInt(store.getters.getUserId)
      console.log(comment)
      if (store.getters.getAuth) {
        if (mainInter.users?.indexOf(userId) === -1 && oppositeInter.users?.indexOf(userId) === -1) {
          mainInter.count += 1;
          mainInter.users.push(userId);

          await saveData(comment, main, mainInter, idx, oppositeInter)
        }
        else if (mainInter.users === undefined) {
          if(oppositeInter.users !== undefined) {
            oppositeInter.users.splice(oppositeInter.users.findIndex(id => id === userId), 1);
            if (oppositeInter.count > 0) {
              oppositeInter.count -= 1
            }
            else {
              oppositeInter.count = 0
            }
          }
          mainInter.users = [userId]
          mainInter.count += 1
          console.log('undefined mainInter.users', comment)

          await saveData(comment, main, mainInter, idx, oppositeInter)
        }
        else if (mainInter.users?.indexOf(userId) === -1 && oppositeInter.users?.indexOf(userId) !== -1) {
          mainInter.count += 1
          mainInter.users.push(userId);
          if (oppositeInter.users !== undefined) {
            oppositeInter.users.splice(oppositeInter.users.findIndex(id => id === userId), 1);
            if (oppositeInter.count > 0) {
              oppositeInter.count -= 1
            }
            else {
              oppositeInter.count = 0
            }
          }

          await saveData(comment, main, mainInter, idx, oppositeInter)
        }
        else if (mainInter.users?.indexOf(userId) !== -1 && (oppositeInter.users === undefined || oppositeInter.users?.indexOf(userId) === -1)) {
          mainInter.users.splice(mainInter.users.findIndex(id => id === userId), 1)
          if (mainInter.count > 0) {
            mainInter.count -= 1
          }
          else {
            mainInter.count = 0
          }
          await saveData(comment, main, mainInter, idx, oppositeInter)
        }
      }
      else {
        store.commit('toggleOpenedAuth');
        document.body.style.overflow = "hidden";
        document.documentElement.scrollTop = 0;
      }
    };

    let leaveAComment = async function () {
      if(store.getters.getAuth) {
        if(inputComment.value !== '' && starsCount.value !== 0) {
          let userName = store.getters.getUsers
              .filter((el) => el.id === parseInt(store.getters.getUserId))
              .map(map => map.username).toString();
          const response = await fetch('https://proffesion-choose-default-rtdb.firebaseio.com/comments.json', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              user: userName,
              date: formattedToday,
              stars: starsCount.value,
              comment: inputComment.value,
              usersIdLikes: {'count': 0, users: []},
              usersIdDislikes: {'count': 0, users: []},
              openedInput: false,
              inputValue: '',
              answered: []
            })
          }).then(res => {
            if (res.ok) {
              console.log('Успешно')
            }
          })
          await store.dispatch('initialCommentsList')
          inputComment.value = ''
        }
        else {
          alert('Пожалуйста, напишите комментарий и оцените тест по 5-и бальной шкале')
        }
      }
      else {
        store.commit('toggleOpenedAuth');
        document.body.style.overflow = "hidden";
        document.documentElement.scrollTop = 0;
      }
    }

    let commentsArray = computed(() => Object.values(store.getters.getComments));
    let commentsKeys = computed(() => Object.keys(store.getters.getComments));

    return {
      commentsArray,
      putLikeDis,
      starSave,
      leaveAComment,
      inputComment,
      store,
      isActive
    }
  }
}
</script>
