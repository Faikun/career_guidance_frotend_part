<template>
  <Suspense>
    <Login></Login>
  </Suspense>
  <the-navbar></the-navbar>
  <div class="container">
    <main>
      <router-view></router-view>
    </main>
  </div>
  <the-footer></the-footer>
</template>

<script setup>
  import TheNavbar from "@/components/TheNavbar.vue";
  import TheFooter from "@/components/TheFooter.vue";
  import Login from "@/components/TheAuth.vue";
</script>
