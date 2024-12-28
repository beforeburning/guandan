<template>
  <div
    class="flex flex-col mx-auto fixed w-full h-full items-center justify-center bg-black/10 z-50 backdrop-blur-[5px]"
    v-if="dialogVisible"
  >
    <div
      class="flex flex-col items-center w-[500px] bg-white rounded-[15px] p-[30px]"
    >
      <span
        class="w-full text-center flex items-center justify-center text-[rgb(177,10,0)] text-[28px] font-bold mt-[15px]"
      >
        江苏省掼蛋大师（二级）考试
      </span>
      <div class="flex flex-col border-[2px] rounded-[20px] mt-[30px]">
        <div class="border-b-[2px] p-[15px] text-[16px]">题数：50题</div>
        <div class="border-b-[2px] p-[15px] text-[16px]">总分：100分</div>
        <div class="border-b-[2px] p-[15px] text-[16px]">时间：60分钟</div>
        <div class="p-[15px] text-[16px]">
          简介：单选题80分，多选题20分，每题
          2分，其中100分为及格分，考试通过后本机构将在15个工作日内签发掼蛋大师证书。
        </div>
      </div>
      <div
        @click="loginSubStart"
        class="w-full rounded-full mt-[30px] text-white bg-[rgb(56,83,144)] mb-[30px] flex items-center justify-center h-[44px] cursor-pointer"
      >
        开始作答
      </div>
    </div>
  </div>

  <div class="flex items-center">
    <div class="flex flex-col mx-auto w-[1000px]">
      <div
        class="w-full items-center justify-center flex mt-[50px] text-[50px] font-bold"
      >
        江苏省掼蛋大师能力考试
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
import multipleOptions from "@/components/multipleOptions-dashi.json";
import singleSelection from "@/components/singleSelection-dashi.json";
import { ElMessage } from "element-plus";
import { PostScore } from "@/api/login";

const userData = ref();
const dialogVisible = ref(true);
const loginSubStart = () => {
  dialogVisible.value = false;
};

if (typeof window !== "undefined") {
  const userDataLocal = localStorage.getItem("__guandan_userData");
  if (!userDataLocal) {
    window.location.href = "/login";
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
  // PostScore(userData.value.uuid, 1, "50").then(async (res) => {
  //   console.log(res);
  //   if (!res.success) {
  //     ElMessage.error(res.msg);
  //   } else if (res.success) {
  //     alert("已交卷, 请等待结果通知您");
  //     window.location.href = "/";
  //   }
  // });

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

  PostScore(userData.value.uuid, 1, (successNum * 2).toString()).then(
    async (res) => {
      console.log(res);
      if (!res.success) {
        ElMessage.error(res.msg);
      } else if (res.success) {
        alert("已交卷, 请等待结果通知您");
        window.location.href = "/";
      }
    }
  );
};
</script>

<style></style>
