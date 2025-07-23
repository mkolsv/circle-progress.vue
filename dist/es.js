(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@keyframes filling{0%{stroke-dashoffset:var(--200779dc)}to{stroke-dashoffset:var(--26c1aafa)}}.circle-progress__circle{fill:transparent}.circle-progress__line--back{stroke:var(--0c6f6e52);stroke-width:var(--1cc8a061);stroke-dashoffset:0}.circle-progress__line--top{stroke-width:var(--63dce39b);animation-name:filling;animation-duration:var(--30c7d625);animation-timing-function:ease-in;transition:.5s all}.circle-progress__line--top--rounded{stroke-linecap:round}.circle-progress{display:flex;position:relative;justify-content:center;align-items:center}.circle-progress__line--filled{stroke:var(--9fbc955c)}.circle-progress__line--unfilled{stroke:var(--42d6712b)}.circle-progress__content{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;flex-direction:column}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { useCssVars as q, computed as r, ref as p, openBlock as i, createElementBlock as o, createElementVNode as c, normalizeClass as B, normalizeStyle as C, toDisplayString as W, createCommentVNode as F, renderSlot as b } from "vue";
const N = { class: "circle-progress" }, U = ["width", "height"], z = ["r"], A = ["transform", "r"], D = { class: "circle-progress__content" }, E = {
  key: 0,
  class: "circle-progress__percentage"
}, M = {
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
      default: "10px"
    },
    strokeWidthUnfilled: {
      type: String,
      required: !1,
      default: null
    },
    reversedFilling: {
      type: Boolean,
      required: !1,
      default: !1
    },
    size: {
      type: [String, Number],
      required: !1,
      default: "124"
    },
    startAngle: {
      type: Number,
      required: !1,
      default: 180
    }
  },
  setup(t) {
    q((g) => ({
      "200779dc": l.value,
      "26c1aafa": f.value,
      "0c6f6e52": e.colorBack,
      "1cc8a061": u.value,
      "63dce39b": n.value,
      "30c7d625": e.animationDuration,
      "9fbc955c": e.colorFilled,
      "42d6712b": e.colorUnfilled
    }));
    const e = t, s = r(() => e.max <= e.value), n = r(() => e.strokeWidth), u = r(() => e.strokeWidthUnfilled || e.strokeWidth), v = r(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": s.value,
      "circle-progress__line--unfilled": !s.value
    })), _ = r(() => ({
      strokeDashoffset: f.value,
      strokeDasharray: l.value
    })), h = parseInt(n.value), m = parseInt(u.value), y = 48 - (Math.max(h, m) - 5) / 2, d = r(() => s.value ? e.max : e.value), k = r(() => e.startAngle - 90), x = p(null), a = p(y), l = r(() => a.value * Math.PI * 2), f = r(() => e.reversedFilling ? l.value - l.value * (e.max - d.value) / e.max : l.value - l.value * d.value / e.max), S = r(() => Math.floor(e.value / e.max * 100) + "%");
    return (g, P) => (i(), o("div", N, [
      (i(), o("svg", {
        class: "circle-progress__svg",
        viewBox: "-2 -2 106 106",
        width: t.size,
        height: t.size
      }, [
        c("circle", {
          class: "circle-progress__circle circle-progress__line--back",
          r: a.value,
          cx: "52",
          cy: "52"
        }, null, 8, z),
        c("circle", {
          class: B(["circle-progress__circle circle-progress__line--top", v.value]),
          style: C(_.value),
          transform: `rotate(${k.value} 52 52)`,
          ref_key: "fillingCircle",
          ref: x,
          r: a.value,
          cx: "52",
          cy: "52"
        }, null, 14, A)
      ], 8, U)),
      c("div", D, [
        t.percentage ? (i(), o("span", E, W(S.value), 1)) : F("", !0),
        b(g.$slots, "default")
      ])
    ]));
  }
};
export {
  M as CircleProgressBar
};
