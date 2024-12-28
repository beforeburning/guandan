<template>
  <div class="mx-auto h-[calc(100vh-169px)] w-[1000px] flex items-center">
    <div class="w-[200px] h-[100%] flex flex-col border-r gap-y-2">
      <a
        class="w-full flex items-center justify-center h-[50px] hover:bg-[rgb(177,10,0)] hover:text-white duration-150 mt-2"
        :class="path === '/user/zhanghu' && 'bg-[rgb(177,10,0)] text-white'"
        href="/user/zhanghu"
        >账户信息</a
      >
      <a
        class="w-full flex items-center justify-center h-[50px] hover:bg-[rgb(177,10,0)] hover:text-white duration-150"
        :class="path === '/user/kaohe' && 'bg-[rgb(177,10,0)] text-white'"
        href="/user/kaohe"
        >考核记录</a
      >
      <a
        class="w-full flex items-center justify-center h-[50px] hover:bg-[rgb(177,10,0)] hover:text-white duration-150"
        :class="path === '/user/zhengshu' && 'bg-[rgb(177,10,0)] text-white'"
        href="/user/zhengshu"
        >我的证书</a
      >
      <div
        class="w-full cursor-pointer flex items-center justify-center h-[50px] hover:bg-[rgb(177,10,0)] hover:text-white duration-150"
        @click="logout"
      >
        退出登录
      </div>
    </div>
    <div class="flex flex-1 h-full flex-col ml-[20px] mt-[20px] gap-y-2">
      <div class="w-full flex">
        <p class="flex flex-1 justify-start items-start">证书类型</p>
        <p class="flex flex-[2] justify-start items-start">获取时间</p>
        <p class="flex flex-[2] justify-start items-start">证书编号</p>
        <p class="flex flex-1 justify-start items-start">详情</p>
      </div>
      <div class="w-full flex" v-for="item in list">
        <p class="flex flex-1">{{ item.cate_id }}</p>
        <p class="flex flex-[2]">{{ item.add_time }}</p>
        <p class="flex flex-[2]">{{ item.cate_id }}</p>
        <p @click="chakan(item)" class="flex flex-1">点击查看</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { PostAskQuery } from "@/api/user";

const { path } = useRoute();

// 布局方式
definePageMeta({
  layout: "custom",
});

const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("__guandan_userData");
    window.open("/", "_self");
  }
};

let userInfo: any;
let list = ref<
  {
    add_time: string;
    cate_id: string;
    cate_name: string;
    id: string;
    note: string;
    score: string;
    status: string;
    status_name: string;
  }[]
>([]);
const init = async () => {
  if (!userInfo) {
    return;
  }
  let res = await PostAskQuery(userInfo.uuid, "cert");
  console.log(res.data);
  list.value = res.data;
};

if (typeof window !== "undefined") {
  let userInfoLocal = localStorage.getItem("__guandan_userData");

  if (!userInfoLocal) {
    window.open("/", "_self");
  } else {
    let res = JSON.parse(userInfoLocal);
    userInfo = res;
    init();
  }
}

const chakan = (item) => {
  console.log(item);
};
</script>

<style></style>
