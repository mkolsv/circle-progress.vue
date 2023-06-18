<template>
<div class="circle-wrapper">
  <img src="./assets/vue.svg">
  <h1 class="circle-title">MCircle Progress Bar</h1>
  <p>for Vue 3</p>
  <p>Highly customizable & lightweight circular progressbar component for Vue 3, built with SVG and extensively customizable</p>
  <div class="circle-inputs">
    <div class="circle-input__wrapper">
      <p class="circle-input__title circle-input__current">Current Value</p>
      <input class="circle-input" v-model="value" type="text">
    </div>

    <div class="circle-input__wrapper">
      <p class="circle-input__title circle-input__max">Max Value</p>
      <input class="circle-input" v-model="max" type="text">
    </div>
  </div>
  <CircleProgressBar
      :value="value"
      :max="max"
      percentage
      rounded
      reversed-filling
  />
</div>
</template>

<script setup>
import CircleProgressBar from './CircleProgressBar.vue';
import { onMounted, ref } from 'vue';

let value = ref(100);

const max = ref(100);

const decrease = () => {
    setTimeout(() => {
        value.value = value.value - 1;

        if (value.value !== 0) decrease();
    }, 30);
}

onMounted(() => {
    decrease();
});
</script>

<style scoped>
.circle-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.circle-inputs {
  display: flex;
  padding-bottom: 24px;
}

.circle-input__wrapper {
  padding: 0 10px;
}

.circle-input {
  padding: 10px;
  outline: none;
}
</style>