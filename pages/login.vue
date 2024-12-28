<template>
  <div class="bg-[rgb(136,174,234)] h-screen flex items-center">
    <div
      class="w-[500px] h-[500px] border mx-auto rounded-[10px] py-[20px] px-[30px] bg-white"
    >
      <div class="w-full flex">
        <p
          class="mr-[15px] cursor-pointer bg-[rgb(177,10,0)] text-white py-[10px] px-[30px] rounded-full"
        >
          登录
        </p>
      </div>

      <div>
        <div class="flex flex-col mt-[15px]">
          <p class="w-full text-[16px]">手机号</p>
          <input
            v-model="phone"
            type="text"
            class="border outline-none w-full h-[40px] mt-[10px] pl-[10px]"
          />
        </div>

        <div class="flex flex-col mt-[10px]">
          <p class="w-full text-[16px]">验证码</p>
          <div class="flex w-full items-center mt-[10px]">
            <input
              v-model="code"
              type="text"
              class="border outline-none flex flex-1 h-[40px] pl-[10px]"
            />
            <div
              @click="getCode"
              class="ml-[10px] flex items-center justify-center cursor-pointer w-[80px]"
            >
              {{ timeout ? `${timeout}s` : "发送验证码" }}
            </div>
          </div>
        </div>

        <div
          @click="loginSub"
          class="w-full rounded-full text-white mt-[30px] bg-[rgb(56,83,144)] flex items-center justify-center h-[44px] cursor-pointer"
        >
          登录
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { PostLogin, PostSendCode } from "@/api/login";
import { useRoute } from "vue-router";

if (typeof window !== "undefined") {
  const userDataLocal = localStorage.getItem("__guandan_userData");
  if (userDataLocal) {
    window.location.href = "/user/zhanghu";
  }
}

const { query } = useRoute();
const mode = query.mode;

const validatePhoneNumber = (phoneNumber: string): boolean => {
  // 简单的手机号正则表达式示例（仅适用于中国大陆手机号）
  const phoneRegex = /^1[3-9]\d{9}$/;

  return phoneRegex.test(phoneNumber);
};

const code = ref<string>("");
const phone = ref<string>("");
const timeout = ref<number>(0);

const loginSub = () => {
  if (!code.value) {
    ElMessage.error("请输入短信验证码");
    return;
  }
  if (!phone.value || !validatePhoneNumber(phone.value)) {
    ElMessage.error("手机号格式不正确");
    return;
  }
  PostLogin(phone.value, code.value).then(async (res) => {
    if (res.code !== 0) {
      ElMessage.error(res.msg);
      return;
    }
    let userData = res.data;
    if (typeof window !== "undefined") {
      localStorage.setItem("__guandan_userData", JSON.stringify(userData));
    }
    loginSubStart();
  });
};

const loginSubStart = () => {
  if (mode === "dashi") {
    window.location.href = "/examinationshi";
  }
  if (mode === "caipai") {
    window.location.href = "/examinationcai";
  }
  if (mode === "youji") {
    window.location.href = "/user/kaohe";
  }
  if (!mode) {
    window.location.href = "/";
  }
};

const getCode = () => {
  if (timeout.value) {
    return;
  }

  if (!phone.value || !validatePhoneNumber(phone.value)) {
    ElMessage.error("手机号格式不正确");
    return;
  }

  PostSendCode(phone.value).then((res) => {
    if (res.code === 0) {
      ElMessage.success(res.msg);
      timeout.value = 60;
    }
  });
};

watch(timeout, () => {
  if (timeout.value > 0) {
    setTimeout(() => {
      timeout.value--;
    }, 1000);
  }
});
</script>

<style></style>
