<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <slot></slot>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
