(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@keyframes filling{0%{stroke-dashoffset:var(--0f014bb6)}to{stroke-dashoffset:var(--2f449254)}}.circle-progress__circle{fill:transparent;stroke-width:var(--686651bf)}.circle-progress__line--back{stroke:var(--1665467b);stroke-dashoffset:0}.circle-progress__line--top{animation-name:filling;animation-duration:var(--e222206e);animation-timing-function:ease-in;transition:.5s all}.circle-progress__line--top--rounded{stroke-linecap:round}.circle-progress{display:flex;position:relative;justify-content:center;align-items:center}.circle-progress__line--filled{stroke:var(--1975d9f6)}.circle-progress__line--unfilled{stroke:var(--b0980662)}.circle-progress__content{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;flex-direction:column}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { useCssVars as y, computed as r, ref as f, openBlock as i, createElementBlock as o, createElementVNode as c, normalizeClass as k, normalizeStyle as x, toDisplayString as q, createCommentVNode as B, renderSlot as C } from "vue";
const S = { class: "circle-progress" }, b = ["width", "height"], F = ["r"], N = ["transform", "r"], z = { class: "circle-progress__content" }, A = {
  key: 0,
  class: "circle-progress__percentage"
}, I = {
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
    },
    startAngle: {
      type: Number,
      required: !1,
      default: 180
    }
  },
  setup(t) {
    y((d) => ({
      "0f014bb6": l.value,
      "2f449254": u.value,
      "686651bf": e.strokeWidth,
      "1665467b": e.colorBack,
      e222206e: e.animationDuration,
      "1975d9f6": e.colorFilled,
      b0980662: e.colorUnfilled
    }));
    const e = t, s = r(() => e.max <= e.value), g = r(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": s.value,
      "circle-progress__line--unfilled": !s.value
    })), p = r(() => ({
      strokeDashoffset: u.value,
      strokeDasharray: l.value
    })), _ = 48 - (parseInt(e.strokeWidth) - 5) / 2, n = r(() => s.value ? e.max : e.value), v = r(() => e.startAngle - 90), m = f(null), a = f(_), l = r(() => a.value * Math.PI * 2), u = r(() => e.reversedFilling ? l.value - l.value * (e.max - n.value) / e.max : l.value - l.value * n.value / e.max), h = r(() => Math.floor(e.value / e.max * 100) + "%");
    return (d, E) => (i(), o("div", S, [
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
        }, null, 8, F),
        c("circle", {
          class: k(["circle-progress__circle circle-progress__line--top", g.value]),
          style: x(p.value),
          transform: `rotate(${v.value} 52 52)`,
          ref_key: "fillingCircle",
          ref: m,
          r: a.value,
          cx: "52",
          cy: "52"
        }, null, 14, N)
      ], 8, b)),
      c("div", z, [
        t.percentage ? (i(), o("span", A, q(h.value), 1)) : B("", !0),
        C(d.$slots, "default")
      ])
    ]));
  }
};
export {
  I as CircleProgressBar
};
