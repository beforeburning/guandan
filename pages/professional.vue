<template>
  <div class="mx-auto flex-col w-[1000px] mt-[30px] flex items-center">
    <div
      @click="kaoshi('dashi')"
      class="bg-[rgb(177,10,0)] h-[100px] flex w-full items-center justify-center cursor-pointer"
    >
      <img class="w-[80px] mr-2" src="/images/peixun.svg" alt="" />
      <p class="text-[42px] text-white">掼蛋大师</p>
    </div>

    <div
      @click="kaoshi('caipan')"
      class="bg-[rgb(177,10,0)] h-[100px] flex w-full items-center mt-[40px] justify-center cursor-pointer"
    >
      <img class="w-[80px] mr-2" src="/images/kaohe.svg" alt="" />
      <p class="text-[42px] text-white">裁判考核</p>
    </div>

    <div
      @click="kaoshi('youji')"
      class="bg-[rgb(177,10,0)] h-[100px] flex w-full items-center mt-[40px] justify-center cursor-pointer"
    >
      <img class="w-[80px] mr-2" src="/images/youji.svg" alt="" />
      <p class="text-[42px] text-white">证书邮寄</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 布局方式
definePageMeta({
  layout: "custom",
});

const kaoshi = (mode: string) => {
  if (typeof window !== "undefined") {
    let userData = localStorage.getItem("__guandan_userData");
    if (!userData) {
      window.open(`/login?mode=${mode}`, "_self");
      return;
    }

    if (mode === "dashi") {
      window.open("/examinationshi", "_self");
    }

    if (mode === "caipan") {
      window.open("/examinationcai", "_self");
    }

    if (mode === "youji") {
      window.open("/user/kaohe", "_self");
    }
  }
};
</script>

<style></style>
