(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@keyframes filling{0%{stroke-dashoffset:var(--152fcbc2)}to{stroke-dashoffset:var(--b0018f6c)}}.circle-progress__circle{fill:transparent;stroke-width:var(--e96bf46a)}.circle-progress__line--back{stroke:var(--4b02e4f2);stroke-dashoffset:0}.circle-progress__line--top{animation-name:filling;animation-duration:var(--18066ad5);animation-timing-function:ease-in;transition:.5s all}.circle-progress__line--top--rounded{stroke-linecap:round}.circle-progress{display:flex;position:relative;justify-content:center;align-items:center}.circle-progress__line--filled{stroke:var(--3c598e02)}.circle-progress__line--unfilled{stroke:var(--bf0a444a)}.circle-progress__content{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;flex-direction:column}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { useCssVars as h, computed as r, ref as f, openBlock as i, createElementBlock as c, createElementVNode as o, normalizeClass as y, normalizeStyle as k, toDisplayString as x, createCommentVNode as B, renderSlot as q } from "vue";
const C = { class: "circle-progress" }, S = ["width", "height"], b = ["r"], F = ["r"], z = { class: "circle-progress__content" }, D = {
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
    }
  },
  setup(t) {
    h((d) => ({
      "152fcbc2": l.value,
      b0018f6c: u.value,
      e96bf46a: e.strokeWidth,
      "4b02e4f2": e.colorBack,
      "18066ad5": e.animationDuration,
      "3c598e02": e.colorFilled,
      bf0a444a: e.colorUnfilled
    }));
    const e = t, s = r(() => e.max <= e.value), g = r(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": s.value,
      "circle-progress__line--unfilled": !s.value
    })), p = r(() => ({
      strokeDashoffset: u.value,
      strokeDasharray: l.value
    })), _ = 48 - (parseInt(e.strokeWidth) - 5) / 2, n = r(() => s.value ? e.max : e.value), v = f(null), a = f(_), l = r(() => a.value * Math.PI * 2), u = r(() => e.reversedFilling ? l.value - l.value * (e.max - n.value) / e.max : l.value - l.value * n.value / e.max), m = r(() => Math.floor(e.value / e.max * 100) + "%");
    return (d, N) => (i(), c("div", C, [
      (i(), c("svg", {
        class: "circle-progress__svg",
        viewBox: "-2 -2 106 106",
        width: t.size,
        height: t.size
      }, [
        o("circle", {
          class: "circle-progress__circle circle-progress__line--back",
          r: a.value,
          cx: "52",
          cy: "52"
        }, null, 8, b),
        o("circle", {
          class: y(["circle-progress__circle circle-progress__line--top", g.value]),
          style: k(p.value),
          ref_key: "fillingCircle",
          ref: v,
          r: a.value,
          cx: "52",
          cy: "52",
          transform: "rotate(-270 52 52)"
        }, null, 14, F)
      ], 8, S)),
      o("div", z, [
        t.percentage ? (i(), c("span", D, x(m.value), 1)) : B("", !0),
        q(d.$slots, "default")
      ])
    ]));
  }
};
export {
  I as CircleProgressBar
};
