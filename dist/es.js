(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@keyframes filling{0%{stroke-dashoffset:var(--083f626a)}to{stroke-dashoffset:var(--d141d33e)}}.circle-progress__circle{fill:transparent;stroke-width:var(--05a12058)}.circle-progress__line--back{stroke:#eceef1;stroke-dashoffset:0}.circle-progress__line--top{animation-name:filling;animation-duration:var(--0a672bc4);animation-timing-function:ease-in;transition:.5s all}.circle-progress__line--top--rounded{stroke-linecap:round}.circle-progress{display:flex;position:relative;justify-content:center;align-items:center}.circle-progress__line--filled{stroke:var(--a3820fea)}.circle-progress__line--unfilled{stroke:var(--2eade9a4)}.circle-progress__content{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;flex-direction:column}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { useCssVars as y, unref as s, computed as r, ref as f, openBlock as i, createElementBlock as o, createElementVNode as c, normalizeClass as h, normalizeStyle as x, toDisplayString as B, createCommentVNode as C, renderSlot as k } from "vue";
const q = { class: "circle-progress" }, S = {
  class: "circle-progress__svg",
  viewBox: "0 0 104 104",
  width: "104",
  height: "104"
}, F = ["r"], D = ["r"], P = { class: "circle-progress__content" }, b = {
  key: 0,
  class: "circle-progress__percentage"
}, w = {
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
  setup(n) {
    const e = n;
    y((_) => ({
      "083f626a": s(l),
      d141d33e: s(d),
      "05a12058": e.strokeWidth,
      "0a672bc4": e.animationDuration,
      a3820fea: e.colorFilled,
      "2eade9a4": e.colorUnfilled
    }));
    const t = r(() => e.max <= e.value), p = r(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": t.value,
      "circle-progress__line--unfilled": !t.value
    })), g = r(() => ({
      strokeDashoffset: d.value,
      strokeDasharray: l.value
    })), u = r(() => t.value ? e.max : e.value), v = f(null), a = f(48), l = r(() => a.value * Math.PI * 2), d = r(() => e.reversedFilling ? l.value - l.value * (e.max - u.value) / e.max : l.value - l.value * u.value / e.max), m = r(() => Math.floor(e.value / e.max * 100) + "%");
    return (_, N) => (i(), o("div", q, [
      (i(), o("svg", S, [
        c("circle", {
          class: "circle-progress__circle circle-progress__line--back",
          r: a.value,
          cx: "52",
          cy: "52"
        }, null, 8, F),
        c("circle", {
          class: h(["circle-progress__circle circle-progress__line--top", s(p)]),
          style: x(s(g)),
          ref_key: "fillingCircle",
          ref: v,
          r: a.value,
          cx: "52",
          cy: "52",
          transform: "rotate(-270 52 52)"
        }, null, 14, D)
      ])),
      c("div", P, [
        n.percentage ? (i(), o("span", b, B(s(m)), 1)) : C("", !0),
        k(_.$slots, "default")
      ])
    ]));
  }
};
export {
  w as CircleProgressBar
};
