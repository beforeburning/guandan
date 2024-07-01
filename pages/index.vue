<template>
  <div class="mx-auto w-[1000px] mt-[30px] flex items-center">
    <div class="flex w-[600px]">
      <!-- <el-carousel
        class="w-[600px] h-[450px]"
        trigger="click"
        :interval="300000"
        arrow="always"
        indicator-position="none"
      >
        <el-carousel-item class="h-full">
          <img class="w-[600px] h-[450px]" src="/images/banner1.jpg" alt="" />
          <p
            class="absolute left-0 w-full h-[30px] bg-black/80 bottom-0 pl-[15px] text-white flex items-center"
          >
            我是文字1
          </p>
        </el-carousel-item>
        <el-carousel-item>
          <img class="w-[600px] h-[450px]" src="/images/banner2.jpg" alt="" />
          <p
            class="absolute left-0 w-full h-[30px] bg-black/80 bottom-0 pl-[15px] text-white flex items-center"
          >
            我是文字2
          </p>
        </el-carousel-item>
        <el-carousel-item>
          <img class="w-[600px] h-[450px]" src="/images/banner3.jpg" alt="" />
          <p
            class="absolute left-0 w-full h-[30px] bg-black/80 bottom-0 pl-[15px] text-white flex items-center"
          >
            我是文字3
          </p>
        </el-carousel-item>
        <el-carousel-item>
          <img class="w-[600px] h-[450px]" src="/images/banner4.jpg" alt="" />
          <p
            class="absolute left-0 w-full h-[30px] bg-black/80 bottom-0 pl-[15px] text-white flex items-center"
          >
            我是文字4
          </p>
        </el-carousel-item>
      </el-carousel> -->
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
          <p
            class="absolute left-0 w-full h-[30px] bg-black/80 bottom-0 pl-[15px] text-white flex items-center"
          >
            我是文字1
          </p>
        </swiper-slide>
        <swiper-slide>
          <img class="w-[600px] h-[450px]" src="/images/banner1.jpg" alt="" />
          <p
            class="absolute left-0 w-full h-[30px] bg-black/80 bottom-0 pl-[15px] text-white flex items-center"
          >
            我是文字1
          </p>
        </swiper-slide>
        <swiper-slide>
          <img class="w-[600px] h-[450px]" src="/images/banner1.jpg" alt="" />
          <p
            class="absolute left-0 w-full h-[30px] bg-black/80 bottom-0 pl-[15px] text-white flex items-center"
          >
            我是文字1
          </p>
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex flex-1 flex-col ml-[30px] justify-start h-[450px]">
      <p class="text-[20px]">江苏省群众文化学会掼蛋文化研究院</p>
      <a href="/details/1" target="_blank" class="text-[14px] mt-[20px]">
        •江苏省掼蛋文化研究院2024年度掼蛋精英交流赛
      </a>
      <a href="/details/2" target="_blank" class="text-[14px] mt-[20px]">
        •掼蛋文化深探索·江苏省研究院学术研讨会
      </a>
      <a href="/details/3" target="_blank" class="text-[14px] mt-[20px]">
        •江苏掼蛋文化遗产保护与发展高峰论坛成功召开
      </a>
      <a href="/details/4" target="_blank" class="text-[14px] mt-[20px]">
        •掼蛋技艺传承月：大师班系列培训活动
      </a>
      <a href="/details/5" target="_blank" class="text-[14px] mt-[20px]">
        •江苏省掼蛋文化节：掼蛋诗联书画艺术展
      </a>
      <a href="/details/6" target="_blank" class="text-[14px] mt-[20px]">
        •掼蛋策略与心理解析——高级研修班
      </a>
      <a href="/details/7" target="_blank" class="text-[14px] mt-[20px]">
        •青少年掼蛋教育推广周：趣味与智慧的碰撞
      </a>
      <a href="/details/8" target="_blank" class="text-[14px] mt-[20px]">
        •‘掼’享未来：数字时代掼蛋文化的创新发展论坛
      </a>
      <a href="/details/9" target="_blank" class="text-[14px] mt-[20px]">
        •江苏省掼蛋历史文化寻根之旅系列活动
      </a>
      <a href="/details/10" target="_blank" class="text-[14px] mt-[20px]">
        •全民掼蛋日：全省联动公益掼蛋大赛
      </a>
    </div>
  </div>
  <div
    class="mx-auto w-[1000px] mt-[30px] flex items-center bg-[rgb(57,84,145)] h-[55px] text-white pl-[15px]"
  >
    公告—掼蛋文化研究院 注册裁判员：122名|初级89名|高级89名
  </div>
  <div
    class="mx-auto w-[1000px] mt-[30px] flex items-center text-white justify-between"
  >
    <div
      class="w-[480px] h-[480px] bg-[rgb(177,10,0)] flex items-center justify-center flex-col cursor-pointer"
    >
      <img src="/images/peixun.svg" alt="" />
      <p class="text-[42px]">专业培训</p>
    </div>
    <div
      class="w-[480px] h-[480px] bg-[rgb(177,10,0)] flex items-center justify-center flex-col cursor-pointer"
    >
      <img src="/images/peixun.svg" alt="" />
      <p class="text-[42px]">裁判考核</p>
    </div>
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

  <div class="mx-auto w-[1000px] mt-[30px] flex items-center justify-between">
    <div class="w-[320px] h-[210px] border">
      <p
        class="bg-[rgb(177,10,0)] w-full h-[44px] flex items-center pl-[15px] text-white"
      >
        培训计划
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
        最新报名
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
        最新注册裁判
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
</script>

<style></style>
