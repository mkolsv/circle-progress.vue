(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@keyframes filling{0%{stroke-dashoffset:var(--2040a67a)}to{stroke-dashoffset:var(--01ec96dc)}}.circle-progress__circle{fill:transparent;stroke-width:var(--5e10a883)}.circle-progress__line--back{stroke:var(--6d7e7e3f);stroke-dashoffset:0}.circle-progress__line--top{animation-name:filling;animation-duration:var(--1573b8e6);animation-timing-function:ease-in;transition:.5s all}.circle-progress__line--top--rounded{stroke-linecap:round}.circle-progress{display:flex;position:relative;justify-content:center;align-items:center}.circle-progress__line--filled{stroke:var(--0f2030ba)}.circle-progress__line--unfilled{stroke:var(--47b89ada)}.circle-progress__content{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;flex-direction:column}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { useCssVars as m, computed as r, ref as f, openBlock as i, createElementBlock as c, createElementVNode as o, normalizeClass as h, normalizeStyle as y, toDisplayString as x, createCommentVNode as B, renderSlot as k } from "vue";
const q = { class: "circle-progress" }, C = ["width", "height"], S = ["r"], F = ["r"], b = { class: "circle-progress__content" }, z = {
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
    },
    size: {
      type: [String, Number],
      required: !1,
      default: "124"
    }
  },
  setup(t) {
    m((d) => ({
      "2040a67a": l.value,
      "01ec96dc": u.value,
      "5e10a883": e.strokeWidth,
      "6d7e7e3f": e.colorBack,
      "1573b8e6": e.animationDuration,
      "0f2030ba": e.colorFilled,
      "47b89ada": e.colorUnfilled
    }));
    const e = t, s = r(() => e.max <= e.value), g = r(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": s.value,
      "circle-progress__line--unfilled": !s.value
    })), p = r(() => ({
      strokeDashoffset: u.value,
      strokeDasharray: l.value
    })), n = r(() => s.value ? e.max : e.value), _ = f(null), a = f(48), l = r(() => a.value * Math.PI * 2), u = r(() => e.reversedFilling ? l.value - l.value * (e.max - n.value) / e.max : l.value - l.value * n.value / e.max), v = r(() => Math.floor(e.value / e.max * 100) + "%");
    return (d, D) => (i(), c("div", q, [
      (i(), c("svg", {
        class: "circle-progress__svg",
        viewBox: "-2 -2 108 108",
        width: t.size,
        height: t.size
      }, [
        o("circle", {
          class: "circle-progress__circle circle-progress__line--back",
          r: a.value,
          cx: "52",
          cy: "52"
        }, null, 8, S),
        o("circle", {
          class: h(["circle-progress__circle circle-progress__line--top", g.value]),
          style: y(p.value),
          ref_key: "fillingCircle",
          ref: _,
          r: a.value,
          cx: "52",
          cy: "52",
          transform: "rotate(-270 52 52)"
        }, null, 14, F)
      ], 8, C)),
      o("div", b, [
        t.percentage ? (i(), c("span", z, x(v.value), 1)) : B("", !0),
        k(d.$slots, "default")
      ])
    ]));
  }
};
export {
  N as CircleProgressBar
};
