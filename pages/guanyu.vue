<template>
  <div class="mx-auto h-[calc(100vh-169px)] w-[1000px] flex">
    <div class="w-[200px] h-[100%] flex flex-col border-r gap-y-2">
      <a
        class="w-full flex items-center justify-center h-[50px] hover:bg-[rgb(177,10,0)] hover:text-white duration-150 mt-2"
        href="/details/16"
      >
        信息公开
      </a>
      <a
        class="w-full flex items-center justify-center h-[50px] hover:bg-[rgb(177,10,0)] hover:text-white duration-150 mt-2"
        href="/details/15"
      >
        掼蛋扑克
      </a>
      <a
        class="w-full flex items-center justify-center h-[50px] hover:bg-[rgb(177,10,0)] hover:text-white duration-150 mt-2"
        href="/details/14"
      >
        联系我们
      </a>
      <a
        class="w-full flex items-center justify-center h-[50px] hover:bg-[rgb(177,10,0)] hover:text-white duration-150 mt-2"
        href="/details/13"
      >
        组织架构
      </a>
      <a
        class="w-full flex items-center justify-center h-[50px] hover:bg-[rgb(177,10,0)] hover:text-white duration-150 mt-2"
        href="/details/12"
      >
        理事单位
      </a>
      <a
        class="w-full flex items-center justify-center h-[50px] hover:bg-[rgb(177,10,0)] hover:text-white duration-150 mt-2"
        href="/details/7"
      >
        领导风采
      </a>
    </div>

    <div v-if="data" class="flex-1 ml-[30px] flex-col mt-[30px] flex">
      <p class="text-[38px] text-center w-full">
        {{ data.title }}
      </p>
      <div
        class="flex flex-col text-[20px] mt-[30px]"
        v-html="data.content"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { PostArticlesDetail } from "@/api/list";

const { params } = useRoute();
const data = ref<
  | {
      add_time: string;
      author: string;
      cate_id: string;
      cate_name: string;
      content: string;
      id: string;
      title: string;
    }
  | undefined
>(undefined);

// 布局方式
definePageMeta({
  layout: "custom",
});

PostArticlesDetail("11").then((res) => {
  data.value = res.data;
});
</script>

<style></style>
