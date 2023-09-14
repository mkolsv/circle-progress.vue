<template>
    <div class="circle-wrapper">
        <img alt="Circle Progress Vue" src="./assets/vue.svg">
        <h1 class="circle-title">MCircle Progress Bar</h1>
        <p>for Vue 3</p>
        <p>Highly customizable & lightweight circular progressbar component for Vue 3, built with SVG and extensively
            customizable</p>
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
        />
    </div>
</template>

<script setup>
import CircleProgressBar from './CircleProgressBar.vue';
import { ref } from 'vue';

const value = ref(100);
const max = ref(100);
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