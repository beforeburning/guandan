<template>
  <div class="flex flex-col">
    <div class="mx-auto w-[1000px] flex items-center py-[20px]">
      <img class="w-[80px]" src="/images/logo.jpg" alt="" />
      <p class="text-[rgb(175,3,0)] ml-[15px] text-[42px] font-bold">
        江苏省掼蛋文化研究院
      </p>
    </div>
    <div class="flex w-full bg-[rgb(177,10,0)]">
      <div class="mx-auto w-[1000px] flex h-[66px] items-center">
        <a
          v-for="item in routeList"
          :href="item.path"
          class="flex flex-1 text-white items-center justify-center text-[20px]"
          :class="item.path === path && 'text-red-700'"
          :target="item.target"
        >
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const { path } = useRoute();

const routeList = [
  {
    title: "首页",
    path: "/",
    target: "_self",
  },
  {
    title: "活动",
    path: "/activities",
    target: "_self",
  },
  {
    title: "专业培训",
    path: "/training",
    target: "_self",
  },
  {
    title: "裁判考核",
    path: "/assessment",
    target: "_blank",
  },
  {
    title: "联系我们",
    path: "/contact",
    target: "_self",
  },
];
</script>
