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
        <div class="flex flex-1 h-full items-center" v-for="item in routeList">
          <template v-if="item.children" :key="item.title">
            <div
              :key="item.title"
              class="w-full group flex h-full relative text-white items-center text-[20px]"
            >
              {{ item.title }}
              <div
                class="absolute hidden group-hover:flex left-0 top-[100%] w-full z-10 bg-[rgb(177,10,0)] flex-col"
              >
                <a
                  v-for="childItem in item.children"
                  :key="childItem.title"
                  :href="childItem.path"
                  :target="childItem.target"
                  class="w-full text-white items-center pl-[10px] border-b border-[#999] last:border-b-0 text-[20px] h-[66px] flex"
                  :class="childItem.path === path && 'text-red-700'"
                >
                  {{ childItem.title }}
                </a>
              </div>
            </div>
          </template>
          <template v-else>
            <a
              :key="item.title"
              :href="item.path"
              class="w-full text-white h-full flex items-center text-[20px]"
              :class="item.path === path && 'text-red-700'"
              :target="item.target"
            >
              {{ item.title }}
            </a>
          </template>
        </div>
        <div class="flex flex-1 h-full items-center cursor-pointer">
          <div
            @click="userJump"
            class="w-full text-white h-full flex items-center text-[20px]"
            target="_self"
          >
            用户中心
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const { path } = useRoute();

const userJump = () => {
  if (typeof window !== "undefined") {
    let url = localStorage.getItem("__guandan_userData")
      ? "/user/zhanghu"
      : "/login";
    window.open(url, "_self");
  }
};

const routeList = [
  {
    title: "首页",
    path: "/",
    target: "_self",
  },
  // 列表 card id1
  {
    title: "掼享生活",
    path: "/list/1",
    target: "_self",
  },
  // 没有跳转
  {
    title: "专业培训",
    path: undefined,
    target: "_self",
  },
  {
    title: "职称考核",
    path: "/professional",
    target: "_self",
  },
  // 列表 card 3
  {
    title: "新闻资讯",
    path: "/list/3",
    target: "_self",
  },
  // 左边有个边栏  文章id 16 15 14 13 12 7 右边写11
  {
    title: "关于我们",
    path: "/guanyu",
    target: "_self",
  },
];
</script>
