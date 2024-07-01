<template>
  <div class="flex items-center">
    <div class="flex flex-col mx-auto w-[1000px]">
      <div
        class="w-full items-center justify-center flex mt-[50px] text-[50px] font-bold"
      >
        江苏省掼蛋裁判能力考试
        <p class="hidden">{{ componentKey }}</p>
      </div>
      <div class="flex text-[24px] mt-[15px]">单选题</div>

      <client-only>
        <div class="flex flex-col w-full mt-[15px]">
          <div
            class="flex flex-col w-full mb-[15px] pb-[15px] border-b"
            v-for="item in singleSelectionData"
            :key="item.id"
          >
            <div class="mb-[10px]">{{ item.title }}</div>

            <el-radio-group v-model="item.value" @change="forceUpdate">
              <el-radio
                v-for="option in item.options"
                :key="option"
                :label="option"
              >
                {{ option }}
              </el-radio>
            </el-radio-group>
          </div>
        </div>
      </client-only>

      <div class="flex text-[24px] mt-[15px]">多选题</div>
      <client-only>
        <div class="flex flex-col w-full mt-[15px]">
          <div
            class="flex flex-col w-full mb-[15px] pb-[15px] border-b"
            v-for="item in multipleSelectionData"
            :key="item.id"
          >
            <p class="mb-[10px]">{{ item.title }}</p>
            <el-checkbox-group v-model="item.value" @change="forceUpdate">
              <el-checkbox
                v-for="option in item.options"
                :key="option"
                :label="option"
              />
            </el-checkbox-group>
          </div>
        </div>
      </client-only>
      <div
        @click="submit"
        class="w-full rounded-full mb-[50px] text-white mt-[30px] bg-[rgb(56,83,144)] flex items-center justify-center h-[44px] cursor-pointer"
      >
        提交
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import multipleOptions from "@/components/multipleOptions.json";
import singleSelection from "@/components/singleSelection.json";
import { ElMessage } from "element-plus";
import { PostScore } from "@/api/login";

const userData = ref();
if (typeof window !== "undefined") {
  const userDataLocal = localStorage.getItem("__guandan_userData");
  if (!userDataLocal) {
    window.location.href = "/assessment";
    ElMessage.error("登录已失效");
  } else {
    userData.value = JSON.parse(userDataLocal);
  }
}

const componentKey = ref(0);

const getRandomElements = <T>(arr: T[], count: number): T[] => {
  // 确保数组长度大于或等于所需的数量
  if (arr.length <= count) {
    return arr;
  }

  // 创建一个浅拷贝以避免修改原数组
  const result: T[] = [];
  const usedIndices = new Set<number>();

  // 随机选择元素直到达到所需的数量
  while (result.length < count) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      result.push(arr[randomIndex]);
    }
  }

  return result;
};

const singleSelectionData = ref<
  {
    id: number;
    title: string;
    answer: number;
    options: string[];
    value: string;
  }[]
>(getRandomElements(singleSelection, 40));

const multipleSelectionData = ref<
  {
    id: number;
    title: string;
    answer: number[];
    options: string[];
    value: never[];
  }[]
>(getRandomElements(multipleOptions, 10));

const forceUpdate = () => {
  // 通过改变key值来强制更新
  componentKey.value++;
};

const submit = () => {
  let successNum = 0;
  singleSelectionData.value.map((item) => {
    // 提取数据
    var answerIndex = item.answer - 1; // 将1基准转换为0基准
    var correctOption = item.options[answerIndex];
    var value = item.value;
    if (value === correctOption) {
      successNum = successNum + 1;
    }
  });

  multipleSelectionData.value.map((item) => {
    // 提取数据
    var answerIndices = item.answer.map((index) => index - 1); // 将1基准转换为0基准
    var correctOptions = answerIndices.map((index) => item.options[index]);
    var value = item.value;

    // 检查value是否与正确答案匹配
    if (value.length !== correctOptions.length) {
      return false;
    }

    // 检查每个值是否匹配
    for (var i = 0; i < correctOptions.length; i++) {
      if (value[i] !== correctOptions[i]) {
        return false;
      }
    }
    successNum = successNum + 1;
  });

  alert(`你的得分${successNum}`);

  PostScore(userData.value.uuid, (successNum * 2).toString()).then(
    async (res) => {
      console.log(res);
      if (!res.success) {
        ElMessage.error(res.msg);
      } else if (res.success) {
        alert("已交卷, 请等待结果通知您");
        window.location.href = "/";
        if (typeof window !== "undefined") {
          localStorage.removeItem("__guandan_userData");
        }
      }
    }
  );
};
</script>

<style></style>
