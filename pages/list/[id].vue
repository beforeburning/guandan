<template>
  <div class="mx-auto w-[1000px] flex-col mt-[30px] flex items-center">
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
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { PostArticlesList } from "@/api/list";

const { params } = useRoute();
const cate_id = params.id;
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

// 布局方式
definePageMeta({
  layout: "custom",
});

let page = 1;
let limit = 10;
PostArticlesList(page, limit, cate_id.toString()).then((res) => {
  list.value = res.data.list;
});
</script>

<style></style>
