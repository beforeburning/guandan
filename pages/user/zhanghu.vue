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
    <div
      v-if="userInfo"
      class="flex flex-1 items-center h-full flex-col ml-[20px] mt-[20px] gap-y-4"
    >
      <div class="flex w-full mt-[50px]">
        <div class="flex w-full items-center justify-center">
          <p class="flex mr-3 flex-shrink-0 w-[120px] justify-end">照片:</p>
          <div v-if="isEdit" class="w-full max-w-xs">
            <el-upload
              class="avatar-uploader"
              :action="baseConfig.axiosBaseUrl + apiConfig.upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              :data="{
                uuid: userInfo.uuid,
                type: 'member',
              }"
              name="data"
              :disabled="!isEdit"
            >
              <img
                v-if="userInfo.avatar"
                :src="userInfo.avatar"
                class="avatar w-[60px] h-[60px]"
              />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </div>
          <div class="w-full max-w-xs" v-else>
            <img
              v-if="userInfo.avatar"
              :src="userInfo.avatar"
              class="avatar w-[60px] h-[60px]"
            />
          </div>
        </div>
      </div>
      <div class="flex w-full">
        <div class="flex w-full items-center justify-center">
          <p class="flex mr-3 flex-shrink-0 w-[120px] justify-end">姓名:</p>
          <input
            class="w-full border h-[30px] max-w-xs"
            type="text"
            v-model="userInfo.username"
            :disabled="!isEdit"
          />
        </div>
      </div>
      <div class="flex w-full">
        <div class="flex w-full items-center justify-center">
          <p class="flex mr-3 flex-shrink-0 w-[120px] justify-end">性别:</p>
          <div class="w-full max-w-xs">
            <div v-if="!isEdit">
              {{ userInfo.sex === "0" ? "未知" : "" }}
              {{ userInfo.sex === "1" ? "男" : "" }}
              {{ userInfo.sex === "2" ? "女" : "" }}
            </div>
            <div v-else>
              <el-radio-group v-model="userInfo.sex">
                <el-radio label="1">男</el-radio>
                <el-radio label="2">女</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full">
        <div class="flex w-full items-center justify-center">
          <p class="flex mr-3 flex-shrink-0 w-[120px] justify-end">身份证号:</p>
          <input
            class="w-full border h-[30px] max-w-xs"
            type="text"
            v-model="userInfo.card"
            :disabled="!isEdit"
          />
        </div>
      </div>
      <div class="flex w-full">
        <div class="flex w-full justify-center">
          <p class="flex mr-3 flex-shrink-0 w-[120px] justify-end">通讯地址:</p>
          <textarea
            class="w-full h-[60px] border max-w-xs"
            cols="30"
            rows="10"
            v-model="userInfo.address"
            :disabled="!isEdit"
          ></textarea>
        </div>
      </div>
      <div class="flex w-full">
        <div class="flex w-full items-center justify-center">
          <p class="flex mr-3 flex-shrink-0 w-[120px] justify-end">邮箱:</p>
          <input
            class="w-full border h-[30px] max-w-xs"
            type="text"
            v-model="userInfo.email"
            :disabled="!isEdit"
          />
        </div>
      </div>
      <div class="flex w-full">
        <div class="flex w-full justify-center">
          <p class="flex mr-3 flex-shrink-0 w-[120px] justify-end">工作单位:</p>
          <textarea
            class="w-full h-[60px] border max-w-xs"
            cols="30"
            rows="10"
            v-model="userInfo.unit"
            :disabled="!isEdit"
          ></textarea>
        </div>
      </div>
      <div class="flex w-full">
        <div class="flex w-full items-center justify-center">
          <p class="flex mr-3 flex-shrink-0 w-[120px] justify-end">手机号:</p>
          <p class="w-full max-w-xs">{{ userInfo.mobile }}</p>
        </div>
      </div>
      <div
        class="bg-[rgb(177,10,0)] cursor-pointer text-white flex items-center justify-center w-[120px] h-[44px]"
        @click="onEdit"
      >
        {{ isEdit ? "保存" : "编辑" }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { PostUpdateUser } from "@/api/user";
import { apiConfig, baseConfig } from "@/assets/config";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps } from "element-plus";
import axios from "axios";

const { path } = useRoute();

// 布局方式
definePageMeta({
  layout: "custom",
});

let userInfo = ref();
let isEdit = ref(false);

if (typeof window !== "undefined") {
  let userInfoLocal = localStorage.getItem("__guandan_userData");

  if (!userInfoLocal) {
    window.open("/", "_self");
  } else {
    let res = JSON.parse(userInfoLocal);
    userInfo.value = res;
  }
}

const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("__guandan_userData");
    window.open("/", "_self");
  }
};

const loading = ref(false);

const onEdit = () => {
  if (!isEdit.value) {
    isEdit.value = true;
    return;
  }

  PostUpdateUser(userInfo.value).then((res) => {
    if (res.code === 0) {
      console.log(userInfo.value);
      isEdit.value = false;
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "__guandan_userData",
          JSON.stringify(userInfo.value)
        );
      }
    } else {
      ElMessage.error(res.msg);
    }
  });
};

const handleAvatarSuccess = (response, uploadFile) => {};

const uploadAvatar = (base64String: string) => {
  loading.value = true;
  const payload = {
    uuid: userInfo.value.uuid,
    type: "member",
    data: base64String,
  };

  // 使用 Axios 或其他请求工具发送到服务器
  axios
    .post(`${baseConfig.axiosBaseUrl}${apiConfig.upload}`, payload)
    .then((response) => {
      userInfo.value.avatar = response.data.data;
    })
    .catch((error) => {
      ElMessage.error("上传失败，请重试！");
      console.error(error);
    })
    .finally(() => {
      loading.value = false;
    });
};

const beforeAvatarUpload: UploadProps["beforeUpload"] = (file) => {
  if (file.size / 1024 / 1024 > 2) {
    ElMessage.error("头像最大不可以超过 2MB!");
    return false;
  }

  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    ElMessage.error("只能上传图片文件!");
    return false;
  }

  // 将文件转换为 Base64
  const reader = new FileReader();
  reader.onload = (e) => {
    const base64String = e.target.result;
    const pureBase64 = base64String.replace(/^data:image\/\w+;base64,/, "");
    uploadAvatar(pureBase64);
  };
  reader.readAsDataURL(file);

  // 阻止默认上传行为
  return false;
};
</script>

<style></style>
