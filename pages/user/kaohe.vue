<template>
  <div class="mx-auto h-[calc(100vh-169px)] w-[1000px] flex">
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
        <p class="flex flex-1 justify-start items-start">考核项目</p>
        <p class="flex flex-[2] justify-start items-start">交卷时间</p>
        <p class="flex flex-1 justify-start items-start">考核成绩</p>
        <p class="flex flex-1 justify-start items-start">是否合格</p>
        <p class="flex flex-1 justify-start items-start">证书</p>
      </div>
      <div class="w-full flex" v-for="item in list">
        <p class="flex flex-1">{{ item.cate_name }}</p>
        <p class="flex flex-[2]">{{ item.add_time }}</p>
        <p class="flex flex-1">{{ item.score }}</p>
        <p class="flex flex-1">
          {{ Number(item.score) > 60 ? "合格" : "不合格" }}
        </p>
        <p @click="shenqing(item)" class="flex flex-1">
          {{ getStatus(item.status) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { PostAskQuery, PostApply } from "@/api/user";
const { path } = useRoute();

// 布局方式
definePageMeta({
  layout: "custom",
});

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
  let res = await PostAskQuery(userInfo.uuid, "list");
  console.log(res.data);
  list.value = res.data;
};

const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("__guandan_userData");
    window.open("/", "_self");
  }
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

type StatusMap = {
  [key: string]: string;
};

const statusMapper: StatusMap = {
  "0": "待申请",
  "1": "审核通过",
  "2": "审核拒绝",
  "3": "审核中",
  "4": "不可申请",
};

/**
 * Get the status description based on the status code.
 * @param key - The status code as a string.
 * @returns The corresponding status description or a default message if not found.
 */
const getStatus = (key: string): string => {
  return statusMapper[key] ?? "未知状态"; // Fallback for unknown keys
};

const shenqing = async (item) => {
  if (!userInfo) {
    return;
  }

  if (item.status == "0") {
    console.log("申请");
    let res = await PostApply(userInfo.uuid, item.id);
    if (res.code === 0) {
      alert("申请成功");
      if (typeof window !== "undefined") {
        window.open("/", "_self");
      }
    } else {
      ElMessage.error(res.msg);
    }
  }
};
</script>

<style></style>
