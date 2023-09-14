(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@keyframes filling{0%{stroke-dashoffset:var(--c8087d6a)}to{stroke-dashoffset:var(--0a9c183e)}}.circle-progress__circle{fill:transparent;stroke-width:var(--241f3b58)}.circle-progress__line--back{stroke:var(--fa170f60);stroke-dashoffset:0}.circle-progress__line--top{animation-name:filling;animation-duration:var(--72ad7c9e);animation-timing-function:ease-in;transition:.5s all}.circle-progress__line--top--rounded{stroke-linecap:round}.circle-progress{display:flex;position:relative;justify-content:center;align-items:center}.circle-progress__line--filled{stroke:var(--c2002aea)}.circle-progress__line--unfilled{stroke:var(--1a0787b8)}.circle-progress__content{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;flex-direction:column}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { useCssVars as m, computed as r, ref as f, openBlock as i, createElementBlock as c, createElementVNode as o, normalizeClass as y, normalizeStyle as h, toDisplayString as x, createCommentVNode as B, renderSlot as C } from "vue";
const k = { class: "circle-progress" }, q = ["width", "height"], S = ["r"], F = ["r"], b = { class: "circle-progress__content" }, z = {
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
  setup(s) {
    const e = s;
    m((d) => ({
      c8087d6a: l.value,
      "0a9c183e": u.value,
      "241f3b58": e.strokeWidth,
      fa170f60: e.colorBack,
      "72ad7c9e": e.animationDuration,
      c2002aea: e.colorFilled,
      "1a0787b8": e.colorUnfilled
    }));
    const t = r(() => e.max <= e.value), _ = r(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": t.value,
      "circle-progress__line--unfilled": !t.value
    })), g = r(() => ({
      strokeDashoffset: u.value,
      strokeDasharray: l.value
    })), n = r(() => t.value ? e.max : e.value), p = f(null), a = f(48), l = r(() => a.value * Math.PI * 2), u = r(() => e.reversedFilling ? l.value - l.value * (e.max - n.value) / e.max : l.value - l.value * n.value / e.max), v = r(() => Math.floor(e.value / e.max * 100) + "%");
    return (d, D) => (i(), c("div", k, [
      (i(), c("svg", {
        class: "circle-progress__svg",
        viewBox: "0 0 104 104",
        width: s.size,
        height: s.size
      }, [
        o("circle", {
          class: "circle-progress__circle circle-progress__line--back",
          r: a.value,
          cx: "52",
          cy: "52"
        }, null, 8, S),
        o("circle", {
          class: y(["circle-progress__circle circle-progress__line--top", _.value]),
          style: h(g.value),
          ref_key: "fillingCircle",
          ref: p,
          r: a.value,
          cx: "52",
          cy: "52",
          transform: "rotate(-270 52 52)"
        }, null, 14, F)
      ], 8, q)),
      o("div", b, [
        s.percentage ? (i(), c("span", z, x(v.value), 1)) : B("", !0),
        C(d.$slots, "default")
      ])
    ]));
  }
};
export {
  N as CircleProgressBar
};
