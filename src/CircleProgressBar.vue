<template>
    <div class="circle-progress">
        <svg
            class="circle-progress__svg"
            viewBox="-2 -2 106 106"
            :width="size"
            :height="size"
        >
            <circle
                class="circle-progress__circle circle-progress__line--back"
                :r="radius"
                cx="52"
                cy="52"
            />
            <circle
                class="circle-progress__circle circle-progress__line--top"
                :class="fillingCircleClasses"
                :style="fillingCircleStyles"
                :transform="`rotate(${adjustedStartAngle} 52 52)`"
                ref="fillingCircle"
                :r="radius"
                cx="52"
                cy="52"
            />
        </svg>

        <div class="circle-progress__content">
            <span v-if="percentage" class="circle-progress__percentage">
                {{ getPercentage }}
            </span>
            <slot/>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    max: {
        type: Number,
        required: true
    },

    value: {
        type: Number,
        required: true
    },

    colorFilled: {
        type: String,
        required: false,
        default: '#FF5533'
    },

    colorUnfilled: {
        type: String,
        required: false,
        default: '#3BB44A'
    },

    colorBack: {
        type: String,
        required: false,
        default: '#ECEEF1'
    },

    percentage: {
        type: Boolean,
        required: false,
        default: false
    },

    rounded: {
        type: Boolean,
        required: false,
        default: false
    },

    animationDuration: {
        type: String,
        required: false,
        default: '0.5s'
    },

    strokeWidth: {
        type: String,
        required: false,
        default: '5px'
    },

    reversedFilling: {
        type: Boolean,
        required: false,
        default: false
    },

    size: {
        type: [String, Number],
        required: false,
        default: '124'
    },

    startAngle: {
      type: Number,
      required: false,
      default: 180
    }
});

const isLimitReached = computed(() => props.max <= props.value);
const fillingCircleClasses = computed(() => {
    return {
        'circle-progress__line--top--rounded': props.rounded,
        'circle-progress__line--filled': isLimitReached.value,
        'circle-progress__line--unfilled': !isLimitReached.value,
    };
});

const fillingCircleStyles = computed(() => {
    return {
        'strokeDashoffset': dashOffset.value,
        'strokeDasharray': dashArray.value,
    }
});

const strokeWidthInt = parseInt(props.strokeWidth);
const adjustedRadius = 48 - (strokeWidthInt - 5) / 2;

const currentFormatted = computed(() => isLimitReached.value ? props.max : props.value);
const adjustedStartAngle = computed(() => props.startAngle - 90);

const fillingCircle = ref(null);
const radius = ref(adjustedRadius);
const dashArray = computed(() => radius.value * Math.PI * 2);
const dashOffset = computed(() => {
    if (props.reversedFilling) return dashArray.value - dashArray.value * (props.max - currentFormatted.value) / props.max;
    return dashArray.value - dashArray.value * currentFormatted.value / props.max
});

const getPercentage = computed(() => {
    return Math.floor(props.value / props.max * 100) + '%';
});
</script>

<style>
@keyframes filling {
    from {
        stroke-dashoffset: v-bind("dashArray");
    }
    to {
        stroke-dashoffset: v-bind("dashOffset");
    }
}

.circle-progress__circle {
    fill: transparent;
    stroke-width: v-bind("props.strokeWidth");
}

.circle-progress__line--back {
    stroke: v-bind("props.colorBack");
    stroke-dashoffset: 0;
}

.circle-progress__line--top {
    animation-name: filling;
    animation-duration: v-bind("props.animationDuration");
    animation-timing-function: ease-in;
    transition: 0.5s all;
}

.circle-progress__line--top--rounded {
    stroke-linecap: round;
}

.circle-progress {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
}

.circle-progress__line--filled {
    stroke: v-bind("props.colorFilled");
}

.circle-progress__line--unfilled {
    stroke: v-bind("props.colorUnfilled");
}

.circle-progress__content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
