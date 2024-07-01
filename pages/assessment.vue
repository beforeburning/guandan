<template>
  <div class="bg-[rgb(136,174,234)] h-screen flex items-center">
    <div
      class="w-[500px] h-[500px] border mx-auto rounded-[10px] py-[20px] px-[30px] bg-white"
    >
      <div class="w-full flex">
        <p
          @click="isLogin = 1"
          class="mr-[15px] cursor-pointer text-[rgb(177,10,0)] py-[10px] px-[30px] rounded-full"
          :class="isLogin === 1 && 'bg-[rgb(177,10,0)] !text-white'"
        >
          登录
        </p>
        <p
          @click="isLogin = 2"
          class="mr-[15px] cursor-pointer text-[rgb(177,10,0)] py-[10px] px-[30px] rounded-full"
          :class="isLogin === 2 && 'bg-[rgb(177,10,0)] !text-white'"
        >
          注册
        </p>
      </div>

      <div v-if="isLogin === 1">
        <div class="flex flex-col mt-[15px]">
          <p class="w-full text-[16px]">身份证号</p>
          <input
            v-model="key"
            type="text"
            class="border w-full h-[40px] mt-[10px] pl-[10px]"
          />
        </div>

        <div class="flex flex-col mt-[10px]">
          <p class="w-full text-[16px]">密码</p>
          <input
            v-model="password"
            type="password"
            class="border w-full h-[40px] mt-[10px] pl-[10px]"
          />
        </div>

        <div
          @click="loginSub"
          class="w-full rounded-full text-white mt-[30px] bg-[rgb(56,83,144)] flex items-center justify-center h-[44px] cursor-pointer"
        >
          开始考核
        </div>
      </div>

      <div v-if="isLogin === 2">
        <div class="flex flex-col mt-[10px]">
          <p class="w-full text-[16px]">姓名</p>
          <input
            v-model="name"
            type="text"
            class="border w-full h-[40px] mt-[10px] pl-[10px]"
          />
        </div>
        <div class="flex flex-col mt-[10px]">
          <p class="w-full text-[16px]">身份证号</p>
          <input
            v-model="key"
            type="text"
            class="border w-full h-[40px] mt-[10px] pl-[10px]"
          />
        </div>
        <div class="flex flex-col mt-[10px]">
          <p class="w-full text-[16px]">手机号</p>
          <input
            v-model="phone"
            type="text"
            class="border w-full h-[40px] mt-[10px] pl-[10px]"
          />
        </div>
        <div class="flex flex-col mt-[10px]">
          <p class="w-full text-[16px]">密码</p>
          <input
            v-model="password"
            type="password"
            class="border w-full h-[40px] mt-[10px] pl-[10px]"
          />
        </div>
        <div
          @click="application"
          class="w-full rounded-full text-white mt-[30px] bg-[rgb(56,83,144)] flex items-center justify-center h-[44px] cursor-pointer"
        >
          申请账号
        </div>
      </div>
    </div>
  </div>
  <el-dialog
    v-model="dialogVisible"
    width="500"
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <template #title>
      <span
        class="w-full text-center flex items-center justify-center text-[rgb(177,10,0)] text-[28px] font-bold mt-[15px]"
      >
        江苏省掼蛋裁判（二级）考试
      </span>
    </template>
    <div class="flex flex-col border-[2px] rounded-[20px]">
      <div class="border-b-[2px] p-[15px] text-[16px]">题数：50题</div>
      <div class="border-b-[2px] p-[15px] text-[16px]">总分：100分</div>
      <div class="border-b-[2px] p-[15px] text-[16px]">时间：60分钟</div>
      <div class="p-[15px] text-[16px]">
        简介：单选题80分，多选题20分，每题
        2分，其中100分为及格分，考试通过后本机构将在15个工作日内签发裁判员证书。
      </div>
    </div>
    <template #footer>
      <div
        @click="loginSubStart"
        class="w-full rounded-full text-white bg-[rgb(56,83,144)] mb-[30px] flex items-center justify-center h-[44px] cursor-pointer"
      >
        开始作答
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { PostSignin, PostSignup } from "@/api/login";

const dialogVisible = ref(false);

// 1 登录 2注册
const isLogin = ref<1 | 2>(1);

const validateIdCard = (idCard: string): boolean => {
  // 15位和18位身份证号码的正则表达式
  const idCardRegex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

  // 如果只是简单的格式验证，上面的正则表达式就足够了
  // 但如果要进行更严格的验证（例如校验码的校验），则需要更复杂的逻辑

  // 在这里，我们只进行简单的格式验证
  return idCardRegex.test(idCard);
};

const validatePhoneNumber = (phoneNumber: string): boolean => {
  // 简单的手机号正则表达式示例（仅适用于中国大陆手机号）
  const phoneRegex = /^1[3-9]\d{9}$/;

  return phoneRegex.test(phoneNumber);
};

const key = ref<string>("");
const password = ref<string>("");
const phone = ref<string>("");
const name = ref<string>("");

const loginSub = () => {
  if (!password.value) {
    ElMessage.error("密码不正确");
    return;
  }

  if (!key.value || !validateIdCard(key.value)) {
    ElMessage.error("身份证格式不正确");
    return;
  }

  PostSignin(key.value, password.value).then(async (res) => {
    if (!res.success) {
      ElMessage.error(res.msg);
    } else if (res.success) {
      if (res.data.is_ask) {
        ElMessage.error("您已经提交过试卷了!");
        return;
      }
      dialogVisible.value = true;
      let userData = res.data;
      if (typeof window !== "undefined") {
        localStorage.setItem("__guandan_userData", JSON.stringify(userData));
      }
    }
  });
};

const loginSubStart = () => {
  window.location.href = "/examination";
};

const application = () => {
  if (!name) {
    ElMessage.error("姓名不正确");
    return;
  }

  if (!key.value || !validateIdCard(key.value)) {
    ElMessage.error("身份证格式不正确");
    return;
  }
  if (!password.value) {
    ElMessage.error("密码不正确");
    return;
  }
  if (!phone.value || !validatePhoneNumber(phone.value)) {
    ElMessage.error("请输入姓名");
    return;
  }

  let str = {
    username: name.value,
    card: key.value,
    password: password.value,
    sex: 1,
    mobile: phone.value,
    address: "1",
    unit: "1",
  };

  PostSignup(
    str.username,
    str.card,
    str.password,
    str.sex,
    str.mobile,
    str.address,
    str.unit
  ).then(async (res) => {
    if (!res.success) {
      ElMessage.error(res.msg);
    } else if (res.success) {
      alert("已提交申请 请等待审核");
    }
  });
};
</script>

<style></style>
