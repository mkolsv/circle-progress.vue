(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@keyframes filling{0%{stroke-dashoffset:var(--4b3a1b5e)}to{stroke-dashoffset:var(--333edc2e)}}.circle-progress__circle{fill:transparent;stroke-width:var(--e16e0d32)}.circle-progress__line--back{stroke:var(--299db823);stroke-dashoffset:0}.circle-progress__line--top{animation-name:filling;animation-duration:var(--6c0f3971);animation-timing-function:ease-in;transition:.5s all}.circle-progress__line--top--rounded{stroke-linecap:round}.circle-progress{display:flex;position:relative;justify-content:center;align-items:center}.circle-progress__line--filled{stroke:var(--4058819e)}.circle-progress__line--unfilled{stroke:var(--bee94b12)}.circle-progress__content{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;flex-direction:column}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { useCssVars as m, computed as r, ref as _, openBlock as a, createElementBlock as c, createElementVNode as o, normalizeClass as y, normalizeStyle as h, toDisplayString as x, createCommentVNode as B, renderSlot as C } from "vue";
const k = { class: "circle-progress" }, q = {
  class: "circle-progress__svg",
  viewBox: "0 0 104 104",
  width: "104",
  height: "104"
}, S = ["r"], b = ["r"], F = { class: "circle-progress__content" }, D = {
  key: 0,
  class: "circle-progress__percentage"
}, N = {
  __name: "CircleProgressBar",
  props: {
    max: {
      type: Number,
      required: !0
    },
    value: {
      type: Number,
      required: !0
    },
    colorFilled: {
      type: String,
      required: !1,
      default: "#FF5533"
    },
    colorUnfilled: {
      type: String,
      required: !1,
      default: "#3BB44A"
    },
    colorBack: {
      type: String,
      required: !1,
      default: "#ECEEF1"
    },
    percentage: {
      type: Boolean,
      required: !1,
      default: !1
    },
    rounded: {
      type: Boolean,
      required: !1,
      default: !1
    },
    animationDuration: {
      type: String,
      required: !1,
      default: "0.5s"
    },
    strokeWidth: {
      type: String,
      required: !1,
      default: "5px"
    },
    reversedFilling: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(i) {
    const e = i;
    m((d) => ({
      "4b3a1b5e": l.value,
      "333edc2e": u.value,
      e16e0d32: e.strokeWidth,
      "299db823": e.colorBack,
      "6c0f3971": e.animationDuration,
      "4058819e": e.colorFilled,
      bee94b12: e.colorUnfilled
    }));
    const s = r(() => e.max <= e.value), f = r(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": s.value,
      "circle-progress__line--unfilled": !s.value
    })), p = r(() => ({
      strokeDashoffset: u.value,
      strokeDasharray: l.value
    })), n = r(() => s.value ? e.max : e.value), g = _(null), t = _(48), l = r(() => t.value * Math.PI * 2), u = r(() => e.reversedFilling ? l.value - l.value * (e.max - n.value) / e.max : l.value - l.value * n.value / e.max), v = r(() => Math.floor(e.value / e.max * 100) + "%");
    return (d, E) => (a(), c("div", k, [
      (a(), c("svg", q, [
        o("circle", {
          class: "circle-progress__circle circle-progress__line--back",
          r: t.value,
          cx: "52",
          cy: "52"
        }, null, 8, S),
        o("circle", {
          class: y(["circle-progress__circle circle-progress__line--top", f.value]),
          style: h(p.value),
          ref_key: "fillingCircle",
          ref: g,
          r: t.value,
          cx: "52",
          cy: "52",
          transform: "rotate(-270 52 52)"
        }, null, 14, b)
      ])),
      o("div", F, [
        i.percentage ? (a(), c("span", D, x(v.value), 1)) : B("", !0),
        C(d.$slots, "default")
      ])
    ]));
  }
};
export {
  N as CircleProgressBar
};
