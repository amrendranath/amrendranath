<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header/HeaderComponent.vue";
import Footer from "./components/Footer/FooterComponent.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
