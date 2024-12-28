<template>
  <div
    v-if="data"
    class="mx-auto w-[1000px] flex-col mt-[30px] flex items-center"
  >
    <p class="text-[38px] text-center w-full">
      {{ data.title }}
    </p>
    <div
      class="flex flex-col text-[20px] mt-[30px]"
      v-html="data.content"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { PostArticlesDetail } from "@/api/list";

const { params } = useRoute();
const id = params.id;
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

PostArticlesDetail(Number(id)).then((res) => {
  data.value = res.data;
});
</script>

<style></style>
