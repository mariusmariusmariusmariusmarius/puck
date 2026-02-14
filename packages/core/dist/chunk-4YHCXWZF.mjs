import {
  createReducer,
  getItem,
  makeStatePublic
} from "./chunk-37HTE4KO.mjs";
import {
  defaultAppState,
  defaultViewports,
  getChanged,
  resolveComponentData
} from "./chunk-MDUBGHWF.mjs";
import {
  get_class_name_factory_default
} from "./chunk-Y2EFNT5P.mjs";
import {
  generateId,
  walkAppState
} from "./chunk-PMXRXC2B.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  init_react_import
} from "./chunk-M6W7YEVX.mjs";

// ../../node_modules/lucide-react/dist/esm/icons/align-left.js
init_react_import();

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
init_react_import();
import { forwardRef as forwardRef2, createElement as createElement2 } from "react";

// ../../node_modules/lucide-react/dist/esm/shared/src/utils.js
init_react_import();
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// ../../node_modules/lucide-react/dist/esm/Icon.js
init_react_import();
import { forwardRef, createElement } from "react";

// ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
init_react_import();
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../node_modules/lucide-react/dist/esm/Icon.js
var Icon = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode
    } = _b, rest = __objRest(_b, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode"
    ]);
    return createElement(
      "svg",
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, defaultAttributes), {
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className)
      }), rest),
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef2(
    (_a, ref) => {
      var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
      return createElement2(Icon, __spreadValues({
        ref,
        iconNode,
        className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className)
      }, props));
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// ../../node_modules/lucide-react/dist/esm/icons/align-left.js
var AlignLeft = createLucideIcon("AlignLeft", [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/heading.js
init_react_import();
var Heading = createLucideIcon("Heading", [
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M6 20V4", key: "1w1bmo" }],
  ["path", { d: "M18 20V4", key: "o2hl4u" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/list.js
init_react_import();
var List = createLucideIcon("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);

// ../../node_modules/lucide-react/dist/esm/lucide-react.js
init_react_import();

// ../../node_modules/lucide-react/dist/esm/icons/align-center.js
init_react_import();
var AlignCenter = createLucideIcon("AlignCenter", [
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 18H5", key: "18s9l3" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/align-justify.js
init_react_import();
var AlignJustify = createLucideIcon("AlignJustify", [
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 18h18", key: "1h113x" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/align-right.js
init_react_import();
var AlignRight = createLucideIcon("AlignRight", [
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 18H7", key: "1ygte8" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/bold.js
init_react_import();
var Bold = createLucideIcon("Bold", [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
]);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-down.js
init_react_import();
var ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
init_react_import();
var ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-up.js
init_react_import();
var ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);

// ../../node_modules/lucide-react/dist/esm/icons/circle-check-big.js
init_react_import();
var CircleCheckBig = createLucideIcon("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/code.js
init_react_import();
var Code = createLucideIcon("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/copy.js
init_react_import();
var Copy = createLucideIcon("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/corner-left-up.js
init_react_import();
var CornerLeftUp = createLucideIcon("CornerLeftUp", [
  ["polyline", { points: "14 9 9 4 4 9", key: "m9oyvo" }],
  ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
init_react_import();
var EllipsisVertical = createLucideIcon("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/expand.js
init_react_import();
var Expand = createLucideIcon("Expand", [
  ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
  ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
  ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
  ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/globe.js
init_react_import();
var Globe = createLucideIcon("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/hammer.js
init_react_import();
var Hammer = createLucideIcon("Hammer", [
  ["path", { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9", key: "eefl8a" }],
  ["path", { d: "m18 15 4-4", key: "16gjal" }],
  [
    "path",
    {
      d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
      key: "b7pghm"
    }
  ]
]);

// ../../node_modules/lucide-react/dist/esm/icons/hash.js
init_react_import();
var Hash = createLucideIcon("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/heading-1.js
init_react_import();
var Heading1 = createLucideIcon("Heading1", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/heading-2.js
init_react_import();
var Heading2 = createLucideIcon("Heading2", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/heading-3.js
init_react_import();
var Heading3 = createLucideIcon("Heading3", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/heading-4.js
init_react_import();
var Heading4 = createLucideIcon("Heading4", [
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 10v3a1 1 0 0 0 1 1h3", key: "tj5zdr" }],
  ["path", { d: "M21 10v8", key: "1kdml4" }],
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/heading-5.js
init_react_import();
var Heading5 = createLucideIcon("Heading5", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 13v-3h4", key: "1nvgqp" }],
  [
    "path",
    { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17", key: "2nebdn" }
  ]
]);

// ../../node_modules/lucide-react/dist/esm/icons/heading-6.js
init_react_import();
var Heading6 = createLucideIcon("Heading6", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["circle", { cx: "19", cy: "16", r: "2", key: "15mx69" }],
  ["path", { d: "M20 10c-2 2-3 3.5-3 6", key: "f35dl0" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/italic.js
init_react_import();
var Italic = createLucideIcon("Italic", [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/layers.js
init_react_import();
var Layers = createLucideIcon("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
]);

// ../../node_modules/lucide-react/dist/esm/icons/layout-grid.js
init_react_import();
var LayoutGrid = createLucideIcon("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/link.js
init_react_import();
var Link = createLucideIcon("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/list-ordered.js
init_react_import();
var ListOrdered = createLucideIcon("ListOrdered", [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/lock-open.js
init_react_import();
var LockOpen = createLucideIcon("LockOpen", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/lock.js
init_react_import();
var Lock = createLucideIcon("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/maximize-2.js
init_react_import();
var Maximize2 = createLucideIcon("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/minimize-2.js
init_react_import();
var Minimize2 = createLucideIcon("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/minus.js
init_react_import();
var Minus = createLucideIcon("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);

// ../../node_modules/lucide-react/dist/esm/icons/monitor.js
init_react_import();
var Monitor = createLucideIcon("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/panel-left.js
init_react_import();
var PanelLeft = createLucideIcon("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/panel-right.js
init_react_import();
var PanelRight = createLucideIcon("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/plus.js
init_react_import();
var Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/quote.js
init_react_import();
var Quote = createLucideIcon("Quote", [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
]);

// ../../node_modules/lucide-react/dist/esm/icons/rectangle-ellipsis.js
init_react_import();
var RectangleEllipsis = createLucideIcon("RectangleEllipsis", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/redo-2.js
init_react_import();
var Redo2 = createLucideIcon("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/search.js
init_react_import();
var Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js
init_react_import();
var SlidersHorizontal = createLucideIcon("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/smartphone.js
init_react_import();
var Smartphone = createLucideIcon("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/square-code.js
init_react_import();
var SquareCode = createLucideIcon("SquareCode", [
  ["path", { d: "M10 9.5 8 12l2 2.5", key: "3mjy60" }],
  ["path", { d: "m14 9.5 2 2.5-2 2.5", key: "1bir2l" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/strikethrough.js
init_react_import();
var Strikethrough = createLucideIcon("Strikethrough", [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/tablet.js
init_react_import();
var Tablet = createLucideIcon("Tablet", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/toy-brick.js
init_react_import();
var ToyBrick = createLucideIcon("ToyBrick", [
  ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1", key: "158fvp" }],
  ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3", key: "s0042v" }],
  ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3", key: "9wmeh2" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/trash.js
init_react_import();
var Trash = createLucideIcon("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/type.js
init_react_import();
var Type = createLucideIcon("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/underline.js
init_react_import();
var Underline = createLucideIcon("Underline", [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/undo-2.js
init_react_import();
var Undo2 = createLucideIcon("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/x.js
init_react_import();
var X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/zoom-in.js
init_react_import();
var ZoomIn = createLucideIcon("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/zoom-out.js
init_react_import();
var ZoomOut = createLucideIcon("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);

// store/index.ts
init_react_import();
import { create as create2, useStore } from "zustand";
import { subscribeWithSelector as subscribeWithSelector2 } from "zustand/middleware";
import { createContext, useContext } from "react";

// store/slices/history.ts
init_react_import();
import { useEffect as useEffect2 } from "react";

// lib/use-hotkey.ts
init_react_import();
import { useEffect } from "react";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
var keyCodeMap = {
  ControlLeft: "ctrl",
  ControlRight: "ctrl",
  MetaLeft: "meta",
  MetaRight: "meta",
  ShiftLeft: "shift",
  ShiftRight: "shift",
  KeyA: "a",
  KeyB: "b",
  KeyC: "c",
  KeyD: "d",
  KeyE: "e",
  KeyF: "f",
  KeyG: "g",
  KeyH: "h",
  KeyI: "i",
  KeyJ: "j",
  KeyK: "k",
  KeyL: "l",
  KeyM: "m",
  KeyN: "n",
  KeyO: "o",
  KeyP: "p",
  KeyQ: "q",
  KeyR: "r",
  KeyS: "s",
  KeyT: "t",
  KeyU: "u",
  KeyV: "v",
  KeyW: "w",
  KeyX: "x",
  KeyY: "y",
  KeyZ: "z",
  Delete: "delete",
  Backspace: "backspace"
};
var useHotkeyStore = create()(
  subscribeWithSelector((set) => ({
    held: {},
    hold: (key) => set((s) => s.held[key] ? s : { held: __spreadProps(__spreadValues({}, s.held), { [key]: true }) }),
    release: (key) => set((s) => s.held[key] ? { held: __spreadProps(__spreadValues({}, s.held), { [key]: false }) } : s),
    reset: (held = {}) => set(() => ({ held })),
    triggers: {}
  }))
);
var monitorHotkeys = (doc) => {
  const onKeyDown = (e) => {
    const key = keyCodeMap[e.code];
    if (key) {
      useHotkeyStore.getState().hold(key);
      const { held, triggers } = useHotkeyStore.getState();
      Object.values(triggers).forEach(({ combo, cb }) => {
        const conditionMet = Object.entries(combo).every(
          ([key2, value]) => value === !!held[key2]
        ) && Object.entries(held).every(
          ([key2, value]) => value === !!combo[key2]
        );
        if (conditionMet) {
          const handled = cb(e);
          if (handled !== false) {
            e.preventDefault();
          }
        }
      });
      if (key !== "meta" && key !== "ctrl" && key !== "shift") {
        useHotkeyStore.getState().release(key);
      }
    }
  };
  const onKeyUp = (e) => {
    const key = keyCodeMap[e.code];
    if (key) {
      if (key === "meta") {
        useHotkeyStore.getState().reset();
      } else {
        useHotkeyStore.getState().release(key);
      }
    }
  };
  const onVisibilityChanged = (e) => {
    if (document.visibilityState === "hidden") {
      useHotkeyStore.getState().reset();
    }
  };
  const onBlur = () => {
    useHotkeyStore.getState().reset();
  };
  window.addEventListener("blur", onBlur);
  doc.addEventListener("keydown", onKeyDown);
  doc.addEventListener("keyup", onKeyUp);
  doc.addEventListener("visibilitychange", onVisibilityChanged);
  return () => {
    doc.removeEventListener("keydown", onKeyDown);
    doc.removeEventListener("keyup", onKeyUp);
    doc.removeEventListener("visibilitychange", onVisibilityChanged);
    window.removeEventListener("blur", onBlur);
  };
};
var useMonitorHotkeys = () => {
  useEffect(() => monitorHotkeys(document), []);
};
var useHotkey = (combo, cb) => {
  useEffect(
    () => useHotkeyStore.setState((s) => ({
      triggers: __spreadProps(__spreadValues({}, s.triggers), {
        [`${Object.keys(combo).join("+")}`]: { combo, cb }
      })
    })),
    []
  );
};

// store/slices/history.ts
var EMPTY_HISTORY_INDEX = 0;
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
var tidyState = (state) => {
  return __spreadProps(__spreadValues({}, state), {
    ui: __spreadProps(__spreadValues({}, state.ui), {
      field: __spreadProps(__spreadValues({}, state.ui.field), {
        focus: null
      })
    })
  });
};
var createHistorySlice = (set, get) => {
  const record = debounce((state) => {
    const { histories, index } = get().history;
    const history = {
      state,
      id: generateId("history")
    };
    const newHistories = [...histories.slice(0, index + 1), history];
    set({
      history: __spreadProps(__spreadValues({}, get().history), {
        histories: newHistories,
        index: newHistories.length - 1
      })
    });
  }, 250);
  return {
    initialAppState: {},
    index: EMPTY_HISTORY_INDEX,
    histories: [],
    hasPast: () => get().history.index > EMPTY_HISTORY_INDEX,
    hasFuture: () => get().history.index < get().history.histories.length - 1,
    prevHistory: () => {
      const { history } = get();
      return history.hasPast() ? history.histories[history.index - 1] : null;
    },
    nextHistory: () => {
      const s = get().history;
      return s.hasFuture() ? s.histories[s.index + 1] : null;
    },
    currentHistory: () => get().history.histories[get().history.index],
    back: () => {
      var _a;
      const { history, dispatch } = get();
      if (history.hasPast()) {
        const state = tidyState(
          ((_a = history.prevHistory()) == null ? void 0 : _a.state) || history.initialAppState
        );
        dispatch({
          type: "set",
          state
        });
        set({ history: __spreadProps(__spreadValues({}, history), { index: history.index - 1 }) });
      }
    },
    forward: () => {
      var _a;
      const { history, dispatch } = get();
      if (history.hasFuture()) {
        const state = (_a = history.nextHistory()) == null ? void 0 : _a.state;
        dispatch({ type: "set", state: state ? tidyState(state) : {} });
        set({ history: __spreadProps(__spreadValues({}, history), { index: history.index + 1 }) });
      }
    },
    setHistories: (histories) => {
      var _a;
      const { dispatch, history } = get();
      dispatch({
        type: "set",
        state: ((_a = histories[histories.length - 1]) == null ? void 0 : _a.state) || history.initialAppState
      });
      set({ history: __spreadProps(__spreadValues({}, history), { histories, index: histories.length - 1 }) });
    },
    setHistoryIndex: (index) => {
      var _a;
      const { dispatch, history } = get();
      dispatch({
        type: "set",
        state: ((_a = history.histories[index]) == null ? void 0 : _a.state) || history.initialAppState
      });
      set({ history: __spreadProps(__spreadValues({}, history), { index }) });
    },
    record
  };
};
function useRegisterHistorySlice(appStore, {
  histories,
  index,
  initialAppState
}) {
  useEffect2(
    () => appStore.setState({
      history: __spreadProps(__spreadValues({}, appStore.getState().history), {
        histories,
        index,
        initialAppState
      })
    }),
    [histories, index, initialAppState]
  );
  const back = () => {
    appStore.getState().history.back();
  };
  const forward = () => {
    appStore.getState().history.forward();
  };
  useHotkey({ meta: true, z: true }, back);
  useHotkey({ meta: true, shift: true, z: true }, forward);
  useHotkey({ meta: true, y: true }, forward);
  useHotkey({ ctrl: true, z: true }, back);
  useHotkey({ ctrl: true, shift: true, z: true }, forward);
  useHotkey({ ctrl: true, y: true }, forward);
}

// store/slices/nodes.ts
init_react_import();
var emptyMethods = {
  sync: () => null,
  hideOverlay: () => null,
  showOverlay: () => null
};
var createNodesSlice = (set, get) => {
  let pendingRegistrations = /* @__PURE__ */ new Map();
  let flushScheduled = false;
  const flushRegistrations = () => {
    const pending = pendingRegistrations;
    pendingRegistrations = /* @__PURE__ */ new Map();
    flushScheduled = false;
    if (pending.size === 0) return;
    const s = get().nodes;
    const newNodes = __spreadValues({}, s.nodes);
    for (const [id, node] of pending) {
      const existing = newNodes[id];
      newNodes[id] = __spreadProps(__spreadValues(__spreadValues({
        methods: emptyMethods,
        element: null
      }, existing), node), {
        id
      });
    }
    set({
      nodes: __spreadProps(__spreadValues({}, s), {
        nodes: newNodes
      })
    });
  };
  return {
    nodes: {},
    registerNode: (id, node) => {
      pendingRegistrations.set(id, node);
      if (!flushScheduled) {
        flushScheduled = true;
        queueMicrotask(flushRegistrations);
      }
    },
    unregisterNode: (id) => {
      const s = get().nodes;
      const existingNode = s.nodes[id];
      if (existingNode) {
        const newNodes = __spreadValues({}, s.nodes);
        delete newNodes[id];
        set({
          nodes: __spreadProps(__spreadValues({}, s), {
            nodes: newNodes
          })
        });
      }
    }
  };
};

// store/slices/permissions.ts
init_react_import();
import { useEffect as useEffect3 } from "react";

// lib/data/flatten-data.ts
init_react_import();
var flattenData = (state, config) => {
  const data = [];
  walkAppState(
    state,
    config,
    (content) => content,
    (item) => {
      data.push(item);
      return item;
    }
  );
  return data;
};

// store/slices/permissions.ts
var createPermissionsSlice = (set, get) => {
  const resolvePermissions = (..._0) => __async(null, [..._0], function* (params = {}, force) {
    const { state, permissions, config } = get();
    const { cache, globalPermissions } = permissions;
    const resolvePermissionsForItem = (item2, force2 = false) => __async(null, null, function* () {
      var _a, _b;
      const { config: config2, state: appState, setComponentLoading } = get();
      const itemCache = cache[item2.props.id];
      const nodes = appState.indexes.nodes;
      const parentId = (_a = nodes[item2.props.id]) == null ? void 0 : _a.parentId;
      const parentNode = parentId ? nodes[parentId] : null;
      const parentData = (_b = parentNode == null ? void 0 : parentNode.data) != null ? _b : null;
      const componentConfig = item2.type === "root" ? config2.root : config2.components[item2.type];
      if (!componentConfig) {
        return;
      }
      const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig.permissions);
      if (componentConfig.resolvePermissions) {
        const changed = getChanged(item2, itemCache == null ? void 0 : itemCache.lastData);
        const propsChanged = Object.values(changed).some((el) => el === true);
        const parentChanged = (itemCache == null ? void 0 : itemCache.lastParentId) !== parentId;
        if (propsChanged || parentChanged || force2) {
          const clearTimeout2 = setComponentLoading(item2.props.id, true, 50);
          const resolvedPermissions = yield componentConfig.resolvePermissions(
            item2,
            {
              changed,
              lastPermissions: (itemCache == null ? void 0 : itemCache.lastPermissions) || null,
              permissions: initialPermissions,
              appState: makeStatePublic(appState),
              lastData: (itemCache == null ? void 0 : itemCache.lastData) || null,
              parent: parentData
            }
          );
          const latest = get().permissions;
          set({
            permissions: __spreadProps(__spreadValues({}, latest), {
              cache: __spreadProps(__spreadValues({}, latest.cache), {
                [item2.props.id]: {
                  lastParentId: parentId,
                  lastData: item2,
                  lastPermissions: resolvedPermissions
                }
              }),
              resolvedPermissions: __spreadProps(__spreadValues({}, latest.resolvedPermissions), {
                [item2.props.id]: resolvedPermissions
              })
            })
          });
          clearTimeout2();
        }
      }
    });
    const resolvePermissionsForRoot = (force2 = false) => {
      const { state: appState } = get();
      resolvePermissionsForItem(
        // Shim the root data in by conforming to component data shape
        {
          type: "root",
          props: __spreadProps(__spreadValues({}, appState.data.root.props), { id: "root" })
        },
        force2
      );
    };
    const { item, type, root } = params;
    if (item) {
      yield resolvePermissionsForItem(item, force);
    } else if (type) {
      flattenData(state, config).filter((item2) => item2.type === type).map((item2) => __async(null, null, function* () {
        yield resolvePermissionsForItem(item2, force);
      }));
    } else if (root) {
      resolvePermissionsForRoot(force);
    } else {
      flattenData(state, config).map((item2) => __async(null, null, function* () {
        yield resolvePermissionsForItem(item2, force);
      }));
    }
  });
  const refreshPermissions = (params) => resolvePermissions(params, true);
  return {
    cache: {},
    globalPermissions: {
      drag: true,
      edit: true,
      delete: true,
      duplicate: true,
      insert: true
    },
    resolvedPermissions: {},
    getPermissions: ({ item, type, root } = {}) => {
      const { config, permissions } = get();
      const { globalPermissions, resolvedPermissions } = permissions;
      if (item) {
        const componentConfig = config.components[item.type];
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
        const resolvedForItem = resolvedPermissions[item.props.id];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      } else if (type) {
        const componentConfig = config.components[type];
        return __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
      } else if (root) {
        const rootConfig = config.root;
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), rootConfig == null ? void 0 : rootConfig.permissions);
        const resolvedForItem = resolvedPermissions["root"];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      }
      return globalPermissions;
    },
    resolvePermissions,
    refreshPermissions
  };
};
var useRegisterPermissionsSlice = (appStore, globalPermissions) => {
  useEffect3(() => {
    const { permissions } = appStore.getState();
    const { globalPermissions: existingGlobalPermissions } = permissions;
    appStore.setState({
      permissions: __spreadProps(__spreadValues({}, permissions), {
        globalPermissions: __spreadValues(__spreadValues({}, existingGlobalPermissions), globalPermissions)
      })
    });
    permissions.resolvePermissions();
  }, [globalPermissions]);
  useEffect3(() => {
    return appStore.subscribe(
      (s) => s.state.data,
      () => {
        if (appStore.getState().state.ui.isDragging) return;
        appStore.getState().permissions.resolvePermissions();
      }
    );
  }, []);
  useEffect3(() => {
    return appStore.subscribe(
      (s) => s.state.ui.isDragging,
      (isDragging) => {
        if (!isDragging) {
          appStore.getState().permissions.resolvePermissions();
        }
      }
    );
  }, []);
  useEffect3(() => {
    return appStore.subscribe(
      (s) => s.config,
      () => {
        appStore.getState().permissions.resolvePermissions();
      }
    );
  }, []);
};

// store/slices/fields.ts
init_react_import();
import { useCallback, useEffect as useEffect4 } from "react";
var createFieldsSlice = (_set, _get) => {
  return {
    fields: {},
    loading: false,
    lastResolvedData: {},
    id: void 0
  };
};
var useRegisterFieldsSlice = (appStore, id) => {
  const resolveFields = useCallback(
    (reset) => __async(null, null, function* () {
      var _a, _b;
      const { fields, lastResolvedData } = appStore.getState().fields;
      const metadata = appStore.getState().metadata;
      const nodes = appStore.getState().state.indexes.nodes;
      const node = nodes[id || "root"];
      const componentData = node == null ? void 0 : node.data;
      const parentNode = (node == null ? void 0 : node.parentId) ? nodes[node.parentId] : null;
      const parent = (parentNode == null ? void 0 : parentNode.data) || null;
      const { getComponentConfig, state } = appStore.getState();
      const componentConfig = getComponentConfig(componentData == null ? void 0 : componentData.type);
      if (!componentData || !componentConfig) return;
      const defaultFields = componentConfig.fields || {};
      const resolver = componentConfig.resolveFields;
      let lastFields = fields;
      if (reset) {
        appStore.setState((s) => ({
          fields: __spreadProps(__spreadValues({}, s.fields), { fields: defaultFields, id })
        }));
        lastFields = defaultFields;
      }
      if (resolver) {
        const timeout = setTimeout(() => {
          appStore.setState((s) => ({
            fields: __spreadProps(__spreadValues({}, s.fields), { loading: true })
          }));
        }, 50);
        const lastData = ((_a = lastResolvedData.props) == null ? void 0 : _a.id) === id ? lastResolvedData : null;
        const changed = getChanged(componentData, lastData);
        const newFields = yield resolver(componentData, {
          changed,
          fields: defaultFields,
          lastFields,
          metadata: __spreadValues(__spreadValues({}, metadata), componentConfig.metadata),
          lastData,
          appState: makeStatePublic(state),
          parent
        });
        clearTimeout(timeout);
        if (((_b = appStore.getState().selectedItem) == null ? void 0 : _b.props.id) !== id) {
          return;
        }
        appStore.setState({
          fields: {
            fields: newFields,
            loading: false,
            lastResolvedData: componentData,
            id
          }
        });
      } else {
        appStore.setState((s) => ({
          fields: __spreadProps(__spreadValues({}, s.fields), { fields: defaultFields, id })
        }));
      }
    }),
    [id]
  );
  useEffect4(() => {
    resolveFields(true);
    return appStore.subscribe(
      (s) => s.state.indexes.nodes[id || "root"],
      () => resolveFields()
    );
  }, [id]);
};

// lib/data/to-root.ts
init_react_import();
var toRoot = (item) => {
  if ("type" in item && item.type !== "root") {
    throw new Error("Converting non-root item to root.");
  }
  const { readOnly } = item;
  if (item.props) {
    if ("id" in item.props) {
      const _a = item.props, { id } = _a, props = __objRest(_a, ["id"]);
      return { props, readOnly };
    }
    return { props: item.props, readOnly };
  }
  return { props: {}, readOnly };
};

// store/index.ts
var defaultPageFields = {
  title: { type: "text" }
};
var createAppStore = (initialAppStore) => create2()(
  subscribeWithSelector2((set, get) => {
    var _a, _b;
    return __spreadProps(__spreadValues({
      instanceId: generateId(),
      state: defaultAppState,
      config: { components: {} },
      componentState: {},
      plugins: [],
      overrides: {},
      viewports: defaultViewports,
      zoomConfig: {
        autoZoom: 1,
        rootHeight: 0,
        zoom: 1
      },
      status: "LOADING",
      iframe: {},
      metadata: {},
      fieldTransforms: {}
    }, initialAppStore), {
      fields: createFieldsSlice(set, get),
      history: createHistorySlice(set, get),
      nodes: createNodesSlice(set, get),
      permissions: createPermissionsSlice(set, get),
      getCurrentData: () => {
        var _a2;
        const s = get();
        return (_a2 = s.selectedItem) != null ? _a2 : s.state.data.root;
      },
      getComponentConfig: (type) => {
        var _a2;
        const { config, selectedItem } = get();
        const rootFields = ((_a2 = config.root) == null ? void 0 : _a2.fields) || defaultPageFields;
        return type && type !== "root" ? config.components[type] : selectedItem ? config.components[selectedItem.type] : __spreadProps(__spreadValues({}, config.root), { fields: rootFields });
      },
      selectedItem: ((_a = initialAppStore == null ? void 0 : initialAppStore.state) == null ? void 0 : _a.ui.itemSelector) ? getItem(
        (_b = initialAppStore == null ? void 0 : initialAppStore.state) == null ? void 0 : _b.ui.itemSelector,
        initialAppStore.state
      ) : null,
      dispatch: (action) => set((s) => {
        var _a2, _b2;
        const { record } = get().history;
        const dispatch = createReducer({
          record,
          appStore: s
        });
        const state = dispatch(s.state, action);
        const selectedItem = state.ui.itemSelector ? getItem(state.ui.itemSelector, state) : null;
        (_b2 = (_a2 = get()).onAction) == null ? void 0 : _b2.call(_a2, action, state, get().state);
        return __spreadProps(__spreadValues({}, s), { state, selectedItem });
      }),
      setZoomConfig: (zoomConfig) => set({ zoomConfig }),
      setStatus: (status) => set({ status }),
      setComponentState: (componentState) => set({ componentState }),
      pendingLoadTimeouts: {},
      setComponentLoading: (id, loading = true, defer = 0) => {
        const { setComponentState, pendingLoadTimeouts } = get();
        const loadId = generateId();
        const setLoading = () => {
          var _a2;
          const { componentState } = get();
          setComponentState(__spreadProps(__spreadValues({}, componentState), {
            [id]: __spreadProps(__spreadValues({}, componentState[id]), {
              loadingCount: (((_a2 = componentState[id]) == null ? void 0 : _a2.loadingCount) || 0) + 1
            })
          }));
        };
        const unsetLoading = () => {
          var _a2;
          const { componentState } = get();
          clearTimeout(timeout);
          delete pendingLoadTimeouts[loadId];
          set({ pendingLoadTimeouts });
          setComponentState(__spreadProps(__spreadValues({}, componentState), {
            [id]: __spreadProps(__spreadValues({}, componentState[id]), {
              loadingCount: Math.max(
                (((_a2 = componentState[id]) == null ? void 0 : _a2.loadingCount) || 0) - 1,
                0
              )
            })
          }));
        };
        const timeout = setTimeout(() => {
          if (loading) {
            setLoading();
          } else {
            unsetLoading();
          }
          delete pendingLoadTimeouts[loadId];
          set({ pendingLoadTimeouts });
        }, defer);
        set({
          pendingLoadTimeouts: __spreadProps(__spreadValues({}, pendingLoadTimeouts), {
            [id]: timeout
          })
        });
        return unsetLoading;
      },
      unsetComponentLoading: (id) => {
        const { setComponentLoading } = get();
        setComponentLoading(id, false);
      },
      // Helper
      setUi: (ui, recordHistory) => set((s) => {
        const dispatch = createReducer({
          record: () => {
          },
          appStore: s
        });
        const state = dispatch(s.state, {
          type: "setUi",
          ui,
          recordHistory
        });
        const selectedItem = state.ui.itemSelector ? getItem(state.ui.itemSelector, state) : null;
        return __spreadProps(__spreadValues({}, s), { state, selectedItem });
      }),
      resolveComponentData: (componentData, trigger) => __async(null, null, function* () {
        var _a2, _b2;
        const { config, metadata, setComponentLoading, permissions, state } = get();
        const componentId = "id" in componentData.props ? componentData.props.id : "root";
        const parentId = (_a2 = state.indexes.nodes[componentId]) == null ? void 0 : _a2.parentId;
        const parentNode = parentId ? state.indexes.nodes[parentId] : null;
        const parentData = (_b2 = parentNode == null ? void 0 : parentNode.data) != null ? _b2 : null;
        const timeouts = {};
        return yield resolveComponentData(
          componentData,
          config,
          metadata,
          (item) => {
            const id = "id" in item.props ? item.props.id : "root";
            timeouts[id] = setComponentLoading(id, true, 50);
          },
          (item) => __async(null, null, function* () {
            const id = "id" in item.props ? item.props.id : "root";
            if ("type" in item) {
              yield permissions.refreshPermissions({ item });
            } else {
              yield permissions.refreshPermissions({ root: true });
            }
            timeouts[id]();
          }),
          trigger,
          parentData
        );
      }),
      resolveAndCommitData: () => __async(null, null, function* () {
        const { config, state, dispatch, resolveComponentData: resolveComponentData2 } = get();
        walkAppState(
          state,
          config,
          (content) => content,
          (childItem) => {
            resolveComponentData2(childItem, "load").then((resolved) => {
              const { state: state2 } = get();
              const node = state2.indexes.nodes[resolved.node.props.id];
              if (node && resolved.didChange) {
                if (resolved.node.props.id === "root") {
                  dispatch({
                    type: "replaceRoot",
                    root: toRoot(resolved.node)
                  });
                } else {
                  const zoneCompound = `${node.parentId}:${node.zone}`;
                  const parentZone = state2.indexes.zones[zoneCompound];
                  const index = parentZone.contentIds.indexOf(
                    resolved.node.props.id
                  );
                  dispatch({
                    type: "replace",
                    data: resolved.node,
                    destinationIndex: index,
                    destinationZone: zoneCompound
                  });
                }
              }
            });
            return childItem;
          }
        );
      })
    });
  })
);
var appStoreContext = createContext(createAppStore());
function useAppStore(selector) {
  const context = useContext(appStoreContext);
  return useStore(context, selector);
}
function useAppStoreApi() {
  return useContext(appStoreContext);
}

// components/RichTextMenu/lib/use-control-context.ts
init_react_import();
import { createContext as createContext2, useContext as useContext2 } from "react";
var ControlContext = createContext2({});
var useControlContext = () => {
  return useContext2(ControlContext);
};

// components/RichTextMenu/components/SelectControl/index.tsx
init_react_import();
import { useMemo } from "react";

// components/Select/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/Select/styles.module.css#css-module
init_react_import();
var styles_module_default = { "Select": "_Select_xjbef_1", "Select-button": "_Select-button_xjbef_6", "Select--hasOptions": "_Select--hasOptions_xjbef_19", "Select--disabled": "_Select--disabled_xjbef_23", "Select-buttonIcon": "_Select-buttonIcon_xjbef_27", "Select--standalone": "_Select--standalone_xjbef_33", "Select--actionBar": "_Select--actionBar_xjbef_38", "Select--hasValue": "_Select--hasValue_xjbef_44", "Select-items": "_Select-items_xjbef_61", "SelectItem": "_SelectItem_xjbef_72", "SelectItem--isSelected": "_SelectItem--isSelected_xjbef_87", "SelectItem-icon": "_SelectItem-icon_xjbef_93" };

// components/Select/index.tsx
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger
} from "@radix-ui/react-popover";

// lib/index.ts
init_react_import();

// lib/filter.ts
init_react_import();

// lib/data/reorder.ts
init_react_import();
var reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// lib/data/replace.ts
init_react_import();
var replace = (list, index, newItem) => {
  const result = Array.from(list);
  result.splice(index, 1);
  result.splice(index, 0, newItem);
  return result;
};

// lib/use-reset-auto-zoom.ts
init_react_import();

// lib/get-zoom-config.ts
init_react_import();

// ../../node_modules/css-box-model/dist/css-box-model.esm.js
init_react_import();

// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
init_react_import();
var isProduction = process.env.NODE_ENV === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// ../../node_modules/css-box-model/dist/css-box-model.esm.js
var getRect = function getRect2(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
  return result;
};
var calculateBox = function calculateBox2(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};

// lib/get-zoom-config.ts
var RESET_ZOOM_SMALLER_THAN_FRAME = true;
var getZoomConfig = (uiViewport, frame, zoom) => {
  const box = getBox(frame);
  const { width: frameWidth, height: frameHeight } = box.contentBox;
  const viewportHeight = uiViewport.height === "auto" ? frameHeight : uiViewport.height;
  let rootHeight = 0;
  let autoZoom = 1;
  if (typeof uiViewport.width === "number" && (uiViewport.width > frameWidth || viewportHeight > frameHeight)) {
    const widthZoom = Math.min(frameWidth / uiViewport.width, 1);
    const heightZoom = Math.min(frameHeight / viewportHeight, 1);
    zoom = widthZoom;
    if (widthZoom < heightZoom) {
      rootHeight = viewportHeight / zoom;
    } else {
      rootHeight = viewportHeight;
      zoom = heightZoom;
    }
    autoZoom = zoom;
  } else {
    if (RESET_ZOOM_SMALLER_THAN_FRAME) {
      autoZoom = 1;
      zoom = 1;
      rootHeight = viewportHeight;
    }
  }
  return { autoZoom, rootHeight, zoom };
};

// lib/use-reset-auto-zoom.ts
var useResetAutoZoom = (frameRef) => {
  const appStoreApi = useAppStoreApi();
  const resetAutoZoom = (options) => {
    const { state, zoomConfig, setZoomConfig } = appStoreApi.getState();
    const { viewports } = state.ui;
    const newViewports = (options == null ? void 0 : options.viewports) || viewports;
    if (frameRef.current) {
      setZoomConfig(
        getZoomConfig(newViewports == null ? void 0 : newViewports.current, frameRef.current, zoomConfig.zoom)
      );
    }
  };
  return resetAutoZoom;
};

// components/Select/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("Select", styles_module_default);
var getItemClassName = get_class_name_factory_default("SelectItem", styles_module_default);
var Item = ({
  children,
  isSelected,
  onClick
}) => {
  return /* @__PURE__ */ jsx("button", { className: getItemClassName({ isSelected }), onClick, children });
};
var Select = ({
  children,
  options,
  onChange,
  value,
  defaultValue,
  mode,
  disabled = false
}) => {
  const [open, setOpen] = useState(false);
  const hasOptions = options.length > 0;
  const isDisabled = disabled || !hasOptions;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: getClassName({
        hasValue: value !== defaultValue,
        hasOptions,
        actionBar: mode === "actionBar",
        standalone: mode === "standalone",
        disabled: isDisabled
      }),
      children: /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
        hasOptions ? /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("button", { className: getClassName("button"), children: [
          /* @__PURE__ */ jsx("span", { className: getClassName("buttonIcon"), children }),
          /* @__PURE__ */ jsx(ChevronDown, { size: 12 })
        ] }) }) : /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: getClassName("button"), children: [
          /* @__PURE__ */ jsx("span", { className: getClassName("buttonIcon"), children }),
          /* @__PURE__ */ jsx(ChevronDown, { size: 12 })
        ] }) }),
        options.length > 0 && /* @__PURE__ */ jsx(PopoverPortal, { children: /* @__PURE__ */ jsx(PopoverContent, { align: "start", children: /* @__PURE__ */ jsx("ul", { className: getClassName("items"), "data-puck-rte-menu": true, children: options.map((option) => {
          const Icon2 = option.icon;
          return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            Item,
            {
              isSelected: value === option.value,
              onClick: () => {
                onChange(option.value);
                setOpen(false);
              },
              children: [
                Icon2 && /* @__PURE__ */ jsx("div", { className: getItemClassName("icon"), children: /* @__PURE__ */ jsx(Icon2, { size: 16 }) }),
                option.label
              ]
            }
          ) }, option.value);
        }) }) }) })
      ] })
    }
  );
};

// components/RichTextMenu/components/SelectControl/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function SelectControl({
  renderDefaultIcon,
  onChange,
  options,
  value,
  defaultValue
}) {
  var _a, _b;
  const { inline, readOnly } = useControlContext();
  const optionsByValue = useMemo(
    () => options.reduce(
      (acc, option) => __spreadProps(__spreadValues({}, acc), { [option.value]: option }),
      {}
    ),
    [options]
  );
  const Node = (_b = value && ((_a = optionsByValue[value]) == null ? void 0 : _a.icon)) != null ? _b : renderDefaultIcon;
  return /* @__PURE__ */ jsx2(
    Select,
    {
      options,
      onChange,
      value,
      defaultValue,
      mode: inline ? "actionBar" : "standalone",
      disabled: readOnly,
      children: /* @__PURE__ */ jsx2(Node, {})
    }
  );
}

export {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleCheckBig,
  Code,
  Copy,
  CornerLeftUp,
  EllipsisVertical,
  Expand,
  Globe,
  Hammer,
  Hash,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heading,
  Italic,
  Layers,
  LayoutGrid,
  Link,
  ListOrdered,
  List,
  LockOpen,
  Lock,
  Maximize2,
  Minimize2,
  Minus,
  Monitor,
  PanelLeft,
  PanelRight,
  Plus,
  Quote,
  RectangleEllipsis,
  Redo2,
  Search,
  SlidersHorizontal,
  Smartphone,
  SquareCode,
  Strikethrough,
  Tablet,
  ToyBrick,
  Trash,
  Type,
  Underline,
  Undo2,
  X,
  ZoomIn,
  ZoomOut,
  reorder,
  replace,
  monitorHotkeys,
  useMonitorHotkeys,
  useHotkey,
  useRegisterHistorySlice,
  useRegisterPermissionsSlice,
  useRegisterFieldsSlice,
  createAppStore,
  appStoreContext,
  useAppStore,
  useAppStoreApi,
  getBox,
  useResetAutoZoom,
  ControlContext,
  useControlContext,
  SelectControl
};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/align-left.js:
lucide-react/dist/esm/icons/heading.js:
lucide-react/dist/esm/icons/list.js:
lucide-react/dist/esm/icons/align-center.js:
lucide-react/dist/esm/icons/align-justify.js:
lucide-react/dist/esm/icons/align-right.js:
lucide-react/dist/esm/icons/bold.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/chevron-up.js:
lucide-react/dist/esm/icons/circle-check-big.js:
lucide-react/dist/esm/icons/code.js:
lucide-react/dist/esm/icons/copy.js:
lucide-react/dist/esm/icons/corner-left-up.js:
lucide-react/dist/esm/icons/ellipsis-vertical.js:
lucide-react/dist/esm/icons/expand.js:
lucide-react/dist/esm/icons/globe.js:
lucide-react/dist/esm/icons/hammer.js:
lucide-react/dist/esm/icons/hash.js:
lucide-react/dist/esm/icons/heading-1.js:
lucide-react/dist/esm/icons/heading-2.js:
lucide-react/dist/esm/icons/heading-3.js:
lucide-react/dist/esm/icons/heading-4.js:
lucide-react/dist/esm/icons/heading-5.js:
lucide-react/dist/esm/icons/heading-6.js:
lucide-react/dist/esm/icons/italic.js:
lucide-react/dist/esm/icons/layers.js:
lucide-react/dist/esm/icons/layout-grid.js:
lucide-react/dist/esm/icons/link.js:
lucide-react/dist/esm/icons/list-ordered.js:
lucide-react/dist/esm/icons/lock-open.js:
lucide-react/dist/esm/icons/lock.js:
lucide-react/dist/esm/icons/maximize-2.js:
lucide-react/dist/esm/icons/minimize-2.js:
lucide-react/dist/esm/icons/minus.js:
lucide-react/dist/esm/icons/monitor.js:
lucide-react/dist/esm/icons/panel-left.js:
lucide-react/dist/esm/icons/panel-right.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/quote.js:
lucide-react/dist/esm/icons/rectangle-ellipsis.js:
lucide-react/dist/esm/icons/redo-2.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/sliders-horizontal.js:
lucide-react/dist/esm/icons/smartphone.js:
lucide-react/dist/esm/icons/square-code.js:
lucide-react/dist/esm/icons/strikethrough.js:
lucide-react/dist/esm/icons/tablet.js:
lucide-react/dist/esm/icons/toy-brick.js:
lucide-react/dist/esm/icons/trash.js:
lucide-react/dist/esm/icons/type.js:
lucide-react/dist/esm/icons/underline.js:
lucide-react/dist/esm/icons/undo-2.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/icons/zoom-in.js:
lucide-react/dist/esm/icons/zoom-out.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
