<template>
<div class="admin">
  <h1 class="admin__title">Админская часть</h1>
  <div id="mySidenav" class="sidenav">
    <router-link :to="{name: 'admin_user'}" exact id="users">Пользователи</router-link>
    <router-link :to="{name: 'admin_prof'}" id="prof" exact>Профессии</router-link>
    <router-link :to="{name: 'admin_university'}" id="universities" exact>Универы</router-link>
    <router-link :to="{name: 'admin_additional'}" id="contact" exact>Дополнительно</router-link>
  </div>

  <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
  </router-view>

</div><!-- ./admin -->
</template>

<script>

export default {
  name: "Admin"
}
</script>

<style scoped lang="scss">
  #mySidenav {
    position: fixed;
    a {
      position: absolute;
      left: -300px;
      transition: 0.3s;
      display: block;
      padding: 15px;
      width: 200px;
      text-decoration: none;
      font-size: 20px;
      color: white;
      border-radius: 0 5px 5px 0;

      &:hover {
        left: -200px;
      }

      @media (max-width: 1200px) {
        width: 150px;
        font-size: 18px;
        left: -190px;
      }

      @media (max-width: 750px) {
        width: 100px;
        font-size: 12px;
        left: -80px;

        &:hover {
          left: 1px;
        }
      }
    }

  }

  #prof {
    top: 120px;
    background-color: #4CAF50;
  }

  #users {
    top: 180px;
    background-color: #2196F3;
  }

  #universities {
    top: 240px;
    background-color: #f44336;
  }

  #contact {
    top: 300px;
    background-color: #555
  }
</style>
