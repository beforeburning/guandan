<template>
  <div class="mx-auto w-[1000px] mt-[30px] flex items-center">
    <div class="flex w-[600px]">
      <swiper
        :space-between="50"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="[Pagination, Navigation]"
      >
        <swiper-slide>
          <img class="w-[600px] h-[450px]" src="/images/banner1.jpg" alt="" />
          <!-- <p
            class="absolute left-0 w-full h-[30px] bg-black/80 bottom-0 pl-[15px] text-white flex items-center"
          >
            我是文字1
          </p> -->
        </swiper-slide>
        <swiper-slide>
          <img class="w-[600px] h-[450px]" src="/images/banner1.jpg" alt="" />
          <!-- <p
            class="absolute left-0 w-full h-[30px] bg-black/80 bottom-0 pl-[15px] text-white flex items-center"
          >
            我是文字1
          </p> -->
        </swiper-slide>
        <swiper-slide>
          <img class="w-[600px] h-[450px]" src="/images/banner1.jpg" alt="" />
          <!-- <p
            class="absolute left-0 w-full h-[30px] bg-black/80 bottom-0 pl-[15px] text-white flex items-center"
          >
            我是文字1
          </p> -->
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex flex-1 flex-col ml-[30px] justify-start h-[450px]">
      <p class="text-[20px]">江苏省群众文化学会掼蛋文化研究院</p>
      <a
        v-for="item in list"
        :key="item.id"
        :href="`/details/${item.id}`"
        target="_blank"
        class="text-[14px] mt-[20px] w-full flex justify-between"
      >
        <p class="truncate w-[280px]">•{{ item.title }}</p>
        <p class="text-gray-400">{{ item.add_time }}</p>
      </a>
    </div>
  </div>

  <a
    :href="`/details/1`"
    class="mx-auto w-[1000px] mt-[30px] flex items-center bg-[rgb(57,84,145)] h-[55px] text-white pl-[15px]"
  >
    公告—掼蛋文化研究院 注册裁判员：122名|初级89名|高级89名
  </a>

  <div
    class="mx-auto w-[1000px] mt-[30px] flex items-center text-white justify-between"
  >
    <div
      class="w-[480px] h-[480px] bg-[rgb(177,10,0)] flex items-center justify-center flex-col cursor-pointer"
    >
      <div class="w-[160px] h-[160px] flex items-center justify-center">
        <img class="w-[160px] mb-2" src="/images/peixun.svg" alt="" />
      </div>
      <p class="text-[42px]">专业培训</p>
    </div>
    <a
      href="/professional"
      class="w-[480px] h-[480px] bg-[rgb(177,10,0)] flex items-center justify-center flex-col cursor-pointer"
    >
      <div class="w-[160px] h-[160px] flex items-center justify-center">
        <img class="w-[120px] mb-2" src="/images/guanli.svg" alt="" />
      </div>
      <p class="text-[42px]">职称考核</p>
    </a>
  </div>

  <div
    class="mx-auto w-[1000px] mt-[30px] flex items-center justify-between bg-[rgb(177,10,0)] p-[15px] pb-[30px] flex-col"
  >
    <h2 class="text-white text-[30px] mt-[10px] w-full">活动发布</h2>
    <div class="flex mt-[20px] w-full">
      <div
        class="flex flex-1 mr-[15px] flex-col bg-[rgb(229,230,224)] p-[10px]"
      >
        <img class="w-full" src="/images/banner1.jpg" alt="" />
        <p class="text-[14px] text-[rgb(178,32,28)] mt-[10px]">
          第六届中国 淮安 蛋公开赛什淮行門一蒜
        </p>
      </div>
      <div
        class="flex flex-1 mr-[15px] flex-col bg-[rgb(229,230,224)] p-[10px]"
      >
        <img class="w-full" src="/images/banner2.jpg" alt="" />
        <p class="text-[14px] text-[rgb(178,32,28)] mt-[10px]">
          第六届中国 淮安 蛋公开赛什淮行門一蒜
        </p>
      </div>
      <div
        class="flex flex-1 mr-[15px] flex-col bg-[rgb(229,230,224)] p-[10px]"
      >
        <img class="w-full" src="/images/banner3.jpg" alt="" />
        <p class="text-[14px] text-[rgb(178,32,28)] mt-[10px]">
          第六届中国 淮安 蛋公开赛什淮行門一蒜
        </p>
      </div>
      <div
        class="flex flex-1 mr-[15px] flex-col bg-[rgb(229,230,224)] p-[10px]"
      >
        <img class="w-full" src="/images/banner4.jpg" alt="" />
        <p class="text-[14px] text-[rgb(178,32,28)] mt-[10px]">
          第六届中国 淮安 蛋公开赛什淮行門一蒜
        </p>
      </div>
    </div>
  </div>

  <!-- <div class="mx-auto w-[1000px] mt-[30px] flex items-center justify-between">
    <div class="w-[320px] h-[210px] border">
      <p
        class="bg-[rgb(177,10,0)] w-full h-[44px] flex items-center pl-[15px] text-white"
      >
        近期赛事
      </p>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年7月国家三级掼蛋裁判培训计划
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年7月国家二级掼蛋裁判培训计划
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年8月国家三级掼蛋裁判培训计划
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年8月国家二级掼蛋裁判培训计划
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年9月国家三级掼蛋裁判培训计划
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
    </div>
    <div class="w-[320px] h-[210px] border">
      <p
        class="bg-[rgb(177,10,0)] w-full h-[44px] flex items-center pl-[15px] text-white"
      >
        考核公示
      </p>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年7月国家三级掼蛋裁判培训报名入口
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年7月国家二级掼蛋裁判培训报名入口
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年8月国家三级掼蛋裁判培训报名入口
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年8月国家二级掼蛋裁判培训报名入口
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年9月国家三级掼蛋裁判培训报名入口
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
    </div>
    <div class="w-[320px] h-[210px] border">
      <p
        class="bg-[rgb(177,10,0)] w-full h-[44px] flex items-center pl-[15px] text-white"
      >
        信息公开
      </p>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年7月国家三级掼蛋裁判公示
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年7月国家二级掼蛋裁判公示
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年8月国家三级掼蛋裁判公示
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年8月国家二级掼蛋裁判公示
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
      <a href="/" class="flex justify-between px-[15px] mt-[10px]">
        <p class="text-[14px] w-[210px] truncate">
          • 2024年9月国家三级掼蛋裁判公示
        </p>
        <p class="text-[14px] text-gray-400">16-05-18</p>
      </a>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import { PostArticlesList } from "@/api/list";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 布局方式
definePageMeta({
  layout: "custom",
});

const list = ref<
  {
    add_time: string;
    author: string;
    cate_id: string;
    cate_name: string;
    id: string;
    title: string;
  }[]
>([]);

let page = 1;
let limit = 10;
let cate_id = [3, 5, 6, 7];
PostArticlesList(page, limit, cate_id).then((res) => {
  list.value = res.data.list;
});
</script>

<style></style>
