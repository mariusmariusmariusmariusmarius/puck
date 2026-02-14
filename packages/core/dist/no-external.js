"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../tsup-config/react-import.js
var import_react;
var init_react_import = __esm({
  "../tsup-config/react-import.js"() {
    "use strict";
    import_react = __toESM(require("react"));
  }
});

// ../../node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../../node_modules/classnames/index.js"(exports2, module2) {
    "use strict";
    init_react_import();
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        classNames.default = classNames;
        module2.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// lib/get-class-name-factory.ts
var import_classnames, getClassNameFactory, get_class_name_factory_default;
var init_get_class_name_factory = __esm({
  "lib/get-class-name-factory.ts"() {
    "use strict";
    init_react_import();
    import_classnames = __toESM(require_classnames());
    getClassNameFactory = (rootClass, styles2, config = { baseClass: "" }) => (options = {}) => {
      if (typeof options === "string") {
        const descendant = options;
        const style = styles2[`${rootClass}-${descendant}`];
        if (style) {
          return config.baseClass + styles2[`${rootClass}-${descendant}`] || "";
        }
        return "";
      } else if (typeof options === "object") {
        const modifiers = options;
        const prefixedModifiers = {};
        for (let modifier in modifiers) {
          prefixedModifiers[styles2[`${rootClass}--${modifier}`]] = modifiers[modifier];
        }
        const c = styles2[rootClass];
        return config.baseClass + (0, import_classnames.default)(__spreadValues({
          [c]: !!c
        }, prefixedModifiers));
      } else {
        return config.baseClass + styles2[rootClass] || "";
      }
    };
    get_class_name_factory_default = getClassNameFactory;
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data
var init_css_module_data = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data"() {
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/ActionBar/styles.module.css#css-module
var styles_module_default;
var init_styles_module = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/ActionBar/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data();
    styles_module_default = { "ActionBar": "_ActionBar_1nmyk_1", "ActionBar-label": "_ActionBar-label_1nmyk_18", "ActionBarAction": "_ActionBarAction_1nmyk_30", "ActionBar-group": "_ActionBar-group_1nmyk_38", "ActionBarAction--disabled": "_ActionBarAction--disabled_1nmyk_71", "ActionBarAction--active": "_ActionBarAction--active_1nmyk_93", "ActionBar-separator": "_ActionBar-separator_1nmyk_102" };
  }
});

// components/ActionBar/index.tsx
var import_jsx_runtime, getClassName, getActionClassName, ActionBar, Action, Group, Label, Separator;
var init_ActionBar = __esm({
  "components/ActionBar/index.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module();
    import_jsx_runtime = require("react/jsx-runtime");
    getClassName = get_class_name_factory_default("ActionBar", styles_module_default);
    getActionClassName = get_class_name_factory_default("ActionBarAction", styles_module_default);
    ActionBar = ({
      label,
      children
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: getClassName(),
        onClick: (e) => {
          e.stopPropagation();
        },
        children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBar.Group, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("label"), children: label }) }),
          children
        ]
      }
    );
    Action = ({
      children,
      label,
      onClick,
      active = false,
      disabled
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        className: getActionClassName({ active, disabled }),
        onClick,
        title: label,
        tabIndex: 0,
        disabled,
        children
      }
    );
    Group = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("group"), children });
    Label = ({ label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("label"), children: label });
    Separator = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("separator") });
    ActionBar.Action = Action;
    ActionBar.Label = Label;
    ActionBar.Group = Group;
    ActionBar.Separator = Separator;
  }
});

// ../../node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase, mergeClasses;
var init_utils = __esm({
  "../../node_modules/lucide-react/dist/esm/shared/src/utils.js"() {
    "use strict";
    init_react_import();
    toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
  }
});

// ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes;
var init_defaultAttributes = __esm({
  "../../node_modules/lucide-react/dist/esm/defaultAttributes.js"() {
    "use strict";
    init_react_import();
    defaultAttributes = {
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
  }
});

// ../../node_modules/lucide-react/dist/esm/Icon.js
var import_react2, Icon;
var init_Icon = __esm({
  "../../node_modules/lucide-react/dist/esm/Icon.js"() {
    "use strict";
    init_react_import();
    import_react2 = require("react");
    init_defaultAttributes();
    init_utils();
    Icon = (0, import_react2.forwardRef)(
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
        return (0, import_react2.createElement)(
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
            ...iconNode.map(([tag, attrs]) => (0, import_react2.createElement)(tag, attrs)),
            ...Array.isArray(children) ? children : [children]
          ]
        );
      }
    );
  }
});

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react3, createLucideIcon;
var init_createLucideIcon = __esm({
  "../../node_modules/lucide-react/dist/esm/createLucideIcon.js"() {
    "use strict";
    init_react_import();
    import_react3 = require("react");
    init_utils();
    init_Icon();
    createLucideIcon = (iconName, iconNode) => {
      const Component = (0, import_react3.forwardRef)(
        (_a, ref) => {
          var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
          return (0, import_react3.createElement)(Icon, __spreadValues({
            ref,
            iconNode,
            className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className)
          }, props));
        }
      );
      Component.displayName = `${iconName}`;
      return Component;
    };
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/align-center.js
var AlignCenter;
var init_align_center = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/align-center.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    AlignCenter = createLucideIcon("AlignCenter", [
      ["path", { d: "M17 12H7", key: "16if0g" }],
      ["path", { d: "M19 18H5", key: "18s9l3" }],
      ["path", { d: "M21 6H3", key: "1jwq7v" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/align-justify.js
var AlignJustify;
var init_align_justify = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/align-justify.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    AlignJustify = createLucideIcon("AlignJustify", [
      ["path", { d: "M3 12h18", key: "1i2n21" }],
      ["path", { d: "M3 18h18", key: "1h113x" }],
      ["path", { d: "M3 6h18", key: "d0wm0j" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/align-left.js
var AlignLeft;
var init_align_left = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/align-left.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    AlignLeft = createLucideIcon("AlignLeft", [
      ["path", { d: "M15 12H3", key: "6jk70r" }],
      ["path", { d: "M17 18H3", key: "1amg6g" }],
      ["path", { d: "M21 6H3", key: "1jwq7v" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/align-right.js
var AlignRight;
var init_align_right = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/align-right.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    AlignRight = createLucideIcon("AlignRight", [
      ["path", { d: "M21 12H9", key: "dn1m92" }],
      ["path", { d: "M21 18H7", key: "1ygte8" }],
      ["path", { d: "M21 6H3", key: "1jwq7v" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/bold.js
var Bold;
var init_bold = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/bold.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Bold = createLucideIcon("Bold", [
      [
        "path",
        { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
      ]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/chevron-down.js
var ChevronDown;
var init_chevron_down = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/chevron-down.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    ChevronDown = createLucideIcon("ChevronDown", [
      ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
var ChevronRight;
var init_chevron_right = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/chevron-right.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    ChevronRight = createLucideIcon("ChevronRight", [
      ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/chevron-up.js
var ChevronUp;
var init_chevron_up = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/chevron-up.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var CircleCheckBig;
var init_circle_check_big = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/circle-check-big.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    CircleCheckBig = createLucideIcon("CircleCheckBig", [
      ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
      ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/code.js
var Code;
var init_code = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/code.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Code = createLucideIcon("Code", [
      ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
      ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/copy.js
var Copy;
var init_copy = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/copy.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Copy = createLucideIcon("Copy", [
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/corner-left-up.js
var CornerLeftUp;
var init_corner_left_up = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/corner-left-up.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    CornerLeftUp = createLucideIcon("CornerLeftUp", [
      ["polyline", { points: "14 9 9 4 4 9", key: "m9oyvo" }],
      ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
var EllipsisVertical;
var init_ellipsis_vertical = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    EllipsisVertical = createLucideIcon("EllipsisVertical", [
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
      ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
      ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/expand.js
var Expand;
var init_expand = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/expand.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Expand = createLucideIcon("Expand", [
      ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
      ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
      ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
      ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/globe.js
var Globe;
var init_globe = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/globe.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Globe = createLucideIcon("Globe", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
      ["path", { d: "M2 12h20", key: "9i4pu4" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/hammer.js
var Hammer;
var init_hammer = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/hammer.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Hammer = createLucideIcon("Hammer", [
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
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/hash.js
var Hash;
var init_hash = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/hash.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Hash = createLucideIcon("Hash", [
      ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
      ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
      ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
      ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/heading-1.js
var Heading1;
var init_heading_1 = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/heading-1.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Heading1 = createLucideIcon("Heading1", [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/heading-2.js
var Heading2;
var init_heading_2 = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/heading-2.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Heading2 = createLucideIcon("Heading2", [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/heading-3.js
var Heading3;
var init_heading_3 = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/heading-3.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Heading3 = createLucideIcon("Heading3", [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
      ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/heading-4.js
var Heading4;
var init_heading_4 = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/heading-4.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Heading4 = createLucideIcon("Heading4", [
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M17 10v3a1 1 0 0 0 1 1h3", key: "tj5zdr" }],
      ["path", { d: "M21 10v8", key: "1kdml4" }],
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/heading-5.js
var Heading5;
var init_heading_5 = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/heading-5.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Heading5 = createLucideIcon("Heading5", [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M17 13v-3h4", key: "1nvgqp" }],
      [
        "path",
        { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17", key: "2nebdn" }
      ]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/heading-6.js
var Heading6;
var init_heading_6 = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/heading-6.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Heading6 = createLucideIcon("Heading6", [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["circle", { cx: "19", cy: "16", r: "2", key: "15mx69" }],
      ["path", { d: "M20 10c-2 2-3 3.5-3 6", key: "f35dl0" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/heading.js
var Heading;
var init_heading = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/heading.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Heading = createLucideIcon("Heading", [
      ["path", { d: "M6 12h12", key: "8npq4p" }],
      ["path", { d: "M6 20V4", key: "1w1bmo" }],
      ["path", { d: "M18 20V4", key: "o2hl4u" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/italic.js
var Italic;
var init_italic = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/italic.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Italic = createLucideIcon("Italic", [
      ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
      ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
      ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/layers.js
var Layers;
var init_layers = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/layers.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Layers = createLucideIcon("Layers", [
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
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/layout-grid.js
var LayoutGrid;
var init_layout_grid = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/layout-grid.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    LayoutGrid = createLucideIcon("LayoutGrid", [
      ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
      ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
      ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
      ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/link.js
var Link;
var init_link = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/link.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Link = createLucideIcon("Link", [
      ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
      ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/list-ordered.js
var ListOrdered;
var init_list_ordered = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/list-ordered.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    ListOrdered = createLucideIcon("ListOrdered", [
      ["path", { d: "M10 12h11", key: "6m4ad9" }],
      ["path", { d: "M10 18h11", key: "11hvi2" }],
      ["path", { d: "M10 6h11", key: "c7qv1k" }],
      ["path", { d: "M4 10h2", key: "16xx2s" }],
      ["path", { d: "M4 6h1v4", key: "cnovpq" }],
      ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/list.js
var List;
var init_list = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/list.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    List = createLucideIcon("List", [
      ["path", { d: "M3 12h.01", key: "nlz23k" }],
      ["path", { d: "M3 18h.01", key: "1tta3j" }],
      ["path", { d: "M3 6h.01", key: "1rqtza" }],
      ["path", { d: "M8 12h13", key: "1za7za" }],
      ["path", { d: "M8 18h13", key: "1lx6n3" }],
      ["path", { d: "M8 6h13", key: "ik3vkj" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/lock-open.js
var LockOpen;
var init_lock_open = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/lock-open.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    LockOpen = createLucideIcon("LockOpen", [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/lock.js
var Lock;
var init_lock = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/lock.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Lock = createLucideIcon("Lock", [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/maximize-2.js
var Maximize2;
var init_maximize_2 = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/maximize-2.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Maximize2 = createLucideIcon("Maximize2", [
      ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
      ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
      ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
      ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/minimize-2.js
var Minimize2;
var init_minimize_2 = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/minimize-2.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Minimize2 = createLucideIcon("Minimize2", [
      ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
      ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
      ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
      ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/minus.js
var Minus;
var init_minus = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/minus.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Minus = createLucideIcon("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/monitor.js
var Monitor;
var init_monitor = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/monitor.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Monitor = createLucideIcon("Monitor", [
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
      ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
      ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/panel-left.js
var PanelLeft;
var init_panel_left = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/panel-left.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    PanelLeft = createLucideIcon("PanelLeft", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M9 3v18", key: "fh3hqa" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/panel-right.js
var PanelRight;
var init_panel_right = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/panel-right.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    PanelRight = createLucideIcon("PanelRight", [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M15 3v18", key: "14nvp0" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/plus.js
var Plus;
var init_plus = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/plus.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Plus = createLucideIcon("Plus", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "M12 5v14", key: "s699le" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/quote.js
var Quote;
var init_quote = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/quote.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Quote = createLucideIcon("Quote", [
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
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/rectangle-ellipsis.js
var RectangleEllipsis;
var init_rectangle_ellipsis = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/rectangle-ellipsis.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    RectangleEllipsis = createLucideIcon("RectangleEllipsis", [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
      ["path", { d: "M12 12h.01", key: "1mp3jc" }],
      ["path", { d: "M17 12h.01", key: "1m0b6t" }],
      ["path", { d: "M7 12h.01", key: "eqddd0" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/redo-2.js
var Redo2;
var init_redo_2 = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/redo-2.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Redo2 = createLucideIcon("Redo2", [
      ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
      ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/search.js
var Search;
var init_search = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/search.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Search = createLucideIcon("Search", [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js
var SlidersHorizontal;
var init_sliders_horizontal = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    SlidersHorizontal = createLucideIcon("SlidersHorizontal", [
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
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/smartphone.js
var Smartphone;
var init_smartphone = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/smartphone.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Smartphone = createLucideIcon("Smartphone", [
      ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
      ["path", { d: "M12 18h.01", key: "mhygvu" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/square-code.js
var SquareCode;
var init_square_code = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/square-code.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    SquareCode = createLucideIcon("SquareCode", [
      ["path", { d: "M10 9.5 8 12l2 2.5", key: "3mjy60" }],
      ["path", { d: "m14 9.5 2 2.5-2 2.5", key: "1bir2l" }],
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/strikethrough.js
var Strikethrough;
var init_strikethrough = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/strikethrough.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Strikethrough = createLucideIcon("Strikethrough", [
      ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
      ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/tablet.js
var Tablet;
var init_tablet = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/tablet.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Tablet = createLucideIcon("Tablet", [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
      ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/toy-brick.js
var ToyBrick;
var init_toy_brick = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/toy-brick.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    ToyBrick = createLucideIcon("ToyBrick", [
      ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1", key: "158fvp" }],
      ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3", key: "s0042v" }],
      ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3", key: "9wmeh2" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/trash.js
var Trash;
var init_trash = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/trash.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Trash = createLucideIcon("Trash", [
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
      ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/type.js
var Type;
var init_type = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/type.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Type = createLucideIcon("Type", [
      ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
      ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
      ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/underline.js
var Underline;
var init_underline = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/underline.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Underline = createLucideIcon("Underline", [
      ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
      ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/undo-2.js
var Undo2;
var init_undo_2 = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/undo-2.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    Undo2 = createLucideIcon("Undo2", [
      ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
      ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/x.js
var X;
var init_x = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/x.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    X = createLucideIcon("X", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/zoom-in.js
var ZoomIn;
var init_zoom_in = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/zoom-in.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    ZoomIn = createLucideIcon("ZoomIn", [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
      ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/icons/zoom-out.js
var ZoomOut;
var init_zoom_out = __esm({
  "../../node_modules/lucide-react/dist/esm/icons/zoom-out.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    ZoomOut = createLucideIcon("ZoomOut", [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
    ]);
  }
});

// ../../node_modules/lucide-react/dist/esm/lucide-react.js
var init_lucide_react = __esm({
  "../../node_modules/lucide-react/dist/esm/lucide-react.js"() {
    "use strict";
    init_react_import();
    init_circle_check_big();
    init_ellipsis_vertical();
    init_layers();
    init_lock_open();
    init_panel_left();
    init_rectangle_ellipsis();
    init_square_code();
    init_align_center();
    init_align_justify();
    init_align_left();
    init_align_right();
    init_bold();
    init_chevron_down();
    init_chevron_right();
    init_chevron_up();
    init_code();
    init_copy();
    init_corner_left_up();
    init_expand();
    init_globe();
    init_hammer();
    init_hash();
    init_heading_1();
    init_heading_2();
    init_heading_3();
    init_heading_4();
    init_heading_5();
    init_heading_6();
    init_heading();
    init_italic();
    init_layout_grid();
    init_link();
    init_list_ordered();
    init_list();
    init_lock();
    init_maximize_2();
    init_minimize_2();
    init_minus();
    init_monitor();
    init_panel_right();
    init_plus();
    init_quote();
    init_redo_2();
    init_search();
    init_sliders_horizontal();
    init_smartphone();
    init_strikethrough();
    init_tablet();
    init_toy_brick();
    init_trash();
    init_type();
    init_underline();
    init_undo_2();
    init_x();
    init_zoom_in();
    init_zoom_out();
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/IconButton/IconButton.module.css/#css-module-data
var init_css_module_data2 = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/IconButton/IconButton.module.css/#css-module-data"() {
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/IconButton/IconButton.module.css#css-module
var IconButton_module_default;
var init_IconButton_module = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/IconButton/IconButton.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data2();
    IconButton_module_default = { "IconButton": "_IconButton_ffob9_1", "IconButton--active": "_IconButton--active_ffob9_14", "IconButton--disabled": "_IconButton--disabled_ffob9_24", "IconButton-title": "_IconButton-title_ffob9_37" };
  }
});

// lib/filter.ts
var init_filter = __esm({
  "lib/filter.ts"() {
    "use strict";
    init_react_import();
  }
});

// lib/data/reorder.ts
var reorder;
var init_reorder = __esm({
  "lib/data/reorder.ts"() {
    "use strict";
    init_react_import();
    reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    };
  }
});

// lib/data/replace.ts
var replace;
var init_replace = __esm({
  "lib/data/replace.ts"() {
    "use strict";
    init_react_import();
    replace = (list, index, newItem) => {
      const result = Array.from(list);
      result.splice(index, 1);
      result.splice(index, 0, newItem);
      return result;
    };
  }
});

// lib/root-droppable-id.ts
var rootAreaId, rootZone, rootDroppableId;
var init_root_droppable_id = __esm({
  "lib/root-droppable-id.ts"() {
    "use strict";
    init_react_import();
    rootAreaId = "root";
    rootZone = "default-zone";
    rootDroppableId = `${rootAreaId}:${rootZone}`;
  }
});

// lib/get-zone-id.ts
var getZoneId;
var init_get_zone_id = __esm({
  "lib/get-zone-id.ts"() {
    "use strict";
    init_react_import();
    init_root_droppable_id();
    getZoneId = (zoneCompound) => {
      if (!zoneCompound) {
        return [];
      }
      if (zoneCompound && zoneCompound.indexOf(":") > -1) {
        return zoneCompound.split(":");
      }
      return [rootDroppableId, zoneCompound];
    };
  }
});

// lib/data/for-related-zones.ts
function forRelatedZones(item, data, cb, path = []) {
  Object.entries(data.zones || {}).forEach(([zoneCompound, content]) => {
    const [parentId] = getZoneId(zoneCompound);
    if (parentId === item.props.id) {
      cb(path, zoneCompound, content);
    }
  });
}
var init_for_related_zones = __esm({
  "lib/data/for-related-zones.ts"() {
    "use strict";
    init_react_import();
    init_get_zone_id();
  }
});

// lib/data/default-slots.ts
var defaultSlots;
var init_default_slots = __esm({
  "lib/data/default-slots.ts"() {
    "use strict";
    init_react_import();
    defaultSlots = (value, fields) => Object.keys(fields).reduce(
      (acc, fieldName) => fields[fieldName].type === "slot" ? __spreadValues({ [fieldName]: [] }, acc) : acc,
      value
    );
  }
});

// lib/data/map-fields.ts
function mapFields(item, mappers, config, recurseSlots = false, shouldDefaultSlots = true) {
  var _a, _b, _c, _d, _e;
  const itemType = "type" in item ? item.type : "root";
  const componentConfig = itemType === "root" ? config.root : (_a = config.components) == null ? void 0 : _a[itemType];
  const newProps = walkObject({
    value: shouldDefaultSlots ? defaultSlots((_b = item.props) != null ? _b : {}, (_c = componentConfig == null ? void 0 : componentConfig.fields) != null ? _c : {}) : item.props,
    fields: (_d = componentConfig == null ? void 0 : componentConfig.fields) != null ? _d : {},
    mappers,
    id: item.props ? (_e = item.props.id) != null ? _e : "root" : "root",
    getPropPath: (k) => k,
    config,
    recurseSlots
  });
  if (isPromise(newProps)) {
    return newProps.then((resolvedProps) => __spreadProps(__spreadValues({}, item), {
      props: resolvedProps
    }));
  }
  return __spreadProps(__spreadValues({}, item), {
    props: newProps
  });
}
var isPromise, flatten, containsPromise, walkField, walkObject;
var init_map_fields = __esm({
  "lib/data/map-fields.ts"() {
    "use strict";
    init_react_import();
    init_default_slots();
    isPromise = (v) => !!v && typeof v.then === "function";
    flatten = (values) => values.reduce((acc, item) => __spreadValues(__spreadValues({}, acc), item), {});
    containsPromise = (arr) => arr.some(isPromise);
    walkField = ({
      value,
      fields,
      mappers,
      propKey = "",
      propPath = "",
      id = "",
      config,
      recurseSlots = false
    }) => {
      var _a, _b, _c;
      const fieldType = (_a = fields[propKey]) == null ? void 0 : _a.type;
      const map = mappers[fieldType];
      if (map && fieldType === "slot") {
        const content = value || [];
        const mappedContent = recurseSlots ? content.map((el) => {
          var _a2;
          const componentConfig = config.components[el.type];
          if (!componentConfig) {
            throw new Error(`Could not find component config for ${el.type}`);
          }
          const fields2 = (_a2 = componentConfig.fields) != null ? _a2 : {};
          return walkField({
            value: __spreadProps(__spreadValues({}, el), { props: defaultSlots(el.props, fields2) }),
            fields: fields2,
            mappers,
            id: el.props.id,
            config,
            recurseSlots
          });
        }) : content;
        if (containsPromise(mappedContent)) {
          return Promise.all(mappedContent);
        }
        return map({
          value: mappedContent,
          parentId: id,
          propName: propPath,
          field: fields[propKey],
          propPath
        });
      } else if (map && fields[propKey]) {
        return map({
          value,
          parentId: id,
          propName: propKey,
          field: fields[propKey],
          propPath
        });
      }
      if (value && typeof value === "object") {
        if (Array.isArray(value)) {
          const arrayFields = ((_b = fields[propKey]) == null ? void 0 : _b.type) === "array" ? fields[propKey].arrayFields : null;
          if (!arrayFields) return value;
          const newValue = value.map(
            (el, idx) => walkField({
              value: el,
              fields: arrayFields,
              mappers,
              propKey,
              propPath: `${propPath}[${idx}]`,
              id,
              config,
              recurseSlots
            })
          );
          if (containsPromise(newValue)) {
            return Promise.all(newValue);
          }
          return newValue;
        } else if ("$$typeof" in value) {
          return value;
        } else {
          const objectFields = ((_c = fields[propKey]) == null ? void 0 : _c.type) === "object" ? fields[propKey].objectFields : fields;
          return walkObject({
            value,
            fields: objectFields,
            mappers,
            id,
            getPropPath: (k) => `${propPath}.${k}`,
            config,
            recurseSlots
          });
        }
      }
      return value;
    };
    walkObject = ({
      value,
      fields,
      mappers,
      id,
      getPropPath,
      config,
      recurseSlots
    }) => {
      const newProps = Object.entries(value).map(([k, v]) => {
        const opts = {
          value: v,
          fields,
          mappers,
          propKey: k,
          propPath: getPropPath(k),
          id,
          config,
          recurseSlots
        };
        const newValue = walkField(opts);
        if (isPromise(newValue)) {
          return newValue.then((resolvedValue) => ({
            [k]: resolvedValue
          }));
        }
        return {
          [k]: newValue
        };
      }, {});
      if (containsPromise(newProps)) {
        return Promise.all(newProps).then(flatten);
      }
      return flatten(newProps);
    };
  }
});

// lib/data/strip-slots.ts
var stripSlots;
var init_strip_slots = __esm({
  "lib/data/strip-slots.ts"() {
    "use strict";
    init_react_import();
    init_map_fields();
    stripSlots = (data, config) => {
      return mapFields(data, { slot: () => null }, config);
    };
  }
});

// lib/data/flatten-node.ts
function encodeEmptyObjects(props = {}) {
  const result = {};
  for (const key in props) {
    if (!Object.prototype.hasOwnProperty.call(props, key)) continue;
    const val = props[key];
    if (Array.isArray(val) && val.length === 0) {
      result[key] = emptyArrayStr;
    } else if (isPureObject(val) && Object.keys(val).length === 0) {
      result[key] = emptyObjectStr;
    } else {
      result[key] = val;
    }
  }
  return result;
}
function decodeEmptyObjects(props = {}) {
  const result = {};
  for (const key in props) {
    if (!Object.prototype.hasOwnProperty.call(props, key)) continue;
    const val = props[key];
    if (val === emptyArrayStr) {
      result[key] = [];
    } else if (val === emptyObjectStr) {
      result[key] = {};
    } else {
      result[key] = val;
    }
  }
  return result;
}
var import_flat, flatten2, unflatten, isPureObject, emptyArrayStr, emptyObjectStr, flattenNode, expandNode;
var init_flatten_node = __esm({
  "lib/data/flatten-node.ts"() {
    "use strict";
    init_react_import();
    import_flat = __toESM(require("flat"));
    init_strip_slots();
    ({ flatten: flatten2, unflatten } = import_flat.default);
    isPureObject = (val) => val != null && Object.prototype.toString.call(val) === "[object Object]";
    emptyArrayStr = "__puck_[]";
    emptyObjectStr = "__puck_{}";
    flattenNode = (node, config) => {
      return __spreadProps(__spreadValues({}, node), {
        props: encodeEmptyObjects(flatten2(stripSlots(node, config).props))
      });
    };
    expandNode = (node) => {
      const props = unflatten(decodeEmptyObjects(node.props));
      return __spreadProps(__spreadValues({}, node), {
        props
      });
    };
  }
});

// lib/data/walk-app-state.ts
function walkAppState(state, config, mapContent = (content) => content, mapNodeOrSkip = (item) => item) {
  var _a;
  let newZones = {};
  const newZoneIndex = {};
  const newNodeIndex = {};
  const processContent = (path, zoneCompound, content, zoneType, newId) => {
    var _a2;
    const [parentId] = zoneCompound.split(":");
    const mappedContent = ((_a2 = mapContent(content, zoneCompound, zoneType)) != null ? _a2 : content) || [];
    const [_2, zone] = zoneCompound.split(":");
    const newZoneCompound = `${newId || parentId}:${zone}`;
    const newContent2 = mappedContent.map(
      (zoneChild, index) => processItem(zoneChild, [...path, newZoneCompound], index)
    );
    newZoneIndex[newZoneCompound] = {
      contentIds: newContent2.map((item) => item.props.id),
      type: zoneType
    };
    return [newZoneCompound, newContent2];
  };
  const processRelatedZones = (item, newId, initialPath) => {
    forRelatedZones(
      item,
      state.data,
      (relatedPath, relatedZoneCompound, relatedContent) => {
        const [zoneCompound, newContent2] = processContent(
          relatedPath,
          relatedZoneCompound,
          relatedContent,
          "dropzone",
          newId
        );
        newZones[zoneCompound] = newContent2;
      },
      initialPath
    );
  };
  const processItem = (item, path, index) => {
    const mappedItem = mapNodeOrSkip(item, path, index);
    if (!mappedItem) return item;
    const id = mappedItem.props.id;
    const newProps = __spreadProps(__spreadValues({}, mapFields(
      mappedItem,
      {
        slot: ({ value, parentId: parentId2, propPath }) => {
          const content = value;
          const zoneCompound = `${parentId2}:${propPath}`;
          const [_2, newContent2] = processContent(
            path,
            zoneCompound,
            content,
            "slot",
            parentId2
          );
          return newContent2;
        }
      },
      config
    ).props), {
      id
    });
    processRelatedZones(item, id, path);
    const newItem = __spreadProps(__spreadValues({}, item), { props: newProps });
    const thisZoneCompound = path[path.length - 1];
    const [parentId, zone] = thisZoneCompound ? thisZoneCompound.split(":") : [null, ""];
    newNodeIndex[id] = {
      data: newItem,
      flatData: flattenNode(newItem, config),
      path,
      parentId,
      zone
    };
    const finalData = __spreadProps(__spreadValues({}, newItem), { props: __spreadValues({}, newItem.props) });
    if (newProps.id === "root") {
      delete finalData["type"];
      delete finalData.props["id"];
    }
    return finalData;
  };
  const zones = state.data.zones || {};
  const [_, newContent] = processContent(
    [],
    rootDroppableId,
    state.data.content,
    "root"
  );
  const processedContent = newContent;
  const zonesAlreadyProcessed = Object.keys(newZones);
  Object.keys(zones || {}).forEach((zoneCompound) => {
    const [parentId] = zoneCompound.split(":");
    if (zonesAlreadyProcessed.includes(zoneCompound)) {
      return;
    }
    const [_2, newContent2] = processContent(
      [rootDroppableId],
      zoneCompound,
      zones[zoneCompound],
      "dropzone",
      parentId
    );
    newZones[zoneCompound] = newContent2;
  }, newZones);
  const processedRoot = processItem(
    {
      type: "root",
      props: __spreadProps(__spreadValues({}, (_a = state.data.root.props) != null ? _a : state.data.root), { id: "root" })
    },
    [],
    -1
  );
  const root = __spreadProps(__spreadValues({}, state.data.root), {
    props: processedRoot.props
  });
  return __spreadProps(__spreadValues({}, state), {
    data: {
      root,
      content: processedContent,
      zones: __spreadValues(__spreadValues({}, state.data.zones), newZones)
    },
    indexes: {
      nodes: __spreadValues(__spreadValues({}, state.indexes.nodes), newNodeIndex),
      zones: __spreadValues(__spreadValues({}, state.indexes.zones), newZoneIndex)
    }
  });
}
var init_walk_app_state = __esm({
  "lib/data/walk-app-state.ts"() {
    "use strict";
    init_react_import();
    init_for_related_zones();
    init_root_droppable_id();
    init_map_fields();
    init_flatten_node();
  }
});

// reducer/actions/set.ts
var setAction;
var init_set = __esm({
  "reducer/actions/set.ts"() {
    "use strict";
    init_react_import();
    init_walk_app_state();
    setAction = (state, action, appStore) => {
      if (typeof action.state === "object") {
        const newState = __spreadValues(__spreadValues({}, state), action.state);
        if (action.state.indexes) {
          return newState;
        }
        console.warn(
          "`set` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."
        );
        return walkAppState(newState, appStore.config);
      }
      return __spreadValues(__spreadValues({}, state), action.state(state));
    };
  }
});

// lib/data/insert.ts
var insert;
var init_insert = __esm({
  "lib/data/insert.ts"() {
    "use strict";
    init_react_import();
    insert = (list, index, item) => {
      const result = Array.from(list || []);
      result.splice(index, 0, item);
      return result;
    };
  }
});

// lib/generate-id.ts
var import_uuid, generateId;
var init_generate_id = __esm({
  "lib/generate-id.ts"() {
    "use strict";
    init_react_import();
    import_uuid = require("uuid");
    generateId = (type) => type ? `${type}-${(0, import_uuid.v4)()}` : (0, import_uuid.v4)();
  }
});

// lib/data/get-ids-for-parent.ts
var getIdsForParent;
var init_get_ids_for_parent = __esm({
  "lib/data/get-ids-for-parent.ts"() {
    "use strict";
    init_react_import();
    getIdsForParent = (zoneCompound, state) => {
      const [parentId] = zoneCompound.split(":");
      const node = state.indexes.nodes[parentId];
      return ((node == null ? void 0 : node.path) || []).map((p) => p.split(":")[0]);
    };
  }
});

// lib/data/walk-tree.ts
function walkTree(data, config, callbackFn) {
  var _a, _b;
  const walkItem = (item) => {
    return mapFields(
      item,
      {
        slot: ({ value, parentId, propName }) => {
          var _a2;
          const content = value;
          return (_a2 = callbackFn(content, { parentId, propName })) != null ? _a2 : content;
        }
      },
      config,
      true
    );
  };
  if ("props" in data) {
    return walkItem(data);
  }
  const _data = data;
  const zones = (_a = _data.zones) != null ? _a : {};
  const mappedContent = _data.content.map(walkItem);
  return {
    root: walkItem(_data.root),
    content: (_b = callbackFn(mappedContent, {
      parentId: "root",
      propName: "default-zone"
    })) != null ? _b : mappedContent,
    zones: Object.keys(zones).reduce(
      (acc, zoneCompound) => __spreadProps(__spreadValues({}, acc), {
        [zoneCompound]: zones[zoneCompound].map(walkItem)
      }),
      {}
    )
  };
}
var init_walk_tree = __esm({
  "lib/data/walk-tree.ts"() {
    "use strict";
    init_react_import();
    init_map_fields();
  }
});

// lib/data/populate-ids.ts
var populateIds;
var init_populate_ids = __esm({
  "lib/data/populate-ids.ts"() {
    "use strict";
    init_react_import();
    init_generate_id();
    init_walk_tree();
    populateIds = (data, config, override = false) => {
      const id = generateId(data.type);
      return walkTree(
        __spreadProps(__spreadValues({}, data), {
          props: override ? __spreadProps(__spreadValues({}, data.props), { id }) : __spreadValues({}, data.props)
        }),
        config,
        (contents) => contents.map((item) => {
          const id2 = generateId(item.type);
          return __spreadProps(__spreadValues({}, item), {
            props: override ? __spreadProps(__spreadValues({}, item.props), { id: id2 }) : __spreadValues({ id: id2 }, item.props)
          });
        })
      );
    };
  }
});

// reducer/actions/insert.ts
function insertAction(state, action, appStore) {
  const id = action.id || generateId(action.componentType);
  const emptyComponentData = populateIds(
    {
      type: action.componentType,
      props: __spreadProps(__spreadValues({}, appStore.config.components[action.componentType].defaultProps || {}), {
        id
      })
    },
    appStore.config
  );
  const [parentId] = action.destinationZone.split(":");
  const idsInPath = getIdsForParent(action.destinationZone, state);
  return walkAppState(
    state,
    appStore.config,
    (content, zoneCompound) => {
      if (zoneCompound === action.destinationZone) {
        return insert(
          content || [],
          action.destinationIndex,
          emptyComponentData
        );
      }
      return content;
    },
    (childItem, path) => {
      if (childItem.props.id === id || childItem.props.id === parentId) {
        return childItem;
      } else if (idsInPath.includes(childItem.props.id)) {
        return childItem;
      } else if (path.includes(action.destinationZone)) {
        return childItem;
      }
      return null;
    }
  );
}
var init_insert2 = __esm({
  "reducer/actions/insert.ts"() {
    "use strict";
    init_react_import();
    init_insert();
    init_generate_id();
    init_walk_app_state();
    init_get_ids_for_parent();
    init_populate_ids();
  }
});

// reducer/actions/replace.ts
var replaceAction;
var init_replace2 = __esm({
  "reducer/actions/replace.ts"() {
    "use strict";
    init_react_import();
    init_walk_app_state();
    init_get_ids_for_parent();
    init_walk_tree();
    init_generate_id();
    replaceAction = (state, action, appStore) => {
      const [parentId] = action.destinationZone.split(":");
      const idsInPath = getIdsForParent(action.destinationZone, state);
      const originalId = state.indexes.zones[action.destinationZone].contentIds[action.destinationIndex];
      const idChanged = originalId !== action.data.props.id;
      if (idChanged) {
        throw new Error(
          `Can't change the id during a replace action. Please us "remove" and "insert" to define a new node.`
        );
      }
      const newSlotIds = [];
      const data = walkTree(action.data, appStore.config, (contents, opts) => {
        newSlotIds.push(`${opts.parentId}:${opts.propName}`);
        return contents.map((item) => {
          const id = generateId(item.type);
          return __spreadProps(__spreadValues({}, item), {
            props: __spreadValues({ id }, item.props)
          });
        });
      });
      const stateWithDeepSlotsRemoved = __spreadProps(__spreadValues({}, state), {
        ui: __spreadValues(__spreadValues({}, state.ui), action.ui)
      });
      Object.keys(state.indexes.zones).forEach((zoneCompound) => {
        const id = zoneCompound.split(":")[0];
        if (id === originalId) {
          if (!newSlotIds.includes(zoneCompound)) {
            delete stateWithDeepSlotsRemoved.indexes.zones[zoneCompound];
          }
        }
      });
      return walkAppState(
        stateWithDeepSlotsRemoved,
        appStore.config,
        (content, zoneCompound) => {
          const newContent = [...content];
          if (zoneCompound === action.destinationZone) {
            newContent[action.destinationIndex] = data;
          }
          return newContent;
        },
        (childItem, path) => {
          const pathIds = path.map((p) => p.split(":")[0]);
          if (childItem.props.id === data.props.id) {
            return data;
          } else if (childItem.props.id === parentId) {
            return childItem;
          } else if (idsInPath.indexOf(childItem.props.id) > -1) {
            return childItem;
          } else if (pathIds.indexOf(data.props.id) > -1) {
            return childItem;
          }
          return null;
        }
      );
    };
  }
});

// reducer/actions/replace-root.ts
var replaceRootAction;
var init_replace_root = __esm({
  "reducer/actions/replace-root.ts"() {
    "use strict";
    init_react_import();
    init_walk_app_state();
    replaceRootAction = (state, action, appStore) => {
      return walkAppState(
        state,
        appStore.config,
        (content) => content,
        (childItem) => {
          if (childItem.props.id === "root") {
            return __spreadProps(__spreadValues({}, childItem), {
              props: __spreadValues(__spreadValues({}, childItem.props), action.root.props),
              readOnly: action.root.readOnly
            });
          }
          return childItem;
        }
      );
    };
  }
});

// lib/data/get-item.ts
function getItem(selector, state) {
  var _a, _b;
  const zone = (_a = state.indexes.zones) == null ? void 0 : _a[selector.zone || rootDroppableId];
  return zone ? (_b = state.indexes.nodes[zone.contentIds[selector.index]]) == null ? void 0 : _b.data : void 0;
}
var init_get_item = __esm({
  "lib/data/get-item.ts"() {
    "use strict";
    init_react_import();
    init_root_droppable_id();
  }
});

// reducer/actions/duplicate.ts
function duplicateAction(state, action, appStore) {
  const item = getItem(
    { index: action.sourceIndex, zone: action.sourceZone },
    state
  );
  const idsInPath = getIdsForParent(action.sourceZone, state);
  const newItem = __spreadProps(__spreadValues({}, item), {
    props: __spreadProps(__spreadValues({}, item.props), {
      id: generateId(item.type)
    })
  });
  const modified = walkAppState(
    state,
    appStore.config,
    (content, zoneCompound) => {
      if (zoneCompound === action.sourceZone) {
        return insert(content, action.sourceIndex + 1, item);
      }
      return content;
    },
    (childItem, path, index) => {
      const zoneCompound = path[path.length - 1];
      const parents = path.map((p) => p.split(":")[0]);
      if (parents.indexOf(newItem.props.id) > -1) {
        return __spreadProps(__spreadValues({}, childItem), {
          props: __spreadProps(__spreadValues({}, childItem.props), {
            id: generateId(childItem.type)
          })
        });
      }
      if (zoneCompound === action.sourceZone && index === action.sourceIndex + 1) {
        return newItem;
      }
      const [sourceZoneParent] = action.sourceZone.split(":");
      if (sourceZoneParent === childItem.props.id || idsInPath.indexOf(childItem.props.id) > -1) {
        return childItem;
      }
      return null;
    }
  );
  return __spreadProps(__spreadValues({}, modified), {
    ui: __spreadProps(__spreadValues({}, modified.ui), {
      itemSelector: {
        index: action.sourceIndex + 1,
        zone: action.sourceZone
      }
    })
  });
}
var init_duplicate = __esm({
  "reducer/actions/duplicate.ts"() {
    "use strict";
    init_react_import();
    init_generate_id();
    init_walk_app_state();
    init_get_ids_for_parent();
    init_get_item();
    init_insert();
  }
});

// lib/data/remove.ts
var remove;
var init_remove = __esm({
  "lib/data/remove.ts"() {
    "use strict";
    init_react_import();
    remove = (list, index) => {
      const result = Array.from(list);
      result.splice(index, 1);
      return result;
    };
  }
});

// reducer/actions/move.ts
var moveAction;
var init_move = __esm({
  "reducer/actions/move.ts"() {
    "use strict";
    init_react_import();
    init_insert();
    init_remove();
    init_get_item();
    init_walk_app_state();
    init_get_ids_for_parent();
    moveAction = (state, action, appStore) => {
      if (action.sourceZone === action.destinationZone && action.sourceIndex === action.destinationIndex) {
        return state;
      }
      const item = getItem(
        { zone: action.sourceZone, index: action.sourceIndex },
        state
      );
      if (!item) return state;
      const idsInSourcePath = getIdsForParent(action.sourceZone, state);
      const idsInDestinationPath = getIdsForParent(action.destinationZone, state);
      return walkAppState(
        state,
        appStore.config,
        (content, zoneCompound) => {
          if (zoneCompound === action.sourceZone && zoneCompound === action.destinationZone) {
            return insert(
              remove(content, action.sourceIndex),
              action.destinationIndex,
              item
            );
          } else if (zoneCompound === action.sourceZone) {
            return remove(content, action.sourceIndex);
          } else if (zoneCompound === action.destinationZone) {
            return insert(content, action.destinationIndex, item);
          }
          return content;
        },
        (childItem, path) => {
          const [sourceZoneParent] = action.sourceZone.split(":");
          const [destinationZoneParent] = action.destinationZone.split(":");
          const childId = childItem.props.id;
          if (sourceZoneParent === childId || destinationZoneParent === childId || item.props.id === childId || idsInSourcePath.indexOf(childId) > -1 || idsInDestinationPath.indexOf(childId) > -1 || path.includes(action.destinationZone)) {
            return childItem;
          }
          return null;
        }
      );
    };
  }
});

// reducer/actions/reorder.ts
var reorderAction;
var init_reorder2 = __esm({
  "reducer/actions/reorder.ts"() {
    "use strict";
    init_react_import();
    init_move();
    reorderAction = (state, action, appStore) => {
      return moveAction(
        state,
        {
          type: "move",
          sourceIndex: action.sourceIndex,
          sourceZone: action.destinationZone,
          destinationIndex: action.destinationIndex,
          destinationZone: action.destinationZone
        },
        appStore
      );
    };
  }
});

// reducer/actions/remove.ts
var removeAction;
var init_remove2 = __esm({
  "reducer/actions/remove.ts"() {
    "use strict";
    init_react_import();
    init_remove();
    init_get_item();
    init_walk_app_state();
    removeAction = (state, action, appStore) => {
      const item = getItem({ index: action.index, zone: action.zone }, state);
      const nodesToDelete = Object.entries(state.indexes.nodes).reduce(
        (acc, [nodeId, nodeData]) => {
          const pathIds = nodeData.path.map((p) => p.split(":")[0]);
          if (pathIds.includes(item.props.id)) {
            return [...acc, nodeId];
          }
          return acc;
        },
        [item.props.id]
      );
      const newState = walkAppState(
        state,
        appStore.config,
        (content, zoneCompound) => {
          if (zoneCompound === action.zone) {
            return remove(content, action.index);
          }
          return content;
        }
      );
      Object.keys(newState.data.zones || {}).forEach((zoneCompound) => {
        const parentId = zoneCompound.split(":")[0];
        if (nodesToDelete.includes(parentId) && newState.data.zones) {
          delete newState.data.zones[zoneCompound];
        }
      });
      Object.keys(newState.indexes.zones).forEach((zoneCompound) => {
        const parentId = zoneCompound.split(":")[0];
        if (nodesToDelete.includes(parentId)) {
          delete newState.indexes.zones[zoneCompound];
        }
      });
      nodesToDelete.forEach((id) => {
        delete newState.indexes.nodes[id];
      });
      return newState;
    };
  }
});

// lib/data/setup-zone.ts
var setupZone;
var init_setup_zone = __esm({
  "lib/data/setup-zone.ts"() {
    "use strict";
    init_react_import();
    init_root_droppable_id();
    setupZone = (data, zoneKey) => {
      if (zoneKey === rootDroppableId) {
        return data;
      }
      const newData = __spreadProps(__spreadValues({}, data), {
        zones: data.zones ? __spreadValues({}, data.zones) : {}
      });
      newData.zones[zoneKey] = newData.zones[zoneKey] || [];
      return newData;
    };
  }
});

// reducer/actions/register-zone.ts
function registerZoneAction(state, action) {
  if (zoneCache[action.zone]) {
    return __spreadProps(__spreadValues({}, state), {
      data: __spreadProps(__spreadValues({}, state.data), {
        zones: __spreadProps(__spreadValues({}, state.data.zones), {
          [action.zone]: zoneCache[action.zone]
        })
      }),
      indexes: __spreadProps(__spreadValues({}, state.indexes), {
        zones: __spreadProps(__spreadValues({}, state.indexes.zones), {
          [action.zone]: __spreadProps(__spreadValues({}, state.indexes.zones[action.zone]), {
            contentIds: zoneCache[action.zone].map((item) => item.props.id),
            type: "dropzone"
          })
        })
      })
    });
  }
  return __spreadProps(__spreadValues({}, state), { data: setupZone(state.data, action.zone) });
}
function unregisterZoneAction(state, action) {
  const _zones = __spreadValues({}, state.data.zones || {});
  const zoneIndex = __spreadValues({}, state.indexes.zones || {});
  if (_zones[action.zone]) {
    zoneCache[action.zone] = _zones[action.zone];
    delete _zones[action.zone];
  }
  delete zoneIndex[action.zone];
  return __spreadProps(__spreadValues({}, state), {
    data: __spreadProps(__spreadValues({}, state.data), {
      zones: _zones
    }),
    indexes: __spreadProps(__spreadValues({}, state.indexes), {
      zones: zoneIndex
    })
  });
}
var zoneCache;
var init_register_zone = __esm({
  "reducer/actions/register-zone.ts"() {
    "use strict";
    init_react_import();
    init_setup_zone();
    zoneCache = {};
  }
});

// reducer/actions/set-data.ts
var setDataAction;
var init_set_data = __esm({
  "reducer/actions/set-data.ts"() {
    "use strict";
    init_react_import();
    init_walk_app_state();
    setDataAction = (state, action, appStore) => {
      if (typeof action.data === "object") {
        console.warn(
          "`setData` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."
        );
        return walkAppState(
          __spreadProps(__spreadValues({}, state), {
            data: __spreadValues(__spreadValues({}, state.data), action.data)
          }),
          appStore.config
        );
      }
      return walkAppState(
        __spreadProps(__spreadValues({}, state), {
          data: __spreadValues(__spreadValues({}, state.data), action.data(state.data))
        }),
        appStore.config
      );
    };
  }
});

// reducer/actions/set-ui.ts
var setUiAction;
var init_set_ui = __esm({
  "reducer/actions/set-ui.ts"() {
    "use strict";
    init_react_import();
    setUiAction = (state, action) => {
      if (typeof action.ui === "object") {
        return __spreadProps(__spreadValues({}, state), {
          ui: __spreadValues(__spreadValues({}, state.ui), action.ui)
        });
      }
      return __spreadProps(__spreadValues({}, state), {
        ui: __spreadValues(__spreadValues({}, state.ui), action.ui(state.ui))
      });
    };
  }
});

// lib/data/make-state-public.ts
var makeStatePublic;
var init_make_state_public = __esm({
  "lib/data/make-state-public.ts"() {
    "use strict";
    init_react_import();
    makeStatePublic = (state) => {
      const { data, ui } = state;
      return { data, ui };
    };
  }
});

// reducer/actions.tsx
var init_actions = __esm({
  "reducer/actions.tsx"() {
    "use strict";
    init_react_import();
  }
});

// reducer/index.ts
function storeInterceptor(reducer, record, onAction) {
  return (state, action) => {
    const newAppState = reducer(state, action);
    const isValidType = ![
      "registerZone",
      "unregisterZone",
      "setData",
      "setUi",
      "set"
    ].includes(action.type);
    if (typeof action.recordHistory !== "undefined" ? action.recordHistory : isValidType) {
      if (record) record(newAppState);
    }
    onAction == null ? void 0 : onAction(action, makeStatePublic(newAppState), makeStatePublic(state));
    return newAppState;
  };
}
function createReducer({
  record,
  onAction,
  appStore
}) {
  return storeInterceptor(
    (state, action) => {
      if (action.type === "set") {
        return setAction(state, action, appStore);
      }
      if (action.type === "insert") {
        return insertAction(state, action, appStore);
      }
      if (action.type === "replace") {
        return replaceAction(state, action, appStore);
      }
      if (action.type === "replaceRoot") {
        return replaceRootAction(state, action, appStore);
      }
      if (action.type === "duplicate") {
        return duplicateAction(state, action, appStore);
      }
      if (action.type === "reorder") {
        return reorderAction(state, action, appStore);
      }
      if (action.type === "move") {
        return moveAction(state, action, appStore);
      }
      if (action.type === "remove") {
        return removeAction(state, action, appStore);
      }
      if (action.type === "registerZone") {
        return registerZoneAction(state, action);
      }
      if (action.type === "unregisterZone") {
        return unregisterZoneAction(state, action);
      }
      if (action.type === "setData") {
        return setDataAction(state, action, appStore);
      }
      if (action.type === "setUi") {
        return setUiAction(state, action);
      }
      return state;
    },
    record,
    onAction
  );
}
var init_reducer = __esm({
  "reducer/index.ts"() {
    "use strict";
    init_react_import();
    init_set();
    init_insert2();
    init_replace2();
    init_replace_root();
    init_duplicate();
    init_reorder2();
    init_move();
    init_remove2();
    init_register_zone();
    init_set_data();
    init_set_ui();
    init_make_state_public();
    init_actions();
  }
});

// components/ViewportControls/default-viewports.ts
var defaultViewports;
var init_default_viewports = __esm({
  "components/ViewportControls/default-viewports.ts"() {
    "use strict";
    init_react_import();
    defaultViewports = [
      { width: 360, height: "auto", icon: "Smartphone", label: "Small" },
      { width: 768, height: "auto", icon: "Tablet", label: "Medium" },
      { width: 1280, height: "auto", icon: "Monitor", label: "Large" },
      { width: "100%", height: "auto", icon: "FullWidth", label: "Full-width" }
    ];
  }
});

// lib/use-hotkey.ts
var import_react6, import_zustand3, import_middleware2, keyCodeMap, useHotkeyStore, monitorHotkeys, useMonitorHotkeys, useHotkey;
var init_use_hotkey = __esm({
  "lib/use-hotkey.ts"() {
    "use strict";
    init_react_import();
    import_react6 = require("react");
    import_zustand3 = require("zustand");
    import_middleware2 = require("zustand/middleware");
    keyCodeMap = {
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
    useHotkeyStore = (0, import_zustand3.create)()(
      (0, import_middleware2.subscribeWithSelector)((set) => ({
        held: {},
        hold: (key) => set((s) => s.held[key] ? s : { held: __spreadProps(__spreadValues({}, s.held), { [key]: true }) }),
        release: (key) => set((s) => s.held[key] ? { held: __spreadProps(__spreadValues({}, s.held), { [key]: false }) } : s),
        reset: (held = {}) => set(() => ({ held })),
        triggers: {}
      }))
    );
    monitorHotkeys = (doc) => {
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
    useMonitorHotkeys = () => {
      (0, import_react6.useEffect)(() => monitorHotkeys(document), []);
    };
    useHotkey = (combo, cb) => {
      (0, import_react6.useEffect)(
        () => useHotkeyStore.setState((s) => ({
          triggers: __spreadProps(__spreadValues({}, s.triggers), {
            [`${Object.keys(combo).join("+")}`]: { combo, cb }
          })
        })),
        []
      );
    };
  }
});

// store/slices/history.ts
function debounce(func, timeout3 = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout3);
  };
}
function useRegisterHistorySlice(appStore, {
  histories,
  index,
  initialAppState
}) {
  (0, import_react7.useEffect)(
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
var import_react7, EMPTY_HISTORY_INDEX, tidyState, createHistorySlice;
var init_history = __esm({
  "store/slices/history.ts"() {
    "use strict";
    init_react_import();
    init_generate_id();
    import_react7 = require("react");
    init_use_hotkey();
    EMPTY_HISTORY_INDEX = 0;
    tidyState = (state) => {
      return __spreadProps(__spreadValues({}, state), {
        ui: __spreadProps(__spreadValues({}, state.ui), {
          field: __spreadProps(__spreadValues({}, state.ui.field), {
            focus: null
          })
        })
      });
    };
    createHistorySlice = (set, get) => {
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
  }
});

// store/slices/nodes.ts
var emptyMethods, createNodesSlice;
var init_nodes = __esm({
  "store/slices/nodes.ts"() {
    "use strict";
    init_react_import();
    emptyMethods = {
      sync: () => null,
      hideOverlay: () => null,
      showOverlay: () => null
    };
    createNodesSlice = (set, get) => {
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
  }
});

// lib/data/flatten-data.ts
var flattenData;
var init_flatten_data = __esm({
  "lib/data/flatten-data.ts"() {
    "use strict";
    init_react_import();
    init_walk_app_state();
    flattenData = (state, config) => {
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
  }
});

// lib/get-changed.ts
var import_fast_equals, getChanged;
var init_get_changed = __esm({
  "lib/get-changed.ts"() {
    "use strict";
    init_react_import();
    import_fast_equals = require("fast-equals");
    getChanged = (newItem, oldItem) => {
      return newItem ? Object.keys(newItem.props || {}).reduce((acc, item) => {
        const newItemProps = (newItem == null ? void 0 : newItem.props) || {};
        const oldItemProps = (oldItem == null ? void 0 : oldItem.props) || {};
        return __spreadProps(__spreadValues({}, acc), {
          [item]: !(0, import_fast_equals.deepEqual)(oldItemProps[item], newItemProps[item])
        });
      }, {}) : {};
    };
  }
});

// store/slices/permissions.ts
var import_react8, createPermissionsSlice, useRegisterPermissionsSlice;
var init_permissions = __esm({
  "store/slices/permissions.ts"() {
    "use strict";
    init_react_import();
    import_react8 = require("react");
    init_flatten_data();
    init_get_changed();
    init_make_state_public();
    createPermissionsSlice = (set, get) => {
      const resolvePermissions = (..._0) => __async(null, [..._0], function* (params = {}, force) {
        const { state, permissions, config } = get();
        const { cache: cache2, globalPermissions } = permissions;
        const resolvePermissionsForItem = (item2, force2 = false) => __async(null, null, function* () {
          var _a, _b;
          const { config: config2, state: appState, setComponentLoading } = get();
          const itemCache = cache2[item2.props.id];
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
    useRegisterPermissionsSlice = (appStore, globalPermissions) => {
      (0, import_react8.useEffect)(() => {
        const { permissions } = appStore.getState();
        const { globalPermissions: existingGlobalPermissions } = permissions;
        appStore.setState({
          permissions: __spreadProps(__spreadValues({}, permissions), {
            globalPermissions: __spreadValues(__spreadValues({}, existingGlobalPermissions), globalPermissions)
          })
        });
        permissions.resolvePermissions();
      }, [globalPermissions]);
      (0, import_react8.useEffect)(() => {
        return appStore.subscribe(
          (s) => s.state.data,
          () => {
            if (appStore.getState().state.ui.isDragging) return;
            appStore.getState().permissions.resolvePermissions();
          }
        );
      }, []);
      (0, import_react8.useEffect)(() => {
        return appStore.subscribe(
          (s) => s.state.ui.isDragging,
          (isDragging) => {
            if (!isDragging) {
              appStore.getState().permissions.resolvePermissions();
            }
          }
        );
      }, []);
      (0, import_react8.useEffect)(() => {
        return appStore.subscribe(
          (s) => s.config,
          () => {
            appStore.getState().permissions.resolvePermissions();
          }
        );
      }, []);
    };
  }
});

// store/slices/fields.ts
var import_react9, createFieldsSlice, useRegisterFieldsSlice;
var init_fields = __esm({
  "store/slices/fields.ts"() {
    "use strict";
    init_react_import();
    import_react9 = require("react");
    init_get_changed();
    init_make_state_public();
    createFieldsSlice = (_set, _get) => {
      return {
        fields: {},
        loading: false,
        lastResolvedData: {},
        id: void 0
      };
    };
    useRegisterFieldsSlice = (appStore, id) => {
      const resolveFields = (0, import_react9.useCallback)(
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
          const defaultFields2 = componentConfig.fields || {};
          const resolver = componentConfig.resolveFields;
          let lastFields = fields;
          if (reset) {
            appStore.setState((s) => ({
              fields: __spreadProps(__spreadValues({}, s.fields), { fields: defaultFields2, id })
            }));
            lastFields = defaultFields2;
          }
          if (resolver) {
            const timeout3 = setTimeout(() => {
              appStore.setState((s) => ({
                fields: __spreadProps(__spreadValues({}, s.fields), { loading: true })
              }));
            }, 50);
            const lastData = ((_a = lastResolvedData.props) == null ? void 0 : _a.id) === id ? lastResolvedData : null;
            const changed = getChanged(componentData, lastData);
            const newFields = yield resolver(componentData, {
              changed,
              fields: defaultFields2,
              lastFields,
              metadata: __spreadValues(__spreadValues({}, metadata), componentConfig.metadata),
              lastData,
              appState: makeStatePublic(state),
              parent
            });
            clearTimeout(timeout3);
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
              fields: __spreadProps(__spreadValues({}, s.fields), { fields: defaultFields2, id })
            }));
          }
        }),
        [id]
      );
      (0, import_react9.useEffect)(() => {
        resolveFields(true);
        return appStore.subscribe(
          (s) => s.state.indexes.nodes[id || "root"],
          () => resolveFields()
        );
      }, [id]);
    };
  }
});

// lib/data/to-component.ts
var toComponent;
var init_to_component = __esm({
  "lib/data/to-component.ts"() {
    "use strict";
    init_react_import();
    toComponent = (item) => {
      return "type" in item ? item : __spreadProps(__spreadValues({}, item), {
        props: __spreadProps(__spreadValues({}, item.props), { id: "root" }),
        type: "root"
      });
    };
  }
});

// lib/resolve-component-data.ts
var import_fast_equals2, cache, resolveComponentData;
var init_resolve_component_data = __esm({
  "lib/resolve-component-data.ts"() {
    "use strict";
    init_react_import();
    init_map_fields();
    init_to_component();
    init_get_changed();
    import_fast_equals2 = require("fast-equals");
    cache = { lastChange: {} };
    resolveComponentData = (_0, _1, ..._2) => __async(null, [_0, _1, ..._2], function* (item, config, metadata = {}, onResolveStart, onResolveEnd, trigger = "replace", parent = null) {
      const configForItem = "type" in item && item.type !== "root" ? config.components[item.type] : config.root;
      const resolvedItem = __spreadValues({}, item);
      const shouldRunResolver = (configForItem == null ? void 0 : configForItem.resolveData) && item.props;
      const id = "id" in item.props ? item.props.id : "root";
      if (shouldRunResolver) {
        const {
          item: oldItem = null,
          resolved = {},
          parentId: oldParentId = null
        } = cache.lastChange[id] || {};
        const isRootOrInserted = oldParentId === null;
        const parentChanged = !isRootOrInserted && (parent == null ? void 0 : parent.props.id) !== oldParentId;
        const dataChanged = item && !(0, import_fast_equals2.deepEqual)(item, oldItem);
        const shouldSkip = trigger === "move" && !parentChanged || trigger !== "move" && trigger !== "force" && !dataChanged;
        if (shouldSkip) {
          return { node: resolved, didChange: false };
        }
        const changed = getChanged(item, oldItem);
        if (onResolveStart) {
          onResolveStart(item);
        }
        const { props: resolvedProps, readOnly = {} } = yield configForItem.resolveData(item, {
          changed,
          lastData: oldItem,
          metadata: __spreadValues(__spreadValues({}, metadata), configForItem.metadata),
          trigger,
          parent
        });
        resolvedItem.props = __spreadValues(__spreadValues({}, item.props), resolvedProps);
        if (Object.keys(readOnly).length) {
          resolvedItem.readOnly = readOnly;
        }
      }
      const itemAsComponentData = toComponent(resolvedItem);
      let itemWithResolvedChildren = yield mapFields(
        resolvedItem,
        {
          slot: (_02) => __async(null, [_02], function* ({ value }) {
            const content = value;
            return yield Promise.all(
              content.map(
                (childItem) => __async(null, null, function* () {
                  return (yield resolveComponentData(
                    childItem,
                    config,
                    metadata,
                    onResolveStart,
                    onResolveEnd,
                    trigger,
                    itemAsComponentData
                  )).node;
                })
              )
            );
          })
        },
        config
      );
      if (shouldRunResolver && onResolveEnd) {
        onResolveEnd(resolvedItem);
      }
      cache.lastChange[id] = {
        item,
        resolved: itemWithResolvedChildren,
        parentId: parent == null ? void 0 : parent.props.id
      };
      return {
        node: itemWithResolvedChildren,
        didChange: !(0, import_fast_equals2.deepEqual)(item, itemWithResolvedChildren)
      };
    });
  }
});

// lib/data/to-root.ts
var toRoot;
var init_to_root = __esm({
  "lib/data/to-root.ts"() {
    "use strict";
    init_react_import();
    toRoot = (item) => {
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
  }
});

// store/default-app-state.ts
var defaultAppState;
var init_default_app_state = __esm({
  "store/default-app-state.ts"() {
    "use strict";
    init_react_import();
    init_default_viewports();
    defaultAppState = {
      data: { content: [], root: {}, zones: {} },
      ui: {
        leftSideBarVisible: true,
        rightSideBarVisible: true,
        arrayState: {},
        itemSelector: null,
        componentList: {},
        isDragging: false,
        previewMode: "edit",
        viewports: {
          current: {
            width: defaultViewports[0].width,
            height: defaultViewports[0].height || "auto"
          },
          options: [],
          controlsVisible: true
        },
        field: { focus: null },
        plugin: { current: null }
      },
      indexes: {
        nodes: {},
        zones: {}
      }
    };
  }
});

// store/index.ts
function useAppStore(selector) {
  const context = (0, import_react10.useContext)(appStoreContext);
  return (0, import_zustand4.useStore)(context, selector);
}
function useAppStoreApi() {
  return (0, import_react10.useContext)(appStoreContext);
}
var import_zustand4, import_middleware3, import_react10, defaultPageFields, createAppStore, appStoreContext;
var init_store = __esm({
  "store/index.ts"() {
    "use strict";
    "use client";
    init_react_import();
    init_reducer();
    init_get_item();
    init_default_viewports();
    import_zustand4 = require("zustand");
    import_middleware3 = require("zustand/middleware");
    import_react10 = require("react");
    init_history();
    init_nodes();
    init_permissions();
    init_fields();
    init_resolve_component_data();
    init_walk_app_state();
    init_to_root();
    init_generate_id();
    init_default_app_state();
    defaultPageFields = {
      title: { type: "text" }
    };
    createAppStore = (initialAppStore) => (0, import_zustand4.create)()(
      (0, import_middleware3.subscribeWithSelector)((set, get) => {
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
          setComponentLoading: (id, loading = true, defer2 = 0) => {
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
              clearTimeout(timeout3);
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
            const timeout3 = setTimeout(() => {
              if (loading) {
                setLoading();
              } else {
                unsetLoading();
              }
              delete pendingLoadTimeouts[loadId];
              set({ pendingLoadTimeouts });
            }, defer2);
            set({
              pendingLoadTimeouts: __spreadProps(__spreadValues({}, pendingLoadTimeouts), {
                [id]: timeout3
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
    appStoreContext = (0, import_react10.createContext)(createAppStore());
  }
});

// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
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
var isProduction, prefix;
var init_tiny_invariant = __esm({
  "../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js"() {
    "use strict";
    init_react_import();
    isProduction = process.env.NODE_ENV === "production";
    prefix = "Invariant failed";
  }
});

// ../../node_modules/css-box-model/dist/css-box-model.esm.js
var getRect, expand, shrink, noSpacing, createBox, parse, calculateBox, getBox;
var init_css_box_model_esm = __esm({
  "../../node_modules/css-box-model/dist/css-box-model.esm.js"() {
    "use strict";
    init_react_import();
    init_tiny_invariant();
    getRect = function getRect2(_ref) {
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
    expand = function expand2(target, expandBy) {
      return {
        top: target.top - expandBy.top,
        left: target.left - expandBy.left,
        bottom: target.bottom + expandBy.bottom,
        right: target.right + expandBy.right
      };
    };
    shrink = function shrink2(target, shrinkBy) {
      return {
        top: target.top + shrinkBy.top,
        left: target.left + shrinkBy.left,
        bottom: target.bottom - shrinkBy.bottom,
        right: target.right - shrinkBy.right
      };
    };
    noSpacing = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    createBox = function createBox2(_ref2) {
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
    parse = function parse2(raw) {
      var value = raw.slice(0, -2);
      var suffix = raw.slice(-2);
      if (suffix !== "px") {
        return 0;
      }
      var result = Number(value);
      !!isNaN(result) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
      return result;
    };
    calculateBox = function calculateBox2(borderBox, styles2) {
      var margin = {
        top: parse(styles2.marginTop),
        right: parse(styles2.marginRight),
        bottom: parse(styles2.marginBottom),
        left: parse(styles2.marginLeft)
      };
      var padding = {
        top: parse(styles2.paddingTop),
        right: parse(styles2.paddingRight),
        bottom: parse(styles2.paddingBottom),
        left: parse(styles2.paddingLeft)
      };
      var border = {
        top: parse(styles2.borderTopWidth),
        right: parse(styles2.borderRightWidth),
        bottom: parse(styles2.borderBottomWidth),
        left: parse(styles2.borderLeftWidth)
      };
      return createBox({
        borderBox,
        margin,
        padding,
        border
      });
    };
    getBox = function getBox2(el) {
      var borderBox = el.getBoundingClientRect();
      var styles2 = window.getComputedStyle(el);
      return calculateBox(borderBox, styles2);
    };
  }
});

// lib/get-zoom-config.ts
var RESET_ZOOM_SMALLER_THAN_FRAME, getZoomConfig;
var init_get_zoom_config = __esm({
  "lib/get-zoom-config.ts"() {
    "use strict";
    init_react_import();
    init_css_box_model_esm();
    RESET_ZOOM_SMALLER_THAN_FRAME = true;
    getZoomConfig = (uiViewport, frame, zoom) => {
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
  }
});

// lib/use-reset-auto-zoom.ts
var useResetAutoZoom;
var init_use_reset_auto_zoom = __esm({
  "lib/use-reset-auto-zoom.ts"() {
    "use strict";
    init_react_import();
    init_store();
    init_get_zoom_config();
    useResetAutoZoom = (frameRef) => {
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
  }
});

// lib/index.ts
var init_lib = __esm({
  "lib/index.ts"() {
    "use strict";
    init_react_import();
    init_filter();
    init_get_class_name_factory();
    init_reorder();
    init_replace();
    init_use_reset_auto_zoom();
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/Loader/styles.module.css/#css-module-data
var init_css_module_data3 = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/Loader/styles.module.css/#css-module-data"() {
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/Loader/styles.module.css#css-module
var styles_module_default4;
var init_styles_module2 = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/Loader/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data3();
    styles_module_default4 = { "Loader": "_Loader_nacdm_13", "loader-animation": "_loader-animation_nacdm_1" };
  }
});

// components/Loader/index.tsx
var import_jsx_runtime3, getClassName2, Loader;
var init_Loader = __esm({
  "components/Loader/index.tsx"() {
    "use strict";
    init_react_import();
    init_lib();
    init_styles_module2();
    import_jsx_runtime3 = require("react/jsx-runtime");
    getClassName2 = get_class_name_factory_default("Loader", styles_module_default4);
    Loader = (_a) => {
      var _b = _a, {
        color,
        size = 16
      } = _b, props = __objRest(_b, [
        "color",
        "size"
      ]);
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "span",
        __spreadValues({
          className: getClassName2(),
          style: {
            width: size,
            height: size,
            color
          },
          "aria-label": "loading"
        }, props)
      );
    };
  }
});

// components/IconButton/IconButton.tsx
var import_react11, import_jsx_runtime4, getClassName3, IconButton;
var init_IconButton = __esm({
  "components/IconButton/IconButton.tsx"() {
    "use strict";
    init_react_import();
    import_react11 = require("react");
    init_IconButton_module();
    init_get_class_name_factory();
    init_Loader();
    import_jsx_runtime4 = require("react/jsx-runtime");
    getClassName3 = get_class_name_factory_default("IconButton", IconButton_module_default);
    IconButton = ({
      active = false,
      children,
      href,
      onClick,
      type,
      disabled,
      tabIndex,
      newTab,
      fullWidth,
      title,
      suppressHydrationWarning
    }) => {
      const [loading, setLoading] = (0, import_react11.useState)(false);
      const ElementType = href ? "a" : "button";
      const el = /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        ElementType,
        {
          className: getClassName3({
            active,
            disabled,
            fullWidth
          }),
          onClick: (e) => {
            if (!onClick) return;
            setLoading(true);
            Promise.resolve(onClick(e)).then(() => {
              setLoading(false);
            });
          },
          type,
          disabled: disabled || loading,
          tabIndex,
          target: newTab ? "_blank" : void 0,
          rel: newTab ? "noreferrer" : void 0,
          href,
          title,
          suppressHydrationWarning,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: getClassName3("title"), children: title }),
            children,
            loading && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
              "\xA0\xA0",
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Loader, { size: 14 })
            ] })
          ]
        }
      );
      return el;
    };
  }
});

// components/IconButton/index.ts
var init_IconButton2 = __esm({
  "components/IconButton/index.ts"() {
    "use strict";
    init_react_import();
    init_IconButton();
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data
var init_css_module_data4 = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data"() {
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/RichTextMenu/styles.module.css#css-module
var styles_module_default9;
var init_styles_module3 = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/RichTextMenu/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data4();
    styles_module_default9 = { "RichTextMenu": "_RichTextMenu_k97eh_1", "RichTextMenu--form": "_RichTextMenu--form_k97eh_7", "RichTextMenu-group": "_RichTextMenu-group_k97eh_17", "RichTextMenu--inline": "_RichTextMenu--inline_k97eh_35" };
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data
var init_css_module_data5 = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data"() {
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css#css-module
var styles_module_default10;
var init_styles_module4 = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data5();
    styles_module_default10 = { "Control": "_Control_1aveu_1", "Control--inline": "_Control--inline_1aveu_6" };
  }
});

// components/RichTextMenu/lib/use-control-context.ts
var import_react23, ControlContext, useControlContext;
var init_use_control_context = __esm({
  "components/RichTextMenu/lib/use-control-context.ts"() {
    "use strict";
    init_react_import();
    import_react23 = require("react");
    ControlContext = (0, import_react23.createContext)({});
    useControlContext = () => {
      return (0, import_react23.useContext)(ControlContext);
    };
  }
});

// components/RichTextMenu/components/Control/index.tsx
function Control({
  icon,
  disabled,
  active,
  onClick,
  title
}) {
  const { inline } = useControlContext();
  if (inline) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: getClassName14({ inline: true }), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      Action,
      {
        onClick,
        disabled,
        active,
        label: title,
        children: icon
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: getClassName14(), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    IconButton,
    {
      onClick,
      disabled,
      active,
      title,
      children: icon
    }
  ) });
}
var import_jsx_runtime19, getClassName14;
var init_Control = __esm({
  "components/RichTextMenu/components/Control/index.tsx"() {
    "use strict";
    init_react_import();
    init_IconButton2();
    init_ActionBar();
    init_lib();
    init_styles_module4();
    init_use_control_context();
    import_jsx_runtime19 = require("react/jsx-runtime");
    getClassName14 = get_class_name_factory_default("Control", styles_module_default10);
  }
});

// components/RichTextMenu/controls/AlignLeft.tsx
function AlignLeft2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AlignLeft, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().setTextAlign("left").run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canAlignLeft),
      active: editorState == null ? void 0 : editorState.isAlignLeft,
      title: "Align left"
    }
  );
}
var import_jsx_runtime20;
var init_AlignLeft = __esm({
  "components/RichTextMenu/controls/AlignLeft.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime20 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignCenter.tsx
function AlignCenter2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(AlignCenter, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().setTextAlign("center").run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canAlignCenter),
      active: editorState == null ? void 0 : editorState.isAlignCenter,
      title: "Align center"
    }
  );
}
var import_jsx_runtime21;
var init_AlignCenter = __esm({
  "components/RichTextMenu/controls/AlignCenter.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime21 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignRight.tsx
function AlignRight2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(AlignRight, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().setTextAlign("right").run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canAlignRight),
      active: editorState == null ? void 0 : editorState.isAlignRight,
      title: "Align right"
    }
  );
}
var import_jsx_runtime22;
var init_AlignRight = __esm({
  "components/RichTextMenu/controls/AlignRight.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime22 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignJustify.tsx
function AlignJustify2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(AlignJustify, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().setTextAlign("justify").run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canAlignJustify),
      active: editorState == null ? void 0 : editorState.isAlignJustify,
      title: "Justify"
    }
  );
}
var import_jsx_runtime23;
var init_AlignJustify = __esm({
  "components/RichTextMenu/controls/AlignJustify.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime23 = require("react/jsx-runtime");
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/Select/styles.module.css/#css-module-data
var init_css_module_data6 = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/Select/styles.module.css/#css-module-data"() {
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/Select/styles.module.css#css-module
var styles_module_default11;
var init_styles_module5 = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/Select/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data6();
    styles_module_default11 = { "Select": "_Select_xjbef_1", "Select-button": "_Select-button_xjbef_6", "Select--hasOptions": "_Select--hasOptions_xjbef_19", "Select--disabled": "_Select--disabled_xjbef_23", "Select-buttonIcon": "_Select-buttonIcon_xjbef_27", "Select--standalone": "_Select--standalone_xjbef_33", "Select--actionBar": "_Select--actionBar_xjbef_38", "Select--hasValue": "_Select--hasValue_xjbef_44", "Select-items": "_Select-items_xjbef_61", "SelectItem": "_SelectItem_xjbef_72", "SelectItem--isSelected": "_SelectItem--isSelected_xjbef_87", "SelectItem-icon": "_SelectItem-icon_xjbef_93" };
  }
});

// components/Select/index.tsx
var import_react24, import_react_popover, import_jsx_runtime24, getClassName15, getItemClassName, Item, Select;
var init_Select = __esm({
  "components/Select/index.tsx"() {
    "use strict";
    init_react_import();
    init_styles_module5();
    import_react24 = require("react");
    import_react_popover = require("@radix-ui/react-popover");
    init_lucide_react();
    init_lib();
    import_jsx_runtime24 = require("react/jsx-runtime");
    getClassName15 = get_class_name_factory_default("Select", styles_module_default11);
    getItemClassName = get_class_name_factory_default("SelectItem", styles_module_default11);
    Item = ({
      children,
      isSelected,
      onClick
    }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("button", { className: getItemClassName({ isSelected }), onClick, children });
    };
    Select = ({
      children,
      options,
      onChange,
      value,
      defaultValue,
      mode,
      disabled = false
    }) => {
      const [open, setOpen] = (0, import_react24.useState)(false);
      const hasOptions = options.length > 0;
      const isDisabled = disabled || !hasOptions;
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        "div",
        {
          className: getClassName15({
            hasValue: value !== defaultValue,
            hasOptions,
            actionBar: mode === "actionBar",
            standalone: mode === "standalone",
            disabled: isDisabled
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react_popover.Popover, { open, onOpenChange: setOpen, children: [
            hasOptions ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_popover.PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("button", { className: getClassName15("button"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: getClassName15("buttonIcon"), children }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ChevronDown, { size: 12 })
            ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: getClassName15("button"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: getClassName15("buttonIcon"), children }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ChevronDown, { size: 12 })
            ] }) }),
            options.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_popover.PopoverPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_popover.PopoverContent, { align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("ul", { className: getClassName15("items"), "data-puck-rte-menu": true, children: options.map((option) => {
              const Icon2 = option.icon;
              return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                Item,
                {
                  isSelected: value === option.value,
                  onClick: () => {
                    onChange(option.value);
                    setOpen(false);
                  },
                  children: [
                    Icon2 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: getItemClassName("icon"), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Icon2, { size: 16 }) }),
                    option.label
                  ]
                }
              ) }, option.value);
            }) }) }) })
          ] })
        }
      );
    };
  }
});

// components/RichTextMenu/components/SelectControl/index.tsx
function SelectControl({
  renderDefaultIcon,
  onChange,
  options,
  value,
  defaultValue
}) {
  var _a, _b;
  const { inline, readOnly } = useControlContext();
  const optionsByValue = (0, import_react25.useMemo)(
    () => options.reduce(
      (acc, option) => __spreadProps(__spreadValues({}, acc), { [option.value]: option }),
      {}
    ),
    [options]
  );
  const Node2 = (_b = value && ((_a = optionsByValue[value]) == null ? void 0 : _a.icon)) != null ? _b : renderDefaultIcon;
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    Select,
    {
      options,
      onChange,
      value,
      defaultValue,
      mode: inline ? "actionBar" : "standalone",
      disabled: readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Node2, {})
    }
  );
}
var import_react25, import_jsx_runtime25;
var init_SelectControl = __esm({
  "components/RichTextMenu/components/SelectControl/index.tsx"() {
    "use strict";
    init_react_import();
    init_use_control_context();
    import_react25 = require("react");
    init_Select();
    import_jsx_runtime25 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignSelect/use-options.ts
var import_react26, optionNodes, useAlignOptions;
var init_use_options = __esm({
  "components/RichTextMenu/controls/AlignSelect/use-options.ts"() {
    "use strict";
    init_react_import();
    import_react26 = require("react");
    init_lucide_react();
    optionNodes = {
      left: { label: "Left", icon: AlignLeft },
      center: { label: "Center", icon: AlignCenter },
      right: { label: "Right", icon: AlignRight },
      justify: { label: "Justify", icon: AlignJustify }
    };
    useAlignOptions = (fieldOptions) => {
      var _a;
      let blockOptions = [];
      if ((fieldOptions == null ? void 0 : fieldOptions.textAlign) !== false) {
        if (!((_a = fieldOptions == null ? void 0 : fieldOptions.textAlign) == null ? void 0 : _a.alignments)) {
          blockOptions = ["left", "center", "right", "justify"];
        } else {
          if (fieldOptions == null ? void 0 : fieldOptions.textAlign.alignments.includes("left")) {
            blockOptions.push("left");
          }
          if (fieldOptions == null ? void 0 : fieldOptions.textAlign.alignments.includes("center")) {
            blockOptions.push("center");
          }
          if (fieldOptions == null ? void 0 : fieldOptions.textAlign.alignments.includes("right")) {
            blockOptions.push("right");
          }
          if (fieldOptions == null ? void 0 : fieldOptions.textAlign.alignments.includes("justify")) {
            blockOptions.push("justify");
          }
        }
      }
      return (0, import_react26.useMemo)(
        () => blockOptions.map((item) => ({
          value: item,
          label: optionNodes[item].label,
          icon: optionNodes[item].icon
        })),
        [blockOptions]
      );
    };
  }
});

// components/RichTextMenu/controls/AlignSelect/fallback.tsx
function AlignSelectFallback() {
  const ctx = useControlContext();
  const alignOptions = useAlignOptions(ctx.options);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    SelectControl,
    {
      options: alignOptions,
      onChange: () => {
      },
      value: "left",
      defaultValue: "left",
      renderDefaultIcon: AlignLeft
    }
  );
}
var import_jsx_runtime26;
var init_fallback = __esm({
  "components/RichTextMenu/controls/AlignSelect/fallback.tsx"() {
    "use strict";
    init_react_import();
    init_use_control_context();
    init_lucide_react();
    init_SelectControl();
    init_use_options();
    import_jsx_runtime26 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignSelect/loaded.tsx
var loaded_exports = {};
__export(loaded_exports, {
  AlignSelectLoaded: () => AlignSelectLoaded
});
function AlignSelectLoaded() {
  var _a;
  const { options } = useControlContext();
  const alignOptions = useAlignOptions(options);
  const { editor } = useControlContext();
  const currentValue = (_a = (0, import_react27.useEditorState)({
    editor,
    selector: (ctx) => {
      var _a2, _b, _c, _d;
      if ((_a2 = ctx.editor) == null ? void 0 : _a2.isActive({ textAlign: "center" })) {
        return "center";
      } else if ((_b = ctx.editor) == null ? void 0 : _b.isActive({ textAlign: "right" })) {
        return "right";
      } else if ((_c = ctx.editor) == null ? void 0 : _c.isActive({ textAlign: "justify" })) {
        return "justify";
      }
      return (options == null ? void 0 : options.textAlign) ? (_d = options.textAlign.defaultAlignment) != null ? _d : "left" : "left";
    }
  })) != null ? _a : "left";
  const handleChange = (val) => {
    const chain = editor == null ? void 0 : editor.chain();
    chain == null ? void 0 : chain.focus().setTextAlign(val).run();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    SelectControl,
    {
      options: alignOptions,
      onChange: handleChange,
      value: currentValue,
      defaultValue: "left",
      renderDefaultIcon: AlignLeft
    }
  );
}
var import_react27, import_jsx_runtime27;
var init_loaded = __esm({
  "components/RichTextMenu/controls/AlignSelect/loaded.tsx"() {
    "use strict";
    init_react_import();
    import_react27 = require("@tiptap/react");
    init_use_control_context();
    init_lucide_react();
    init_SelectControl();
    init_use_options();
    import_jsx_runtime27 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignSelect/index.tsx
var import_react28, import_jsx_runtime28, AlignSelectLoaded2, AlignSelect;
var init_AlignSelect = __esm({
  "components/RichTextMenu/controls/AlignSelect/index.tsx"() {
    "use strict";
    init_react_import();
    import_react28 = require("react");
    init_fallback();
    import_jsx_runtime28 = require("react/jsx-runtime");
    AlignSelectLoaded2 = (0, import_react28.lazy)(
      () => Promise.resolve().then(() => (init_loaded(), loaded_exports)).then((m) => ({
        default: m.AlignSelectLoaded
      }))
    );
    AlignSelect = () => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react28.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(AlignSelectFallback, {}), children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(AlignSelectLoaded2, {}) });
  }
});

// components/RichTextMenu/controls/Bold.tsx
function Bold2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Bold, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleBold().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canBold),
      active: editorState == null ? void 0 : editorState.isBold,
      title: "Bold"
    }
  );
}
var import_jsx_runtime29;
var init_Bold = __esm({
  "components/RichTextMenu/controls/Bold.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime29 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/Italic.tsx
function Italic2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Italic, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleItalic().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canItalic),
      active: editorState == null ? void 0 : editorState.isItalic,
      title: "Italic"
    }
  );
}
var import_jsx_runtime30;
var init_Italic = __esm({
  "components/RichTextMenu/controls/Italic.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime30 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/Underline.tsx
function Underline2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Underline, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleUnderline().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canUnderline),
      active: editorState == null ? void 0 : editorState.isUnderline,
      title: "Underline"
    }
  );
}
var import_jsx_runtime31;
var init_Underline = __esm({
  "components/RichTextMenu/controls/Underline.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime31 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/Strikethrough.tsx
function Strikethrough2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Strikethrough, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleStrike().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canStrike),
      active: editorState == null ? void 0 : editorState.isStrike,
      title: "Strikethrough"
    }
  );
}
var import_jsx_runtime32;
var init_Strikethrough = __esm({
  "components/RichTextMenu/controls/Strikethrough.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime32 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/InlineCode.tsx
function InlineCode() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Code, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleCode().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canInlineCode),
      active: editorState == null ? void 0 : editorState.isInlineCode,
      title: "Inline code"
    }
  );
}
var import_jsx_runtime33;
var init_InlineCode = __esm({
  "components/RichTextMenu/controls/InlineCode.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime33 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/BulletList.tsx
function BulletList() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(List, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleBulletList().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canBulletList),
      active: editorState == null ? void 0 : editorState.isBulletList,
      title: "Bullet list"
    }
  );
}
var import_jsx_runtime34;
var init_BulletList = __esm({
  "components/RichTextMenu/controls/BulletList.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime34 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/OrderedList.tsx
function OrderedList() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ListOrdered, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleOrderedList().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canOrderedList),
      active: editorState == null ? void 0 : editorState.isOrderedList,
      title: "Ordered list"
    }
  );
}
var import_jsx_runtime35;
var init_OrderedList = __esm({
  "components/RichTextMenu/controls/OrderedList.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime35 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/CodeBlock.tsx
function CodeBlock() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(SquareCode, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleCodeBlock().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canCodeBlock),
      active: editorState == null ? void 0 : editorState.isCodeBlock,
      title: "Code block"
    }
  );
}
var import_jsx_runtime36;
var init_CodeBlock = __esm({
  "components/RichTextMenu/controls/CodeBlock.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime36 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/Blockquote.tsx
function Blockquote() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Quote, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleBlockquote().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canBlockquote),
      active: editorState == null ? void 0 : editorState.isBlockquote,
      title: "Blockquote"
    }
  );
}
var import_jsx_runtime37;
var init_Blockquote = __esm({
  "components/RichTextMenu/controls/Blockquote.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime37 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/HorizontalRule.tsx
function HorizontalRule() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Minus, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().setHorizontalRule().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canHorizontalRule),
      title: "Horizontal rule"
    }
  );
}
var import_jsx_runtime38;
var init_HorizontalRule = __esm({
  "components/RichTextMenu/controls/HorizontalRule.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime38 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/HeadingSelect/use-options.ts
var import_react29, optionNodes2, useHeadingOptions;
var init_use_options2 = __esm({
  "components/RichTextMenu/controls/HeadingSelect/use-options.ts"() {
    "use strict";
    init_react_import();
    import_react29 = require("react");
    init_lucide_react();
    optionNodes2 = {
      h1: { label: "Heading 1", icon: Heading1 },
      h2: { label: "Heading 2", icon: Heading2 },
      h3: { label: "Heading 3", icon: Heading3 },
      h4: { label: "Heading 4", icon: Heading4 },
      h5: { label: "Heading 5", icon: Heading5 },
      h6: { label: "Heading 6", icon: Heading6 }
    };
    useHeadingOptions = (fieldOptions) => {
      var _a;
      let blockOptions = [];
      if ((fieldOptions == null ? void 0 : fieldOptions.heading) !== false) {
        if (!((_a = fieldOptions == null ? void 0 : fieldOptions.heading) == null ? void 0 : _a.levels)) {
          blockOptions = ["h1", "h2", "h3", "h4", "h5", "h6"];
        } else {
          if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(1)) {
            blockOptions.push("h1");
          }
          if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(2)) {
            blockOptions.push("h2");
          }
          if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(3)) {
            blockOptions.push("h3");
          }
          if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(4)) {
            blockOptions.push("h4");
          }
          if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(5)) {
            blockOptions.push("h5");
          }
          if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(6)) {
            blockOptions.push("h6");
          }
        }
      }
      return (0, import_react29.useMemo)(
        () => blockOptions.map((item) => ({
          value: item,
          label: optionNodes2[item].label,
          icon: optionNodes2[item].icon
        })),
        [blockOptions]
      );
    };
  }
});

// components/RichTextMenu/controls/HeadingSelect/fallback.tsx
function HeadingSelectFallback() {
  const ctx = useControlContext();
  const headingOptions = useHeadingOptions(ctx.options);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    SelectControl,
    {
      options: headingOptions,
      onChange: () => {
      },
      value: "p",
      defaultValue: "p",
      renderDefaultIcon: Heading
    }
  );
}
var import_jsx_runtime39;
var init_fallback2 = __esm({
  "components/RichTextMenu/controls/HeadingSelect/fallback.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_SelectControl();
    init_use_control_context();
    init_use_options2();
    import_jsx_runtime39 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/HeadingSelect/loaded.tsx
var loaded_exports2 = {};
__export(loaded_exports2, {
  HeadingSelectLoaded: () => HeadingSelectLoaded
});
function HeadingSelectLoaded() {
  const { options } = useControlContext();
  const headingOptions = useHeadingOptions(options);
  const { editor } = useControlContext();
  const currentValue = (0, import_react30.useEditorState)({
    editor,
    selector: (ctx) => {
      var _a, _b;
      if ((_a = ctx.editor) == null ? void 0 : _a.isActive("paragraph")) return "p";
      for (let level = 1; level <= 6; level++) {
        if ((_b = ctx.editor) == null ? void 0 : _b.isActive("heading", { level })) {
          return `h${level}`;
        }
      }
      return "p";
    }
  });
  const handleChange = (val) => {
    const chain = editor == null ? void 0 : editor.chain();
    if (val === "p") {
      chain == null ? void 0 : chain.focus().setParagraph().run();
    } else {
      const level = parseInt(val.replace("h", ""), 10);
      chain == null ? void 0 : chain.focus().toggleHeading({ level }).run();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    SelectControl,
    {
      options: headingOptions,
      onChange: handleChange,
      value: currentValue != null ? currentValue : "p",
      defaultValue: "p",
      renderDefaultIcon: Heading
    }
  );
}
var import_react30, import_jsx_runtime40;
var init_loaded2 = __esm({
  "components/RichTextMenu/controls/HeadingSelect/loaded.tsx"() {
    "use strict";
    init_react_import();
    import_react30 = require("@tiptap/react");
    init_use_control_context();
    init_lucide_react();
    init_SelectControl();
    init_use_options2();
    import_jsx_runtime40 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/HeadingSelect/index.tsx
var import_react31, import_jsx_runtime41, HeadingSelectLoaded2, HeadingSelect;
var init_HeadingSelect = __esm({
  "components/RichTextMenu/controls/HeadingSelect/index.tsx"() {
    "use strict";
    init_react_import();
    import_react31 = require("react");
    init_fallback2();
    import_jsx_runtime41 = require("react/jsx-runtime");
    HeadingSelectLoaded2 = (0, import_react31.lazy)(
      () => Promise.resolve().then(() => (init_loaded2(), loaded_exports2)).then((m) => ({
        default: m.HeadingSelectLoaded
      }))
    );
    HeadingSelect = () => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react31.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(HeadingSelectFallback, {}), children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(HeadingSelectLoaded2, {}) });
  }
});

// components/RichTextMenu/controls/ListSelect/use-options.ts
var import_react32, optionNodes3, useListOptions;
var init_use_options3 = __esm({
  "components/RichTextMenu/controls/ListSelect/use-options.ts"() {
    "use strict";
    init_react_import();
    import_react32 = require("react");
    init_lucide_react();
    optionNodes3 = {
      ul: { label: "Bullet list", icon: List },
      ol: { label: "Numbered list", icon: ListOrdered }
    };
    useListOptions = (fieldOptions) => {
      let blockOptions = [];
      if ((fieldOptions == null ? void 0 : fieldOptions.listItem) !== false) {
        blockOptions = ["ul", "ol"];
      }
      return (0, import_react32.useMemo)(
        () => blockOptions.map((item) => ({
          value: item,
          label: optionNodes3[item].label,
          icon: optionNodes3[item].icon
        })),
        [blockOptions]
      );
    };
  }
});

// components/RichTextMenu/controls/ListSelect/fallback.tsx
function ListSelectFallback() {
  const ctx = useControlContext();
  const listOptions = useListOptions(ctx.options);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    SelectControl,
    {
      options: listOptions,
      onChange: () => {
      },
      value: "p",
      defaultValue: "p",
      renderDefaultIcon: List
    }
  );
}
var import_jsx_runtime42;
var init_fallback3 = __esm({
  "components/RichTextMenu/controls/ListSelect/fallback.tsx"() {
    "use strict";
    init_react_import();
    init_SelectControl();
    init_use_control_context();
    init_lucide_react();
    init_use_options3();
    import_jsx_runtime42 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/ListSelect/loaded.tsx
var loaded_exports3 = {};
__export(loaded_exports3, {
  ListSelectLoaded: () => ListSelectLoaded
});
function ListSelectLoaded() {
  const { options } = useControlContext();
  const listOptions = useListOptions(options);
  const { editor } = useControlContext();
  const currentValue = (0, import_react33.useEditorState)({
    editor,
    selector: (ctx) => {
      var _a, _b;
      if ((_a = ctx.editor) == null ? void 0 : _a.isActive("bulletList")) return "ul";
      if ((_b = ctx.editor) == null ? void 0 : _b.isActive("orderedList")) return "ol";
      return "p";
    }
  });
  const handleChange = (val) => {
    const chain = editor == null ? void 0 : editor.chain();
    if (val === "p") {
      chain == null ? void 0 : chain.focus().setParagraph().run();
    } else if (val === "ol") {
      chain == null ? void 0 : chain.focus().toggleOrderedList().run();
    } else if (val === "ul") {
      chain == null ? void 0 : chain.focus().toggleBulletList().run();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    SelectControl,
    {
      options: listOptions,
      onChange: handleChange,
      value: currentValue != null ? currentValue : "p",
      defaultValue: "p",
      renderDefaultIcon: List
    }
  );
}
var import_react33, import_jsx_runtime43;
var init_loaded3 = __esm({
  "components/RichTextMenu/controls/ListSelect/loaded.tsx"() {
    "use strict";
    init_react_import();
    import_react33 = require("@tiptap/react");
    init_use_control_context();
    init_SelectControl();
    init_lucide_react();
    init_use_options3();
    import_jsx_runtime43 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/ListSelect/index.tsx
var import_react34, import_jsx_runtime44, ListSelectLoaded2, ListSelect;
var init_ListSelect = __esm({
  "components/RichTextMenu/controls/ListSelect/index.tsx"() {
    "use strict";
    init_react_import();
    import_react34 = require("react");
    init_fallback3();
    import_jsx_runtime44 = require("react/jsx-runtime");
    ListSelectLoaded2 = (0, import_react34.lazy)(
      () => Promise.resolve().then(() => (init_loaded3(), loaded_exports3)).then((m) => ({
        default: m.ListSelectLoaded
      }))
    );
    ListSelect = () => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react34.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(ListSelectFallback, {}), children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(ListSelectLoaded2, {}) });
  }
});

// components/RichTextMenu/controls/index.ts
var init_controls = __esm({
  "components/RichTextMenu/controls/index.ts"() {
    "use strict";
    init_react_import();
    init_AlignLeft();
    init_AlignCenter();
    init_AlignRight();
    init_AlignJustify();
    init_AlignSelect();
    init_Bold();
    init_Italic();
    init_Underline();
    init_Strikethrough();
    init_InlineCode();
    init_BulletList();
    init_OrderedList();
    init_CodeBlock();
    init_Blockquote();
    init_HorizontalRule();
    init_HeadingSelect();
    init_ListSelect();
  }
});

// components/RichTextMenu/inner.tsx
var import_react35, import_jsx_runtime45, getClassName16, DefaultMenu, RichTextMenu, Group2, LoadedRichTextMenuInner;
var init_inner = __esm({
  "components/RichTextMenu/inner.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module3();
    import_react35 = require("react");
    init_controls();
    init_use_control_context();
    init_Control();
    init_AlignSelect();
    import_jsx_runtime45 = require("react/jsx-runtime");
    getClassName16 = get_class_name_factory_default("RichTextMenu", styles_module_default9);
    DefaultMenu = ({ children }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(RichTextMenu, { children });
    };
    RichTextMenu = ({ children }) => {
      const { inline } = useControlContext();
      return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: getClassName16({ inline, form: !inline }), "data-puck-rte-menu": true, children });
    };
    Group2 = ({ children }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: getClassName16("group"), children });
    };
    RichTextMenu.Group = Group2;
    RichTextMenu.Control = Control;
    RichTextMenu.AlignCenter = AlignCenter2;
    RichTextMenu.AlignJustify = AlignJustify2;
    RichTextMenu.AlignLeft = AlignLeft2;
    RichTextMenu.AlignRight = AlignRight2;
    RichTextMenu.AlignSelect = AlignSelect;
    RichTextMenu.Blockquote = Blockquote;
    RichTextMenu.Bold = Bold2;
    RichTextMenu.BulletList = BulletList;
    RichTextMenu.CodeBlock = CodeBlock;
    RichTextMenu.HeadingSelect = HeadingSelect;
    RichTextMenu.HorizontalRule = HorizontalRule;
    RichTextMenu.InlineCode = InlineCode;
    RichTextMenu.Italic = Italic2;
    RichTextMenu.ListSelect = ListSelect;
    RichTextMenu.OrderedList = OrderedList;
    RichTextMenu.Strikethrough = Strikethrough2;
    RichTextMenu.Underline = Underline2;
    LoadedRichTextMenuInner = ({
      editor = null,
      editorState = null,
      field,
      readOnly,
      inline
    }) => {
      const { renderMenu, renderInlineMenu } = field;
      const InlineMenu = (0, import_react35.useMemo)(
        () => renderInlineMenu || DefaultMenu,
        [renderInlineMenu]
      );
      const Menu = (0, import_react35.useMemo)(() => renderMenu || DefaultMenu, [renderMenu]);
      return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        ControlContext.Provider,
        {
          value: { editor, editorState, inline, options: field.options, readOnly },
          children: inline ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
            InlineMenu,
            {
              editor,
              editorState,
              readOnly,
              children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Group2, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Bold2, {}),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Italic2, {}),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Underline2, {})
              ] })
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Menu, { editor, editorState, readOnly, children: [
            /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Group2, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(HeadingSelect, {}),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(ListSelect, {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Group2, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Bold2, {}),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Italic2, {}),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Underline2, {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Group2, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(AlignSelect, {}) })
          ] })
        }
      );
    };
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/RichTextEditor/styles.module.css/#css-module-data
var init_css_module_data7 = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/RichTextEditor/styles.module.css/#css-module-data"() {
  }
});

// css-module:/Users/mariusmuller/puck/packages/core/components/RichTextEditor/styles.module.css#css-module
var styles_module_default12;
var init_styles_module6 = __esm({
  "css-module:/Users/mariusmuller/puck/packages/core/components/RichTextEditor/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data7();
    styles_module_default12 = { "RichTextEditor": "_RichTextEditor_z25h4_1", "RichTextEditor--editor": "_RichTextEditor--editor_z25h4_50", "RichTextEditor--disabled": "_RichTextEditor--disabled_z25h4_107", "RichTextEditor--isActive": "_RichTextEditor--isActive_z25h4_111", "RichTextEditor-menu": "_RichTextEditor-menu_z25h4_117" };
  }
});

// components/RichTextEditor/components/EditorInner.tsx
var import_react36, import_jsx_runtime46, getClassName17, EditorInner;
var init_EditorInner = __esm({
  "components/RichTextEditor/components/EditorInner.tsx"() {
    "use strict";
    init_react_import();
    import_react36 = require("react");
    init_styles_module6();
    init_get_class_name_factory();
    init_store();
    import_jsx_runtime46 = require("react/jsx-runtime");
    getClassName17 = get_class_name_factory_default("RichTextEditor", styles_module_default12);
    EditorInner = (0, import_react36.memo)(
      ({
        children,
        menu,
        readOnly = false,
        field,
        inline = false,
        editor,
        id
      }) => {
        const { initialHeight } = field;
        const isActive = useAppStore(
          (s) => {
            var _a;
            return ((_a = s.currentRichText) == null ? void 0 : _a.id) === id && inline === s.currentRichText.inline;
          }
        );
        const appStoreApi = useAppStoreApi();
        const handleHotkeyCapture = (0, import_react36.useCallback)(
          (event) => {
            var _a, _b;
            if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "i") {
              event.stopPropagation();
              event.preventDefault();
              (_b = editor == null ? void 0 : (_a = editor.commands).toggleItalic) == null ? void 0 : _b.call(_a);
            }
            if (event.key.toLowerCase() === "backspace") {
              event.stopPropagation();
            }
          },
          [editor]
        );
        const handleBlur = (0, import_react36.useCallback)(
          (e) => {
            var _a, _b;
            const targetInMenu = !!((_b = (_a = e.relatedTarget) == null ? void 0 : _a.closest) == null ? void 0 : _b.call(
              _a,
              "[data-puck-rte-menu]"
            ));
            if (e.relatedTarget && !targetInMenu) {
              appStoreApi.setState({
                currentRichText: null
              });
            } else {
              e.stopPropagation();
            }
          },
          [appStoreApi]
        );
        return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
          "div",
          {
            className: getClassName17({
              editor: !inline,
              inline,
              isActive,
              disabled: readOnly
            }),
            style: inline ? {} : { height: initialHeight != null ? initialHeight : 192, overflowY: "auto" },
            onKeyDownCapture: handleHotkeyCapture,
            onBlur: handleBlur,
            children: [
              !inline && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: getClassName17("menu"), children: menu }),
              children
            ]
          }
        );
      }
    );
    EditorInner.displayName = "EditorInner";
  }
});

// components/RichTextEditor/lib/use-synced-editor.ts
function useSyncedEditor({
  content,
  onChange,
  extensions,
  editable = true,
  onFocusChange,
  name
}) {
  const [debouncedState, setDebouncedState] = (0, import_use_debounce.useDebounce)(null, 50, {
    leading: true,
    maxWait: 200
  });
  const syncingRef = (0, import_react39.useRef)(false);
  const lastSyncedRef = (0, import_react39.useRef)("");
  const editTimer = (0, import_react39.useRef)(null);
  const isPending = !!editTimer.current;
  const isFocused = useAppStore((s) => s.state.ui.field.focus === name);
  const resetTimer = (clearOn) => {
    if (editTimer.current) {
      clearTimeout(editTimer.current);
    }
    editTimer.current = setTimeout(() => {
      if (lastSyncedRef.current === clearOn) {
        editTimer.current = null;
      }
    }, 200);
  };
  const appStoreApi = useAppStoreApi();
  const editor = (0, import_react38.useEditor)({
    extensions,
    content,
    editable,
    immediatelyRender: false,
    parseOptions: { preserveWhitespace: "full" },
    onUpdate: ({ editor: editor2 }) => {
      if (syncingRef.current || !isFocused) {
        appStoreApi.getState().setUi({ field: { focus: name } });
        return;
      }
      const html = editor2.getHTML();
      const { from, to } = editor2.state.selection;
      setDebouncedState({ from, to, html });
      resetTimer(html);
      lastSyncedRef.current = html;
    }
  });
  (0, import_react39.useEffect)(() => {
    if (!editor) return;
    const handleFocus = () => {
      onFocusChange == null ? void 0 : onFocusChange(editor);
    };
    editor.on("focus", handleFocus);
    return () => {
      editor.off("focus", handleFocus);
    };
  }, [editor, onFocusChange]);
  (0, import_react39.useEffect)(() => {
    if (debouncedState) {
      const { ui } = appStoreApi.getState().state;
      onChange(debouncedState.html, {
        field: __spreadProps(__spreadValues({}, ui.field), {
          metadata: { from: debouncedState.from, to: debouncedState.to }
        })
      });
    }
  }, [editor, debouncedState, onChange, appStoreApi, name]);
  (0, import_react39.useEffect)(() => {
    editor == null ? void 0 : editor.setEditable(editable);
  }, [editor, editable]);
  (0, import_react39.useEffect)(() => {
    var _a;
    if (!editor) return;
    if (isPending) {
      return;
    }
    const current = editor.getHTML();
    if (current === content) return;
    syncingRef.current = true;
    editor.commands.setContent(content, { emitUpdate: false });
    const { ui } = appStoreApi.getState().state;
    if (typeof ((_a = ui.field.metadata) == null ? void 0 : _a.from) !== "undefined") {
      editor.commands.setTextSelection({
        from: ui.field.metadata.from,
        to: ui.field.metadata.to
      });
    }
    syncingRef.current = false;
  }, [content, editor, appStoreApi]);
  return editor;
}
var import_react38, import_react39, import_use_debounce;
var init_use_synced_editor = __esm({
  "components/RichTextEditor/lib/use-synced-editor.ts"() {
    "use strict";
    init_react_import();
    import_react38 = require("@tiptap/react");
    import_react39 = require("react");
    import_use_debounce = require("use-debounce");
    init_store();
  }
});

// components/RichTextEditor/extension.ts
var import_core, import_extension_blockquote, import_extension_bold, import_extension_code, import_extension_code_block, import_extension_document, import_extension_hard_break, import_extension_heading, import_extension_horizontal_rule, import_extension_italic, import_extension_link, import_extension_list, import_extension_paragraph, import_extension_strike, import_extension_text, import_extension_text_align, import_extension_underline, defaultPuckRichTextOptions, PuckRichText;
var init_extension = __esm({
  "components/RichTextEditor/extension.ts"() {
    "use strict";
    init_react_import();
    import_core = require("@tiptap/core");
    import_extension_blockquote = require("@tiptap/extension-blockquote");
    import_extension_bold = require("@tiptap/extension-bold");
    import_extension_code = require("@tiptap/extension-code");
    import_extension_code_block = require("@tiptap/extension-code-block");
    import_extension_document = require("@tiptap/extension-document");
    import_extension_hard_break = require("@tiptap/extension-hard-break");
    import_extension_heading = require("@tiptap/extension-heading");
    import_extension_horizontal_rule = require("@tiptap/extension-horizontal-rule");
    import_extension_italic = require("@tiptap/extension-italic");
    import_extension_link = require("@tiptap/extension-link");
    import_extension_list = require("@tiptap/extension-list");
    import_extension_paragraph = require("@tiptap/extension-paragraph");
    import_extension_strike = require("@tiptap/extension-strike");
    import_extension_text = require("@tiptap/extension-text");
    import_extension_text_align = __toESM(require("@tiptap/extension-text-align"));
    import_extension_underline = require("@tiptap/extension-underline");
    defaultPuckRichTextOptions = {
      textAlign: {
        types: ["heading", "paragraph"]
      }
    };
    PuckRichText = import_core.Extension.create({
      name: "puckRichText",
      addExtensions() {
        const extensions = [];
        const options = __spreadValues(__spreadValues({}, this.options), defaultPuckRichTextOptions);
        if (options.bold !== false) {
          extensions.push(import_extension_bold.Bold.configure(options.bold));
        }
        if (options.blockquote !== false) {
          extensions.push(import_extension_blockquote.Blockquote.configure(options.blockquote));
        }
        if (options.code !== false) {
          extensions.push(import_extension_code.Code.configure(options.code));
        }
        if (options.codeBlock !== false) {
          extensions.push(import_extension_code_block.CodeBlock.configure(options.codeBlock));
        }
        if (options.document !== false) {
          extensions.push(import_extension_document.Document.configure(options.document));
        }
        if (options.hardBreak !== false) {
          extensions.push(import_extension_hard_break.HardBreak.configure(options.hardBreak));
        }
        if (options.heading !== false) {
          extensions.push(import_extension_heading.Heading.configure(options.heading));
        }
        if (options.horizontalRule !== false) {
          extensions.push(import_extension_horizontal_rule.HorizontalRule.configure(options.horizontalRule));
        }
        if (options.italic !== false) {
          extensions.push(import_extension_italic.Italic.configure(options.italic));
        }
        if (options.listItem !== false) {
          extensions.push(import_extension_list.ListItem.configure(options.listItem));
          if (options.bulletList !== false) {
            extensions.push(import_extension_list.BulletList.configure(options.bulletList));
          }
          if (options.orderedList !== false) {
            extensions.push(import_extension_list.OrderedList.configure(options.orderedList));
          }
        }
        if (options.listKeymap !== false) {
          extensions.push(import_extension_list.ListKeymap.configure(options == null ? void 0 : options.listKeymap));
        }
        if (options.link !== false) {
          extensions.push(import_extension_link.Link.configure(options == null ? void 0 : options.link));
        }
        if (options.paragraph !== false) {
          extensions.push(import_extension_paragraph.Paragraph.configure(options.paragraph));
        }
        if (options.strike !== false) {
          extensions.push(import_extension_strike.Strike.configure(options.strike));
        }
        if (options.text !== false) {
          extensions.push(import_extension_text.Text.configure(options.text));
        }
        if (options.textAlign !== false) {
          extensions.push(import_extension_text_align.default.configure(options.textAlign));
        }
        if (options.underline !== false) {
          extensions.push(import_extension_underline.Underline.configure(options == null ? void 0 : options.underline));
        }
        return extensions;
      }
    });
  }
});

// components/RichTextEditor/selector.ts
var defaultEditorState;
var init_selector = __esm({
  "components/RichTextEditor/selector.ts"() {
    "use strict";
    init_react_import();
    defaultEditorState = (ctx, readOnly) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
      const editor = ctx.editor;
      if (!editor) return {};
      const canChain = () => editor.can().chain();
      return {
        isAlignLeft: editor.isActive({ textAlign: "left" }),
        canAlignLeft: !readOnly && ((_b = (_a = canChain()).setTextAlign) == null ? void 0 : _b.call(_a, "left").run()),
        isAlignCenter: editor.isActive({ textAlign: "center" }),
        canAlignCenter: !readOnly && ((_d = (_c = canChain()).setTextAlign) == null ? void 0 : _d.call(_c, "center").run()),
        isAlignRight: editor.isActive({ textAlign: "right" }),
        canAlignRight: !readOnly && ((_f = (_e = canChain()).setTextAlign) == null ? void 0 : _f.call(_e, "right").run()),
        isAlignJustify: editor.isActive({ textAlign: "justify" }),
        canAlignJustify: !readOnly && ((_h = (_g = canChain()).setTextAlign) == null ? void 0 : _h.call(_g, "justify").run()),
        isBold: editor.isActive("bold"),
        canBold: !readOnly && ((_j = (_i = canChain()).toggleBold) == null ? void 0 : _j.call(_i).run()),
        isItalic: editor.isActive("italic"),
        canItalic: !readOnly && ((_l = (_k = canChain()).toggleItalic) == null ? void 0 : _l.call(_k).run()),
        isUnderline: editor.isActive("underline"),
        canUnderline: !readOnly && ((_n = (_m = canChain()).toggleUnderline) == null ? void 0 : _n.call(_m).run()),
        isStrike: editor.isActive("strike"),
        canStrike: !readOnly && ((_p = (_o = canChain()).toggleStrike) == null ? void 0 : _p.call(_o).run()),
        isInlineCode: editor.isActive("code"),
        canInlineCode: !readOnly && ((_r = (_q = canChain()).toggleCode) == null ? void 0 : _r.call(_q).run()),
        isBulletList: editor.isActive("bulletList"),
        canBulletList: !readOnly && ((_t = (_s = canChain()).toggleBulletList) == null ? void 0 : _t.call(_s).run()),
        isOrderedList: editor.isActive("orderedList"),
        canOrderedList: !readOnly && ((_v = (_u = canChain()).toggleOrderedList) == null ? void 0 : _v.call(_u).run()),
        isCodeBlock: editor.isActive("codeBlock"),
        canCodeBlock: !readOnly && ((_x = (_w = canChain()).toggleCodeBlock) == null ? void 0 : _x.call(_w).run()),
        isBlockquote: editor.isActive("blockquote"),
        canBlockquote: !readOnly && ((_z = (_y = canChain()).toggleBlockquote) == null ? void 0 : _z.call(_y).run()),
        canHorizontalRule: !readOnly && ((_B = (_A = canChain()).setHorizontalRule) == null ? void 0 : _B.call(_A).run())
      };
    };
  }
});

// components/RichTextMenu/full.tsx
var full_exports = {};
__export(full_exports, {
  LoadedRichTextMenuFull: () => LoadedRichTextMenuFull
});
var import_react40, import_react41, import_jsx_runtime48, LoadedRichTextMenuFull;
var init_full = __esm({
  "components/RichTextMenu/full.tsx"() {
    "use strict";
    init_react_import();
    import_react40 = require("@tiptap/react");
    import_react41 = require("react");
    init_selector();
    init_inner();
    import_jsx_runtime48 = require("react/jsx-runtime");
    LoadedRichTextMenuFull = ({
      editor,
      field,
      readOnly,
      inline
    }) => {
      const { tiptap = {} } = field;
      const { selector } = tiptap;
      const resolvedSelector = (0, import_react41.useMemo)(() => {
        return (ctx) => __spreadValues(__spreadValues({}, defaultEditorState(ctx, readOnly)), selector ? selector(ctx, readOnly) : {});
      }, [selector, readOnly]);
      const editorState = (0, import_react40.useEditorState)({
        editor,
        selector: resolvedSelector
      });
      if (!editor || !editorState) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
        LoadedRichTextMenuInner,
        {
          editor,
          editorState,
          field,
          readOnly,
          inline
        }
      );
    };
  }
});

// components/RichTextMenu/index.tsx
var import_react42, import_jsx_runtime49, LoadedRichTextMenuFull2, LoadedRichTextMenu;
var init_RichTextMenu = __esm({
  "components/RichTextMenu/index.tsx"() {
    "use strict";
    init_react_import();
    import_react42 = require("react");
    init_inner();
    import_jsx_runtime49 = require("react/jsx-runtime");
    LoadedRichTextMenuFull2 = (0, import_react42.lazy)(
      () => Promise.resolve().then(() => (init_full(), full_exports)).then((m) => ({
        default: m.LoadedRichTextMenuFull
      }))
    );
    LoadedRichTextMenu = (props) => {
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react42.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(LoadedRichTextMenuInner, __spreadValues({}, props)), children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(LoadedRichTextMenuFull2, __spreadValues({}, props)) });
    };
  }
});

// components/RichTextEditor/components/Editor.tsx
var Editor_exports = {};
__export(Editor_exports, {
  Editor: () => Editor
});
var import_react43, import_react44, import_jsx_runtime50, Editor;
var init_Editor = __esm({
  "components/RichTextEditor/components/Editor.tsx"() {
    "use strict";
    init_react_import();
    import_react43 = require("react");
    init_use_synced_editor();
    init_extension();
    import_react44 = require("@tiptap/react");
    init_store();
    init_RichTextMenu();
    init_EditorInner();
    import_jsx_runtime50 = require("react/jsx-runtime");
    Editor = (0, import_react43.memo)((props) => {
      const {
        onChange,
        content,
        readOnly = false,
        field,
        inline = false,
        onFocus,
        id,
        name
      } = props;
      const { tiptap = {}, options } = field;
      const { extensions = [] } = tiptap;
      const loadedExtensions = (0, import_react43.useMemo)(
        () => [PuckRichText.configure(options), ...extensions],
        [field, extensions]
      );
      const appStoreApi = useAppStoreApi();
      const focusName = `${name}${inline ? "::inline" : ""}`;
      const editor = useSyncedEditor({
        content,
        onChange,
        extensions: loadedExtensions,
        editable: !readOnly,
        name: focusName,
        onFocusChange: (editor2) => {
          if (editor2) {
            const s = appStoreApi.getState();
            appStoreApi.setState({
              currentRichText: {
                field,
                editor: editor2,
                id,
                inline
              },
              state: __spreadProps(__spreadValues({}, s.state), {
                ui: __spreadProps(__spreadValues({}, s.state.ui), {
                  field: __spreadProps(__spreadValues({}, s.state.ui.field), {
                    focus: focusName
                  })
                })
              })
            });
            onFocus == null ? void 0 : onFocus(editor2);
          }
        }
      });
      const menuEditor = useAppStore((s) => {
        var _a, _b;
        if (!inline && ((_a = s.currentRichText) == null ? void 0 : _a.id) === id && ((_b = s.currentRichText) == null ? void 0 : _b.inlineComponentId)) {
          return s.currentRichText.editor;
        }
        return editor;
      });
      if (!editor) return null;
      return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        EditorInner,
        __spreadProps(__spreadValues({}, props), {
          editor,
          menu: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            LoadedRichTextMenu,
            {
              field,
              editor: menuEditor,
              readOnly
            }
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react44.EditorContent, { editor, className: "rich-text" })
        })
      );
    });
    Editor.displayName = "Editor";
  }
});

// components/RichTextEditor/components/Render.tsx
var Render_exports = {};
__export(Render_exports, {
  RichTextRender: () => RichTextRender
});
function RichTextRender({
  content,
  field
}) {
  const { tiptap = {}, options } = field;
  const { extensions = [] } = tiptap;
  const loadedExtensions = (0, import_react58.useMemo)(
    () => [PuckRichText.configure(options), ...extensions],
    [field, extensions]
  );
  const normalized = (0, import_react58.useMemo)(() => {
    if (typeof content === "object" && (content == null ? void 0 : content.type) === "doc") {
      return content;
    }
    if (typeof content === "string") {
      const isHtml = /<\/?[a-z][\s\S]*>/i.test(content);
      if (isHtml) {
        return (0, import_html.generateJSON)(content, loadedExtensions);
      }
      return {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: content }] }
        ]
      };
    }
    return { type: "doc", content: [] };
  }, [content, loadedExtensions]);
  const html = (0, import_react58.useMemo)(() => {
    return (0, import_html.generateHTML)(normalized, loadedExtensions);
  }, [normalized, loadedExtensions]);
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: getClassName23(), children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "rich-text", dangerouslySetInnerHTML: { __html: html } }) });
}
var import_html, import_react58, import_jsx_runtime58, getClassName23;
var init_Render = __esm({
  "components/RichTextEditor/components/Render.tsx"() {
    "use strict";
    init_react_import();
    import_html = require("@tiptap/html");
    import_react58 = require("react");
    init_get_class_name_factory();
    init_styles_module6();
    init_extension();
    import_jsx_runtime58 = require("react/jsx-runtime");
    getClassName23 = get_class_name_factory_default("RichTextEditor", styles_module_default12);
  }
});

// bundle/no-external.ts
var no_external_exports = {};
__export(no_external_exports, {
  Action: () => Action,
  ActionBar: () => ActionBar,
  AutoField: () => AutoField,
  Button: () => Button,
  Drawer: () => Drawer,
  DropZone: () => DropZone,
  FieldLabel: () => FieldLabel,
  Group: () => Group,
  IconButton: () => IconButton,
  Label: () => Label,
  Puck: () => Puck,
  Render: () => Render,
  RichTextMenu: () => RichTextMenu,
  Separator: () => Separator,
  blocksPlugin: () => blocksPlugin,
  createUsePuck: () => createUsePuck,
  fieldsPlugin: () => fieldsPlugin,
  legacySideBarPlugin: () => legacySideBarPlugin,
  migrate: () => migrate,
  outlinePlugin: () => outlinePlugin,
  overrideKeys: () => overrideKeys,
  registerOverlayPortal: () => registerOverlayPortal,
  renderContext: () => renderContext,
  resolveAllData: () => resolveAllData,
  setDeep: () => setDeep,
  transformProps: () => transformProps,
  useGetPuck: () => useGetPuck,
  usePuck: () => usePuck,
  walkTree: () => walkTree
});
module.exports = __toCommonJS(no_external_exports);
init_react_import();

// bundle/core.ts
init_react_import();

// types/API/index.ts
init_react_import();

// types/API/DropZone.ts
init_react_import();

// types/API/Viewports.ts
init_react_import();

// types/API/FieldTransforms.ts
init_react_import();

// types/index.ts
init_react_import();

// types/API/Overrides.ts
init_react_import();
var overrideKeys = [
  "header",
  "headerActions",
  "fields",
  "fieldLabel",
  "drawer",
  "drawerItem",
  "componentOverlay",
  "outline",
  "puck",
  "preview"
];

// types/AppState.tsx
init_react_import();

// types/Config.tsx
init_react_import();

// types/Data.tsx
init_react_import();

// types/Fields.ts
init_react_import();

// types/Props.tsx
init_react_import();

// types/Utils.tsx
init_react_import();

// bundle/core.ts
init_ActionBar();

// components/AutoField/index.tsx
init_react_import();
init_get_class_name_factory();

// css-module:/Users/mariusmuller/puck/packages/core/components/AutoField/styles.module.css#css-module
init_react_import();
var styles_module_default2 = { "InputWrapper": "_InputWrapper_bsxfo_1", "Input-label": "_Input-label_bsxfo_5", "Input-labelIcon": "_Input-labelIcon_bsxfo_14", "Input-disabledIcon": "_Input-disabledIcon_bsxfo_21", "Input-input": "_Input-input_bsxfo_26", "Input": "_Input_bsxfo_1", "Input--readOnly": "_Input--readOnly_bsxfo_82", "Input-radioGroupItems": "_Input-radioGroupItems_bsxfo_93", "Input-radio": "_Input-radio_bsxfo_93", "Input-radioInner": "_Input-radioInner_bsxfo_110", "Input-radioInput": "_Input-radioInput_bsxfo_155" };

// components/AutoField/index.tsx
var import_react48 = require("react");

// components/AutoField/fields/index.tsx
init_react_import();

// components/AutoField/fields/ArrayField/index.tsx
init_react_import();
init_get_class_name_factory();

// css-module:/Users/mariusmuller/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css#css-module
init_react_import();
var styles_module_default3 = { "ArrayField": "_ArrayField_1vaho_5", "ArrayField--isDraggingFrom": "_ArrayField--isDraggingFrom_1vaho_13", "ArrayField-addButton": "_ArrayField-addButton_1vaho_18", "ArrayField--hasItems": "_ArrayField--hasItems_1vaho_33", "ArrayField-inner": "_ArrayField-inner_1vaho_59", "ArrayFieldItem": "_ArrayFieldItem_1vaho_67", "ArrayFieldItem--isDragging": "_ArrayFieldItem--isDragging_1vaho_78", "ArrayFieldItem--isExpanded": "_ArrayFieldItem--isExpanded_1vaho_82", "ArrayFieldItem-summary": "_ArrayFieldItem-summary_1vaho_97", "ArrayFieldItem--noFields": "_ArrayFieldItem--noFields_1vaho_122", "ArrayField--addDisabled": "_ArrayField--addDisabled_1vaho_131", "ArrayFieldItem-body": "_ArrayFieldItem-body_1vaho_170", "ArrayFieldItem-fieldset": "_ArrayFieldItem-fieldset_1vaho_179", "ArrayFieldItem-rhs": "_ArrayFieldItem-rhs_1vaho_187", "ArrayFieldItem-actions": "_ArrayFieldItem-actions_1vaho_193" };

// components/AutoField/fields/ArrayField/index.tsx
init_lucide_react();

// components/AutoField/store.ts
init_react_import();
var import_react5 = require("react");
var import_shallow2 = require("zustand/react/shallow");

// lib/use-context-store.tsx
init_react_import();
var import_react4 = require("react");
var import_zustand = require("zustand");
var import_middleware = require("zustand/middleware");
var import_shallow = require("zustand/react/shallow");
var import_jsx_runtime2 = require("react/jsx-runtime");
function useContextStore(context, selector) {
  const store = (0, import_react4.useContext)(context);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return (0, import_zustand.useStore)(store, (0, import_shallow.useShallow)(selector));
}
function createStoreProvider(ContextComponent) {
  const StoreProvider = ({
    children,
    value
  }) => {
    const [store] = (0, import_react4.useState)(() => (0, import_zustand.createStore)(() => value));
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ContextComponent.Provider, { value: store, children });
  };
  return StoreProvider;
}
function createContextStore(defaultValue) {
  const ctx = (0, import_react4.createContext)(
    (0, import_zustand.createStore)((0, import_middleware.subscribeWithSelector)(() => defaultValue))
  );
  return {
    ctx,
    Provider: createStoreProvider(ctx)
  };
}

// components/AutoField/store.ts
var import_zustand2 = require("zustand");
var fieldContextStore = createContextStore({});
var useFieldStoreApi = () => (0, import_react5.useContext)(fieldContextStore.ctx);
function useFieldStore(selector) {
  const store = (0, import_react5.useContext)(fieldContextStore.ctx);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return (0, import_zustand2.useStore)(store, (0, import_shallow2.useShallow)(selector));
}

// components/AutoField/fields/ArrayField/index.tsx
init_IconButton2();
init_lib();
var import_react17 = require("react");

// components/DragIcon/index.tsx
init_react_import();
init_lib();

// css-module:/Users/mariusmuller/puck/packages/core/components/DragIcon/styles.module.css#css-module
init_react_import();
var styles_module_default5 = { "DragIcon": "_DragIcon_17p8x_1", "DragIcon--disabled": "_DragIcon--disabled_17p8x_8" };

// components/DragIcon/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var getClassName4 = get_class_name_factory_default("DragIcon", styles_module_default5);
var DragIcon = ({ isDragDisabled }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: getClassName4({ disabled: isDragDisabled }), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("svg", { viewBox: "0 0 20 20", width: "12", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" }) }) });

// components/AutoField/fields/ArrayField/index.tsx
init_store();

// components/Sortable/index.tsx
init_react_import();
var import_react14 = require("@dnd-kit/react");

// lib/dnd/use-sensors.ts
init_react_import();
var import_react12 = require("react");
var import_react13 = require("@dnd-kit/react");
var import_utilities = require("@dnd-kit/dom/utilities");
var touchDefault = { delay: { value: 200, tolerance: 10 } };
var otherDefault = {
  delay: { value: 200, tolerance: 10 },
  distance: { value: 5 }
};
var useSensors = ({
  other = otherDefault,
  mouse,
  touch = touchDefault
} = {
  touch: touchDefault,
  other: otherDefault
}) => {
  const [sensors] = (0, import_react12.useState)(() => [
    import_react13.PointerSensor.configure({
      activationConstraints(event, source) {
        var _a;
        const { pointerType, target } = event;
        if (pointerType === "mouse" && (0, import_utilities.isElement)(target) && (source.handle === target || ((_a = source.handle) == null ? void 0 : _a.contains(target)))) {
          return mouse;
        }
        if (pointerType === "touch") {
          return touch;
        }
        return other;
      }
    })
  ]);
  return sensors;
};

// lib/dnd/collision/dynamic/index.ts
init_react_import();
var import_abstract8 = require("@dnd-kit/abstract");

// lib/dnd/collision/directional/index.ts
init_react_import();
var import_abstract = require("@dnd-kit/abstract");

// lib/dnd/collision/collision-debug.ts
init_react_import();
var DEBUG = false;
var debugElements = {};
var timeout;
var collisionDebug = (a, b, id, color, label) => {
  if (!DEBUG) return;
  const debugId = `${id}-debug`;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    Object.entries(debugElements).forEach(([id2, { svg }]) => {
      svg.remove();
      delete debugElements[id2];
    });
  }, 1e3);
  requestAnimationFrame(() => {
    var _a, _b;
    const existingEl = debugElements[debugId];
    let line = (_a = debugElements[debugId]) == null ? void 0 : _a.line;
    let text = (_b = debugElements[debugId]) == null ? void 0 : _b.text;
    if (!existingEl) {
      const svgNs = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNs, "svg");
      line = document.createElementNS(svgNs, "line");
      text = document.createElementNS(svgNs, "text");
      svg.setAttribute("id", debugId);
      svg.setAttribute(
        "style",
        "position: fixed; height: 100%; width: 100%; pointer-events: none; top: 0px; left: 0px;"
      );
      svg.appendChild(line);
      svg.appendChild(text);
      text.setAttribute("fill", `black`);
      document.body.appendChild(svg);
      debugElements[debugId] = { svg, line, text };
    }
    line.setAttribute("x1", a.x.toString());
    line.setAttribute("x2", b.x.toString());
    line.setAttribute("y1", a.y.toString());
    line.setAttribute("y2", b.y.toString());
    line.setAttribute("style", `stroke:${color};stroke-width:2`);
    text.setAttribute("x", (a.x - (a.x - b.x) / 2).toString());
    text.setAttribute("y", (a.y - (a.y - b.y) / 2).toString());
    if (label) {
      text.innerHTML = label;
    }
  });
};

// lib/dnd/collision/directional/index.ts
var distanceChange = "increasing";
var directionalCollision = (input, previous) => {
  var _a;
  const { dragOperation, droppable } = input;
  const { shape: dropShape } = droppable;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  if (!dragShape || !dropShape) return null;
  const dropCenter = dropShape.center;
  const distanceToPrevious = Math.sqrt(
    Math.pow(dropCenter.x - previous.x, 2) + Math.pow(dropCenter.y - previous.y, 2)
  );
  const distanceToCurrent = Math.sqrt(
    Math.pow(dropCenter.x - position.current.x, 2) + Math.pow(dropCenter.y - position.current.y, 2)
  );
  distanceChange = distanceToCurrent === distanceToPrevious ? distanceChange : distanceToCurrent < distanceToPrevious ? "decreasing" : "increasing";
  collisionDebug(
    dragShape.center,
    dropCenter,
    droppable.id.toString(),
    "rebeccapurple"
  );
  if (distanceChange === "decreasing") {
    return {
      id: droppable.id,
      value: 1,
      type: import_abstract.CollisionType.Collision
    };
  }
  return null;
};

// lib/dnd/collision/dynamic/get-direction.ts
init_react_import();
var getDirection = (dragAxis, delta) => {
  if (dragAxis === "dynamic") {
    if (Math.abs(delta.y) > Math.abs(delta.x)) {
      return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
    } else {
      return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
    }
  } else if (dragAxis === "x") {
    return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
  }
  return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
};

// lib/dnd/collision/dynamic/get-midpoint-impact.ts
init_react_import();
var getMidpointImpact = (dragShape, dropShape, direction, offsetMultiplier = 0) => {
  const dragRect = dragShape.boundingRectangle;
  const dropCenter = dropShape.center;
  if (direction === "down") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.bottom >= dropCenter.y + offset2;
  } else if (direction === "up") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.top < dropCenter.y - offset2;
  } else if (direction === "left") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.width;
    return dropCenter.x - offset2 >= dragRect.left;
  }
  const offset = offsetMultiplier * dropShape.boundingRectangle.width;
  return dragRect.right - offset >= dropCenter.x;
};

// lib/dnd/collision/dynamic/track-movement-interval.ts
init_react_import();
var import_geometry = require("@dnd-kit/geometry");
var INTERVAL_SENSITIVITY = 10;
var intervalCache = {
  current: { x: 0, y: 0 },
  delta: { x: 0, y: 0 },
  previous: { x: 0, y: 0 },
  direction: null
};
var trackMovementInterval = (point, dragAxis = "dynamic") => {
  intervalCache.current = point;
  intervalCache.delta = {
    x: point.x - intervalCache.previous.x,
    y: point.y - intervalCache.previous.y
  };
  intervalCache.direction = getDirection(dragAxis, intervalCache.delta) || intervalCache.direction;
  if (Math.abs(intervalCache.delta.x) > INTERVAL_SENSITIVITY || Math.abs(intervalCache.delta.y) > INTERVAL_SENSITIVITY) {
    intervalCache.previous = import_geometry.Point.from(point);
  }
  return intervalCache;
};

// ../../node_modules/@dnd-kit/collision/dist/index.js
init_react_import();
var import_abstract2 = require("@dnd-kit/abstract");
var import_geometry2 = require("@dnd-kit/geometry");
var import_abstract3 = require("@dnd-kit/abstract");
var import_geometry3 = require("@dnd-kit/geometry");
var import_abstract4 = require("@dnd-kit/abstract");
var import_geometry4 = require("@dnd-kit/geometry");
var import_abstract5 = require("@dnd-kit/abstract");
var import_geometry5 = require("@dnd-kit/geometry");
var import_abstract6 = require("@dnd-kit/abstract");
var import_geometry6 = require("@dnd-kit/geometry");
var import_abstract7 = require("@dnd-kit/abstract");
var import_geometry7 = require("@dnd-kit/geometry");
var pointerIntersection = ({
  dragOperation,
  droppable
}) => {
  const pointerCoordinates = dragOperation.position.current;
  if (!pointerCoordinates) {
    return null;
  }
  const { id } = droppable;
  if (!droppable.shape) {
    return null;
  }
  if (droppable.shape.containsPoint(pointerCoordinates)) {
    const distance = import_geometry2.Point.distance(droppable.shape.center, pointerCoordinates);
    return {
      id,
      value: 1 / distance,
      type: import_abstract2.CollisionType.PointerIntersection,
      priority: import_abstract2.CollisionPriority.High
    };
  }
  return null;
};
var closestCorners = (input) => {
  const { dragOperation, droppable } = input;
  const { shape, position } = dragOperation;
  if (!droppable.shape) {
    return null;
  }
  const shapeCorners = shape ? import_geometry4.Rectangle.from(shape.current.boundingRectangle).corners : void 0;
  const distance = import_geometry4.Rectangle.from(
    droppable.shape.boundingRectangle
  ).corners.reduce(
    (acc, corner, index) => {
      var _a;
      return acc + import_geometry4.Point.distance(
        import_geometry4.Point.from(corner),
        (_a = shapeCorners == null ? void 0 : shapeCorners[index]) != null ? _a : position.current
      );
    },
    0
  );
  const value = distance / 4;
  return {
    id: droppable.id,
    value: 1 / value,
    type: import_abstract4.CollisionType.Collision,
    priority: import_abstract4.CollisionPriority.Normal
  };
};

// lib/dnd/collision/dynamic/store.ts
init_react_import();
var import_vanilla = require("zustand/vanilla");
var collisionStore = (0, import_vanilla.createStore)(() => ({
  fallbackEnabled: false
}));

// lib/dnd/collision/dynamic/index.ts
var flushNext = "";
var createDynamicCollisionDetector = (dragAxis, midpointOffset = 0.05) => ((input) => {
  var _a, _b, _c, _d, _e;
  const { dragOperation, droppable } = input;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  const { shape: dropShape } = droppable;
  if (!dragShape || !dropShape) {
    return null;
  }
  const { center: dragCenter } = dragShape;
  const { fallbackEnabled } = collisionStore.getState();
  const interval = trackMovementInterval(position.current, dragAxis);
  const data = {
    direction: interval.direction
  };
  const { center: dropCenter } = dropShape;
  const overMidpoint = getMidpointImpact(
    dragShape,
    dropShape,
    interval.direction,
    midpointOffset
  );
  if (((_b = dragOperation.source) == null ? void 0 : _b.id) === droppable.id) {
    const collision = directionalCollision(input, interval.previous);
    collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "yellow");
    if (collision) {
      return __spreadProps(__spreadValues({}, collision), {
        priority: import_abstract8.CollisionPriority.Highest,
        data
      });
    }
  }
  const intersectionArea = dragShape.intersectionArea(dropShape);
  const intersectionRatio = intersectionArea / dropShape.area;
  if (intersectionArea && overMidpoint) {
    collisionDebug(
      dragCenter,
      dropCenter,
      droppable.id.toString(),
      "green",
      interval.direction
    );
    const collision = {
      id: droppable.id,
      value: intersectionRatio,
      priority: import_abstract8.CollisionPriority.High,
      type: import_abstract8.CollisionType.Collision
    };
    const shouldFlushId = flushNext === droppable.id;
    flushNext = "";
    return __spreadProps(__spreadValues({}, collision), { id: shouldFlushId ? "flush" : collision.id, data });
  }
  if (fallbackEnabled && ((_c = dragOperation.source) == null ? void 0 : _c.id) !== droppable.id) {
    const xAxisIntersection = dropShape.boundingRectangle.right > dragShape.boundingRectangle.left && dropShape.boundingRectangle.left < dragShape.boundingRectangle.right;
    const yAxisIntersection = dropShape.boundingRectangle.bottom > dragShape.boundingRectangle.top && dropShape.boundingRectangle.top < dragShape.boundingRectangle.bottom;
    if (dragAxis === "y" && xAxisIntersection || yAxisIntersection) {
      const fallbackCollision = closestCorners(input);
      if (fallbackCollision) {
        const direction = getDirection(dragAxis, {
          x: dragShape.center.x - (((_d = droppable.shape) == null ? void 0 : _d.center.x) || 0),
          y: dragShape.center.y - (((_e = droppable.shape) == null ? void 0 : _e.center.y) || 0)
        });
        data.direction = direction;
        if (intersectionArea) {
          collisionDebug(
            dragCenter,
            dropCenter,
            droppable.id.toString(),
            "red",
            direction || ""
          );
          flushNext = droppable.id;
          return __spreadProps(__spreadValues({}, fallbackCollision), {
            priority: import_abstract8.CollisionPriority.Low,
            data
          });
        }
        collisionDebug(
          dragCenter,
          dropCenter,
          droppable.id.toString(),
          "orange",
          direction || ""
        );
        return __spreadProps(__spreadValues({}, fallbackCollision), {
          priority: import_abstract8.CollisionPriority.Lowest,
          data
        });
      }
    }
  }
  collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "hotpink");
  return null;
});

// components/Sortable/index.tsx
var import_sortable = require("@dnd-kit/react/sortable");
var import_jsx_runtime6 = require("react/jsx-runtime");
var SortableProvider = ({
  children,
  onDragStart,
  onDragEnd,
  onMove
}) => {
  const sensors = useSensors({
    mouse: { distance: { value: 5 } }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_react14.DragDropProvider,
    {
      sensors,
      onDragStart: (event) => {
        var _a, _b;
        return onDragStart((_b = (_a = event.operation.source) == null ? void 0 : _a.id.toString()) != null ? _b : "");
      },
      onDragOver: (event, manager) => {
        var _a;
        event.preventDefault();
        const { operation } = event;
        const { source, target } = operation;
        if (!source || !target) return;
        let sourceIndex = source.data.index;
        let targetIndex = target.data.index;
        const collisionData = (_a = manager.collisionObserver.collisions[0]) == null ? void 0 : _a.data;
        if (sourceIndex !== targetIndex && source.id !== target.id) {
          const collisionPosition = (collisionData == null ? void 0 : collisionData.direction) === "up" ? "before" : "after";
          if (targetIndex >= sourceIndex) {
            targetIndex = targetIndex - 1;
          }
          if (collisionPosition === "after") {
            targetIndex = targetIndex + 1;
          }
          onMove({
            source: sourceIndex,
            target: targetIndex
          });
        }
      },
      onDragEnd: () => {
        setTimeout(() => {
          onDragEnd();
        }, 250);
      },
      children
    }
  );
};
var Sortable = ({
  id,
  index,
  disabled,
  children,
  type = "item"
}) => {
  const {
    ref: sortableRef,
    isDragging,
    isDropping,
    handleRef
  } = (0, import_sortable.useSortable)({
    id,
    type,
    index,
    disabled,
    data: { index },
    collisionDetector: createDynamicCollisionDetector("y")
  });
  return children({ isDragging, isDropping, ref: sortableRef, handleRef });
};

// components/AutoField/context.tsx
init_react_import();
var import_react15 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var NestedFieldContext = (0, import_react15.createContext)({});
var useNestedFieldContext = () => {
  const context = (0, import_react15.useContext)(NestedFieldContext);
  return __spreadProps(__spreadValues({}, context), {
    readOnlyFields: context.readOnlyFields || {}
  });
};
var NestedFieldProvider = ({
  children,
  name,
  subName,
  wildcardName = name,
  readOnlyFields
}) => {
  const subPath = `${name}.${subName}`;
  const wildcardSubPath = `${wildcardName}.${subName}`;
  const subReadOnlyFields = (0, import_react15.useMemo)(
    () => Object.keys(readOnlyFields).reduce((acc, readOnlyKey) => {
      const isLocal = readOnlyKey.indexOf(subPath) > -1 || readOnlyKey.indexOf(wildcardSubPath) > -1;
      if (isLocal) {
        const subPathPattern = new RegExp(
          `^(${name}|${wildcardName}).`.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\./g, "\\.").replace(/\*/g, "\\*")
        );
        const localName = readOnlyKey.replace(subPathPattern, "");
        return __spreadProps(__spreadValues({}, acc), {
          [localName]: readOnlyFields[readOnlyKey]
        });
      }
      return acc;
    }, {}),
    [name, subName, wildcardName, readOnlyFields]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    NestedFieldContext.Provider,
    {
      value: { readOnlyFields: subReadOnlyFields, localName: subName },
      children
    }
  );
};

// components/AutoField/fields/ArrayField/index.tsx
init_map_fields();
init_populate_ids();
init_default_slots();

// lib/data/get-deep.ts
init_react_import();
var getDeep = (node, path) => {
  const pathParts = path.split(".");
  return pathParts.reduce((acc, item) => {
    if (!acc) return;
    const [prop, indexStr] = item.replace("]", "").split("[");
    const val = acc[prop];
    if (indexStr && val) {
      return val[parseInt(indexStr)];
    }
    return val;
  }, node);
};

// components/AutoField/subfield.tsx
init_react_import();
var import_react16 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var SubFieldInternal = ({
  field,
  id,
  index,
  name,
  subName,
  localName,
  onChange,
  forceReadOnly
}) => {
  const indexName = typeof index !== "undefined" ? `${name}[${index}]` : name;
  const subPath = name ? `${indexName}.${subName}` : subName;
  const localIndexName = typeof index !== "undefined" ? `${localName}[${index}]` : localName != null ? localName : subName;
  const localWildcardName = typeof index !== "undefined" ? `${localName}[*]` : localName;
  const localSubPath = `${localIndexName}.${subName}`;
  const localWildcardSubPath = `${localWildcardName}.${subName}`;
  const { readOnlyFields } = useNestedFieldContext();
  const subReadOnly = forceReadOnly ? forceReadOnly : typeof readOnlyFields[subPath] !== "undefined" ? readOnlyFields[localSubPath] : readOnlyFields[localWildcardSubPath];
  const label = field.label || subName;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    NestedFieldProvider,
    {
      name: localIndexName,
      wildcardName: localWildcardName,
      subName,
      readOnlyFields,
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        AutoFieldPrivate,
        {
          name: subPath,
          label,
          id,
          readOnly: subReadOnly,
          field: __spreadProps(__spreadValues({}, field), {
            label
            // May be used by custom fields
          }),
          onChange: (val, ui) => {
            onChange(val, ui, subName);
          }
        }
      )
    }
  );
};
var SubField = (0, import_react16.memo)(SubFieldInternal);

// bundle/index.ts
init_react_import();

// components/AutoField/fields/ArrayField/index.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var getClassName5 = get_class_name_factory_default("ArrayField", styles_module_default3);
var getClassNameItem = get_class_name_factory_default("ArrayFieldItem", styles_module_default3);
var ItemSummaryInner = ({
  index,
  originalIndex,
  field,
  name
}) => {
  const data = useFieldStore((s) => {
    const path = `${[name]}[${index}]`;
    return getDeep(s, path);
  });
  const itemSummary = (0, import_react17.useMemo)(() => {
    if (data && field.getItemSummary) {
      return field.getItemSummary(data, index);
    }
    return `Item #${originalIndex}`;
  }, [data, field, originalIndex, index]);
  return itemSummary;
};
var ItemSummary = (0, import_react17.memo)(ItemSummaryInner);
var ArrayFieldItemInternal = ({
  id,
  arrayId,
  index,
  dragIndex,
  originalIndex,
  field,
  onChange,
  onToggleExpand,
  readOnly,
  actions,
  name,
  localName
}) => {
  const isExpanded = useAppStore((s) => {
    var _a;
    return ((_a = s.state.ui.arrayState[arrayId]) == null ? void 0 : _a.openId) === id;
  });
  const canEdit = useAppStore(
    (s) => s.permissions.getPermissions({ item: s.selectedItem }).edit
  );
  const hasVisibleFields = (0, import_react17.useMemo)(() => {
    if (!field.arrayFields) {
      return false;
    }
    return Object.values(field.arrayFields).some(
      (subField) => subField.type !== "slot" && subField.visible !== false
    );
  }, [field.arrayFields]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Sortable, { id, index: dragIndex, disabled: readOnly, children: ({ isDragging, ref, handleRef }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "div",
    {
      ref,
      className: getClassNameItem({
        isExpanded: isExpanded && hasVisibleFields,
        isDragging,
        noFields: !hasVisibleFields
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "div",
          {
            ref: handleRef,
            onClick: (e) => {
              if (isDragging) return;
              e.preventDefault();
              e.stopPropagation();
              if (!hasVisibleFields) return;
              onToggleExpand(id, isExpanded);
            },
            className: getClassNameItem("summary"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                ItemSummary,
                {
                  index,
                  originalIndex,
                  field,
                  name
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: getClassNameItem("rhs"), children: [
                !readOnly && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: getClassNameItem("actions"), children: actions }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DragIcon, {}) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: getClassNameItem("body"), children: isExpanded && hasVisibleFields && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("fieldset", { className: getClassNameItem("fieldset"), children: Object.keys(field.arrayFields).map((subName) => {
          const subField = field.arrayFields[subName];
          return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            SubField,
            {
              id: `${id}_${subName}`,
              name,
              index,
              subName,
              localName,
              field: subField,
              onChange,
              forceReadOnly: !canEdit
            },
            `${id}_${subName}_${index}`
          );
        }) }) })
      ]
    }
  ) });
};
var ArrayFieldItem = (0, import_react17.memo)(ArrayFieldItemInternal);
var ArrayField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  readOnly,
  Label: Label2 = (props) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", __spreadValues({}, props))
}) => {
  const setUi = useAppStore((s) => s.setUi);
  const appStoreApi = useAppStoreApi();
  const fieldStore = useFieldStoreApi();
  const { localName = name } = useNestedFieldContext();
  const getValue = () => {
    var _a;
    return (_a = getDeep(fieldStore.getState(), name)) != null ? _a : [];
  };
  const getArrayState = (0, import_react17.useCallback)(() => {
    var _a;
    const { state } = appStoreApi.getState();
    const thisState = state.ui.arrayState[id];
    if ((_a = thisState == null ? void 0 : thisState.items) == null ? void 0 : _a.length) return thisState;
    const value = getValue();
    return {
      items: Array.from(value || []).map((item, idx) => {
        return {
          _originalIndex: idx,
          _currentIndex: idx,
          _arrayId: `${id}-${idx}`
        };
      }),
      openId: ""
    };
  }, [appStoreApi, id, getValue, name]);
  const numItems = useFieldStore(() => {
    return getValue().length;
  });
  const defaultArrayState = (0, import_react17.useMemo)(getArrayState, [getArrayState]);
  const mirror = useAppStore((s) => {
    const thisArrayState = s.state.ui.arrayState[id];
    return thisArrayState != null ? thisArrayState : defaultArrayState;
  });
  const appStore = useAppStoreApi();
  const mapArrayStateToUi = (0, import_react17.useCallback)(
    (partialArrayState) => {
      const state = appStore.getState().state;
      return {
        arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
          [id]: __spreadValues(__spreadValues({}, getArrayState()), partialArrayState)
        })
      };
    },
    [appStore]
  );
  const getHighestIndex = (0, import_react17.useCallback)(() => {
    return getArrayState().items.reduce(
      (acc, item) => item._originalIndex > acc ? item._originalIndex : acc,
      -1
    );
  }, []);
  const regenerateArrayState = (0, import_react17.useCallback)((value) => {
    let highestIndex = getHighestIndex();
    const arrayState = getArrayState();
    const newItems = Array.from(value || []).map((item, idx) => {
      var _a, _b, _c;
      const arrayStateItem = arrayState.items[idx];
      const newItem = {
        _originalIndex: (_a = arrayStateItem == null ? void 0 : arrayStateItem._originalIndex) != null ? _a : highestIndex + 1,
        _currentIndex: (_b = arrayStateItem == null ? void 0 : arrayStateItem._currentIndex) != null ? _b : idx,
        _arrayId: ((_c = arrayState.items[idx]) == null ? void 0 : _c._arrayId) || `${id}-${highestIndex + 1}`
      };
      if (newItem._originalIndex > highestIndex) {
        highestIndex = newItem._originalIndex;
      }
      return newItem;
    });
    return __spreadProps(__spreadValues({}, arrayState), { items: newItems });
  }, []);
  const [draggedItem, setDraggedItem] = (0, import_react17.useState)("");
  const isDraggingAny = !!draggedItem;
  const valueRef = (0, import_react17.useRef)([]);
  (0, import_react17.useEffect)(() => {
    valueRef.current = getValue();
  }, []);
  const uniqifyItem = (0, import_react17.useCallback)(
    (val) => {
      if (field.type !== "array" || !field.arrayFields) return;
      const config = appStore.getState().config;
      return walkField({
        value: val,
        fields: field.arrayFields,
        mappers: {
          slot: ({ value }) => {
            const content = value;
            return content.map((item) => populateIds(item, config, true));
          }
        },
        config
      });
    },
    [appStore, field]
  );
  const syncCurrentIndexes = (0, import_react17.useCallback)(() => {
    const arrayState = getArrayState();
    const newArrayStateItems = arrayState.items.map((item, index) => __spreadProps(__spreadValues({}, item), {
      _currentIndex: index
    }));
    const state = appStore.getState().state;
    const newUi = {
      arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
        [id]: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
      })
    };
    setUi(newUi, false);
  }, []);
  const updateValue = (0, import_react17.useCallback)(
    (newValue) => {
      const newArrayState = regenerateArrayState(newValue);
      setUi(mapArrayStateToUi(newArrayState), false);
      onChange(newValue);
    },
    [regenerateArrayState, setUi, mapArrayStateToUi, onChange]
  );
  (0, import_react17.useEffect)(() => {
    const newArrayState = regenerateArrayState(getValue());
    setUi(mapArrayStateToUi(newArrayState), false);
  }, [numItems]);
  if (field.type !== "array" || !field.arrayFields) {
    return null;
  }
  const addDisabled = field.max !== void 0 && (mirror == null ? void 0 : mirror.items.length) >= field.max || readOnly;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(List, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        SortableProvider,
        {
          onDragStart: (id2) => {
            valueRef.current = getValue();
            setDraggedItem(id2);
            syncCurrentIndexes();
          },
          onDragEnd: () => {
            setDraggedItem("");
            onChange(valueRef.current);
            const currentFieldVal = fieldStore.getState();
            fieldStore.setState(setDeep(currentFieldVal, name, valueRef.current));
            syncCurrentIndexes();
          },
          onMove: (move) => {
            const arrayState = getArrayState();
            if (arrayState.items[move.source]._arrayId !== draggedItem) {
              return;
            }
            const newValue = reorder(valueRef.current, move.source, move.target);
            const newArrayStateItems = reorder(
              arrayState.items,
              move.source,
              move.target
            );
            const state = appStore.getState().state;
            const newUi = {
              arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
                [id]: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
              })
            };
            setUi(newUi, false);
            valueRef.current = newValue;
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
            "div",
            {
              className: getClassName5({
                hasItems: numItems > 0,
                addDisabled
              }),
              children: [
                mirror.items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: getClassName5("inner"), "data-dnd-container": true, children: mirror.items.map((item, index) => {
                  const {
                    _arrayId = `${id}-${index}`,
                    _originalIndex = index,
                    _currentIndex = index
                  } = item;
                  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    ArrayFieldItem,
                    {
                      index: _currentIndex,
                      dragIndex: index,
                      originalIndex: _originalIndex,
                      arrayId: id,
                      id: _arrayId,
                      readOnly,
                      field,
                      name,
                      localName,
                      onChange: (val, ui, subName) => {
                        const value = getValue();
                        const data = Array.from(value || [])[index] || {};
                        onChange(
                          replace(value, index, __spreadProps(__spreadValues({}, data), {
                            [subName]: val
                          })),
                          ui
                        );
                      },
                      onToggleExpand: (id2, isExpanded) => {
                        if (isExpanded) {
                          setUi(
                            mapArrayStateToUi({
                              openId: ""
                            })
                          );
                        } else {
                          setUi(
                            mapArrayStateToUi({
                              openId: id2
                            })
                          );
                        }
                      },
                      actions: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                          IconButton,
                          {
                            type: "button",
                            disabled: !!addDisabled,
                            onClick: (e) => {
                              e.stopPropagation();
                              const value = getValue();
                              const existingValue = [...value || []];
                              const newItem = uniqifyItem(existingValue[index]);
                              existingValue.splice(index, 0, newItem);
                              updateValue(existingValue);
                            },
                            title: "Duplicate",
                            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Copy, { size: 16 })
                          }
                        ) }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                          IconButton,
                          {
                            type: "button",
                            disabled: field.min !== void 0 && field.min >= mirror.items.length,
                            onClick: (e) => {
                              e.stopPropagation();
                              const value = getValue();
                              const existingValue = [...value || []];
                              existingValue.splice(index, 1);
                              updateValue(existingValue);
                            },
                            title: "Delete",
                            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Trash, { size: 16 })
                          }
                        ) })
                      ] })
                    },
                    _arrayId
                  );
                }) }),
                !addDisabled && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "button",
                  {
                    type: "button",
                    className: getClassName5("addButton"),
                    onClick: () => {
                      var _a;
                      if (isDraggingAny) return;
                      const value = getValue();
                      const existingValue = value || [];
                      const defaultProps = typeof field.defaultItemProps === "function" ? field.defaultItemProps(existingValue.length) : (_a = field.defaultItemProps) != null ? _a : {};
                      const newItem = defaultSlots(
                        uniqifyItem(defaultProps),
                        field.arrayFields
                      );
                      const newValue = [...existingValue, newItem];
                      updateValue(newValue);
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Plus, { size: 21 })
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
};

// components/AutoField/fields/DefaultField/index.tsx
init_react_import();
init_get_class_name_factory();
init_lucide_react();

// components/AutoField/lib/use-local-value.ts
init_react_import();
var import_react18 = require("react");

// components/AutoField/lib/use-deep-field.ts
init_react_import();
var useDeepField = (path) => {
  return useFieldStore((s) => getDeep(s, path));
};

// components/AutoField/lib/use-is-focused.ts
init_react_import();
init_store();
var useIsFocused = (path) => {
  return useAppStore((s) => s.state.ui.field.focus === path);
};

// components/AutoField/lib/use-local-value.ts
var useLocalValue = (path, onChange) => {
  const value = useDeepField(path);
  const isFocused = useIsFocused(path);
  const [localValue, setLocalValue] = (0, import_react18.useState)(value == null ? void 0 : value.toString());
  const onChangeLocal = (0, import_react18.useCallback)((val) => {
    setLocalValue(val);
    onChange(val);
  }, []);
  (0, import_react18.useEffect)(() => {
    if (!isFocused) {
      setLocalValue(value);
    }
  }, [isFocused, value]);
  return [localValue != null ? localValue : "", onChangeLocal];
};

// components/AutoField/fields/DefaultField/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var getClassName6 = get_class_name_factory_default("Input", styles_module_default2);
var DefaultField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label: Label2
}) => {
  const [localValue, onChangeLocal] = useLocalValue(name, onChange);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
        field.type === "text" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Type, { size: 16 }),
        field.type === "number" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Hash, { size: 16 })
      ] }),
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "input",
        {
          className: getClassName6("input"),
          autoComplete: "off",
          type: field.type,
          title: label || name,
          name,
          value: localValue,
          onChange: (e) => {
            if (field.type === "number") {
              const numberValue = Number(e.currentTarget.value);
              if (typeof field.min !== "undefined" && numberValue < field.min) {
                return;
              }
              if (typeof field.max !== "undefined" && numberValue > field.max) {
                return;
              }
              onChangeLocal(numberValue);
            } else {
              onChangeLocal(e.currentTarget.value);
            }
          },
          readOnly,
          tabIndex: readOnly ? -1 : void 0,
          id,
          min: field.type === "number" ? field.min : void 0,
          max: field.type === "number" ? field.max : void 0,
          placeholder: field.type === "text" || field.type === "number" ? field.placeholder : void 0,
          step: field.type === "number" ? field.step : void 0
        }
      )
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
init_react_import();
var import_react22 = require("react");

// components/ExternalInput/index.tsx
init_react_import();
var import_react21 = require("react");

// css-module:/Users/mariusmuller/puck/packages/core/components/ExternalInput/styles.module.css#css-module
init_react_import();
var styles_module_default6 = { "ExternalInput-actions": "_ExternalInput-actions_91ls0_1", "ExternalInput-button": "_ExternalInput-button_91ls0_5", "ExternalInput--dataSelected": "_ExternalInput--dataSelected_91ls0_24", "ExternalInput--readOnly": "_ExternalInput--readOnly_91ls0_31", "ExternalInput-detachButton": "_ExternalInput-detachButton_91ls0_35", "ExternalInput": "_ExternalInput_91ls0_1", "ExternalInputModal": "_ExternalInputModal_91ls0_79", "ExternalInputModal-grid": "_ExternalInputModal-grid_91ls0_89", "ExternalInputModal--filtersToggled": "_ExternalInputModal--filtersToggled_91ls0_100", "ExternalInputModal-filters": "_ExternalInputModal-filters_91ls0_105", "ExternalInputModal-masthead": "_ExternalInputModal-masthead_91ls0_124", "ExternalInputModal-tableWrapper": "_ExternalInputModal-tableWrapper_91ls0_133", "ExternalInputModal-table": "_ExternalInputModal-table_91ls0_133", "ExternalInputModal-thead": "_ExternalInputModal-thead_91ls0_149", "ExternalInputModal-th": "_ExternalInputModal-th_91ls0_149", "ExternalInputModal-td": "_ExternalInputModal-td_91ls0_164", "ExternalInputModal-tr": "_ExternalInputModal-tr_91ls0_169", "ExternalInputModal-tbody": "_ExternalInputModal-tbody_91ls0_176", "ExternalInputModal--hasData": "_ExternalInputModal--hasData_91ls0_202", "ExternalInputModal-loadingBanner": "_ExternalInputModal-loadingBanner_91ls0_206", "ExternalInputModal--isLoading": "_ExternalInputModal--isLoading_91ls0_223", "ExternalInputModal-searchForm": "_ExternalInputModal-searchForm_91ls0_227", "ExternalInputModal-search": "_ExternalInputModal-search_91ls0_227", "ExternalInputModal-searchIcon": "_ExternalInputModal-searchIcon_91ls0_264", "ExternalInputModal-searchIconText": "_ExternalInputModal-searchIconText_91ls0_289", "ExternalInputModal-searchInput": "_ExternalInputModal-searchInput_91ls0_299", "ExternalInputModal-searchActions": "_ExternalInputModal-searchActions_91ls0_313", "ExternalInputModal-searchActionIcon": "_ExternalInputModal-searchActionIcon_91ls0_326", "ExternalInputModal-footerContainer": "_ExternalInputModal-footerContainer_91ls0_330", "ExternalInputModal-footer": "_ExternalInputModal-footer_91ls0_330", "ExternalInputModal-field": "_ExternalInputModal-field_91ls0_343" };

// components/ExternalInput/index.tsx
init_get_class_name_factory();
init_lucide_react();

// components/Modal/index.tsx
init_react_import();
var import_react19 = require("react");
init_get_class_name_factory();

// css-module:/Users/mariusmuller/puck/packages/core/components/Modal/styles.module.css#css-module
init_react_import();
var styles_module_default7 = { "Modal": "_Modal_ikbaj_1", "Modal--isOpen": "_Modal--isOpen_ikbaj_15", "Modal-inner": "_Modal-inner_ikbaj_19" };

// components/Modal/index.tsx
var import_react_dom = require("react-dom");
var import_jsx_runtime11 = require("react/jsx-runtime");
var getClassName7 = get_class_name_factory_default("Modal", styles_module_default7);
var Modal = ({
  children,
  onClose,
  isOpen
}) => {
  const [rootEl, setRootEl] = (0, import_react19.useState)(null);
  (0, import_react19.useEffect)(() => {
    setRootEl(document.getElementById("puck-portal-root"));
  }, []);
  if (!rootEl) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {});
  }
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: getClassName7({ isOpen }), onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "div",
      {
        className: getClassName7("inner"),
        onClick: (e) => e.stopPropagation(),
        children
      }
    ) }),
    rootEl
  );
};

// components/Heading/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/Heading/styles.module.css#css-module
init_react_import();
var styles_module_default8 = { "Heading": "_Heading_qxrry_1", "Heading--xxxxl": "_Heading--xxxxl_qxrry_12", "Heading--xxxl": "_Heading--xxxl_qxrry_18", "Heading--xxl": "_Heading--xxl_qxrry_22", "Heading--xl": "_Heading--xl_qxrry_26", "Heading--l": "_Heading--l_qxrry_30", "Heading--m": "_Heading--m_qxrry_34", "Heading--s": "_Heading--s_qxrry_38", "Heading--xs": "_Heading--xs_qxrry_42" };

// components/Heading/index.tsx
init_get_class_name_factory();
var import_jsx_runtime12 = require("react/jsx-runtime");
var getClassName8 = get_class_name_factory_default("Heading", styles_module_default8);
var Heading7 = ({ children, rank, size = "m" }) => {
  const Tag = rank ? `h${rank}` : "span";
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    Tag,
    {
      className: getClassName8({
        [size]: true
      }),
      children
    }
  );
};

// components/ExternalInput/index.tsx
init_Loader();

// components/Button/index.ts
init_react_import();

// components/Button/Button.tsx
init_react_import();
var import_react20 = require("react");

// css-module:/Users/mariusmuller/puck/packages/core/components/Button/Button.module.css#css-module
init_react_import();
var Button_module_default = { "Button": "_Button_10byl_1", "Button--medium": "_Button--medium_10byl_29", "Button--large": "_Button--large_10byl_37", "Button-icon": "_Button-icon_10byl_44", "Button--primary": "_Button--primary_10byl_48", "Button--secondary": "_Button--secondary_10byl_67", "Button--flush": "_Button--flush_10byl_84", "Button--disabled": "_Button--disabled_10byl_88", "Button--fullWidth": "_Button--fullWidth_10byl_95", "Button-spinner": "_Button-spinner_10byl_100" };

// components/Button/Button.tsx
init_get_class_name_factory();
init_Loader();

// lib/filter-data-attrs.ts
init_react_import();
var dataAttrRe = /^(data-.*)$/;
var filterDataAttrs = (props) => {
  let filteredProps = {};
  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && dataAttrRe.test(prop)) {
      filteredProps[prop] = props[prop];
    }
  }
  return filteredProps;
};

// components/Button/Button.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var getClassName9 = get_class_name_factory_default("Button", Button_module_default);
var Button = (_a) => {
  var _b = _a, {
    children,
    href,
    onClick,
    variant = "primary",
    type,
    disabled,
    tabIndex,
    newTab,
    fullWidth,
    icon,
    size = "medium",
    loading: loadingProp = false
  } = _b, props = __objRest(_b, [
    "children",
    "href",
    "onClick",
    "variant",
    "type",
    "disabled",
    "tabIndex",
    "newTab",
    "fullWidth",
    "icon",
    "size",
    "loading"
  ]);
  const [loading, setLoading] = (0, import_react20.useState)(loadingProp);
  (0, import_react20.useEffect)(() => setLoading(loadingProp), [loadingProp]);
  const ElementType = href ? "a" : type ? "button" : "span";
  const dataAttrs = filterDataAttrs(props);
  const el = /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    ElementType,
    __spreadProps(__spreadValues({
      className: getClassName9({
        primary: variant === "primary",
        secondary: variant === "secondary",
        disabled,
        fullWidth,
        [size]: true
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href
    }, dataAttrs), {
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: getClassName9("icon"), children: icon }),
        children,
        loading && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: getClassName9("spinner"), children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Loader, { size: 14 }) })
      ]
    })
  );
  return el;
};

// components/ExternalInput/index.tsx
init_IconButton2();
var import_jsx_runtime14 = require("react/jsx-runtime");
var getClassName10 = get_class_name_factory_default("ExternalInput", styles_module_default6);
var getClassNameModal = get_class_name_factory_default("ExternalInputModal", styles_module_default6);
var dataCache = {};
var ExternalInput = ({
  field,
  onChange,
  value = null,
  name,
  id,
  readOnly
}) => {
  var _a;
  const {
    mapProp = (val) => val,
    mapRow = (val) => val,
    filterFields
  } = field || {};
  const { enabled: shouldCacheData } = (_a = field.cache) != null ? _a : { enabled: true };
  const [data, setData] = (0, import_react21.useState)([]);
  const [isOpen, setOpen] = (0, import_react21.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react21.useState)(true);
  const hasFilterFields = !!filterFields;
  const [filters, setFilters] = (0, import_react21.useState)(field.initialFilters || {});
  const [filtersToggled, setFiltersToggled] = (0, import_react21.useState)(hasFilterFields);
  const mappedData = (0, import_react21.useMemo)(() => {
    return data.map(mapRow);
  }, [data]);
  const keys = (0, import_react21.useMemo)(() => {
    const validKeys = /* @__PURE__ */ new Set();
    for (const item of mappedData) {
      for (const key of Object.keys(item)) {
        if (typeof item[key] === "string" || typeof item[key] === "number" || (0, import_react21.isValidElement)(item[key])) {
          validKeys.add(key);
        }
      }
    }
    return Array.from(validKeys);
  }, [mappedData]);
  const [searchQuery, setSearchQuery] = (0, import_react21.useState)(field.initialQuery || "");
  const search = (0, import_react21.useCallback)(
    (query, filters2) => __async(null, null, function* () {
      setIsLoading(true);
      const cacheKey = `${id}-${query}-${JSON.stringify(filters2)}`;
      let listData;
      if (shouldCacheData && dataCache[cacheKey]) {
        listData = dataCache[cacheKey];
      } else {
        listData = yield field.fetchList({ query, filters: filters2 });
      }
      if (listData) {
        setData(listData);
        setIsLoading(false);
        if (shouldCacheData) {
          dataCache[cacheKey] = listData;
        }
      }
    }),
    [id, field]
  );
  const Footer = (0, import_react21.useCallback)(
    (props) => field.renderFooter ? field.renderFooter(props) : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: getClassNameModal("footer"), children: [
      props.items.length,
      " result",
      props.items.length === 1 ? "" : "s"
    ] }),
    [field.renderFooter]
  );
  (0, import_react21.useEffect)(() => {
    search(searchQuery, filters);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "div",
    {
      className: getClassName10({
        dataSelected: !!value,
        modalVisible: isOpen,
        readOnly
      }),
      id,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: getClassName10("actions"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setOpen(true),
              className: getClassName10("button"),
              disabled: readOnly,
              children: value ? field.getItemSummary ? field.getItemSummary(value) : "External item" : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Link, { size: "16" }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: field.placeholder })
              ] })
            }
          ),
          value && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "button",
            {
              type: "button",
              className: getClassName10("detachButton"),
              onClick: () => {
                onChange(null);
              },
              disabled: readOnly,
              children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(LockOpen, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Modal, { onClose: () => setOpen(false), isOpen, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          "form",
          {
            className: getClassNameModal({
              isLoading,
              loaded: !isLoading,
              hasData: mappedData.length > 0,
              filtersToggled
            }),
            onSubmit: (e) => {
              e.preventDefault();
              e.stopPropagation();
              search(searchQuery, filters);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("masthead"), children: field.showSearch ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: getClassNameModal("searchForm"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { className: getClassNameModal("search"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: getClassNameModal("searchIconText"), children: "Search" }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("searchIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Search, { size: "18" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                    "input",
                    {
                      className: getClassNameModal("searchInput"),
                      name: "q",
                      type: "search",
                      placeholder: field.placeholder,
                      onChange: (e) => {
                        setSearchQuery(e.currentTarget.value);
                      },
                      autoComplete: "off",
                      value: searchQuery
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: getClassNameModal("searchActions"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { type: "submit", loading: isLoading, fullWidth: true, children: "Search" }),
                  hasFilterFields && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("searchActionIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                    IconButton,
                    {
                      type: "button",
                      title: "Toggle filters",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFiltersToggled(!filtersToggled);
                      },
                      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SlidersHorizontal, { size: 20 })
                    }
                  ) })
                ] })
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Heading7, { rank: "2", size: "xs", children: field.placeholder || "Select data" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: getClassNameModal("grid"), children: [
                hasFilterFields && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("filters"), children: hasFilterFields && Object.keys(filterFields).map((fieldName) => {
                  const filterField = filterFields[fieldName];
                  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                    "div",
                    {
                      className: getClassNameModal("field"),
                      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(FieldLabel, { label: filterField.label || fieldName, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                        AutoField,
                        {
                          field: filterField,
                          id: `external_field_${fieldName}_filter`,
                          value: filters[fieldName],
                          onChange: (value2) => {
                            setFilters((filters2) => {
                              const newFilters = __spreadProps(__spreadValues({}, filters2), {
                                [fieldName]: value2
                              });
                              search(searchQuery, newFilters);
                              return newFilters;
                            });
                          }
                        }
                      ) })
                    },
                    fieldName
                  );
                }) }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: getClassNameModal("tableWrapper"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("table", { className: getClassNameModal("table"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("thead", { className: getClassNameModal("thead"), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { className: getClassNameModal("tr"), children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                      "th",
                      {
                        className: getClassNameModal("th"),
                        style: { textAlign: "left" },
                        children: key
                      },
                      key
                    )) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tbody", { className: getClassNameModal("tbody"), children: mappedData.map((item, i) => {
                      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                        "tr",
                        {
                          style: { whiteSpace: "nowrap" },
                          className: getClassNameModal("tr"),
                          onClick: () => {
                            onChange(mapProp(data[i]));
                            setOpen(false);
                          },
                          children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: getClassNameModal("td"), children: item[key] }, key))
                        },
                        i
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("loadingBanner"), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Loader, { size: 24 }) })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("footerContainer"), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Footer, { items: mappedData }) })
            ]
          }
        ) })
      ]
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
init_lucide_react();
var import_jsx_runtime15 = require("react/jsx-runtime");
var ExternalField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  Label: Label2,
  readOnly
}) => {
  var _a, _b, _c;
  const value = useDeepField(name);
  const validField = field;
  const deprecatedField = field;
  (0, import_react22.useEffect)(() => {
    if (deprecatedField.adaptor) {
      console.error(
        "Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release."
      );
    }
  }, []);
  if (field.type !== "external") {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Link, { size: 16 }),
      el: "div",
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        ExternalInput,
        {
          name,
          field: __spreadProps(__spreadValues({}, validField), {
            // DEPRECATED
            placeholder: ((_a = deprecatedField.adaptor) == null ? void 0 : _a.name) ? `Select from ${deprecatedField.adaptor.name}` : validField.placeholder || "Select data",
            mapProp: ((_b = deprecatedField.adaptor) == null ? void 0 : _b.mapProp) || validField.mapProp,
            mapRow: validField.mapRow,
            fetchList: ((_c = deprecatedField.adaptor) == null ? void 0 : _c.fetchList) ? () => __async(null, null, function* () {
              return yield deprecatedField.adaptor.fetchList(
                deprecatedField.adaptorParams
              );
            }) : validField.fetchList
          }),
          onChange,
          value,
          id,
          readOnly
        }
      )
    }
  );
};

// components/AutoField/fields/RadioField/index.tsx
init_react_import();
init_get_class_name_factory();
init_lucide_react();
var import_jsx_runtime16 = require("react/jsx-runtime");
var getClassName11 = get_class_name_factory_default("Input", styles_module_default2);
var RadioField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label: Label2
}) => {
  const value = useDeepField(name);
  if (field.type !== "radio" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    Label2,
    {
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CircleCheckBig, { size: 16 }),
      label: label || name,
      readOnly,
      el: "div",
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: getClassName11("radioGroupItems"), id, children: field.options.map((option) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
          "label",
          {
            className: getClassName11("radio"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "input",
                {
                  type: "radio",
                  className: getClassName11("radioInput"),
                  value: JSON.stringify({ value: option.value }),
                  name,
                  onChange: (e) => {
                    onChange(JSON.parse(e.target.value).value);
                  },
                  disabled: readOnly,
                  checked: value === option.value
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: getClassName11("radioInner"), children: option.label || ((_a = option.value) == null ? void 0 : _a.toString()) })
            ]
          },
          option.label + option.value
        );
      }) })
    }
  );
};

// components/AutoField/fields/SelectField/index.tsx
init_react_import();
init_get_class_name_factory();
init_lucide_react();
var import_jsx_runtime17 = require("react/jsx-runtime");
var getClassName12 = get_class_name_factory_default("Input", styles_module_default2);
var SelectField = ({
  field,
  onChange,
  label,
  labelIcon,
  Label: Label2,
  id,
  name = id,
  readOnly
}) => {
  const value = useDeepField(name);
  if (field.type !== "select" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ChevronDown, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "select",
        {
          id,
          title: label || name,
          className: getClassName12("input"),
          disabled: readOnly,
          onChange: (e) => {
            onChange(JSON.parse(e.target.value).value);
          },
          value: JSON.stringify({ value }),
          children: field.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "option",
            {
              label: option.label,
              value: JSON.stringify({ value: option.value })
            },
            option.label + JSON.stringify(option.value)
          ))
        }
      )
    }
  );
};

// components/AutoField/fields/TextareaField/index.tsx
init_react_import();
init_get_class_name_factory();
init_lucide_react();
var import_jsx_runtime18 = require("react/jsx-runtime");
var getClassName13 = get_class_name_factory_default("Input", styles_module_default2);
var TextareaField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label: Label2
}) => {
  const [localValue, onChangeLocal] = useLocalValue(name, onChange);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Type, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "textarea",
        {
          id,
          className: getClassName13("input"),
          autoComplete: "off",
          name,
          value: typeof localValue === "undefined" ? "" : localValue,
          onChange: (e) => onChangeLocal(e.currentTarget.value),
          readOnly,
          tabIndex: readOnly ? -1 : void 0,
          rows: 5,
          placeholder: field.type === "textarea" ? field.placeholder : void 0
        }
      )
    }
  );
};

// components/AutoField/fields/RichtextField/index.tsx
init_react_import();
var import_react45 = require("react");
init_lucide_react();

// components/RichTextEditor/components/EditorFallback.tsx
init_react_import();
var import_react37 = require("react");
init_inner();
init_EditorInner();
var import_jsx_runtime47 = require("react/jsx-runtime");
var EditorFallback = (0, import_react37.memo)((props) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    EditorInner,
    __spreadProps(__spreadValues({}, props), {
      editor: null,
      menu: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        LoadedRichTextMenuInner,
        {
          field: props.field,
          editor: null,
          editorState: null,
          readOnly: (_a = props.readOnly) != null ? _a : false
        }
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "div",
        {
          className: "rich-text",
          dangerouslySetInnerHTML: { __html: props.content },
          contentEditable: true
        }
      )
    })
  );
});
EditorFallback.displayName = "EditorFallback";

// components/AutoField/fields/RichtextField/index.tsx
var import_jsx_runtime51 = require("react/jsx-runtime");
var Editor2 = (0, import_react45.lazy)(
  () => Promise.resolve().then(() => (init_Editor(), Editor_exports)).then((m) => ({
    default: m.Editor
  }))
);
var RichtextField = ({
  onChange,
  readOnly = false,
  id,
  name = id,
  label,
  labelIcon,
  Label: Label2,
  field
}) => {
  const content = useDeepField(name);
  const editorProps = {
    onChange,
    content,
    readOnly,
    field,
    id,
    name
  };
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_jsx_runtime51.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Type, { size: 16 }),
      readOnly,
      el: "div",
      children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react45.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(EditorFallback, __spreadValues({}, editorProps)), children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Editor2, __spreadValues({}, editorProps)) })
    }
  ) });
};

// components/AutoField/fields/ObjectField/index.tsx
init_react_import();
init_get_class_name_factory();

// css-module:/Users/mariusmuller/puck/packages/core/components/AutoField/fields/ObjectField/styles.module.css#css-module
init_react_import();
var styles_module_default13 = { "ObjectField": "_ObjectField_1ua3y_5", "ObjectField-fieldset": "_ObjectField-fieldset_1ua3y_13" };

// components/AutoField/fields/ObjectField/index.tsx
init_lucide_react();
init_store();
var import_jsx_runtime52 = require("react/jsx-runtime");
var getClassName18 = get_class_name_factory_default("ObjectField", styles_module_default13);
var ObjectField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  Label: Label2,
  readOnly
}) => {
  const { localName = name } = useNestedFieldContext();
  const fieldStore = useFieldStoreApi();
  const canEdit = useAppStore(
    (s) => s.permissions.getPermissions({ item: s.selectedItem }).edit
  );
  const getValue = () => {
    var _a;
    return (_a = getDeep(fieldStore.getState(), name)) != null ? _a : {};
  };
  if (field.type !== "object" || !field.objectFields) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    Label2,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(EllipsisVertical, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: getClassName18(), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("fieldset", { className: getClassName18("fieldset"), children: Object.keys(field.objectFields).map((subName) => {
        const subField = field.objectFields[subName];
        const subPath = `${localName}.${subName}`;
        return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          SubField,
          {
            id: `${id}_${subName}`,
            name,
            subName,
            localName,
            field: subField,
            forceReadOnly: !canEdit,
            onChange: (subValue, ui, subName2) => {
              const value = getValue();
              if (value[subName2] === subValue) {
                return;
              }
              onChange(__spreadProps(__spreadValues({}, value), { [subName2]: subValue }), ui);
            }
          },
          subPath
        );
      }) }) })
    }
  );
};

// components/AutoField/index.tsx
init_store();

// lib/use-safe-id.ts
init_react_import();
var import_react46 = __toESM(require("react"));
init_generate_id();
var useSafeId = () => {
  if (typeof import_react46.default.useId !== "undefined") {
    return import_react46.default.useId();
  }
  const [id] = (0, import_react46.useState)(generateId());
  return id;
};

// components/AutoField/index.tsx
var import_shallow3 = require("zustand/react/shallow");

// components/AutoField/FieldLabel.tsx
init_react_import();
init_get_class_name_factory();
var import_react47 = require("react");
init_lucide_react();
init_store();
var import_jsx_runtime53 = require("react/jsx-runtime");
var getClassName19 = get_class_name_factory_default("Input", styles_module_default2);
var FieldLabel = ({
  children,
  icon,
  label,
  el = "label",
  readOnly,
  className
}) => {
  const El = el;
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(El, { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: getClassName19("label"), children: [
      icon ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: getClassName19("labelIcon"), children: icon }) : /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, {}),
      label,
      readOnly && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: getClassName19("disabledIcon"), title: "Read-only", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Lock, { size: "12" }) })
    ] }),
    children
  ] });
};
var FieldLabelInternal = ({
  children,
  icon,
  label,
  el = "label",
  readOnly
}) => {
  const overrides = useAppStore((s) => s.overrides);
  const Wrapper = (0, import_react47.useMemo)(
    () => overrides.fieldLabel || FieldLabel,
    [overrides]
  );
  if (!label) {
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    Wrapper,
    {
      label,
      icon,
      className: getClassName19({ readOnly }),
      readOnly,
      el,
      children
    }
  );
};

// components/AutoField/index.tsx
var import_jsx_runtime54 = require("react/jsx-runtime");
var getClassName20 = get_class_name_factory_default("Input", styles_module_default2);
var getClassNameWrapper = get_class_name_factory_default("InputWrapper", styles_module_default2);
var defaultFields = {
  array: ArrayField,
  external: ExternalField,
  object: ObjectField,
  select: SelectField,
  textarea: TextareaField,
  radio: RadioField,
  text: DefaultField,
  number: DefaultField,
  richtext: RichtextField
};
function AutoFieldInternal(props) {
  var _a;
  const dispatch = useAppStore((s) => s.dispatch);
  const overrides = useAppStore((s) => s.overrides);
  const readOnly = useAppStore((0, import_shallow3.useShallow)((s) => {
    var _a2;
    return (_a2 = s.selectedItem) == null ? void 0 : _a2.readOnly;
  }));
  const nestedFieldContext = (0, import_react48.useContext)(NestedFieldContext);
  const { id, Label: Label2 = FieldLabelInternal } = props;
  const field = props.field;
  const label = field.label;
  const labelIcon = field.labelIcon;
  const defaultId = useSafeId();
  const resolvedId = id || defaultId;
  const render = (0, import_react48.useMemo)(
    () => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      return __spreadProps(__spreadValues({}, overrides.fieldTypes), {
        custom: (_a2 = overrides.fieldTypes) == null ? void 0 : _a2.custom,
        array: ((_b = overrides.fieldTypes) == null ? void 0 : _b.array) || defaultFields.array,
        external: ((_c = overrides.fieldTypes) == null ? void 0 : _c.external) || defaultFields.external,
        object: ((_d = overrides.fieldTypes) == null ? void 0 : _d.object) || defaultFields.object,
        select: ((_e = overrides.fieldTypes) == null ? void 0 : _e.select) || defaultFields.select,
        textarea: ((_f = overrides.fieldTypes) == null ? void 0 : _f.textarea) || defaultFields.textarea,
        radio: ((_g = overrides.fieldTypes) == null ? void 0 : _g.radio) || defaultFields.radio,
        text: ((_h = overrides.fieldTypes) == null ? void 0 : _h.text) || defaultFields.text,
        number: ((_i = overrides.fieldTypes) == null ? void 0 : _i.number) || defaultFields.number,
        richtext: ((_j = overrides.fieldTypes) == null ? void 0 : _j.richtext) || defaultFields.richtext
      });
    },
    [overrides]
  );
  const fieldValue = useFieldStore((s) => {
    var _a2, _b;
    if (field.type === "custom" || ((_a2 = overrides.fieldTypes) == null ? void 0 : _a2[field.type])) {
      return getDeep(s, (_b = props.name) != null ? _b : resolvedId);
    }
  });
  const mergedProps = (0, import_react48.useMemo)(
    () => __spreadProps(__spreadValues({}, props), {
      field,
      label,
      labelIcon,
      Label: Label2,
      id: resolvedId,
      value: fieldValue
    }),
    [props, field, label, labelIcon, Label2, resolvedId, fieldValue]
  );
  const onFocus = (0, import_react48.useCallback)(
    (e) => {
      if (mergedProps.name && (e.target.nodeName === "INPUT" || e.target.nodeName === "TEXTAREA")) {
        e.stopPropagation();
        dispatch({
          type: "setUi",
          ui: {
            field: { focus: mergedProps.name }
          }
        });
      }
    },
    [mergedProps.name]
  );
  const onBlur = (0, import_react48.useCallback)((e) => {
    if ("name" in e.target) {
      dispatch({
        type: "setUi",
        ui: {
          field: { focus: null }
        }
      });
    }
  }, []);
  let Children = (0, import_react48.useMemo)(() => {
    if (field.type !== "custom" && field.type !== "slot") {
      return defaultFields[field.type];
    }
    return (_props) => null;
  }, [field.type]);
  const fieldKey = field.type === "custom" ? field.key : void 0;
  let FieldComponent = (0, import_react48.useMemo)(() => {
    if (field.type === "custom" && !render[field.type]) {
      if (!field.render) {
        return null;
      }
      return field.render;
    } else if (field.type !== "slot") {
      return render[field.type];
    }
  }, [field.type, fieldKey, render]);
  const { visible = true } = props.field;
  if (!visible) {
    return null;
  }
  if (field.type === "slot") {
    return null;
  }
  if (!FieldComponent) {
    throw new Error(`Field type for ${field.type} did not exist.`);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    NestedFieldContext.Provider,
    {
      value: {
        readOnlyFields: nestedFieldContext.readOnlyFields || readOnly || {},
        localName: (_a = nestedFieldContext.localName) != null ? _a : mergedProps.name
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
        "div",
        {
          className: getClassNameWrapper(),
          onFocus,
          onBlur,
          onClick: (e) => {
            e.stopPropagation();
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(FieldComponent, __spreadProps(__spreadValues({}, mergedProps), { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Children, __spreadValues({}, mergedProps)) }))
        }
      )
    }
  );
}
function AutoFieldPrivate(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(AutoFieldInternal, __spreadValues({}, props));
}
function AutoFieldPublicInternal(_a) {
  var _b = _a, { value } = _b, props = __objRest(_b, ["value"]);
  const DefaultLabel = (0, import_react48.useMemo)(() => {
    const DefaultLabel2 = (labelProps) => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
      "div",
      __spreadProps(__spreadValues({}, labelProps), {
        className: getClassName20({ readOnly: props.readOnly })
      })
    );
    return DefaultLabel2;
  }, [props.readOnly]);
  const fieldStore = useFieldStoreApi();
  const onChange = (0, import_react48.useCallback)(
    (value2) => {
      if (!props.id) return;
      fieldStore.setState({ [props.id]: value2 });
      props.onChange(value2);
    },
    [fieldStore, props.onChange, props.id]
  );
  (0, import_react48.useEffect)(() => {
    if (!props.id) return;
    fieldStore.setState({ [props.id]: value });
  }, [props.id, value, fieldStore]);
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    AutoFieldInternal,
    __spreadProps(__spreadValues({}, props), {
      onChange,
      Label: DefaultLabel
    })
  );
}
function AutoField(props) {
  const id = useSafeId();
  if (props.field.type === "slot") {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(fieldContextStore.Provider, { value: { [id]: props.value }, children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(AutoFieldPublicInternal, __spreadProps(__spreadValues({}, props), { id })) });
}

// components/Drawer/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/Drawer/styles.module.css#css-module
init_react_import();
var styles_module_default14 = { "Drawer": "_Drawer_pl7z0_1", "Drawer-draggable": "_Drawer-draggable_pl7z0_8", "Drawer-draggableBg": "_Drawer-draggableBg_pl7z0_12", "DrawerItem-draggable": "_DrawerItem-draggable_pl7z0_22", "DrawerItem--disabled": "_DrawerItem--disabled_pl7z0_35", "DrawerItem": "_DrawerItem_pl7z0_22", "Drawer--isDraggingFrom": "_Drawer--isDraggingFrom_pl7z0_45", "DrawerItem-name": "_DrawerItem-name_pl7z0_63" };

// components/Drawer/index.tsx
init_get_class_name_factory();
var import_react70 = require("react");
init_generate_id();

// components/DragDropContext/index.tsx
init_react_import();
var import_react68 = require("@dnd-kit/react");
init_store();
var import_react69 = require("react");
var import_dom = require("@dnd-kit/dom");

// components/DropZone/index.tsx
init_react_import();
var import_react66 = require("react");

// components/DraggableComponent/index.tsx
init_react_import();
var import_react51 = require("react");

// css-module:/Users/mariusmuller/puck/packages/core/components/DraggableComponent/styles.module.css#css-module
init_react_import();
var styles_module_default15 = { "DraggableComponent": "_DraggableComponent_1vaqy_1", "DraggableComponent-overlayWrapper": "_DraggableComponent-overlayWrapper_1vaqy_12", "DraggableComponent-overlay": "_DraggableComponent-overlay_1vaqy_12", "DraggableComponent-loadingOverlay": "_DraggableComponent-loadingOverlay_1vaqy_34", "DraggableComponent--hover": "_DraggableComponent--hover_1vaqy_50", "DraggableComponent--isSelected": "_DraggableComponent--isSelected_1vaqy_57", "DraggableComponent-actionsOverlay": "_DraggableComponent-actionsOverlay_1vaqy_71", "DraggableComponent-actions": "_DraggableComponent-actions_1vaqy_71" };

// components/DraggableComponent/index.tsx
init_get_class_name_factory();
init_lucide_react();
init_store();
init_Loader();
init_ActionBar();
var import_react_dom2 = require("react-dom");

// lib/get-deep-scroll-position.ts
init_react_import();
function getDeepScrollPosition(element) {
  let totalScroll = {
    x: 0,
    y: 0
  };
  let current = element;
  while (current && current !== document.documentElement) {
    const parent = current.parentElement;
    if (parent) {
      totalScroll.x += parent.scrollLeft;
      totalScroll.y += parent.scrollTop;
    }
    current = parent;
  }
  return totalScroll;
}

// components/DropZone/context.tsx
init_react_import();
var import_react49 = require("react");
init_store();
var import_zustand5 = require("zustand");
var import_jsx_runtime55 = require("react/jsx-runtime");
var dropZoneContext = (0, import_react49.createContext)(null);
var ZoneStoreContext = (0, import_react49.createContext)(
  (0, import_zustand5.createStore)(() => ({
    zoneDepthIndex: {},
    nextZoneDepthIndex: {},
    areaDepthIndex: {},
    nextAreaDepthIndex: {},
    draggedItem: null,
    previewIndex: {},
    enabledIndex: {},
    hoveringComponent: null
  }))
);
var ZoneStoreProvider = ({
  children,
  store
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(ZoneStoreContext.Provider, { value: store, children });
};
var DropZoneProvider = ({
  children,
  value
}) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const registerZone = (0, import_react49.useCallback)(
    (zoneCompound) => {
      dispatch({
        type: "registerZone",
        zone: zoneCompound
      });
    },
    [dispatch]
  );
  const memoValue = (0, import_react49.useMemo)(
    () => __spreadValues({
      registerZone
    }, value),
    [value]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_jsx_runtime55.Fragment, { children: memoValue && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(dropZoneContext.Provider, { value: memoValue, children }) });
};

// components/DraggableComponent/index.tsx
var import_shallow4 = require("zustand/react/shallow");
init_get_item();
var import_sortable2 = require("@dnd-kit/react/sortable");

// lib/accumulate-transform.ts
init_react_import();
function accumulateTransform(el) {
  let matrix = new DOMMatrixReadOnly();
  let n = el.parentElement;
  while (n && n !== document.documentElement) {
    const t = getComputedStyle(n).transform;
    if (t && t !== "none") {
      matrix = new DOMMatrixReadOnly(t).multiply(matrix);
    }
    n = n.parentElement;
  }
  return { scaleX: matrix.a, scaleY: matrix.d };
}

// lib/dnd/use-on-drag-finished.ts
init_react_import();
var import_react50 = require("react");
init_store();
var useOnDragFinished = (cb, deps = []) => {
  const appStore = useAppStoreApi();
  return (0, import_react50.useCallback)(() => {
    let dispose = () => {
    };
    const processDragging = (isDragging2) => {
      if (isDragging2) {
        cb(false);
      } else {
        setTimeout(() => {
          cb(true);
        }, 0);
        if (dispose) dispose();
      }
    };
    const isDragging = appStore.getState().state.ui.isDragging;
    processDragging(isDragging);
    if (isDragging) {
      dispose = appStore.subscribe(
        (s) => s.state.ui.isDragging,
        (isDragging2) => {
          processDragging(isDragging2);
        }
      );
    }
    return dispose;
  }, [appStore, ...deps]);
};

// components/DraggableComponent/index.tsx
init_RichTextMenu();
var import_jsx_runtime56 = require("react/jsx-runtime");
var getClassName21 = get_class_name_factory_default("DraggableComponent", styles_module_default15);
var DEBUG2 = false;
var space = 8;
var actionsOverlayTop = space * 6.5;
var actionsTop = -(actionsOverlayTop - 8);
var actionsSide = space;
var DefaultActionBar = ({
  label,
  children,
  parentAction
}) => /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(ActionBar, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(ActionBar.Group, { children: [
    parentAction,
    label && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(ActionBar.Label, { label })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(ActionBar.Group, { children })
] });
var DefaultOverlay = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_jsx_runtime56.Fragment, { children });
var DraggableComponent = ({
  children,
  depth,
  componentType,
  id,
  index,
  zoneCompound,
  isLoading = false,
  isSelected = false,
  debug,
  label,
  autoDragAxis,
  userDragAxis,
  inDroppableZone = true
}) => {
  const zoom = useAppStore(
    (s) => {
      var _a;
      return ((_a = s.selectedItem) == null ? void 0 : _a.props.id) === id ? s.zoomConfig.zoom : 1;
    }
  );
  const CustomActionBar = useAppStore((s) => s.overrides.actionBar) || DefaultActionBar;
  const CustomOverlay = useAppStore((s) => s.overrides.componentOverlay) || DefaultOverlay;
  const dispatch = useAppStore((s) => s.dispatch);
  const iframeEnabled = useAppStore((s) => !!s.iframe.enabled);
  const ctx = (0, import_react51.useContext)(dropZoneContext);
  const [localZones, setLocalZones] = (0, import_react51.useState)({});
  const registerLocalZone = (0, import_react51.useCallback)(
    (zoneCompound2, active) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.registerLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2, active);
      setLocalZones((obj) => __spreadProps(__spreadValues({}, obj), {
        [zoneCompound2]: active
      }));
    },
    [setLocalZones]
  );
  const unregisterLocalZone = (0, import_react51.useCallback)(
    (zoneCompound2) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.unregisterLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2);
      setLocalZones((obj) => {
        const newLocalZones = __spreadValues({}, obj);
        delete newLocalZones[zoneCompound2];
        return newLocalZones;
      });
    },
    [setLocalZones]
  );
  const containsActiveZone = Object.values(localZones).filter(Boolean).length > 0;
  const path = useAppStore((0, import_shallow4.useShallow)((s) => {
    var _a;
    return (_a = s.state.indexes.nodes[id]) == null ? void 0 : _a.path;
  }));
  const permissions = useAppStore(
    (0, import_shallow4.useShallow)((s) => {
      const item = getItem({ index, zone: zoneCompound }, s.state);
      return s.permissions.getPermissions({ item });
    })
  );
  const zoneStore = (0, import_react51.useContext)(ZoneStoreContext);
  const [dragAxis, setDragAxis] = (0, import_react51.useState)(userDragAxis || autoDragAxis);
  const dynamicCollisionDetector = (0, import_react51.useMemo)(
    () => createDynamicCollisionDetector(dragAxis),
    [dragAxis]
  );
  const {
    ref: sortableRef,
    isDragging: thisIsDragging,
    sortable
  } = (0, import_sortable2.useSortable)({
    id,
    index,
    group: zoneCompound,
    type: "component",
    data: {
      areaId: ctx == null ? void 0 : ctx.areaId,
      zone: zoneCompound,
      index,
      componentType,
      containsActiveZone,
      depth,
      path: path || [],
      inDroppableZone
    },
    collisionPriority: depth,
    collisionDetector: dynamicCollisionDetector,
    // "Out of the way" transition from react-beautiful-dnd
    transition: {
      duration: 200,
      easing: "cubic-bezier(0.2, 0, 0, 1)"
    },
    feedback: "clone"
  });
  (0, import_react51.useEffect)(() => {
    const isEnabled = zoneStore.getState().enabledIndex[zoneCompound];
    sortable.droppable.disabled = !isEnabled;
    sortable.draggable.disabled = !permissions.drag;
    const cleanup = zoneStore.subscribe((s) => {
      sortable.droppable.disabled = !s.enabledIndex[zoneCompound];
    });
    if (ref.current && !permissions.drag) {
      ref.current.setAttribute("data-puck-disabled", "");
      return () => {
        var _a;
        (_a = ref.current) == null ? void 0 : _a.removeAttribute("data-puck-disabled");
        cleanup();
      };
    }
    return cleanup;
  }, [permissions.drag, zoneCompound]);
  const [, setRerender] = (0, import_react51.useState)(0);
  const ref = (0, import_react51.useRef)(null);
  const refSetter = (0, import_react51.useCallback)(
    (el) => {
      sortableRef(el);
      if (ref.current !== el) {
        ref.current = el;
        setRerender((update) => update + 1);
      }
    },
    [sortableRef]
  );
  const [portalEl, setPortalEl] = (0, import_react51.useState)();
  (0, import_react51.useEffect)(() => {
    var _a, _b, _c;
    setPortalEl(
      iframeEnabled ? (_a = ref.current) == null ? void 0 : _a.ownerDocument.body : (_c = (_b = ref.current) == null ? void 0 : _b.closest("[data-puck-preview]")) != null ? _c : document.body
    );
  }, [iframeEnabled, ref.current]);
  const getStyle = (0, import_react51.useCallback)(() => {
    var _a, _b, _c;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const deepScrollPosition = getDeepScrollPosition(ref.current);
    const portalContainerEl = iframeEnabled ? null : (_a = ref.current) == null ? void 0 : _a.closest("[data-puck-preview]");
    const portalContainerRect = portalContainerEl == null ? void 0 : portalContainerEl.getBoundingClientRect();
    const portalScroll = portalContainerEl ? getDeepScrollPosition(portalContainerEl) : { x: 0, y: 0 };
    const scroll = {
      x: deepScrollPosition.x - portalScroll.x - ((_b = portalContainerRect == null ? void 0 : portalContainerRect.left) != null ? _b : 0),
      y: deepScrollPosition.y - portalScroll.y - ((_c = portalContainerRect == null ? void 0 : portalContainerRect.top) != null ? _c : 0)
    };
    const untransformed = {
      height: ref.current.offsetHeight,
      width: ref.current.offsetWidth
    };
    const transform = accumulateTransform(ref.current);
    const style2 = {
      left: `${(rect.left + scroll.x) / transform.scaleX}px`,
      top: `${(rect.top + scroll.y) / transform.scaleY}px`,
      height: `${untransformed.height}px`,
      width: `${untransformed.width}px`
    };
    return style2;
  }, [ref.current]);
  const [style, setStyle] = (0, import_react51.useState)();
  const sync = (0, import_react51.useCallback)(() => {
    setStyle(getStyle());
  }, [ref.current, iframeEnabled]);
  (0, import_react51.useEffect)(() => {
    if (ref.current) {
      const observer = new ResizeObserver(sync);
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref.current]);
  const registerNode = useAppStore((s) => s.nodes.registerNode);
  const hideOverlay = (0, import_react51.useCallback)(() => {
    setIsVisible(false);
  }, []);
  const showOverlay = (0, import_react51.useCallback)(() => {
    setIsVisible(true);
  }, []);
  const syncRef = (0, import_react51.useRef)(sync);
  syncRef.current = sync;
  const showOverlayRef = (0, import_react51.useRef)(showOverlay);
  showOverlayRef.current = showOverlay;
  const hideOverlayRef = (0, import_react51.useRef)(hideOverlay);
  hideOverlayRef.current = hideOverlay;
  (0, import_react51.useEffect)(() => {
    var _a;
    registerNode(id, {
      methods: {
        sync: () => syncRef.current(),
        showOverlay: () => showOverlayRef.current(),
        hideOverlay: () => hideOverlayRef.current()
      },
      element: (_a = ref.current) != null ? _a : null
    });
    return () => {
      registerNode(id, {
        methods: {
          sync: () => null,
          hideOverlay: () => null,
          showOverlay: () => null
        },
        element: null
      });
    };
  }, [id, registerNode]);
  const appStore = useAppStoreApi();
  const onClick = (0, import_react51.useCallback)(
    (e) => {
      const el = e.target;
      if (!el.closest("[data-puck-overlay-portal]")) {
        e.stopPropagation();
      }
      if (isSelected) {
        dispatch({
          type: "setUi",
          ui: {
            itemSelector: null
          }
        });
      } else if (appStore.getState().state.ui.itemSelector !== null) {
        dispatch({
          type: "setUi",
          ui: {
            itemSelector: null
          }
        });
      } else {
        dispatch({
          type: "setUi",
          ui: {
            itemSelector: { index, zone: zoneCompound }
          }
        });
      }
    },
    [index, zoneCompound, id, isSelected, appStore]
  );
  const onSelectParent = (0, import_react51.useCallback)(() => {
    const { nodes, zones } = appStore.getState().state.indexes;
    const node = nodes[id];
    const parentNode = (node == null ? void 0 : node.parentId) ? nodes[node == null ? void 0 : node.parentId] : null;
    if (!parentNode || !node.parentId) {
      return;
    }
    const parentZoneCompound = `${parentNode.parentId}:${parentNode.zone}`;
    const parentIndex = zones[parentZoneCompound].contentIds.indexOf(
      node.parentId
    );
    dispatch({
      type: "setUi",
      ui: {
        itemSelector: {
          zone: parentZoneCompound,
          index: parentIndex
        }
      }
    });
  }, [ctx, path]);
  const onDuplicate = (0, import_react51.useCallback)(() => {
    dispatch({
      type: "duplicate",
      sourceIndex: index,
      sourceZone: zoneCompound
    });
  }, [index, zoneCompound]);
  const onDelete = (0, import_react51.useCallback)(() => {
    dispatch({
      type: "remove",
      index,
      zone: zoneCompound
    });
  }, [index, zoneCompound]);
  const [hover, setHover] = (0, import_react51.useState)(false);
  const indicativeHover = useContextStore(
    ZoneStoreContext,
    (s) => s.hoveringComponent === id
  );
  (0, import_react51.useEffect)(() => {
    if (!ref.current) {
      return;
    }
    const el = ref.current;
    const _onMouseOver = (e) => {
      const userIsDragging = !!zoneStore.getState().draggedItem;
      if (userIsDragging) {
        if (thisIsDragging) {
          setHover(true);
        } else {
          setHover(false);
        }
      } else {
        setHover(true);
      }
      e.stopPropagation();
    };
    const _onMouseOut = (e) => {
      e.stopPropagation();
      setHover(false);
    };
    el.setAttribute("data-puck-component", id);
    el.setAttribute("data-puck-dnd", id);
    el.style.position = "relative";
    el.addEventListener("click", onClick);
    el.addEventListener("mouseover", _onMouseOver);
    el.addEventListener("mouseout", _onMouseOut);
    return () => {
      el.removeAttribute("data-puck-component");
      el.removeAttribute("data-puck-dnd");
      el.removeEventListener("click", onClick);
      el.removeEventListener("mouseover", _onMouseOver);
      el.removeEventListener("mouseout", _onMouseOut);
    };
  }, [
    ref.current,
    // Remount attributes if the element changes
    onClick,
    containsActiveZone,
    zoneCompound,
    id,
    thisIsDragging,
    inDroppableZone
  ]);
  (0, import_react51.useEffect)(() => {
    if (!ref.current) return;
    const el = ref.current;
    if (isSelected) {
      el.setAttribute("data-puck-selected", "");
    } else {
      el.removeAttribute("data-puck-selected");
    }
  }, [isSelected]);
  const [isVisible, setIsVisible] = (0, import_react51.useState)(false);
  const [dragFinished, setDragFinished] = (0, import_react51.useState)(true);
  const [_, startTransition] = (0, import_react51.useTransition)();
  (0, import_react51.useEffect)(() => {
    startTransition(() => {
      if (hover || indicativeHover || isSelected) {
        sync();
        setIsVisible(true);
        setThisWasDragging(false);
      } else {
        setIsVisible(false);
      }
    });
  }, [hover, indicativeHover, isSelected, iframeEnabled]);
  const [thisWasDragging, setThisWasDragging] = (0, import_react51.useState)(false);
  const onDragFinished = useOnDragFinished((finished) => {
    if (finished) {
      startTransition(() => {
        sync();
        setDragFinished(true);
      });
    } else {
      setDragFinished(false);
    }
  });
  (0, import_react51.useEffect)(() => {
    if (thisIsDragging) {
      setThisWasDragging(true);
    }
  }, [thisIsDragging]);
  (0, import_react51.useEffect)(() => {
    if (thisWasDragging) return onDragFinished();
  }, [thisWasDragging, onDragFinished]);
  const syncActionsPosition = (0, import_react51.useCallback)(
    (el) => {
      if (el) {
        const view = el.ownerDocument.defaultView;
        if (view) {
          const rect = el.getBoundingClientRect();
          const diffLeft = rect.x;
          const exceedsBoundsLeft = diffLeft < 0;
          const diffTop = rect.y;
          const exceedsBoundsTop = diffTop < 0;
          if (exceedsBoundsLeft) {
            el.style.transformOrigin = "left top";
            el.style.left = "0px";
          }
          if (exceedsBoundsTop) {
            el.style.top = "12px";
            if (!exceedsBoundsLeft) {
              el.style.transformOrigin = "right top";
            }
          }
        }
      }
    },
    [zoom]
  );
  (0, import_react51.useEffect)(() => {
    if (userDragAxis) {
      setDragAxis(userDragAxis);
      return;
    }
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "inline" || computedStyle.display === "inline-block") {
        setDragAxis("x");
        return;
      }
    }
    setDragAxis(autoDragAxis);
  }, [ref, userDragAxis, autoDragAxis]);
  const parentAction = (0, import_react51.useMemo)(
    () => (ctx == null ? void 0 : ctx.areaId) && (ctx == null ? void 0 : ctx.areaId) !== "root" && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(ActionBar.Action, { onClick: onSelectParent, label: "Select parent", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(CornerLeftUp, { size: 16 }) }),
    [ctx == null ? void 0 : ctx.areaId]
  );
  const nextContextValue = (0, import_react51.useMemo)(
    () => __spreadProps(__spreadValues({}, ctx), {
      areaId: id,
      zoneCompound,
      index,
      depth: depth + 1,
      registerLocalZone,
      unregisterLocalZone
    }),
    [
      ctx,
      id,
      zoneCompound,
      index,
      depth,
      registerLocalZone,
      unregisterLocalZone
    ]
  );
  const richText = useAppStore(
    (s) => {
      var _a;
      return ((_a = s.currentRichText) == null ? void 0 : _a.inlineComponentId) === id ? s.currentRichText : null;
    }
  );
  const hasNormalActions = permissions.duplicate || permissions.delete;
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(DropZoneProvider, { value: nextContextValue, children: [
    dragFinished && isVisible && (0, import_react_dom2.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
        "div",
        {
          className: getClassName21({
            isSelected,
            isDragging: thisIsDragging,
            hover: hover || indicativeHover
          }),
          style: __spreadValues({}, style),
          "data-puck-overlay": true,
          children: [
            debug,
            isLoading && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: getClassName21("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Loader, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
              "div",
              {
                className: getClassName21("actionsOverlay"),
                style: {
                  top: actionsOverlayTop / zoom
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
                  "div",
                  {
                    className: getClassName21("actions"),
                    style: {
                      transform: `scale(${1 / zoom}`,
                      top: actionsTop / zoom,
                      right: 0,
                      paddingLeft: actionsSide,
                      paddingRight: actionsSide
                    },
                    ref: syncActionsPosition,
                    children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
                      CustomActionBar,
                      {
                        parentAction,
                        label: DEBUG2 ? id : label,
                        componentType,
                        children: [
                          richText && /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_jsx_runtime56.Fragment, { children: [
                            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
                              LoadedRichTextMenu,
                              {
                                editor: richText.editor,
                                field: richText.field,
                                inline: true,
                                readOnly: false
                              }
                            ),
                            hasNormalActions && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(ActionBar.Separator, {})
                          ] }),
                          permissions.duplicate && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(ActionBar.Action, { onClick: onDuplicate, label: "Duplicate", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Copy, { size: 16 }) }),
                          permissions.delete && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(ActionBar.Action, { onClick: onDelete, label: "Delete", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Trash, { size: 16 }) })
                        ]
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: getClassName21("overlayWrapper"), children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
              CustomOverlay,
              {
                componentId: id,
                componentType,
                hover,
                isSelected,
                children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: getClassName21("overlay") })
              }
            ) })
          ]
        }
      ),
      portalEl || document.body
    ),
    children(refSetter)
  ] });
};

// components/DropZone/index.tsx
init_setup_zone();
init_root_droppable_id();
init_lib();

// css-module:/Users/mariusmuller/puck/packages/core/components/DropZone/styles.module.css#css-module
init_react_import();
var styles_module_default16 = { "DropZone": "_DropZone_1i2sv_1", "DropZone--hasChildren": "_DropZone--hasChildren_1i2sv_11", "DropZone--isAreaSelected": "_DropZone--isAreaSelected_1i2sv_24", "DropZone--hoveringOverArea": "_DropZone--hoveringOverArea_1i2sv_25", "DropZone--isRootZone": "_DropZone--isRootZone_1i2sv_25", "DropZone--isDestination": "_DropZone--isDestination_1i2sv_35", "DropZone-item": "_DropZone-item_1i2sv_47", "DropZone-hitbox": "_DropZone-hitbox_1i2sv_51", "DropZone--isEnabled": "_DropZone--isEnabled_1i2sv_59", "DropZone--isAnimating": "_DropZone--isAnimating_1i2sv_68" };

// components/DropZone/index.tsx
init_store();
var import_react67 = require("@dnd-kit/react");

// components/DropZone/lib/use-min-empty-height.ts
init_react_import();
var import_react52 = require("react");
init_store();
var getNumItems = (appStore, zoneCompound) => appStore.getState().state.indexes.zones[zoneCompound].contentIds.length;
var useMinEmptyHeight = ({
  zoneCompound,
  userMinEmptyHeight,
  ref
}) => {
  const appStore = useAppStoreApi();
  const [prevHeight, setPrevHeight] = (0, import_react52.useState)(0);
  const [isAnimating, setIsAnimating] = (0, import_react52.useState)(false);
  const { draggedItem, isZone } = useContextStore(ZoneStoreContext, (s) => {
    var _a, _b;
    return {
      draggedItem: ((_a = s.draggedItem) == null ? void 0 : _a.data.zone) === zoneCompound ? s.draggedItem : null,
      isZone: ((_b = s.draggedItem) == null ? void 0 : _b.data.zone) === zoneCompound
    };
  });
  const numItems = (0, import_react52.useRef)(0);
  const onDragFinished = useOnDragFinished(
    (finished) => {
      var _a;
      if (finished) {
        const newNumItems = getNumItems(appStore, zoneCompound);
        setPrevHeight(0);
        if (newNumItems || numItems.current === 0) {
          setIsAnimating(false);
          return;
        }
        const selectedItem = appStore.getState().selectedItem;
        const zones = appStore.getState().state.indexes.zones;
        const nodes = appStore.getState().nodes;
        (_a = nodes.nodes[selectedItem == null ? void 0 : selectedItem.props.id]) == null ? void 0 : _a.methods.hideOverlay();
        setTimeout(() => {
          var _a2;
          const contentIds = ((_a2 = zones[zoneCompound]) == null ? void 0 : _a2.contentIds) || [];
          contentIds.forEach((contentId) => {
            const node = nodes.nodes[contentId];
            node == null ? void 0 : node.methods.sync();
          });
          if (selectedItem) {
            setTimeout(() => {
              var _a3, _b;
              (_a3 = nodes.nodes[selectedItem.props.id]) == null ? void 0 : _a3.methods.sync();
              (_b = nodes.nodes[selectedItem.props.id]) == null ? void 0 : _b.methods.showOverlay();
            }, 200);
          }
          setIsAnimating(false);
        }, 100);
      }
    },
    [appStore, prevHeight, zoneCompound]
  );
  (0, import_react52.useEffect)(() => {
    if (draggedItem && ref.current) {
      if (isZone) {
        const rect = ref.current.getBoundingClientRect();
        numItems.current = getNumItems(appStore, zoneCompound);
        setPrevHeight(rect.height);
        setIsAnimating(true);
        return onDragFinished();
      }
    }
  }, [ref.current, draggedItem, onDragFinished]);
  const returnedMinHeight = isNaN(Number(userMinEmptyHeight)) ? userMinEmptyHeight : `${userMinEmptyHeight}px`;
  return [prevHeight ? `${prevHeight}px` : returnedMinHeight, isAnimating];
};

// lib/assign-refs.ts
init_react_import();
function assignRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else if (ref && typeof ref === "object" && "current" in ref) {
    ref.current = node;
  }
}
function assignRefs(refs, node) {
  refs.forEach((ref) => {
    assignRef(ref, node);
  });
}

// components/DropZone/lib/use-content-with-preview.ts
init_react_import();
var import_react55 = require("react");

// lib/dnd/use-rendered-callback.ts
init_react_import();
var import_react53 = require("@dnd-kit/react");
var import_react54 = require("react");
function useRenderedCallback(callback, deps) {
  const manager = (0, import_react53.useDragDropManager)();
  return (0, import_react54.useCallback)(
    (...args) => __async(null, null, function* () {
      yield manager == null ? void 0 : manager.renderer.rendering;
      return callback(...args);
    }),
    [...deps, manager]
  );
}

// components/DropZone/lib/use-content-with-preview.ts
init_insert();
init_store();
var useContentIdsWithPreview = (contentIds, zoneCompound) => {
  const zoneStore = (0, import_react55.useContext)(ZoneStoreContext);
  const preview = useContextStore(
    ZoneStoreContext,
    (s) => s.previewIndex[zoneCompound]
  );
  const isDragging = useAppStore((s) => s.state.ui.isDragging);
  const [contentIdsWithPreview, setContentIdsWithPreview] = (0, import_react55.useState)(contentIds);
  const [localPreview, setLocalPreview] = (0, import_react55.useState)(
    preview
  );
  const updateContent = useRenderedCallback(
    (contentIds2, preview2, isDragging2, draggedItemId, previewExists) => {
      if (isDragging2 && !previewExists) {
        return;
      }
      if (preview2) {
        if (preview2.type === "insert") {
          setContentIdsWithPreview(
            insert(
              contentIds2.filter((id) => id !== preview2.props.id),
              preview2.index,
              preview2.props.id
            )
          );
        } else {
          setContentIdsWithPreview(
            insert(
              contentIds2.filter((id) => id !== preview2.props.id),
              preview2.index,
              preview2.props.id
            )
          );
        }
      } else {
        setContentIdsWithPreview(
          previewExists ? contentIds2.filter((id) => id !== draggedItemId) : contentIds2
        );
      }
      setLocalPreview(preview2);
    },
    []
  );
  (0, import_react55.useEffect)(() => {
    var _a;
    const s = zoneStore.getState();
    const draggedItemId = (_a = s.draggedItem) == null ? void 0 : _a.id;
    const previewExists = Object.keys(s.previewIndex || {}).length > 0;
    updateContent(
      contentIds,
      preview,
      isDragging,
      draggedItemId,
      previewExists
    );
  }, [contentIds, preview, isDragging]);
  return [contentIdsWithPreview, localPreview];
};

// components/DropZone/lib/use-drag-axis.ts
init_react_import();
var import_react56 = require("react");
init_store();
var GRID_DRAG_AXIS = "dynamic";
var FLEX_ROW_DRAG_AXIS = "x";
var DEFAULT_DRAG_AXIS = "y";
var useDragAxis = (ref, collisionAxis) => {
  const status = useAppStore((s) => s.status);
  const [dragAxis, setDragAxis] = (0, import_react56.useState)(
    collisionAxis || DEFAULT_DRAG_AXIS
  );
  const calculateDragAxis = (0, import_react56.useCallback)(() => {
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "grid") {
        setDragAxis(GRID_DRAG_AXIS);
      } else if (computedStyle.display === "flex" && computedStyle.flexDirection === "row") {
        setDragAxis(FLEX_ROW_DRAG_AXIS);
      } else {
        setDragAxis(DEFAULT_DRAG_AXIS);
      }
    }
  }, [ref.current]);
  (0, import_react56.useEffect)(() => {
    const onViewportChange = () => {
      calculateDragAxis();
    };
    window.addEventListener("viewportchange", onViewportChange);
    return () => {
      window.removeEventListener("viewportchange", onViewportChange);
    };
  }, []);
  (0, import_react56.useEffect)(calculateDragAxis, [status, collisionAxis]);
  return [dragAxis, calculateDragAxis];
};

// components/DropZone/index.tsx
var import_shallow6 = require("zustand/react/shallow");

// components/Render/index.tsx
init_react_import();
init_root_droppable_id();

// lib/use-slots.tsx
init_react_import();

// lib/field-transforms/use-field-transforms.tsx
init_react_import();
var import_react57 = require("react");
init_map_fields();

// lib/field-transforms/build-mappers.ts
init_react_import();
function buildMappers(transforms, readOnly, forceReadOnly) {
  return Object.keys(transforms).reduce((acc, _fieldType) => {
    const fieldType = _fieldType;
    return __spreadProps(__spreadValues({}, acc), {
      [fieldType]: (_a) => {
        var _b = _a, {
          parentId
        } = _b, params = __objRest(_b, [
          "parentId"
        ]);
        const wildcardPath = params.propPath.replace(/\[\d+\]/g, "[*]");
        const isReadOnly = (readOnly == null ? void 0 : readOnly[params.propPath]) || (readOnly == null ? void 0 : readOnly[wildcardPath]) || forceReadOnly || false;
        const fn = transforms[fieldType];
        return fn == null ? void 0 : fn(__spreadProps(__spreadValues({}, params), {
          isReadOnly,
          componentId: parentId
        }));
      }
    });
  }, {});
}

// lib/field-transforms/use-field-transforms.tsx
function useFieldTransforms(config, item, transforms, readOnly, forceReadOnly) {
  const mappers = (0, import_react57.useMemo)(
    () => buildMappers(transforms, readOnly, forceReadOnly),
    [transforms, readOnly, forceReadOnly]
  );
  const transformedProps = (0, import_react57.useMemo)(() => {
    return mapFields(item, mappers, config).props;
  }, [config, item, mappers]);
  const mergedProps = (0, import_react57.useMemo)(
    () => __spreadValues(__spreadValues({}, item.props), transformedProps),
    [item.props, transformedProps]
  );
  return mergedProps;
}

// lib/field-transforms/default-transforms/slot-transform.tsx
init_react_import();
var getSlotTransform = (renderSlotEdit, renderSlotRender = renderSlotEdit) => ({
  slot: ({ value: content, propName, field, isReadOnly }) => {
    const render = isReadOnly ? renderSlotRender : renderSlotEdit;
    const Slot = (dzProps) => render(__spreadProps(__spreadValues({
      allow: (field == null ? void 0 : field.type) === "slot" ? field.allow : [],
      disallow: (field == null ? void 0 : field.type) === "slot" ? field.disallow : []
    }, dzProps), {
      zone: propName,
      content
    }));
    return Slot;
  }
});

// lib/use-slots.tsx
function useSlots(config, item, renderSlotEdit, renderSlotRender = renderSlotEdit, readOnly, forceReadOnly) {
  return useFieldTransforms(
    config,
    item,
    getSlotTransform(renderSlotEdit, renderSlotRender),
    readOnly,
    forceReadOnly
  );
}

// components/Render/index.tsx
var import_react61 = __toESM(require("react"));

// components/SlotRender/index.tsx
init_react_import();
var import_shallow5 = require("zustand/react/shallow");
init_store();

// components/SlotRender/server.tsx
init_react_import();
var import_react60 = require("react");

// components/RichTextEditor/lib/use-richtext-props.tsx
init_react_import();
var import_react59 = require("react");

// components/RichTextEditor/components/RenderFallback.tsx
init_react_import();
init_get_class_name_factory();
init_styles_module6();
var import_jsx_runtime57 = require("react/jsx-runtime");
var getClassName22 = get_class_name_factory_default("RichTextEditor", styles_module_default12);
function RichTextRenderFallback({ content }) {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: getClassName22(), children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    "div",
    {
      className: "rich-text",
      dangerouslySetInnerHTML: { __html: content }
    }
  ) });
}

// components/RichTextEditor/lib/use-richtext-props.tsx
init_generate_id();

// components/RichTextEditor/lib/mapDeep.ts
init_react_import();
var mapDeep = (source, path, render) => {
  if (!source) {
    return null;
  }
  if (path.length === 0) {
    return render(source);
  }
  const [key, ...rest] = path;
  if (Array.isArray(source)) {
    return source.map((item) => mapDeep(item, path, render));
  }
  return __spreadProps(__spreadValues({}, source), {
    [key]: mapDeep(source[key], rest, render)
  });
};

// components/RichTextEditor/lib/use-richtext-props.tsx
var import_jsx_runtime59 = require("react/jsx-runtime");
function useRichtextProps(fields, props) {
  const findAllRichtextKeys = (fields2, path = []) => {
    if (!fields2) return [];
    const result = [];
    for (const [key, field] of Object.entries(fields2)) {
      const currentPath = [...path, key];
      if (field.type === "richtext") {
        result.push({
          path: currentPath,
          field
        });
      }
      if (field.type === "array" && "arrayFields" in field) {
        result.push(...findAllRichtextKeys(field.arrayFields, currentPath));
      }
      if (field.type === "object" && "objectFields" in field) {
        result.push(...findAllRichtextKeys(field.objectFields, currentPath));
      }
    }
    return result;
  };
  const richtextKeys = (0, import_react59.useMemo)(() => findAllRichtextKeys(fields), [fields]);
  const richtextProps = (0, import_react59.useMemo)(() => {
    if (!(richtextKeys == null ? void 0 : richtextKeys.length)) return {};
    const RichTextRender3 = (0, import_react59.lazy)(
      () => Promise.resolve().then(() => (init_Render(), Render_exports)).then((m) => ({
        default: m.RichTextRender
      }))
    );
    let result = __spreadValues({}, props);
    for (const { path, field } of richtextKeys) {
      result = mapDeep(result, path, (content) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
        import_react59.Suspense,
        {
          fallback: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(RichTextRenderFallback, { content }),
          children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(RichTextRender3, { content, field })
        },
        generateId()
      ));
    }
    return result;
  }, [richtextKeys, props, fields]);
  return richtextProps;
}

// components/SlotRender/server.tsx
var import_jsx_runtime60 = require("react/jsx-runtime");
var SlotRenderPure = (props) => /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(SlotRender, __spreadValues({}, props));
var Item2 = ({
  config,
  item,
  metadata
}) => {
  const Component = config.components[item.type];
  const props = useSlots(config, item, (slotProps) => /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(SlotRenderPure, __spreadProps(__spreadValues({}, slotProps), { config, metadata })));
  const richtextProps = useRichtextProps(Component.fields, props);
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
    Component.render,
    __spreadProps(__spreadValues(__spreadValues({}, props), richtextProps), {
      puck: __spreadProps(__spreadValues({}, props.puck), {
        metadata: metadata || {}
      })
    })
  );
};
var SlotRender = (0, import_react60.forwardRef)(
  function SlotRenderInternal({ className, style, content, config, metadata, as }, ref) {
    const El = as != null ? as : "div";
    return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(El, { className, style, ref, children: content.map((item) => {
      if (!config.components[item.type]) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
        Item2,
        {
          config,
          item,
          metadata
        },
        item.props.id
      );
    }) });
  }
);

// components/SlotRender/index.tsx
var import_jsx_runtime61 = require("react/jsx-runtime");
var ContextSlotRender = ({
  componentId,
  zone
}) => {
  const config = useAppStore((s) => s.config);
  const metadata = useAppStore((s) => s.metadata);
  const slotContent = useAppStore(
    (0, import_shallow5.useShallow)((s) => {
      var _a, _b;
      const indexes = s.state.indexes;
      const contentIds = (_b = (_a = indexes.zones[`${componentId}:${zone}`]) == null ? void 0 : _a.contentIds) != null ? _b : [];
      return contentIds.map((contentId) => indexes.nodes[contentId].flatData);
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
    SlotRenderPure,
    {
      content: slotContent,
      zone,
      config,
      metadata
    }
  );
};

// components/Render/index.tsx
var import_jsx_runtime62 = require("react/jsx-runtime");
var renderContext = import_react61.default.createContext({
  config: { components: {} },
  data: { root: {}, content: [] },
  metadata: {}
});
function Render({
  config,
  data,
  metadata = {}
}) {
  var _a, _b;
  const defaultedData = __spreadProps(__spreadValues({}, data), {
    root: data.root || {},
    content: data.content || []
  });
  const rootProps = "props" in defaultedData.root ? defaultedData.root.props : defaultedData.root;
  const title = (rootProps == null ? void 0 : rootProps.title) || "";
  const pageProps = __spreadProps(__spreadValues({}, rootProps), {
    puck: {
      renderDropZone: DropZonePure,
      isEditing: false,
      dragRef: null,
      metadata
    },
    title,
    editMode: false,
    id: "puck-root"
  });
  const propsWithSlots = useSlots(
    config,
    { type: "root", props: pageProps },
    (props) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(SlotRender, __spreadProps(__spreadValues({}, props), { config, metadata }))
  );
  const richtextProps = useRichtextProps((_a = config.root) == null ? void 0 : _a.fields, pageProps);
  const nextContextValue = (0, import_react61.useMemo)(
    () => ({
      mode: "render",
      depth: 0
    }),
    []
  );
  if ((_b = config.root) == null ? void 0 : _b.render) {
    return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(config.root.render, __spreadProps(__spreadValues(__spreadValues({}, propsWithSlots), richtextProps), { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(DropZoneRenderPure, { zone: rootZone }) })) }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(DropZoneRenderPure, { zone: rootZone }) }) });
}

// components/DropZone/index.tsx
init_flatten_node();

// lib/field-transforms/use-field-transforms-tracked.tsx
init_react_import();
var import_react62 = require("react");
init_map_fields();
function useFieldTransformsTracked(config, item, transforms, readOnly, forceReadOnly) {
  const prevProps = (0, import_react62.useRef)(null);
  const prevResult = (0, import_react62.useRef)(item.props);
  const mappers = (0, import_react62.useMemo)(
    () => buildMappers(transforms, readOnly, forceReadOnly),
    [transforms, readOnly, forceReadOnly]
  );
  const transformedProps = (0, import_react62.useMemo)(() => {
    var _a, _b, _c;
    const changedProps = {};
    const componentConfig = item.type === "root" ? config.root : (_a = config.components) == null ? void 0 : _a[item.type];
    let changeIncludesSlot = false;
    for (const fieldName in item.props) {
      const fieldType = (_c = (_b = componentConfig == null ? void 0 : componentConfig.fields) == null ? void 0 : _b[fieldName]) == null ? void 0 : _c.type;
      if (!prevProps.current || item.props[fieldName] !== prevProps.current[fieldName]) {
        changedProps[fieldName] = item.props[fieldName];
        if (fieldType === "slot") {
          changeIncludesSlot = true;
        }
      }
    }
    changedProps.id = item.props.id;
    prevProps.current = item.props;
    const mapped = mapFields(
      __spreadProps(__spreadValues({}, item), { props: changedProps }),
      mappers,
      config,
      false,
      changeIncludesSlot
    ).props;
    prevResult.current = __spreadValues(__spreadValues({}, prevResult.current), mapped);
    return prevResult.current;
  }, [config, item, mappers]);
  const mergedProps = (0, import_react62.useMemo)(
    () => __spreadValues(__spreadValues({}, item.props), transformedProps),
    [item.props, transformedProps]
  );
  return mergedProps;
}

// lib/field-transforms/default-transforms/inline-text-transform.tsx
init_react_import();

// components/InlineTextField/index.tsx
init_react_import();
var import_react63 = require("react");

// lib/overlay-portal/index.tsx
init_react_import();
var registerOverlayPortal = (el, opts = {}) => {
  if (!el) return;
  const { disableDrag = false, disableDragOnFocus = true } = opts;
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  el.addEventListener("mouseover", stopPropagation, {
    capture: true
  });
  const onFocus = () => {
    setTimeout(() => {
      el.addEventListener("pointerdown", stopPropagation, {
        capture: true
      });
    }, 200);
  };
  const onBlur = () => {
    el.removeEventListener("pointerdown", stopPropagation, {
      capture: true
    });
  };
  if (disableDrag) {
    el.addEventListener("pointerdown", stopPropagation, {
      capture: true
    });
  } else if (disableDragOnFocus) {
    el.addEventListener("focus", onFocus, { capture: true });
    el.addEventListener("blur", onBlur, { capture: true });
  }
  el.setAttribute("data-puck-overlay-portal", "true");
  return () => {
    el.removeEventListener("mouseover", stopPropagation, {
      capture: true
    });
    if (disableDrag) {
      el.removeEventListener("pointerdown", stopPropagation, {
        capture: true
      });
    } else if (disableDragOnFocus) {
      el.removeEventListener("focus", onFocus, { capture: true });
      el.removeEventListener("blur", onBlur, { capture: true });
    }
    el.removeAttribute("data-puck-overlay-portal");
  };
};

// components/InlineTextField/index.tsx
init_store();

// css-module:/Users/mariusmuller/puck/packages/core/components/InlineTextField/styles.module.css#css-module
init_react_import();
var styles_module_default17 = { "InlineTextField": "_InlineTextField_104qp_1" };

// components/InlineTextField/index.tsx
init_lib();

// lib/data/set-deep.ts
init_react_import();
function setDeep(node, path, newVal) {
  const parts = path.split(".");
  const newNode = __spreadValues({}, node);
  let cur = newNode;
  for (let i = 0; i < parts.length; i++) {
    const [prop, idxStr] = parts[i].replace("]", "").split("[");
    const isLast = i === parts.length - 1;
    if (idxStr !== void 0) {
      if (!Array.isArray(cur[prop])) {
        cur[prop] = [];
      }
      const idx = Number(idxStr);
      if (isLast) {
        cur[prop][idx] = newVal;
        continue;
      }
      if (cur[prop][idx] === void 0) cur[prop][idx] = {};
      cur = cur[prop][idx];
      continue;
    }
    if (isLast) {
      cur[prop] = newVal;
      continue;
    }
    if (cur[prop] === void 0) {
      cur[prop] = {};
    }
    cur = cur[prop];
  }
  return __spreadValues(__spreadValues({}, node), newNode);
}

// lib/get-selector-for-id.ts
init_react_import();
var getSelectorForId = (state, id) => {
  const node = state.indexes.nodes[id];
  if (!node) return;
  const zoneCompound = `${node.parentId}:${node.zone}`;
  const index = state.indexes.zones[zoneCompound].contentIds.indexOf(id);
  return { zone: zoneCompound, index };
};

// components/InlineTextField/index.tsx
init_root_droppable_id();
var import_jsx_runtime63 = require("react/jsx-runtime");
var getClassName24 = get_class_name_factory_default("InlineTextField", styles_module_default17);
var InlineTextFieldInternal = ({
  propPath,
  componentId,
  value,
  isReadOnly,
  opts = {}
}) => {
  var _a;
  const ref = (0, import_react63.useRef)(null);
  const appStoreApi = useAppStoreApi();
  const disableLineBreaks = (_a = opts.disableLineBreaks) != null ? _a : false;
  (0, import_react63.useEffect)(() => {
    const appStore = appStoreApi.getState();
    const data = appStore.state.indexes.nodes[componentId].data;
    const componentConfig = appStore.getComponentConfig(data.type);
    if (!componentConfig) {
      throw new Error(
        `InlineTextField Error: No config defined for ${data.type}`
      );
    }
    if (ref.current) {
      if (value !== ref.current.innerText) {
        ref.current.replaceChildren(value);
      }
      const cleanupPortal = registerOverlayPortal(ref.current);
      const handleInput = (e) => __async(null, null, function* () {
        var _a2;
        const appStore2 = appStoreApi.getState();
        const node = appStore2.state.indexes.nodes[componentId];
        const zoneCompound = `${node.parentId}:${node.zone}`;
        const index = (_a2 = appStore2.state.indexes.zones[zoneCompound]) == null ? void 0 : _a2.contentIds.indexOf(
          componentId
        );
        let value2 = e.target.innerText;
        if (disableLineBreaks) {
          value2 = value2.replaceAll(/\n/gm, "");
        }
        const newProps = setDeep(node.data.props, propPath, value2);
        const resolvedData = yield appStore2.resolveComponentData(
          __spreadProps(__spreadValues({}, node.data), { props: newProps }),
          "replace"
        );
        appStore2.dispatch({
          type: "replace",
          data: resolvedData.node,
          destinationIndex: index,
          destinationZone: zoneCompound
        });
      });
      ref.current.addEventListener("input", handleInput);
      return () => {
        var _a2;
        (_a2 = ref.current) == null ? void 0 : _a2.removeEventListener("input", handleInput);
        cleanupPortal == null ? void 0 : cleanupPortal();
      };
    }
  }, [appStoreApi, ref.current, value, disableLineBreaks]);
  const [isHovering, setIsHovering] = (0, import_react63.useState)(false);
  const [isFocused, setIsFocused] = (0, import_react63.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
    "span",
    {
      className: getClassName24(),
      ref,
      contentEditable: isHovering || isFocused ? "plaintext-only" : "false",
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      onClickCapture: (e) => {
        var _a2;
        e.preventDefault();
        e.stopPropagation();
        const s = appStoreApi.getState();
        const currentSelector = s.state.ui.itemSelector;
        if (currentSelector) {
          const zone = currentSelector.zone || rootDroppableId;
          const selectedId = (_a2 = s.state.indexes.zones[zone]) == null ? void 0 : _a2.contentIds[currentSelector.index];
          if (selectedId !== componentId) {
            s.setUi({ itemSelector: null });
            return;
          }
        }
        const itemSelector = getSelectorForId(s.state, componentId);
        s.setUi({ itemSelector });
      },
      onKeyDown: (e) => {
        e.stopPropagation();
        if (disableLineBreaks && e.key === "Enter" || isReadOnly) {
          e.preventDefault();
        }
      },
      onKeyUp: (e) => {
        e.stopPropagation();
        e.preventDefault();
      },
      onMouseOverCapture: () => setIsHovering(true),
      onMouseOutCapture: () => setIsHovering(false),
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false)
    }
  );
};
var InlineTextField = (0, import_react63.memo)(InlineTextFieldInternal);

// lib/field-transforms/default-transforms/inline-text-transform.tsx
var import_jsx_runtime64 = require("react/jsx-runtime");
var getInlineTextTransform = () => ({
  text: ({ value, componentId, field, propPath, isReadOnly }) => {
    if (field.contentEditable) {
      return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
        InlineTextField,
        {
          propPath,
          componentId,
          value,
          opts: { disableLineBreaks: true },
          isReadOnly
        }
      );
    }
    return value;
  },
  textarea: ({ value, componentId, field, propPath, isReadOnly }) => {
    if (field.contentEditable) {
      return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
        InlineTextField,
        {
          propPath,
          componentId,
          value,
          isReadOnly
        }
      );
    }
    return value;
  },
  custom: ({ value, componentId, field, propPath, isReadOnly }) => {
    if (field.contentEditable && typeof value === "string") {
      return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
        InlineTextField,
        {
          propPath,
          componentId,
          value,
          isReadOnly
        }
      );
    }
    return value;
  }
});

// lib/field-transforms/default-transforms/rich-text-transform.tsx
init_react_import();
init_store();
var import_react64 = require("react");
init_root_droppable_id();
var import_jsx_runtime65 = require("react/jsx-runtime");
var Editor3 = (0, import_react64.lazy)(
  () => Promise.resolve().then(() => (init_Editor(), Editor_exports)).then((m) => ({
    default: m.Editor
  }))
);
var RichTextRender2 = (0, import_react64.lazy)(
  () => Promise.resolve().then(() => (init_Render(), Render_exports)).then((m) => ({
    default: m.RichTextRender
  }))
);
var InlineEditorWrapper = (0, import_react64.memo)(
  ({
    value,
    componentId,
    propPath,
    field,
    id
  }) => {
    const portalRef = (0, import_react64.useRef)(null);
    const appStoreApi = useAppStoreApi();
    const onClickHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const onClickCaptureHandler = (e) => {
      var _a;
      e.preventDefault();
      e.stopPropagation();
      const s = appStoreApi.getState();
      const currentSelector = s.state.ui.itemSelector;
      if (currentSelector) {
        const zone = currentSelector.zone || rootDroppableId;
        const selectedId = (_a = s.state.indexes.zones[zone]) == null ? void 0 : _a.contentIds[currentSelector.index];
        if (selectedId !== componentId) {
          s.setUi({ itemSelector: null });
          return;
        }
      }
      const itemSelector = getSelectorForId(s.state, componentId);
      s.setUi({ itemSelector });
    };
    (0, import_react64.useEffect)(() => {
      if (!portalRef.current) return;
      const cleanup = registerOverlayPortal(portalRef.current, {
        disableDragOnFocus: true
      });
      return () => cleanup == null ? void 0 : cleanup();
    }, [portalRef.current]);
    const isEditorActiveButDeselected = useAppStore((s) => {
      var _a, _b;
      if (((_a = s.currentRichText) == null ? void 0 : _a.inlineComponentId) !== componentId) return false;
      const selector = s.state.ui.itemSelector;
      if (!selector) return true;
      const zone = selector.zone || rootDroppableId;
      const selectedId = (_b = s.state.indexes.zones[zone]) == null ? void 0 : _b.contentIds[selector.index];
      return selectedId !== componentId;
    });
    (0, import_react64.useEffect)(() => {
      if (!isEditorActiveButDeselected) return;
      const richText = appStoreApi.getState().currentRichText;
      if ((richText == null ? void 0 : richText.inlineComponentId) === componentId) {
        richText.editor.commands.blur();
        appStoreApi.setState({ currentRichText: null });
      }
    }, [isEditorActiveButDeselected, appStoreApi, componentId]);
    const handleChange = (0, import_react64.useCallback)(
      (content, ui) => __async(null, null, function* () {
        var _a;
        const appStore = appStoreApi.getState();
        const node = appStore.state.indexes.nodes[componentId];
        const zoneCompound = `${node.parentId}:${node.zone}`;
        const index = (_a = appStore.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.contentIds.indexOf(
          componentId
        );
        const newProps = setDeep(node.data.props, propPath, content);
        const resolvedData = yield appStore.resolveComponentData(
          __spreadProps(__spreadValues({}, node.data), { props: newProps }),
          "replace"
        );
        appStore.dispatch({
          type: "replace",
          data: resolvedData.node,
          destinationIndex: index,
          destinationZone: zoneCompound,
          ui
        });
      }),
      [appStoreApi, componentId, propPath]
    );
    const handleFocus = (0, import_react64.useCallback)(
      (editor) => {
        appStoreApi.setState({
          currentRichText: {
            inlineComponentId: componentId,
            inline: true,
            field,
            editor,
            id
          }
        });
      },
      [field, componentId]
    );
    if (!field.contentEditable)
      return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react64.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(RichTextRenderFallback, { content: value }), children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(RichTextRender2, { content: value, field }) });
    const editorProps = {
      content: value,
      onChange: handleChange,
      field,
      inline: true,
      onFocus: handleFocus,
      id,
      name: propPath
    };
    return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
      "div",
      {
        ref: portalRef,
        onClick: onClickHandler,
        onClickCapture: onClickCaptureHandler,
        children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react64.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(EditorFallback, __spreadValues({}, editorProps)), children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Editor3, __spreadValues({}, editorProps)) })
      }
    );
  }
);
InlineEditorWrapper.displayName = "InlineEditorWrapper";
var getRichTextTransform = () => ({
  richtext: ({ value, componentId, field, propPath, isReadOnly }) => {
    const { contentEditable = true, tiptap } = field;
    if (contentEditable === false || isReadOnly) {
      return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(RichTextRender2, { content: value, field });
    }
    const id = `${componentId}_${field.type}_${propPath}`;
    return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
      InlineEditorWrapper,
      {
        value,
        componentId,
        propPath,
        field,
        id
      },
      id
    );
  }
});

// components/MemoizeComponent/index.tsx
init_react_import();
var import_fast_equals3 = require("fast-equals");
var import_react65 = require("react");

// lib/shallow-equal.ts
init_react_import();
function shallowEqual(obj1, obj2, keysToIgnore = []) {
  if (Object.is(obj1, obj2)) return true;
  if (typeof obj1 !== "object" || obj1 === null || typeof obj2 !== "object" || obj2 === null) {
    return false;
  }
  if (Object.getPrototypeOf(obj1) !== Object.getPrototypeOf(obj2)) {
    return false;
  }
  const ignore = new Set(keysToIgnore);
  const keys1 = Object.keys(obj1).filter((k) => !ignore.has(k));
  const keys2 = Object.keys(obj2).filter((k) => !ignore.has(k));
  if (keys1.length !== keys2.length) return false;
  for (let i = 0; i < keys1.length; i++) {
    const currKey = keys1[i];
    if (!Object.prototype.hasOwnProperty.call(obj2, currKey)) return false;
    const val1 = obj1[currKey];
    const val2 = obj2[currKey];
    if (!Object.is(val1, val2)) return false;
  }
  return true;
}

// components/MemoizeComponent/index.tsx
var import_jsx_runtime66 = require("react/jsx-runtime");
var RenderComponent = ({
  Component,
  componentProps: renderProps
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Component, __spreadValues({}, renderProps));
};
var MemoizeComponent = (0, import_react65.memo)(RenderComponent, (prev, next) => {
  let puckEquals = true;
  if ("puck" in prev.componentProps && "puck" in next.componentProps) {
    puckEquals = (0, import_fast_equals3.deepEqual)(prev.componentProps.puck, next.componentProps.puck);
  }
  return prev.Component === next.Component && shallowEqual(prev.componentProps, next.componentProps, ["puck"]) && puckEquals;
});

// components/DropZone/index.tsx
var import_jsx_runtime67 = (
  // Safe to use this since the HTML is set by the user
  require("react/jsx-runtime")
);
var getClassName25 = get_class_name_factory_default("DropZone", styles_module_default16);
var getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
var RENDER_DEBUG = false;
var InsertPreview = ({
  element,
  label,
  override
}) => {
  if (element) {
    return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("div", { dangerouslySetInnerHTML: { __html: element.outerHTML } });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(DrawerItemInner, { name: label, children: override });
};
var DropZoneEditPure = (props) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(DropZoneEdit, __spreadValues({}, props));
var DropZoneChild = ({
  zoneCompound,
  componentId,
  index,
  dragAxis,
  collisionAxis,
  inDroppableZone
}) => {
  var _a, _b;
  const metadata = useAppStore((s) => s.metadata);
  const ctx = (0, import_react66.useContext)(dropZoneContext);
  const { depth = 1 } = ctx != null ? ctx : {};
  const zoneStore = (0, import_react66.useContext)(ZoneStoreContext);
  const nodeProps = useAppStore(
    (0, import_shallow6.useShallow)((s) => {
      var _a2;
      return (_a2 = s.state.indexes.nodes[componentId]) == null ? void 0 : _a2.flatData.props;
    })
  );
  const nodeType = useAppStore(
    (s) => {
      var _a2;
      return (_a2 = s.state.indexes.nodes[componentId]) == null ? void 0 : _a2.data.type;
    }
  );
  const nodeReadOnly = useAppStore(
    (0, import_shallow6.useShallow)((s) => {
      var _a2;
      return (_a2 = s.state.indexes.nodes[componentId]) == null ? void 0 : _a2.data.readOnly;
    })
  );
  const appStore = useAppStoreApi();
  const item = (0, import_react66.useMemo)(() => {
    if (nodeProps) {
      const expanded = expandNode({
        type: nodeType,
        props: nodeProps
      });
      return expanded;
    }
    const preview = zoneStore.getState().previewIndex[zoneCompound];
    if (componentId === (preview == null ? void 0 : preview.props.id)) {
      return {
        type: preview.componentType,
        props: preview.props,
        previewType: preview.type,
        element: preview.element
      };
    }
    return null;
  }, [appStore, componentId, zoneCompound, nodeType, nodeProps]);
  const componentConfig = useAppStore(
    (s) => (item == null ? void 0 : item.type) ? s.config.components[item.type] : null
  );
  const puckProps = (0, import_react66.useMemo)(
    () => ({
      renderDropZone: DropZoneEditPure,
      isEditing: true,
      dragRef: null,
      metadata: __spreadValues(__spreadValues({}, metadata), componentConfig == null ? void 0 : componentConfig.metadata)
    }),
    [metadata, componentConfig == null ? void 0 : componentConfig.metadata]
  );
  const overrides = useAppStore((s) => s.overrides);
  const isLoading = useAppStore(
    (s) => {
      var _a2;
      return ((_a2 = s.componentState[componentId]) == null ? void 0 : _a2.loadingCount) > 0;
    }
  );
  const isSelected = useAppStore(
    (s) => {
      var _a2;
      return ((_a2 = s.selectedItem) == null ? void 0 : _a2.props.id) === componentId || false;
    }
  );
  let label = (_b = (_a = componentConfig == null ? void 0 : componentConfig.label) != null ? _a : item == null ? void 0 : item.type.toString()) != null ? _b : "Component";
  const defaultsProps = (0, import_react66.useMemo)(
    () => __spreadProps(__spreadValues(__spreadValues({}, componentConfig == null ? void 0 : componentConfig.defaultProps), item == null ? void 0 : item.props), {
      puck: puckProps,
      editMode: true
      // DEPRECATED
    }),
    [componentConfig == null ? void 0 : componentConfig.defaultProps, item == null ? void 0 : item.props, puckProps]
  );
  const defaultedNode = (0, import_react66.useMemo)(
    () => {
      var _a2;
      return { type: (_a2 = item == null ? void 0 : item.type) != null ? _a2 : nodeType, props: defaultsProps };
    },
    [item == null ? void 0 : item.type, nodeType, defaultsProps]
  );
  const config = useAppStore((s) => s.config);
  const plugins = useAppStore((s) => s.plugins);
  const userFieldTransforms = useAppStore((s) => s.fieldTransforms);
  const combinedFieldTransforms = (0, import_react66.useMemo)(
    () => __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, getSlotTransform(DropZoneEditPure, (slotProps) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(ContextSlotRender, { componentId, zone: slotProps.zone }))), getInlineTextTransform()), getRichTextTransform()), plugins.reduce(
      (acc, plugin) => __spreadValues(__spreadValues({}, acc), plugin.fieldTransforms),
      {}
    )), userFieldTransforms),
    [plugins, userFieldTransforms]
  );
  const transformedProps = useFieldTransformsTracked(
    config,
    defaultedNode,
    combinedFieldTransforms,
    nodeReadOnly,
    isLoading
  );
  if (!item) return;
  const Render2 = componentConfig ? componentConfig.render : () => /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { style: { padding: 48, textAlign: "center" }, children: [
    "No configuration for ",
    item.type
  ] });
  let componentType = item.type;
  const isInserting = "previewType" in item ? item.previewType === "insert" : false;
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
    DraggableComponent,
    {
      id: componentId,
      componentType,
      zoneCompound,
      depth: depth + 1,
      index,
      isLoading,
      isSelected,
      label,
      autoDragAxis: dragAxis,
      userDragAxis: collisionAxis,
      inDroppableZone,
      children: (dragRef) => {
        var _a2;
        if ((componentConfig == null ? void 0 : componentConfig.inline) && !isInserting) {
          return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
            MemoizeComponent,
            {
              Component: Render2,
              componentProps: __spreadProps(__spreadValues({}, transformedProps), {
                puck: __spreadProps(__spreadValues({}, transformedProps.puck), { dragRef })
              })
            }
          );
        }
        return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("div", { ref: dragRef, children: isInserting ? /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          InsertPreview,
          {
            label,
            override: (_a2 = overrides.componentItem) != null ? _a2 : overrides.drawerItem,
            element: "element" in item && item.element ? item.element : void 0
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          MemoizeComponent,
          {
            Component: Render2,
            componentProps: transformedProps
          }
        ) });
      }
    }
  );
};
var DropZoneChildMemo = (0, import_react66.memo)(DropZoneChild);
var DropZoneEdit = (0, import_react66.forwardRef)(
  function DropZoneEditInternal({
    zone,
    allow,
    disallow,
    style,
    className,
    minEmptyHeight: userMinEmptyHeight = "128px",
    collisionAxis,
    as
  }, userRef) {
    const ctx = (0, import_react66.useContext)(dropZoneContext);
    const appStoreApi = useAppStoreApi();
    const {
      // These all need setting via context
      areaId,
      depth = 0,
      registerLocalZone,
      unregisterLocalZone
    } = ctx != null ? ctx : {};
    const path = useAppStore(
      (0, import_shallow6.useShallow)((s) => {
        var _a;
        return areaId ? (_a = s.state.indexes.nodes[areaId]) == null ? void 0 : _a.path : null;
      })
    );
    let zoneCompound = rootDroppableId;
    if (areaId) {
      if (zone !== rootDroppableId) {
        zoneCompound = `${areaId}:${zone}`;
      }
    }
    const isRootZone = zoneCompound === rootDroppableId || zone === rootDroppableId || areaId === "root";
    const inNextDeepestArea = useContextStore(
      ZoneStoreContext,
      (s) => s.nextAreaDepthIndex[areaId || ""]
    );
    const zoneContentIds = useAppStore(
      (0, import_shallow6.useShallow)((s) => {
        var _a;
        return (_a = s.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.contentIds;
      })
    );
    const zoneType = useAppStore(
      (0, import_shallow6.useShallow)((s) => {
        var _a;
        return (_a = s.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.type;
      })
    );
    (0, import_react66.useEffect)(() => {
      if (!zoneType || zoneType === "dropzone") {
        if (ctx == null ? void 0 : ctx.registerZone) {
          ctx == null ? void 0 : ctx.registerZone(zoneCompound);
        }
      }
    }, [zoneType, appStoreApi]);
    (0, import_react66.useEffect)(() => {
      if (zoneType === "dropzone") {
        if (zoneCompound !== rootDroppableId) {
          console.warn(
            "DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots"
          );
        }
      }
    }, [zoneType]);
    const contentIds = (0, import_react66.useMemo)(() => {
      return zoneContentIds || [];
    }, [zoneContentIds]);
    const ref = (0, import_react66.useRef)(null);
    const acceptsTarget = (0, import_react66.useCallback)(
      (componentType) => {
        if (!componentType) {
          return true;
        }
        if (disallow) {
          const defaultedAllow = allow || [];
          const filteredDisallow = (disallow || []).filter(
            (item) => defaultedAllow.indexOf(item) === -1
          );
          if (filteredDisallow.indexOf(componentType) !== -1) {
            return false;
          }
        } else if (allow) {
          if (allow.indexOf(componentType) === -1) {
            return false;
          }
        }
        return true;
      },
      [allow, disallow]
    );
    const targetAccepted = useContextStore(ZoneStoreContext, (s) => {
      var _a;
      const draggedComponentType = (_a = s.draggedItem) == null ? void 0 : _a.data.componentType;
      return acceptsTarget(draggedComponentType);
    });
    const hoveringOverArea = inNextDeepestArea || isRootZone;
    const isEnabled = useContextStore(ZoneStoreContext, (s) => {
      var _a;
      let _isEnabled = true;
      const isDeepestZone = (_a = s.zoneDepthIndex[zoneCompound]) != null ? _a : false;
      _isEnabled = isDeepestZone;
      if (_isEnabled) {
        _isEnabled = targetAccepted;
      }
      return _isEnabled;
    });
    (0, import_react66.useEffect)(() => {
      if (registerLocalZone) {
        registerLocalZone(zoneCompound, targetAccepted || isEnabled);
      }
      return () => {
        if (unregisterLocalZone) {
          unregisterLocalZone(zoneCompound);
        }
      };
    }, [targetAccepted, isEnabled, zoneCompound]);
    const [contentIdsWithPreview, preview] = useContentIdsWithPreview(
      contentIds,
      zoneCompound
    );
    const isDropEnabled = isEnabled && (preview ? contentIdsWithPreview.length === 1 : contentIdsWithPreview.length === 0);
    const zoneStore = (0, import_react66.useContext)(ZoneStoreContext);
    (0, import_react66.useEffect)(() => {
      const { enabledIndex } = zoneStore.getState();
      zoneStore.setState({
        enabledIndex: __spreadProps(__spreadValues({}, enabledIndex), { [zoneCompound]: isEnabled })
      });
    }, [isEnabled, zoneStore, zoneCompound]);
    const droppableConfig = {
      id: zoneCompound,
      collisionPriority: isEnabled ? depth : 0,
      disabled: !isDropEnabled,
      collisionDetector: pointerIntersection,
      type: "dropzone",
      data: {
        areaId,
        depth,
        isDroppableTarget: targetAccepted,
        path: path || []
      }
    };
    const { ref: dropRef } = (0, import_react67.useDroppable)(droppableConfig);
    const isAreaSelected = useAppStore(
      (s) => (s == null ? void 0 : s.selectedItem) && areaId === (s == null ? void 0 : s.selectedItem.props.id)
    );
    const [dragAxis] = useDragAxis(ref, collisionAxis);
    const [minEmptyHeight, isAnimating] = useMinEmptyHeight({
      zoneCompound,
      userMinEmptyHeight,
      ref
    });
    const setRefs = (0, import_react66.useCallback)(
      (node) => {
        assignRefs([ref, dropRef, userRef], node);
      },
      [dropRef]
    );
    const El = as != null ? as : "div";
    return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
      El,
      {
        className: `${getClassName25({
          isRootZone,
          hoveringOverArea,
          isEnabled,
          isAreaSelected,
          hasChildren: contentIds.length > 0,
          isAnimating
        })}${className ? ` ${className}` : ""}`,
        ref: setRefs,
        "data-testid": `dropzone:${zoneCompound}`,
        "data-puck-dropzone": zoneCompound,
        style: __spreadProps(__spreadValues({}, style), {
          "--min-empty-height": minEmptyHeight,
          backgroundColor: RENDER_DEBUG ? getRandomColor() : style == null ? void 0 : style.backgroundColor
        }),
        children: contentIdsWithPreview.map((componentId, i) => {
          return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
            DropZoneChildMemo,
            {
              zoneCompound,
              componentId,
              dragAxis,
              index: i,
              collisionAxis,
              inDroppableZone: targetAccepted
            },
            componentId
          );
        })
      }
    );
  }
);
var DropZoneRenderItem = ({
  config,
  item,
  metadata
}) => {
  const Component = config.components[item.type];
  const props = useSlots(config, item, (slotProps) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(SlotRenderPure, __spreadProps(__spreadValues({}, slotProps), { config, metadata })));
  const nextContextValue = (0, import_react66.useMemo)(
    () => ({
      areaId: props.id,
      depth: 1
    }),
    [props]
  );
  const richtextProps = useRichtextProps(Component.fields, props);
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
    Component.render,
    __spreadProps(__spreadValues(__spreadValues({}, props), richtextProps), {
      puck: __spreadProps(__spreadValues({}, props.puck), {
        renderDropZone: DropZoneRenderPure,
        metadata: __spreadValues(__spreadValues({}, metadata), Component.metadata)
      })
    })
  ) }, props.id);
};
var DropZoneRenderPure = (props) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(DropZoneRender, __spreadValues({}, props));
var DropZoneRender = (0, import_react66.forwardRef)(
  function DropZoneRenderInternal({ className, style, zone, as }, ref) {
    const ctx = (0, import_react66.useContext)(dropZoneContext);
    const { areaId = "root" } = ctx || {};
    const { config, data, metadata } = (0, import_react66.useContext)(renderContext);
    let zoneCompound = `${areaId}:${zone}`;
    let content = (data == null ? void 0 : data.content) || [];
    (0, import_react66.useEffect)(() => {
      if (!content) {
        if (ctx == null ? void 0 : ctx.registerZone) {
          ctx == null ? void 0 : ctx.registerZone(zoneCompound);
        }
      }
    }, [content]);
    const El = as != null ? as : "div";
    if (!data || !config) {
      return null;
    }
    if (zoneCompound !== rootDroppableId) {
      content = setupZone(data, zoneCompound).zones[zoneCompound];
    }
    return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(El, { className, style, ref, children: content.map((item) => {
      const Component = config.components[item.type];
      if (Component) {
        return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          DropZoneRenderItem,
          {
            config,
            item,
            metadata
          },
          item.props.id
        );
      }
      return null;
    }) });
  }
);
var DropZonePure = (props) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(DropZone, __spreadValues({}, props));
var DropZone = (0, import_react66.forwardRef)(
  function DropZone2(props, ref) {
    const ctx = (0, import_react66.useContext)(dropZoneContext);
    if ((ctx == null ? void 0 : ctx.mode) === "edit") {
      return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_jsx_runtime67.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(DropZoneEdit, __spreadProps(__spreadValues({}, props), { ref })) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_jsx_runtime67.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(DropZoneRender, __spreadProps(__spreadValues({}, props), { ref })) });
  }
);

// components/DragDropContext/index.tsx
init_get_item();

// lib/dnd/NestedDroppablePlugin.ts
init_react_import();
var import_abstract9 = require("@dnd-kit/abstract");

// lib/throttle.ts
init_react_import();
function timeout2(callback, duration) {
  const id = setTimeout(callback, duration);
  return () => clearTimeout(id);
}
function throttle(func, limit) {
  const time = () => performance.now();
  let cancel;
  let lastRan = 0;
  return function(...args) {
    const now = time();
    const context = this;
    if (now - lastRan >= limit) {
      func.apply(context, args);
      lastRan = now;
    } else {
      cancel == null ? void 0 : cancel();
      cancel = timeout2(() => {
        func.apply(context, args);
        lastRan = time();
      }, limit - (now - lastRan));
    }
  };
}

// lib/get-frame.ts
init_react_import();
var getFrame = () => {
  if (typeof window === "undefined") return;
  let frameEl = document.querySelector("#preview-frame");
  if ((frameEl == null ? void 0 : frameEl.tagName) === "IFRAME") {
    return frameEl.contentDocument || document;
  }
  return (frameEl == null ? void 0 : frameEl.ownerDocument) || document;
};

// lib/global-position.ts
init_react_import();
var GlobalPosition = class {
  constructor(target, original) {
    this.scaleFactor = 1;
    this.frameEl = null;
    this.frameRect = null;
    var _a;
    this.target = target;
    this.original = original;
    this.frameEl = document.querySelector("iframe#preview-frame");
    if (this.frameEl) {
      this.frameRect = this.frameEl.getBoundingClientRect();
      this.scaleFactor = this.frameRect.width / (((_a = this.frameEl.contentWindow) == null ? void 0 : _a.innerWidth) || 1);
    }
  }
  get x() {
    return this.original.x;
  }
  get y() {
    return this.original.y;
  }
  get global() {
    if (document !== this.target.ownerDocument && this.frameRect) {
      return {
        x: this.x * this.scaleFactor + this.frameRect.left,
        y: this.y * this.scaleFactor + this.frameRect.top
      };
    }
    return this.original;
  }
  get frame() {
    if (document === this.target.ownerDocument && this.frameRect) {
      return {
        x: (this.x - this.frameRect.left) / this.scaleFactor,
        y: (this.y - this.frameRect.top) / this.scaleFactor
      };
    }
    return this.original;
  }
};

// lib/bubble-pointer-event.ts
init_react_import();
var BaseEvent = typeof PointerEvent !== "undefined" ? PointerEvent : Event;
var BubbledPointerEvent = class extends BaseEvent {
  constructor(type, data) {
    super(type, data);
    this._originalTarget = null;
    this.originalTarget = data.originalTarget;
  }
  // Necessary for Firefox
  set originalTarget(target) {
    this._originalTarget = target;
  }
  // Necessary for Firefox
  get originalTarget() {
    return this._originalTarget;
  }
};

// lib/dnd/NestedDroppablePlugin.ts
init_root_droppable_id();
var depthSort = (candidates) => {
  return candidates.sort((a, b) => {
    const aData = a.data;
    const bData = b.data;
    if (aData.depth > bData.depth) {
      return 1;
    }
    if (bData.depth > aData.depth) {
      return -1;
    }
    return 0;
  });
};
var getZoneId2 = (candidate) => {
  let id = candidate == null ? void 0 : candidate.id;
  if (!candidate) return null;
  if (candidate.type === "component") {
    const data = candidate.data;
    if (data.containsActiveZone) {
      id = null;
    } else {
      id = data.zone;
    }
  } else if (candidate.type === "void") {
    return "void";
  }
  return id;
};
var BUFFER = 6;
var getPointerCollisions = (position, manager) => {
  const candidates = [];
  let elements = position.target.ownerDocument.elementsFromPoint(
    position.x,
    position.y
  );
  const previewFrame = elements.find(
    (el) => el.getAttribute("data-puck-preview")
  );
  const drawer = elements.find((el) => el.getAttribute("data-puck-drawer"));
  if (drawer) {
    elements = [drawer];
  }
  if (previewFrame) {
    const frame = getFrame();
    if (frame) {
      elements = frame.elementsFromPoint(position.frame.x, position.frame.y);
    }
  }
  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const dropzoneId = element.getAttribute("data-puck-dropzone");
      const id = element.getAttribute("data-puck-dnd");
      const isVoid = element.hasAttribute("data-puck-dnd-void");
      if (BUFFER && (dropzoneId || id) && !isVoid) {
        const box = element.getBoundingClientRect();
        const contractedBox = {
          left: box.left + BUFFER,
          right: box.right - BUFFER,
          top: box.top + BUFFER,
          bottom: box.bottom - BUFFER
        };
        if (position.frame.x < contractedBox.left || position.frame.x > contractedBox.right || position.frame.y > contractedBox.bottom || position.frame.y < contractedBox.top) {
          continue;
        }
      }
      if (dropzoneId) {
        const droppable = manager.registry.droppables.get(dropzoneId);
        if (droppable) {
          candidates.push(droppable);
        }
      }
      if (id) {
        const droppable = manager.registry.droppables.get(id);
        if (droppable) {
          candidates.push(droppable);
        }
      }
    }
  }
  return candidates;
};
var findDeepestCandidate = (position, manager) => {
  var _a;
  const candidates = getPointerCollisions(position, manager);
  if (candidates.length > 0) {
    const sortedCandidates = depthSort(candidates);
    const draggable = manager.dragOperation.source;
    const draggedCandidateIndex = sortedCandidates.findIndex(
      (candidate) => candidate.id === (draggable == null ? void 0 : draggable.id)
    );
    const draggedCandidateId = draggable == null ? void 0 : draggable.id;
    let filteredCandidates = [...sortedCandidates];
    if (draggedCandidateId && draggedCandidateIndex > -1) {
      filteredCandidates.splice(draggedCandidateIndex, 1);
    }
    filteredCandidates = filteredCandidates.filter((candidate) => {
      const candidateData = candidate.data;
      if (draggedCandidateId && draggedCandidateIndex > -1) {
        if (candidateData.path.indexOf(draggedCandidateId) > -1) {
          return false;
        }
      }
      if (candidate.type === "dropzone") {
        const candidateData2 = candidate.data;
        if (!candidateData2.isDroppableTarget) {
          return false;
        }
        if (candidateData2.areaId === draggedCandidateId) {
          return false;
        }
      } else if (candidate.type === "component") {
        const candidateData2 = candidate.data;
        if (!candidateData2.inDroppableZone) {
          return false;
        }
      }
      return true;
    });
    filteredCandidates.reverse();
    const primaryCandidate = filteredCandidates[0];
    if (!primaryCandidate) return { zone: null, area: null };
    const primaryCandidateData = primaryCandidate.data;
    const primaryCandidateIsComponent = "containsActiveZone" in primaryCandidateData;
    const zone = getZoneId2(primaryCandidate);
    const area = primaryCandidateIsComponent && primaryCandidateData.containsActiveZone ? filteredCandidates[0].id : (_a = filteredCandidates[0]) == null ? void 0 : _a.data.areaId;
    return { zone, area };
  }
  return {
    zone: rootDroppableId,
    area: rootAreaId
  };
};
var createNestedDroppablePlugin = ({ onChange }, id) => class NestedDroppablePlugin extends import_abstract9.Plugin {
  constructor(manager, options) {
    super(manager);
    if (typeof window === "undefined") {
      return;
    }
    this.registerEffect(() => {
      const handleMove = (event) => {
        const target = event instanceof BubbledPointerEvent ? event.originalTarget || event.target : event.target;
        const position = new GlobalPosition(target, {
          x: event.clientX,
          y: event.clientY
        });
        const elements = document.elementsFromPoint(
          position.global.x,
          position.global.y
        );
        const overEl = elements.some((el) => el.id === id);
        if (overEl) {
          onChange(findDeepestCandidate(position, manager), manager);
        }
      };
      const handleMoveThrottled = throttle(handleMove, 50);
      const handlePointerMove = (event) => {
        handleMoveThrottled(event);
      };
      document.body.addEventListener("pointermove", handlePointerMove, {
        capture: true
        // dndkit's PointerSensor prevents propagation during drag
      });
      const cleanup = () => {
        document.body.removeEventListener("pointermove", handlePointerMove, {
          capture: true
        });
      };
      return cleanup;
    });
  }
};

// lib/insert-component.ts
init_react_import();
init_insert2();
init_generate_id();
init_get_item();
var insertComponent = (componentType, zone, index, appStore) => __async(null, null, function* () {
  const { getState } = appStore;
  const id = generateId(componentType);
  const insertActionData = {
    type: "insert",
    componentType,
    destinationIndex: index,
    destinationZone: zone,
    id
  };
  const stateBefore = getState().state;
  const insertedState = insertAction(stateBefore, insertActionData, getState());
  const dispatch = getState().dispatch;
  dispatch(__spreadProps(__spreadValues({}, insertActionData), {
    // Dispatch insert rather set, as user's may rely on this via onAction
    // We must always record history here so the insert is added to user history
    // If the user has defined a resolveData method, they will end up with 2 history
    // entries on insert - one for the initial insert, and one when the data resolves
    recordHistory: true
  }));
  const itemSelector = { index, zone };
  dispatch({ type: "setUi", ui: { itemSelector } });
  const itemData = getItem(itemSelector, insertedState);
  if (!itemData) return;
  const resolveComponentData2 = getState().resolveComponentData;
  const resolved = yield resolveComponentData2(itemData, "insert");
  if (!resolved.didChange) return;
  const latestItemSelector = getSelectorForId(getState().state, id);
  if (!latestItemSelector) return;
  dispatch({
    type: "replace",
    destinationZone: latestItemSelector.zone,
    destinationIndex: latestItemSelector.index,
    data: resolved.node
  });
});

// lib/move-component.ts
init_react_import();
init_root_droppable_id();
var moveComponent = (id, sourceSelector, destinationSelector, appStore) => __async(null, null, function* () {
  var _a, _b, _c, _d;
  const dispatch = appStore.getState().dispatch;
  dispatch({
    type: "move",
    sourceIndex: sourceSelector.index,
    sourceZone: (_a = sourceSelector.zone) != null ? _a : rootDroppableId,
    destinationIndex: destinationSelector.index,
    destinationZone: (_b = destinationSelector.zone) != null ? _b : rootDroppableId,
    recordHistory: false
  });
  const componentData = (_c = appStore.getState().state.indexes.nodes[id]) == null ? void 0 : _c.data;
  if (!componentData) return;
  const resolveComponentData2 = appStore.getState().resolveComponentData;
  const resolvedData = yield resolveComponentData2(componentData, "move");
  const latestItemSelector = getSelectorForId(
    appStore.getState().state,
    componentData.props.id
  );
  if (!latestItemSelector) return;
  if (resolvedData.didChange)
    dispatch({
      type: "replace",
      data: resolvedData.node,
      destinationIndex: latestItemSelector.index,
      destinationZone: (_d = latestItemSelector.zone) != null ? _d : rootDroppableId
    });
});

// components/DragDropContext/index.tsx
var import_use_debounce2 = require("use-debounce");
init_generate_id();
var import_zustand6 = require("zustand");

// lib/get-deep-dir.ts
init_react_import();
function getDeepDir(el) {
  function findDir(node) {
    if (!node) return "ltr";
    const d = node.getAttribute("dir");
    return d || findDir(node.parentElement);
  }
  return el ? findDir(el) : "ltr";
}

// components/DragDropContext/index.tsx
var import_state = require("@dnd-kit/state");
var import_jsx_runtime68 = require("react/jsx-runtime");
var DEBUG3 = false;
var dragListenerContext = (0, import_react69.createContext)({
  dragListeners: {}
});
function useDragListener(type, fn, deps = []) {
  const { setDragListeners } = (0, import_react69.useContext)(dragListenerContext);
  (0, import_react69.useEffect)(() => {
    if (setDragListeners) {
      setDragListeners((old) => __spreadProps(__spreadValues({}, old), {
        [type]: [...old[type] || [], fn]
      }));
    }
  }, deps);
}
var AREA_CHANGE_DEBOUNCE_MS = 100;
var useTempDisableFallback = (timeout3) => {
  const lastFallbackDisable = (0, import_react69.useRef)(null);
  return (0, import_react69.useCallback)((manager) => {
    collisionStore.setState({ fallbackEnabled: false });
    const fallbackId = generateId();
    lastFallbackDisable.current = fallbackId;
    setTimeout(() => {
      if (lastFallbackDisable.current === fallbackId) {
        collisionStore.setState({ fallbackEnabled: true });
        manager.collisionObserver.forceUpdate(true);
      }
    }, timeout3);
  }, []);
};
var DragDropContextClient = ({
  children,
  disableAutoScroll
}) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const instanceId = useAppStore((s) => s.instanceId);
  const appStore = useAppStoreApi();
  const debouncedParamsRef = (0, import_react69.useRef)(null);
  const tempDisableFallback = useTempDisableFallback(100);
  const [zoneStore] = (0, import_react69.useState)(
    () => (0, import_zustand6.createStore)(() => ({
      zoneDepthIndex: {},
      nextZoneDepthIndex: {},
      areaDepthIndex: {},
      nextAreaDepthIndex: {},
      draggedItem: null,
      previewIndex: {},
      enabledIndex: {},
      hoveringComponent: null
    }))
  );
  const getChanged2 = (0, import_react69.useCallback)(
    (params) => {
      const { zoneDepthIndex = {}, areaDepthIndex = {} } = zoneStore.getState() || {};
      const stateHasZone = Object.keys(zoneDepthIndex).length > 0;
      const stateHasArea = Object.keys(areaDepthIndex).length > 0;
      let zoneChanged = false;
      let areaChanged = false;
      if (params.zone && !zoneDepthIndex[params.zone]) {
        zoneChanged = true;
      } else if (!params.zone && stateHasZone) {
        zoneChanged = true;
      }
      if (params.area && !areaDepthIndex[params.area]) {
        areaChanged = true;
      } else if (!params.area && stateHasArea) {
        areaChanged = true;
      }
      return { zoneChanged, areaChanged };
    },
    [zoneStore]
  );
  const setDeepestAndCollide = (0, import_react69.useCallback)(
    (params, manager) => {
      const { zoneChanged, areaChanged } = getChanged2(params);
      if (!zoneChanged && !areaChanged) return;
      zoneStore.setState({
        zoneDepthIndex: params.zone ? { [params.zone]: true } : {},
        areaDepthIndex: params.area ? { [params.area]: true } : {}
      });
      tempDisableFallback(manager);
      setTimeout(() => {
        manager.collisionObserver.forceUpdate(true);
      }, 50);
      debouncedParamsRef.current = null;
    },
    [zoneStore]
  );
  const setDeepestDb = (0, import_use_debounce2.useDebouncedCallback)(
    setDeepestAndCollide,
    AREA_CHANGE_DEBOUNCE_MS
  );
  const cancelDb = () => {
    setDeepestDb.cancel();
    debouncedParamsRef.current = null;
  };
  (0, import_react69.useEffect)(() => {
    if (DEBUG3) {
      zoneStore.subscribe(
        (s) => {
          var _a, _b;
          return console.log(
            s.previewIndex,
            (_a = Object.entries(s.zoneDepthIndex || {})[0]) == null ? void 0 : _a[0],
            (_b = Object.entries(s.areaDepthIndex || {})[0]) == null ? void 0 : _b[0]
          );
        }
      );
    }
  }, []);
  const [plugins] = (0, import_react69.useState)(() => [
    ...disableAutoScroll ? import_dom.defaultPreset.plugins.filter((plugin) => plugin !== import_dom.AutoScroller) : import_dom.defaultPreset.plugins,
    createNestedDroppablePlugin(
      {
        onChange: (params, manager) => {
          const state = zoneStore.getState();
          const { zoneChanged, areaChanged } = getChanged2(params);
          const isDragging = manager.dragOperation.status.dragging;
          if (areaChanged || zoneChanged) {
            let nextZoneDepthIndex = {};
            let nextAreaDepthIndex = {};
            if (params.zone) {
              nextZoneDepthIndex = { [params.zone]: true };
            }
            if (params.area) {
              nextAreaDepthIndex = { [params.area]: true };
            }
            zoneStore.setState({ nextZoneDepthIndex, nextAreaDepthIndex });
          }
          if (params.zone !== "void" && (state == null ? void 0 : state.zoneDepthIndex["void"])) {
            setDeepestAndCollide(params, manager);
            return;
          }
          if (areaChanged) {
            if (isDragging) {
              const debouncedParams = debouncedParamsRef.current;
              const isSameParams = debouncedParams && debouncedParams.area === params.area && debouncedParams.zone === params.zone;
              if (!isSameParams) {
                cancelDb();
                setDeepestDb(params, manager);
                debouncedParamsRef.current = params;
              }
            } else {
              cancelDb();
              setDeepestAndCollide(params, manager);
            }
            return;
          }
          if (zoneChanged) {
            setDeepestAndCollide(params, manager);
          }
          cancelDb();
        }
      },
      instanceId
    )
  ]);
  const sensors = useSensors();
  const [dragListeners, setDragListeners] = (0, import_react69.useState)({});
  const dragMode = (0, import_react69.useRef)(null);
  const initialSelector = (0, import_react69.useRef)(void 0);
  const nextContextValue = (0, import_react69.useMemo)(
    () => ({
      mode: "edit",
      areaId: "root",
      depth: 0
    }),
    []
  );
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
    dragListenerContext.Provider,
    {
      value: {
        dragListeners,
        setDragListeners
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
        import_react68.DragDropProvider,
        {
          plugins,
          sensors,
          onDragEnd: (event, manager) => {
            var _a, _b;
            const entryEl = (_a = getFrame()) == null ? void 0 : _a.querySelector("[data-puck-entry]");
            entryEl == null ? void 0 : entryEl.removeAttribute("data-puck-dragging");
            const { source, target } = event.operation;
            if (!source) {
              zoneStore.setState({ draggedItem: null });
              return;
            }
            const { zone, index } = source.data;
            const { previewIndex = {} } = zoneStore.getState() || {};
            const thisPreview = ((_b = previewIndex[zone]) == null ? void 0 : _b.props.id) === source.id ? previewIndex[zone] : null;
            const onAnimationEnd = () => {
              var _a2, _b2;
              zoneStore.setState({ draggedItem: null });
              if (event.canceled || (target == null ? void 0 : target.type) === "void") {
                zoneStore.setState({ previewIndex: {} });
                if (thisPreview) {
                  zoneStore.setState({ previewIndex: {} });
                  if (thisPreview.type === "insert") {
                    insertComponent(
                      thisPreview.componentType,
                      thisPreview.zone,
                      thisPreview.index,
                      appStore
                    );
                  } else if (initialSelector.current) {
                    moveComponent(
                      thisPreview.props.id,
                      initialSelector.current,
                      thisPreview,
                      appStore
                    );
                  }
                }
                dispatch({
                  type: "setUi",
                  ui: {
                    itemSelector: null,
                    isDragging: false
                  }
                });
                (_a2 = dragListeners.dragend) == null ? void 0 : _a2.forEach((fn) => {
                  fn(event, manager);
                });
                return;
              }
              if (thisPreview) {
                zoneStore.setState({ previewIndex: {} });
                if (thisPreview.type === "insert") {
                  insertComponent(
                    thisPreview.componentType,
                    thisPreview.zone,
                    thisPreview.index,
                    appStore
                  );
                } else if (initialSelector.current) {
                  dispatch({
                    type: "move",
                    sourceIndex: initialSelector.current.index,
                    sourceZone: initialSelector.current.zone,
                    destinationIndex: thisPreview.index,
                    destinationZone: thisPreview.zone,
                    recordHistory: false
                  });
                }
              }
              dispatch({
                type: "setUi",
                ui: {
                  itemSelector: { index, zone },
                  isDragging: false
                },
                recordHistory: true
              });
              (_b2 = dragListeners.dragend) == null ? void 0 : _b2.forEach((fn) => {
                fn(event, manager);
              });
            };
            let dispose;
            dispose = (0, import_state.effect)(() => {
              if (source.status === "idle") {
                onAnimationEnd();
                dispose == null ? void 0 : dispose();
              }
            });
          },
          onDragOver: (event, manager) => {
            var _a, _b, _c, _d;
            event.preventDefault();
            const draggedItem = (_a = zoneStore.getState()) == null ? void 0 : _a.draggedItem;
            if (!draggedItem) return;
            cancelDb();
            const { source, target } = event.operation;
            if (!target || !source || target.type === "void") return;
            const [sourceId] = source.id.split(":");
            const [targetId] = target.id.split(":");
            const sourceData = source.data;
            let sourceZone = sourceData.zone;
            let sourceIndex = sourceData.index;
            let targetZone = "";
            let targetIndex = 0;
            if (target.type === "component") {
              const targetData = target.data;
              targetZone = targetData.zone;
              targetIndex = targetData.index;
              const collisionData = (_b = manager.collisionObserver.collisions[0]) == null ? void 0 : _b.data;
              const dir = getDeepDir(target.element);
              const collisionPosition = (collisionData == null ? void 0 : collisionData.direction) === "up" || dir === "ltr" && (collisionData == null ? void 0 : collisionData.direction) === "left" || dir === "rtl" && (collisionData == null ? void 0 : collisionData.direction) === "right" ? "before" : "after";
              if (targetIndex >= sourceIndex && sourceZone === targetZone) {
                targetIndex = targetIndex - 1;
              }
              if (collisionPosition === "after") {
                targetIndex = targetIndex + 1;
              }
            } else {
              targetZone = target.id.toString();
              targetIndex = 0;
            }
            const path = ((_c = appStore.getState().state.indexes.nodes[target.id]) == null ? void 0 : _c.path) || [];
            if (targetId === sourceId || path.find((path2) => {
              const [pathId] = path2.split(":");
              return pathId === sourceId;
            })) {
              return;
            }
            if (dragMode.current === "new") {
              zoneStore.setState({
                previewIndex: {
                  [targetZone]: {
                    componentType: sourceData.componentType,
                    type: "insert",
                    index: targetIndex,
                    zone: targetZone,
                    element: source.element,
                    props: {
                      id: source.id.toString()
                    }
                  }
                }
              });
            } else {
              if (!initialSelector.current) {
                initialSelector.current = {
                  zone: sourceData.zone,
                  index: sourceData.index
                };
              }
              const item = getItem(
                initialSelector.current,
                appStore.getState().state
              );
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [targetZone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: targetIndex,
                      zone: targetZone,
                      props: item.props,
                      element: source.element
                    }
                  }
                });
              }
            }
            (_d = dragListeners.dragover) == null ? void 0 : _d.forEach((fn) => {
              fn(event, manager);
            });
          },
          onDragStart: (event, manager) => {
            var _a;
            const { source } = event.operation;
            if (source && source.type !== "void") {
              const sourceData = source.data;
              const item = getItem(
                {
                  zone: sourceData.zone,
                  index: sourceData.index
                },
                appStore.getState().state
              );
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [sourceData.zone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: sourceData.index,
                      zone: sourceData.zone,
                      props: item.props,
                      element: source.element
                    }
                  }
                });
              }
            }
            (_a = dragListeners.dragstart) == null ? void 0 : _a.forEach((fn) => {
              fn(event, manager);
            });
          },
          onBeforeDragStart: (event) => {
            var _a, _b, _c, _d;
            const isNewComponent = ((_a = event.operation.source) == null ? void 0 : _a.type) === "drawer";
            dragMode.current = isNewComponent ? "new" : "existing";
            initialSelector.current = void 0;
            zoneStore.setState({ draggedItem: event.operation.source });
            if (((_b = appStore.getState().selectedItem) == null ? void 0 : _b.props.id) !== ((_c = event.operation.source) == null ? void 0 : _c.id)) {
              dispatch({
                type: "setUi",
                ui: {
                  itemSelector: null,
                  isDragging: true
                },
                recordHistory: false
              });
            } else {
              dispatch({
                type: "setUi",
                ui: {
                  isDragging: true
                },
                recordHistory: false
              });
            }
            const entryEl = (_d = getFrame()) == null ? void 0 : _d.querySelector("[data-puck-entry]");
            entryEl == null ? void 0 : entryEl.setAttribute("data-puck-dragging", "true");
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(ZoneStoreProvider, { store: zoneStore, children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(DropZoneProvider, { value: nextContextValue, children }) })
        }
      )
    }
  );
};
var DragDropContext = ({
  children,
  disableAutoScroll
}) => {
  const status = useAppStore((s) => s.status);
  if (status === "LOADING") {
    return children;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(DragDropContextClient, { disableAutoScroll, children });
};

// components/Drawer/index.tsx
var import_react71 = require("@dnd-kit/react");
var import_jsx_runtime69 = require("react/jsx-runtime");
var getClassName26 = get_class_name_factory_default("Drawer", styles_module_default14);
var getClassNameItem2 = get_class_name_factory_default("DrawerItem", styles_module_default14);
var DrawerItemInner = ({
  children,
  name,
  label,
  dragRef,
  isDragDisabled
}) => {
  const CustomInner = (0, import_react70.useMemo)(
    () => children || (({ children: children2 }) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: getClassNameItem2("default"), children: children2 })),
    [children]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    "div",
    {
      className: getClassNameItem2({ disabled: isDragDisabled }),
      ref: dragRef,
      onMouseDown: (e) => e.preventDefault(),
      "data-testid": dragRef ? `drawer-item:${name}` : "",
      "data-puck-drawer-item": true,
      children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(CustomInner, { name, children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: getClassNameItem2("draggableWrapper"), children: /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: getClassNameItem2("draggable"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: getClassNameItem2("name"), children: label != null ? label : name }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: getClassNameItem2("icon"), children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(DragIcon, {}) })
      ] }) }) })
    }
  );
};
var DrawerItemDraggable = ({
  children,
  name,
  label,
  id,
  isDragDisabled
}) => {
  const { ref } = (0, import_react71.useDraggable)({
    id,
    data: { componentType: name },
    disabled: isDragDisabled,
    type: "drawer"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: getClassName26("draggable"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: getClassName26("draggableBg"), children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(DrawerItemInner, { name, label, children }) }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: getClassName26("draggableFg"), children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
      DrawerItemInner,
      {
        name,
        label,
        dragRef: ref,
        isDragDisabled,
        children
      }
    ) })
  ] });
};
var DrawerItem = ({
  name,
  children,
  id,
  label,
  index,
  isDragDisabled
}) => {
  const resolvedId = id || name;
  const [dynamicId, setDynamicId] = (0, import_react70.useState)(generateId(resolvedId));
  if (typeof index !== "undefined") {
    console.error(
      "Warning: The `index` prop on Drawer.Item is deprecated and no longer required."
    );
  }
  useDragListener(
    "dragend",
    () => {
      setDynamicId(generateId(resolvedId));
    },
    [resolvedId]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    DrawerItemDraggable,
    {
      name,
      label,
      id: dynamicId,
      isDragDisabled,
      children
    }
  ) }, dynamicId);
};
var Drawer = ({
  children,
  droppableId,
  direction
}) => {
  if (droppableId) {
    console.error(
      "Warning: The `droppableId` prop on Drawer is deprecated and no longer required."
    );
  }
  if (direction) {
    console.error(
      "Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging."
    );
  }
  const id = useSafeId();
  const { ref } = (0, import_react71.useDroppable)({
    id,
    type: "void",
    collisionPriority: 0
    // Never collide with this, but we use it so NestedDroppablePlugin respects the Drawer
  });
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    "div",
    {
      className: getClassName26(),
      ref,
      "data-puck-dnd": id,
      "data-puck-drawer": true,
      "data-puck-dnd-void": true,
      children
    }
  );
};
Drawer.Item = DrawerItem;

// bundle/core.ts
init_IconButton2();

// components/Puck/index.tsx
init_react_import();
var import_react93 = require("react");
init_store();

// components/Puck/components/Fields/index.tsx
init_react_import();
init_Loader();
init_root_droppable_id();
init_store();

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Fields/styles.module.css#css-module
init_react_import();
var styles_module_default18 = { "PuckFields": "_PuckFields_10bh7_1", "PuckFields--isLoading": "_PuckFields--isLoading_10bh7_6", "PuckFields-loadingOverlay": "_PuckFields-loadingOverlay_10bh7_10", "PuckFields-loadingOverlayInner": "_PuckFields-loadingOverlayInner_10bh7_25", "PuckFields-field": "_PuckFields-field_10bh7_32", "PuckFields--wrapFields": "_PuckFields--wrapFields_10bh7_36" };

// components/Puck/components/Fields/index.tsx
init_lib();
var import_react72 = require("react");
init_fields();
var import_shallow7 = require("zustand/react/shallow");
var import_jsx_runtime70 = require("react/jsx-runtime");
var getClassName27 = get_class_name_factory_default("PuckFields", styles_module_default18);
var DefaultFields = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_jsx_runtime70.Fragment, { children });
};
var createOnChange = (fieldName, appStore) => (value, updatedUi) => __async(null, null, function* () {
  const { dispatch, state, selectedItem, resolveComponentData: resolveComponentData2 } = appStore.getState();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const rootProps = data.root.props || data.root;
  const currentProps = selectedItem ? selectedItem.props : rootProps;
  const newProps = __spreadProps(__spreadValues({}, currentProps), { [fieldName]: value });
  if (selectedItem && itemSelector) {
    const resolved = yield resolveComponentData2(
      __spreadProps(__spreadValues({}, selectedItem), { props: newProps }),
      "replace"
    );
    const latestSelector = getSelectorForId(
      appStore.getState().state,
      selectedItem.props.id
    );
    if (!latestSelector) return;
    dispatch({
      type: "replace",
      destinationIndex: latestSelector.index,
      destinationZone: latestSelector.zone || rootDroppableId,
      data: resolved.node,
      ui: updatedUi
    });
    return;
  }
  if (data.root.props) {
    dispatch({
      type: "replaceRoot",
      root: (yield resolveComponentData2(
        __spreadProps(__spreadValues({}, data.root), { props: newProps }),
        "replace"
      )).node,
      ui: __spreadValues(__spreadValues({}, ui), updatedUi),
      recordHistory: true
    });
    return;
  }
  dispatch({
    type: "setData",
    data: { root: newProps }
  });
});
var FieldsChildInner = ({ fieldName }) => {
  const field = useAppStore((s) => s.fields.fields[fieldName]);
  const isReadOnly = useAppStore(
    (s) => ((s.selectedItem ? s.selectedItem.readOnly : s.state.data.root.readOnly) || {})[fieldName]
  );
  const id = useAppStore((s) => {
    if (!field) return null;
    return s.selectedItem ? `${s.selectedItem.props.id}_${field.type}_${fieldName}` : `root_${field.type}_${fieldName}`;
  });
  const permissions = useAppStore(
    (0, import_shallow7.useShallow)((s) => {
      const { selectedItem, permissions: permissions2 } = s;
      return selectedItem ? permissions2.getPermissions({ item: selectedItem }) : permissions2.getPermissions({ root: true });
    })
  );
  const appStore = useAppStoreApi();
  const onChange = (0, import_react72.useCallback)(createOnChange(fieldName, appStore), [
    fieldName
  ]);
  const { visible = true } = field != null ? field : {};
  const fieldStore = (0, import_react72.useContext)(fieldContextStore.ctx);
  (0, import_react72.useEffect)(() => {
    return appStore.subscribe(
      (s) => {
        var _a;
        const data = s.getCurrentData();
        return (_a = data.props) == null ? void 0 : _a[fieldName];
      },
      (value) => {
        fieldStore.setState({ [fieldName]: value });
      }
    );
  }, [appStore, fieldStore]);
  if (!field || !id || !visible) return null;
  if (field.type === "slot") return null;
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: getClassName27("field"), children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
    AutoFieldPrivate,
    {
      field,
      name: fieldName,
      id,
      readOnly: !permissions.edit || isReadOnly,
      onChange
    }
  ) }, id);
};
var FieldsChild = ({ fieldName }) => {
  const appStore = useAppStoreApi();
  const initialValue = (0, import_react72.useMemo)(() => {
    var _a;
    const value = (_a = appStore.getState().getCurrentData().props) == null ? void 0 : _a[fieldName];
    return { [fieldName]: value };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(fieldContextStore.Provider, { value: initialValue, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(FieldsChildInner, { fieldName }) });
};
var FieldsChildMemo = (0, import_react72.memo)(FieldsChild);
var FieldsInternal = ({ wrapFields = true }) => {
  const overrides = useAppStore((s) => s.overrides);
  const componentResolving = useAppStore((s) => {
    var _a, _b;
    const loadingCount = s.selectedItem ? (_a = s.componentState[s.selectedItem.props.id]) == null ? void 0 : _a.loadingCount : (_b = s.componentState["root"]) == null ? void 0 : _b.loadingCount;
    return (loadingCount != null ? loadingCount : 0) > 0;
  });
  const itemSelector = useAppStore((0, import_shallow7.useShallow)((s) => s.state.ui.itemSelector));
  const id = useAppStore((s) => {
    var _a;
    return (_a = s.selectedItem) == null ? void 0 : _a.props.id;
  });
  const appStore = useAppStoreApi();
  useRegisterFieldsSlice(appStore, id);
  const fieldsLoading = useAppStore((s) => s.fields.loading);
  const fieldNames = useAppStore(
    (0, import_shallow7.useShallow)((s) => {
      if (s.fields.id === id) {
        return Object.keys(s.fields.fields);
      }
      return [];
    })
  );
  const isLoading = fieldsLoading || componentResolving;
  const Wrapper = (0, import_react72.useMemo)(() => overrides.fields || DefaultFields, [overrides]);
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
    "form",
    {
      className: getClassName27({ wrapFields }),
      onSubmit: (e) => {
        e.preventDefault();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(Wrapper, { isLoading, itemSelector, children: fieldNames.map((fieldName) => /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(FieldsChildMemo, { fieldName }, fieldName)) }),
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: getClassName27("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: getClassName27("loadingOverlayInner"), children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(Loader, { size: 16 }) }) })
      ]
    }
  );
};
var Fields = (0, import_react72.memo)(FieldsInternal);

// components/Puck/components/Components/index.tsx
init_react_import();

// lib/use-component-list.tsx
init_react_import();
var import_react74 = require("react");

// components/ComponentList/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/ComponentList/styles.module.css#css-module
init_react_import();
var styles_module_default19 = { "ComponentList": "_ComponentList_1rrlt_1", "ComponentList--isExpanded": "_ComponentList--isExpanded_1rrlt_5", "ComponentList-content": "_ComponentList-content_1rrlt_9", "ComponentList-title": "_ComponentList-title_1rrlt_17", "ComponentList-titleIcon": "_ComponentList-titleIcon_1rrlt_53" };

// components/ComponentList/index.tsx
init_get_class_name_factory();
var import_react73 = require("react");
init_store();
init_lucide_react();
var import_jsx_runtime71 = require("react/jsx-runtime");
var getClassName28 = get_class_name_factory_default("ComponentList", styles_module_default19);
var ComponentListItem = ({
  name,
  label
}) => {
  var _a;
  const overrides = useAppStore((s) => s.overrides);
  const canInsert = useAppStore(
    (s) => s.permissions.getPermissions({
      type: name
    }).insert
  );
  (0, import_react73.useEffect)(() => {
    if (overrides.componentItem) {
      console.warn(
        "The `componentItem` override has been deprecated and renamed to `drawerItem`"
      );
    }
  }, [overrides]);
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Drawer.Item, { label, name, isDragDisabled: !canInsert, children: (_a = overrides.componentItem) != null ? _a : overrides.drawerItem });
};
var ComponentList = ({
  children,
  title,
  id
}) => {
  const config = useAppStore((s) => s.config);
  const setUi = useAppStore((s) => s.setUi);
  const componentList = useAppStore((s) => s.state.ui.componentList);
  const { expanded = true } = componentList[id] || {};
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: getClassName28({ isExpanded: expanded }), children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
      "button",
      {
        type: "button",
        className: getClassName28("title"),
        onClick: () => setUi({
          componentList: __spreadProps(__spreadValues({}, componentList), {
            [id]: __spreadProps(__spreadValues({}, componentList[id]), {
              expanded: !expanded
            })
          })
        }),
        title: expanded ? `Collapse${title ? ` ${title}` : ""}` : `Expand${title ? ` ${title}` : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: getClassName28("titleIcon"), children: expanded ? /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(ChevronUp, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(ChevronDown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: getClassName28("content"), children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Drawer, { children: children || Object.keys(config.components).map((componentKey) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
        ComponentListItem,
        {
          label: (_a = config.components[componentKey]["label"]) != null ? _a : componentKey,
          name: componentKey
        },
        componentKey
      );
    }) }) })
  ] });
};
ComponentList.Item = ComponentListItem;

// lib/use-component-list.tsx
init_store();
var import_jsx_runtime72 = require("react/jsx-runtime");
var useComponentList = () => {
  const [componentList, setComponentList] = (0, import_react74.useState)();
  const config = useAppStore((s) => s.config);
  const uiComponentList = useAppStore((s) => s.state.ui.componentList);
  (0, import_react74.useEffect)(() => {
    var _a, _b, _c;
    if (Object.keys(uiComponentList).length > 0) {
      const matchedComponents = [];
      let _componentList;
      _componentList = Object.entries(uiComponentList).map(
        ([categoryKey, category]) => {
          if (!category.components) {
            return null;
          }
          category.components.forEach((componentName) => {
            matchedComponents.push(componentName);
          });
          if (category.visible === false) {
            return null;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
            ComponentList,
            {
              id: categoryKey,
              title: category.title || categoryKey,
              children: category.components.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
                  ComponentList.Item,
                  {
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    name: componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            categoryKey
          );
        }
      );
      const remainingComponents = Object.keys(config.components).filter(
        (component) => matchedComponents.indexOf(component) === -1
      );
      if (remainingComponents.length > 0 && !((_a = uiComponentList.other) == null ? void 0 : _a.components) && ((_b = uiComponentList.other) == null ? void 0 : _b.visible) !== false) {
        _componentList.push(
          /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
            ComponentList,
            {
              id: "other",
              title: ((_c = uiComponentList.other) == null ? void 0 : _c.title) || "Other",
              children: remainingComponents.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
                  ComponentList.Item,
                  {
                    name: componentName,
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            "other"
          )
        );
      }
      setComponentList(_componentList);
    }
  }, [config.categories, config.components, uiComponentList]);
  return componentList;
};

// components/Puck/components/Components/index.tsx
init_store();
var import_react75 = require("react");
var import_jsx_runtime73 = require("react/jsx-runtime");
var Components = () => {
  const overrides = useAppStore((s) => s.overrides);
  const componentList = useComponentList();
  const Wrapper = (0, import_react75.useMemo)(() => {
    if (overrides.components) {
      console.warn(
        "The `components` override has been deprecated and renamed to `drawer`"
      );
    }
    return overrides.components || overrides.drawer || "div";
  }, [overrides]);
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Wrapper, { children: componentList ? componentList : /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(ComponentList, { id: "all" }) });
};

// components/Puck/components/Preview/index.tsx
init_react_import();
init_root_droppable_id();
var import_react77 = require("react");
init_store();

// components/AutoFrame/index.tsx
init_react_import();
var import_react76 = require("react");
var import_object_hash = __toESM(require("object-hash"));
var import_react_dom3 = require("react-dom");
var import_jsx_runtime74 = require("react/jsx-runtime");
var styleSelector = 'style, link[rel="stylesheet"]';
var collectStyles = (doc) => {
  const collected = [];
  doc.querySelectorAll(styleSelector).forEach((style) => {
    if (style.tagName === "STYLE") {
      const hasContent = !!style.innerHTML.trim();
      if (hasContent) {
        collected.push(style);
      }
    } else {
      collected.push(style);
    }
  });
  return collected;
};
var getStyleSheet = (el) => {
  return Array.from(document.styleSheets).find((ss) => {
    const ownerNode = ss.ownerNode;
    return ownerNode.href === el.href;
  });
};
var getStyles = (styleSheet) => {
  if (styleSheet) {
    try {
      return Array.from(styleSheet.cssRules).map((rule) => rule.cssText).join("");
    } catch (e) {
      console.warn(
        "Access to stylesheet %s is denied. Ignoring\u2026",
        styleSheet.href
      );
    }
  }
  return "";
};
var syncAttributes = (sourceElement, targetElement) => {
  const attributes = sourceElement.attributes;
  if ((attributes == null ? void 0 : attributes.length) > 0) {
    Array.from(attributes).forEach((attribute) => {
      targetElement.setAttribute(attribute.name, attribute.value);
    });
  }
};
var defer = (fn) => setTimeout(fn, 0);
var CopyHostStyles = ({
  children,
  debug = false,
  onStylesLoaded = () => null
}) => {
  const { document: doc, window: win } = useFrame();
  (0, import_react76.useEffect)(() => {
    if (!win || !doc) {
      return () => {
      };
    }
    let elements = [];
    const hashes = {};
    const lookupEl = (el) => elements.findIndex((elementMap) => elementMap.original === el);
    const mirrorEl = (el, inlineStyles = false) => __async(null, null, function* () {
      let mirror;
      if (el.nodeName === "LINK" && inlineStyles) {
        mirror = document.createElement("style");
        mirror.type = "text/css";
        let styleSheet = getStyleSheet(el);
        if (!styleSheet) {
          yield new Promise((resolve) => {
            const fn = () => {
              resolve();
              el.removeEventListener("load", fn);
            };
            el.addEventListener("load", fn);
          });
          styleSheet = getStyleSheet(el);
        }
        const styles2 = getStyles(styleSheet);
        if (!styles2) {
          if (debug) {
            console.warn(
              `Tried to load styles for link element, but couldn't find them. Skipping...`
            );
          }
          return;
        }
        mirror.innerHTML = styles2;
        mirror.setAttribute("data-href", el.getAttribute("href"));
      } else {
        mirror = el.cloneNode(true);
      }
      return mirror;
    });
    const addEl = (el) => __async(null, null, function* () {
      const index = lookupEl(el);
      if (index > -1) {
        if (debug)
          console.log(
            `Tried to add an element that was already mirrored. Updating instead...`
          );
        elements[index].mirror.innerText = el.innerText;
        return;
      }
      const mirror = yield mirrorEl(el);
      if (!mirror) {
        return;
      }
      const elHash = (0, import_object_hash.default)(mirror.outerHTML);
      if (hashes[elHash]) {
        if (debug)
          console.log(
            `iframe already contains element that is being mirrored. Skipping...`
          );
        return;
      }
      hashes[elHash] = true;
      doc.head.append(mirror);
      elements.push({ original: el, mirror });
      if (debug) console.log(`Added style node ${el.outerHTML}`);
    });
    const removeEl = (el) => {
      var _a, _b;
      const index = lookupEl(el);
      if (index === -1) {
        if (debug)
          console.log(
            `Tried to remove an element that did not exist. Skipping...`
          );
        return;
      }
      const elHash = (0, import_object_hash.default)(el.outerHTML);
      (_b = (_a = elements[index]) == null ? void 0 : _a.mirror) == null ? void 0 : _b.remove();
      delete hashes[elHash];
      if (debug) console.log(`Removed style node ${el.outerHTML}`);
    };
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => addEl(el));
              }
            }
          });
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => removeEl(el));
              }
            }
          });
        }
      });
    });
    const parentDocument = win.parent.document;
    const collectedStyles = collectStyles(parentDocument);
    const hrefs = [];
    let stylesLoaded = 0;
    const parentHtml = parentDocument.getElementsByTagName("html")[0];
    syncAttributes(parentHtml, doc.documentElement);
    const parentBody = parentDocument.getElementsByTagName("body")[0];
    syncAttributes(parentBody, doc.body);
    Promise.all(
      collectedStyles.map((styleNode, i) => __async(null, null, function* () {
        if (styleNode.nodeName === "LINK") {
          const linkHref = styleNode.href;
          if (hrefs.indexOf(linkHref) > -1) {
            return;
          }
          hrefs.push(linkHref);
        }
        const mirror = yield mirrorEl(styleNode);
        if (!mirror) return;
        elements.push({ original: styleNode, mirror });
        return mirror;
      }))
    ).then((mirrorStyles) => {
      const filtered = mirrorStyles.filter(
        (el) => typeof el !== "undefined"
      );
      filtered.forEach((mirror) => {
        mirror.onload = () => {
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= elements.length) {
            onStylesLoaded();
          }
        };
        mirror.onerror = () => {
          console.warn(`AutoFrame couldn't load a stylesheet`);
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= elements.length) {
            onStylesLoaded();
          }
        };
      });
      doc.head.innerHTML = "";
      doc.head.append(...filtered);
      observer.observe(parentDocument.head, { childList: true, subtree: true });
      filtered.forEach((el) => {
        const elHash = (0, import_object_hash.default)(el.outerHTML);
        hashes[elHash] = true;
      });
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_jsx_runtime74.Fragment, { children });
};
var autoFrameContext = (0, import_react76.createContext)({});
var useFrame = () => (0, import_react76.useContext)(autoFrameContext);
function AutoFrame(_a) {
  var _b = _a, {
    children,
    className,
    debug,
    id,
    onReady = () => {
    },
    onNotReady = () => {
    },
    frameRef
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "debug",
    "id",
    "onReady",
    "onNotReady",
    "frameRef"
  ]);
  const [loaded, setLoaded] = (0, import_react76.useState)(false);
  const [ctx, setCtx] = (0, import_react76.useState)({});
  const [mountTarget, setMountTarget] = (0, import_react76.useState)();
  const [stylesLoaded, setStylesLoaded] = (0, import_react76.useState)(false);
  (0, import_react76.useEffect)(() => {
    var _a2;
    if (frameRef.current) {
      const doc = frameRef.current.contentDocument;
      const win = frameRef.current.contentWindow;
      setCtx({
        document: doc || void 0,
        window: win || void 0
      });
      setMountTarget(
        (_a2 = frameRef.current.contentDocument) == null ? void 0 : _a2.getElementById("frame-root")
      );
      if (doc && win && stylesLoaded) {
        onReady();
      } else {
        onNotReady();
      }
    }
  }, [frameRef, loaded, stylesLoaded]);
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
    "iframe",
    __spreadProps(__spreadValues({}, props), {
      className,
      id,
      srcDoc: '<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',
      ref: frameRef,
      onLoad: () => {
        setLoaded(true);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(autoFrameContext.Provider, { value: ctx, children: loaded && mountTarget && /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
        CopyHostStyles,
        {
          debug,
          onStylesLoaded: () => setStylesLoaded(true),
          children: (0, import_react_dom3.createPortal)(children, mountTarget)
        }
      ) })
    })
  );
}
AutoFrame.displayName = "AutoFrame";
var AutoFrame_default = AutoFrame;

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Preview/styles.module.css#css-module
init_react_import();
var styles_module_default20 = { "PuckPreview": "_PuckPreview_z2rgu_1", "PuckPreview-frame": "_PuckPreview-frame_z2rgu_6" };

// components/Puck/components/Preview/index.tsx
init_lib();
var import_jsx_runtime75 = require("react/jsx-runtime");
var getClassName29 = get_class_name_factory_default("PuckPreview", styles_module_default20);
var useBubbleIframeEvents = (ref) => {
  const status = useAppStore((s) => s.status);
  (0, import_react77.useEffect)(() => {
    if (ref.current && status === "READY") {
      const iframe = ref.current;
      const handlePointerMove = (event) => {
        const evt = new BubbledPointerEvent("pointermove", __spreadProps(__spreadValues({}, event), {
          bubbles: true,
          cancelable: false,
          clientX: event.clientX,
          clientY: event.clientY,
          originalTarget: event.target
        }));
        iframe.dispatchEvent(evt);
      };
      const register = () => {
        var _a;
        unregister();
        (_a = iframe.contentDocument) == null ? void 0 : _a.addEventListener(
          "pointermove",
          handlePointerMove,
          {
            capture: true
          }
        );
      };
      const unregister = () => {
        var _a;
        (_a = iframe.contentDocument) == null ? void 0 : _a.removeEventListener(
          "pointermove",
          handlePointerMove
        );
      };
      register();
      return () => {
        unregister();
      };
    }
  }, [status]);
};
var Preview2 = ({ id = "puck-preview" }) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const root = useAppStore((s) => s.state.data.root);
  const config = useAppStore((s) => s.config);
  const setStatus = useAppStore((s) => s.setStatus);
  const iframe = useAppStore((s) => s.iframe);
  const overrides = useAppStore((s) => s.overrides);
  const metadata = useAppStore((s) => s.metadata);
  const renderData = useAppStore(
    (s) => s.state.ui.previewMode === "edit" ? null : s.state.data
  );
  const Page = (0, import_react77.useCallback)(
    (pageProps) => {
      var _a, _b, _c, _d;
      const propsWithSlots = useSlots(
        config,
        { type: "root", props: pageProps },
        DropZoneEditPure
      );
      const richtextProps = useRichtextProps(
        (_b = (_a = config.root) == null ? void 0 : _a.fields) != null ? _b : {},
        pageProps
      );
      return ((_c = config.root) == null ? void 0 : _c.render) ? (_d = config.root) == null ? void 0 : _d.render(__spreadValues(__spreadValues({
        id: "puck-root"
      }, propsWithSlots), richtextProps)) : /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_jsx_runtime75.Fragment, { children: propsWithSlots.children });
    },
    [config]
  );
  const Frame = (0, import_react77.useMemo)(() => overrides.iframe, [overrides]);
  const rootProps = root.props || root;
  const ref = (0, import_react77.useRef)(null);
  useBubbleIframeEvents(ref);
  const inner = !renderData ? /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
    Page,
    __spreadProps(__spreadValues({}, rootProps), {
      puck: {
        renderDropZone: DropZonePure,
        isEditing: true,
        dragRef: null,
        metadata
      },
      editMode: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(DropZonePure, { zone: rootDroppableId })
    })
  ) : /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(Render, { data: renderData, config, metadata });
  (0, import_react77.useEffect)(() => {
    if (!iframe.enabled) {
      setStatus("READY");
    }
  }, [iframe.enabled]);
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
    "div",
    {
      className: getClassName29(),
      id,
      "data-puck-preview": true,
      onClick: (e) => {
        const el = e.target;
        if (!el.hasAttribute("data-puck-component") && !el.hasAttribute("data-puck-dropzone")) {
          dispatch({ type: "setUi", ui: { itemSelector: null } });
        }
      },
      children: iframe.enabled ? /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
        AutoFrame_default,
        {
          id: "preview-frame",
          className: getClassName29("frame"),
          "data-rfd-iframe": true,
          onReady: () => {
            setStatus("READY");
          },
          onNotReady: () => {
            setStatus("MOUNTED");
          },
          frameRef: ref,
          children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(autoFrameContext.Consumer, { children: ({ document: document2 }) => {
            if (Frame) {
              return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(Frame, { document: document2, children: inner });
            }
            return inner;
          } })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
        "div",
        {
          id: "preview-frame",
          className: getClassName29("frame"),
          ref,
          "data-puck-entry": true,
          children: inner
        }
      )
    }
  );
};

// components/Puck/components/Outline/index.tsx
init_react_import();

// components/LayerTree/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/LayerTree/styles.module.css#css-module
init_react_import();
var styles_module_default21 = { "LayerTree": "_LayerTree_7rx04_1", "LayerTree-zoneTitle": "_LayerTree-zoneTitle_7rx04_11", "LayerTree-helper": "_LayerTree-helper_7rx04_17", "Layer": "_Layer_7rx04_1", "Layer-inner": "_Layer-inner_7rx04_29", "Layer--containsZone": "_Layer--containsZone_7rx04_35", "Layer-clickable": "_Layer-clickable_7rx04_39", "Layer--isSelected": "_Layer--isSelected_7rx04_61", "Layer-chevron": "_Layer-chevron_7rx04_77", "Layer--childIsSelected": "_Layer--childIsSelected_7rx04_78", "Layer-zones": "_Layer-zones_7rx04_82", "Layer-title": "_Layer-title_7rx04_96", "Layer-name": "_Layer-name_7rx04_105", "Layer-icon": "_Layer-icon_7rx04_111", "Layer-zoneIcon": "_Layer-zoneIcon_7rx04_116" };

// components/LayerTree/index.tsx
init_get_class_name_factory();

// lib/scroll-into-view.ts
init_react_import();
var scrollIntoView = (el) => {
  const oldStyle = __spreadValues({}, el.style);
  el.style.scrollMargin = "256px";
  if (el) {
    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
    el.style.scrollMargin = oldStyle.scrollMargin || "";
  }
};

// components/LayerTree/index.tsx
init_lucide_react();
init_root_droppable_id();
var import_react78 = require("react");

// lib/on-scroll-end.ts
init_react_import();
var onScrollEnd = (frame, cb) => {
  let scrollTimeout;
  const callback = function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      cb();
      frame == null ? void 0 : frame.removeEventListener("scroll", callback);
    }, 50);
  };
  frame == null ? void 0 : frame.addEventListener("scroll", callback);
  setTimeout(() => {
    if (!scrollTimeout) {
      cb();
    }
  }, 50);
};

// components/LayerTree/index.tsx
init_store();
var import_shallow8 = require("zustand/react/shallow");
var import_jsx_runtime76 = require("react/jsx-runtime");
var getClassName30 = get_class_name_factory_default("LayerTree", styles_module_default21);
var getClassNameLayer = get_class_name_factory_default("Layer", styles_module_default21);
var Layer = ({
  index,
  itemId,
  zoneCompound
}) => {
  var _a;
  const config = useAppStore((s) => s.config);
  const itemSelector = useAppStore((s) => s.state.ui.itemSelector);
  const dispatch = useAppStore((s) => s.dispatch);
  const setItemSelector = (0, import_react78.useCallback)(
    (itemSelector2) => {
      dispatch({ type: "setUi", ui: { itemSelector: itemSelector2 } });
    },
    [dispatch]
  );
  const selecedItemId = useAppStore((s) => {
    var _a2;
    return (_a2 = s.selectedItem) == null ? void 0 : _a2.props.id;
  });
  const isSelected = selecedItemId === itemId || itemSelector && itemSelector.zone === rootDroppableId && !zoneCompound;
  const nodeData = useAppStore((s) => s.state.indexes.nodes[itemId]);
  const zonesForItem = useAppStore(
    (0, import_shallow8.useShallow)(
      (s) => Object.keys(s.state.indexes.zones).filter(
        (z) => z.split(":")[0] === itemId
      )
    )
  );
  const containsZone = zonesForItem.length > 0;
  const zoneStore = (0, import_react78.useContext)(ZoneStoreContext);
  const isHovering = useContextStore(
    ZoneStoreContext,
    (s) => s.hoveringComponent === itemId
  );
  const childIsSelected = useAppStore((s) => {
    var _a2, _b;
    const selectedData = s.state.indexes.nodes[(_a2 = s.selectedItem) == null ? void 0 : _a2.props.id];
    return (_b = selectedData == null ? void 0 : selectedData.path.some((candidate) => {
      const [candidateId] = candidate.split(":");
      return candidateId === itemId;
    })) != null ? _b : false;
  });
  const componentConfig = config.components[nodeData.data.type];
  const label = (_a = componentConfig == null ? void 0 : componentConfig["label"]) != null ? _a : nodeData.data.type.toString();
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(
    "li",
    {
      className: getClassNameLayer({
        isSelected,
        isHovering,
        containsZone,
        childIsSelected
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", { className: getClassNameLayer("inner"), children: /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(
          "button",
          {
            type: "button",
            className: getClassNameLayer("clickable"),
            onClick: () => {
              if (isSelected) {
                setItemSelector(null);
                return;
              }
              const frame = getFrame();
              const el = frame == null ? void 0 : frame.querySelector(
                `[data-puck-component="${itemId}"]`
              );
              if (!el) {
                setItemSelector({
                  index,
                  zone: zoneCompound
                });
                return;
              }
              scrollIntoView(el);
              onScrollEnd(frame, () => {
                setItemSelector({
                  index,
                  zone: zoneCompound
                });
              });
            },
            onMouseEnter: (e) => {
              e.stopPropagation();
              zoneStore.setState({ hoveringComponent: itemId });
            },
            onMouseLeave: (e) => {
              e.stopPropagation();
              zoneStore.setState({ hoveringComponent: null });
            },
            children: [
              containsZone && /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
                "div",
                {
                  className: getClassNameLayer("chevron"),
                  title: isSelected ? "Collapse" : "Expand",
                  children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ChevronDown, { size: "12" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { className: getClassNameLayer("title"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", { className: getClassNameLayer("icon"), children: nodeData.data.type === "Text" || nodeData.data.type === "Heading" ? /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(Type, { size: "16" }) : /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(LayoutGrid, { size: "16" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", { className: getClassNameLayer("name"), children: label })
              ] })
            ]
          }
        ) }),
        containsZone && zonesForItem.map((subzone) => /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", { className: getClassNameLayer("zones"), children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(LayerTree, { zoneCompound: subzone }) }, subzone))
      ]
    }
  );
};
var LayerTree = ({
  label: _label,
  zoneCompound
}) => {
  const label = useAppStore((s) => {
    var _a, _b, _c, _d;
    if (_label) return _label;
    if (zoneCompound === rootDroppableId) return;
    const [componentId, slotId] = zoneCompound.split(":");
    const componentType = (_a = s.state.indexes.nodes[componentId]) == null ? void 0 : _a.data.type;
    const configForComponent = componentType && componentType !== rootAreaId ? s.config.components[componentType] : s.config.root;
    return (_d = (_c = (_b = configForComponent == null ? void 0 : configForComponent.fields) == null ? void 0 : _b[slotId]) == null ? void 0 : _c.label) != null ? _d : slotId;
  });
  const contentIds = useAppStore(
    (0, import_shallow8.useShallow)(
      (s) => {
        var _a, _b;
        return zoneCompound ? (_b = (_a = s.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.contentIds) != null ? _b : [] : [];
      }
    )
  );
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(import_jsx_runtime76.Fragment, { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { className: getClassName30("zoneTitle"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", { className: getClassName30("zoneIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(Layers, { size: "16" }) }),
      label
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("ul", { className: getClassName30(), children: [
      contentIds.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", { className: getClassName30("helper"), children: "No items" }),
      contentIds.map((itemId, i) => {
        return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
          Layer,
          {
            index: i,
            itemId,
            zoneCompound
          },
          itemId
        );
      })
    ] })
  ] });
};

// components/Puck/components/Outline/index.tsx
init_store();
var import_react79 = require("react");

// lib/data/find-zones-for-area.ts
init_react_import();
var findZonesForArea = (state, area) => {
  return Object.keys(state.indexes.zones).filter(
    (zone) => zone.split(":")[0] === area
  );
};

// components/Puck/components/Outline/index.tsx
var import_shallow9 = require("zustand/react/shallow");
var import_jsx_runtime77 = require("react/jsx-runtime");
var Outline = () => {
  const outlineOverride = useAppStore((s) => s.overrides.outline);
  const rootZones = useAppStore(
    (0, import_shallow9.useShallow)((s) => findZonesForArea(s.state, "root"))
  );
  const Wrapper = (0, import_react79.useMemo)(() => outlineOverride || "div", [outlineOverride]);
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Wrapper, { children: rootZones.map((zoneCompound) => /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
    LayerTree,
    {
      label: rootZones.length === 1 ? "" : zoneCompound.split(":")[1],
      zoneCompound
    },
    zoneCompound
  )) });
};

// components/Puck/index.tsx
init_default_viewports();

// lib/use-loaded-overrides.ts
init_react_import();
var import_react80 = require("react");

// lib/load-overrides.ts
init_react_import();
var loadOverrides = ({
  overrides,
  plugins
}) => {
  const collected = __spreadValues({}, overrides);
  plugins == null ? void 0 : plugins.forEach((plugin) => {
    if (!plugin.overrides) return;
    Object.keys(plugin.overrides).forEach((_overridesType) => {
      var _a;
      const overridesType = _overridesType;
      if (!((_a = plugin.overrides) == null ? void 0 : _a[overridesType])) return;
      if (overridesType === "fieldTypes") {
        const fieldTypes = plugin.overrides.fieldTypes;
        Object.keys(fieldTypes).forEach((fieldType) => {
          collected.fieldTypes = collected.fieldTypes || {};
          const childNode2 = collected.fieldTypes[fieldType];
          const Comp2 = (props) => fieldTypes[fieldType](__spreadProps(__spreadValues({}, props), {
            children: childNode2 ? childNode2(props) : props.children
          }));
          collected.fieldTypes[fieldType] = Comp2;
        });
        return;
      }
      const childNode = collected[overridesType];
      const Comp = (props) => plugin.overrides[overridesType](__spreadProps(__spreadValues({}, props), {
        children: childNode ? childNode(props) : props.children
      }));
      collected[overridesType] = Comp;
    });
  });
  return collected;
};

// lib/use-loaded-overrides.ts
var useLoadedOverrides = ({
  overrides,
  plugins
}) => {
  return (0, import_react80.useMemo)(() => {
    return loadOverrides({ overrides, plugins });
  }, [plugins, overrides]);
};

// components/Puck/index.tsx
init_history();
init_permissions();

// lib/use-puck.ts
init_react_import();
var import_react81 = require("react");
var import_zustand7 = require("zustand");
init_make_state_public();
init_get_item();

// lib/data/resolve-data-by-id.ts
init_react_import();

// lib/data/resolve-and-replace-data.ts
init_react_import();
init_to_component();
function resolveAndReplaceData(currentData, getState, trigger = "force") {
  return __async(this, null, function* () {
    const resolvedResult = yield getState().resolveComponentData(
      currentData,
      trigger
    );
    if (!resolvedResult.didChange) return;
    const itemSelector = getSelectorForId(
      getState().state,
      resolvedResult.node.props.id
    );
    if (!itemSelector) {
      console.warn(
        `Warning: Could not find component with id "${currentData.props.id}" to resolve its data. Component may have been removed or the id is invalid.`
      );
      return;
    }
    getState().dispatch({
      type: "replace",
      data: toComponent(resolvedResult.node),
      destinationIndex: itemSelector.index,
      destinationZone: itemSelector.zone
    });
  });
}

// lib/data/resolve-data-by-id.ts
function resolveDataById(id, getState, trigger) {
  return __async(this, null, function* () {
    const node = getState().state.indexes.nodes[id];
    if (!node) {
      console.warn(
        `Warning: Could not find component with id "${id}" to resolve its data. Component may have been removed or the id is invalid.`
      );
      return;
    }
    yield resolveAndReplaceData(node.data, getState, trigger);
  });
}

// lib/data/resolve-data-by-selector.ts
init_react_import();
init_get_item();
init_to_component();
function resolveDataBySelector(selector, getState, trigger) {
  return __async(this, null, function* () {
    const item = getItem(selector, getState().state);
    if (!item) {
      console.warn(
        `Warning: Could not find component for selector "${JSON.stringify(
          selector
        )}" to resolve its data. Component may have been removed or the selector is invalid.`
      );
      return;
    }
    const itemAsComponent = toComponent(item);
    yield resolveAndReplaceData(itemAsComponent, getState, trigger);
  });
}

// lib/use-puck.ts
var generateUsePuck = (store, getState) => {
  const history = {
    back: store.history.back,
    forward: store.history.forward,
    setHistories: store.history.setHistories,
    setHistoryIndex: store.history.setHistoryIndex,
    hasPast: store.history.hasPast(),
    hasFuture: store.history.hasFuture(),
    histories: store.history.histories,
    index: store.history.index
  };
  const storeData = {
    appState: makeStatePublic(store.state),
    config: store.config,
    dispatch: store.dispatch,
    getPermissions: store.permissions.getPermissions,
    refreshPermissions: store.permissions.refreshPermissions,
    resolveDataById: (id, trigger) => resolveDataById(id, getState, trigger),
    resolveDataBySelector: (selector, trigger) => resolveDataBySelector(selector, getState, trigger),
    history,
    selectedItem: store.selectedItem || null,
    getItemBySelector: (selector) => getItem(selector, store.state),
    getItemById: (id) => store.state.indexes.nodes[id].data,
    getSelectorForId: (id) => getSelectorForId(store.state, id),
    getParentById: (id) => {
      const node = store.state.indexes.nodes[id];
      const parentId = node.parentId;
      if (parentId === null) return;
      const parentNode = store.state.indexes.nodes[parentId];
      if (!parentNode) return;
      return parentNode.data;
    }
  };
  storeData.__private = {
    appState: store.state
  };
  return storeData;
};
var UsePuckStoreContext = (0, import_react81.createContext)(
  null
);
var convertToPickedStore = (store) => {
  return {
    state: store.state,
    config: store.config,
    dispatch: store.dispatch,
    permissions: store.permissions,
    history: store.history,
    selectedItem: store.selectedItem
  };
};
var useRegisterUsePuckStore = (appStore) => {
  const [usePuckStore] = (0, import_react81.useState)(
    () => (0, import_zustand7.createStore)(
      () => generateUsePuck(
        convertToPickedStore(appStore.getState()),
        appStore.getState
      )
    )
  );
  (0, import_react81.useEffect)(() => {
    return appStore.subscribe(
      (store) => convertToPickedStore(store),
      (pickedStore) => {
        usePuckStore.setState(generateUsePuck(pickedStore, appStore.getState));
      }
    );
  }, []);
  return usePuckStore;
};
function createUsePuck() {
  return function usePuck2(selector) {
    const usePuckApi = (0, import_react81.useContext)(UsePuckStoreContext);
    if (!usePuckApi) {
      throw new Error("usePuck must be used inside <Puck>.");
    }
    const result = (0, import_zustand7.useStore)(
      usePuckApi,
      selector != null ? selector : ((s) => s)
    );
    return result;
  };
}
function usePuck() {
  (0, import_react81.useEffect)(() => {
    console.warn(
      "You're using the `usePuck` method without a selector, which may cause unnecessary re-renders. Replace with `createUsePuck` and provide a selector for improved performance."
    );
  }, []);
  return createUsePuck()((s) => s);
}
function useGetPuck() {
  const usePuckApi = (0, import_react81.useContext)(UsePuckStoreContext);
  if (!usePuckApi) {
    throw new Error("usePuckGet must be used inside <Puck>.");
  }
  return usePuckApi.getState;
}

// components/Puck/index.tsx
init_walk_app_state();
var import_fast_equals4 = require("fast-equals");
init_populate_ids();
init_to_component();

// components/Puck/components/Layout/index.tsx
init_react_import();
var import_react92 = require("react");
init_lib();

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Layout/styles.module.css#css-module
init_react_import();
var styles_module_default22 = { "Puck": "_Puck_1dd16_19", "Puck-portal": "_Puck-portal_1dd16_31", "PuckLayout": "_PuckLayout_1dd16_36", "PuckLayout-inner": "_PuckLayout-inner_1dd16_40", "Puck--hidePlugins": "_Puck--hidePlugins_1dd16_72", "PuckLayout--mounted": "_PuckLayout--mounted_1dd16_77", "PuckLayout--mobilePanelHeightToggle": "_PuckLayout--mobilePanelHeightToggle_1dd16_81", "PuckLayout--leftSideBarVisible": "_PuckLayout--leftSideBarVisible_1dd16_81", "PuckLayout--isExpanded": "_PuckLayout--isExpanded_1dd16_87", "PuckLayout--mobilePanelHeightMinContent": "_PuckLayout--mobilePanelHeightMinContent_1dd16_105", "PuckLayout--rightSideBarVisible": "_PuckLayout--rightSideBarVisible_1dd16_132", "PuckLayout-mounted": "_PuckLayout-mounted_1dd16_151", "PuckLayout-nav": "_PuckLayout-nav_1dd16_192", "PuckLayout-header": "_PuckLayout-header_1dd16_208", "PuckPluginTab": "_PuckPluginTab_1dd16_222", "PuckPluginTab--visible": "_PuckPluginTab--visible_1dd16_228", "PuckPluginTab-body": "_PuckPluginTab-body_1dd16_233" };

// lib/use-inject-css.ts
init_react_import();
var import_react82 = require("react");
var styles = ``;
var useInjectStyleSheet = (initialStyles, iframeEnabled) => {
  const [el, setEl] = (0, import_react82.useState)();
  (0, import_react82.useEffect)(() => {
    setEl(document.createElement("style"));
  }, []);
  (0, import_react82.useEffect)(() => {
    var _a;
    if (!el || typeof window === "undefined") {
      return;
    }
    el.innerHTML = initialStyles;
    if (iframeEnabled) {
      const frame = getFrame();
      (_a = frame == null ? void 0 : frame.head) == null ? void 0 : _a.appendChild(el);
    }
    document.head.appendChild(el);
  }, [iframeEnabled, el]);
  return el;
};
var useInjectGlobalCss = (iframeEnabled) => {
  return useInjectStyleSheet(styles, iframeEnabled);
};

// components/Puck/components/Layout/index.tsx
init_store();

// components/DefaultOverride/index.tsx
init_react_import();
var import_jsx_runtime78 = require("react/jsx-runtime");
var DefaultOverride = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_jsx_runtime78.Fragment, { children });

// components/Puck/components/Layout/index.tsx
init_use_hotkey();

// lib/use-preview-mode-hotkeys.ts
init_react_import();
var import_react83 = require("react");
init_use_hotkey();
init_store();
var usePreviewModeHotkeys = () => {
  const appStore = useAppStoreApi();
  const toggleInteractive = (0, import_react83.useCallback)(() => {
    const dispatch = appStore.getState().dispatch;
    dispatch({
      type: "setUi",
      ui: (ui) => ({
        previewMode: ui.previewMode === "edit" ? "interactive" : "edit"
      })
    });
  }, [appStore]);
  useHotkey({ meta: true, i: true }, toggleInteractive);
  useHotkey({ ctrl: true, i: true }, toggleInteractive);
};

// components/Puck/components/Header/index.tsx
init_react_import();
var import_react84 = require("react");
init_store();
init_lucide_react();
init_IconButton();

// components/MenuBar/index.tsx
init_react_import();
init_lucide_react();
init_IconButton();
init_get_class_name_factory();

// css-module:/Users/mariusmuller/puck/packages/core/components/MenuBar/styles.module.css#css-module
init_react_import();
var styles_module_default23 = { "MenuBar": "_MenuBar_8pf8c_1", "MenuBar--menuOpen": "_MenuBar--menuOpen_8pf8c_14", "MenuBar-inner": "_MenuBar-inner_8pf8c_29", "MenuBar-history": "_MenuBar-history_8pf8c_45" };

// components/MenuBar/index.tsx
init_store();
var import_jsx_runtime79 = require("react/jsx-runtime");
var getClassName31 = get_class_name_factory_default("MenuBar", styles_module_default23);
function MenuBar({
  menuOpen = false,
  renderHeaderActions,
  setMenuOpen
}) {
  const back = useAppStore((s) => s.history.back);
  const forward = useAppStore((s) => s.history.forward);
  const hasFuture = useAppStore((s) => s.history.hasFuture());
  const hasPast = useAppStore((s) => s.history.hasPast());
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
    "div",
    {
      className: getClassName31({ menuOpen }),
      onClick: (event) => {
        var _a;
        const element = event.target;
        if (window.matchMedia("(min-width: 638px)").matches) {
          return;
        }
        if (element.tagName === "A" && ((_a = element.getAttribute("href")) == null ? void 0 : _a.startsWith("#"))) {
          setMenuOpen(false);
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: getClassName31("inner"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: getClassName31("history"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            IconButton,
            {
              type: "button",
              title: "undo",
              disabled: !hasPast,
              onClick: back,
              children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(Undo2, { size: 21 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            IconButton,
            {
              type: "button",
              title: "redo",
              disabled: !hasFuture,
              onClick: forward,
              children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(Redo2, { size: 21 })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_jsx_runtime79.Fragment, { children: renderHeaderActions && renderHeaderActions() })
      ] })
    }
  );
}

// components/Puck/components/Header/index.tsx
init_lib();

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Header/styles.module.css#css-module
init_react_import();
var styles_module_default24 = { "PuckHeader": "_PuckHeader_63pti_1", "PuckHeader--hidePlugins": "_PuckHeader--hidePlugins_63pti_15", "PuckHeader-inner": "_PuckHeader-inner_63pti_20", "PuckHeader-toggle": "_PuckHeader-toggle_63pti_40", "PuckHeader--rightSideBarVisible": "_PuckHeader--rightSideBarVisible_63pti_47", "PuckHeader-rightSideBarToggle": "_PuckHeader-rightSideBarToggle_63pti_47", "PuckHeader--leftSideBarVisible": "_PuckHeader--leftSideBarVisible_63pti_48", "PuckHeader-leftSideBarToggle": "_PuckHeader-leftSideBarToggle_63pti_48", "PuckHeader-title": "_PuckHeader-title_63pti_64", "PuckHeader-path": "_PuckHeader-path_63pti_68", "PuckHeader-tools": "_PuckHeader-tools_63pti_75", "PuckHeader-menuButton": "_PuckHeader-menuButton_63pti_81", "PuckHeader--menuOpen": "_PuckHeader--menuOpen_63pti_86" };

// components/Puck/components/Header/index.tsx
var import_jsx_runtime80 = require("react/jsx-runtime");
var getClassName32 = get_class_name_factory_default("PuckHeader", styles_module_default24);
var HeaderInner = ({
  hidePlugins
}) => {
  const {
    onPublish,
    renderHeader,
    renderHeaderActions,
    headerTitle,
    headerPath,
    iframe: _iframe
  } = usePropsContext();
  const dispatch = useAppStore((s) => s.dispatch);
  const appStore = useAppStoreApi();
  const defaultHeaderRender = (0, import_react84.useMemo)(() => {
    if (renderHeader) {
      console.warn(
        "`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"
      );
      const RenderHeader = (_a) => {
        var _b = _a, { actions } = _b, props = __objRest(_b, ["actions"]);
        const Comp = renderHeader;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState, children: actions }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader]);
  const defaultHeaderActionsRender = (0, import_react84.useMemo)(() => {
    if (renderHeaderActions) {
      console.warn(
        "`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."
      );
      const RenderHeader = (props) => {
        const Comp = renderHeaderActions;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeaderActions]);
  const CustomHeader = useAppStore(
    (s) => s.overrides.header || defaultHeaderRender
  );
  const CustomHeaderActions = useAppStore(
    (s) => s.overrides.headerActions || defaultHeaderActionsRender
  );
  const [menuOpen, setMenuOpen] = (0, import_react84.useState)(false);
  const rootTitle = useAppStore((s) => {
    var _a, _b;
    const rootData = (_a = s.state.indexes.nodes["root"]) == null ? void 0 : _a.data;
    return (_b = rootData.props.title) != null ? _b : "";
  });
  const leftSideBarVisible = useAppStore((s) => s.state.ui.leftSideBarVisible);
  const rightSideBarVisible = useAppStore(
    (s) => s.state.ui.rightSideBarVisible
  );
  const toggleSidebars = (0, import_react84.useCallback)(
    (sidebar) => {
      const widerViewport = window.matchMedia("(min-width: 638px)").matches;
      const sideBarVisible = sidebar === "left" ? leftSideBarVisible : rightSideBarVisible;
      const oppositeSideBar = sidebar === "left" ? "rightSideBarVisible" : "leftSideBarVisible";
      dispatch({
        type: "setUi",
        ui: __spreadValues({
          [`${sidebar}SideBarVisible`]: !sideBarVisible
        }, !widerViewport ? { [oppositeSideBar]: false } : {})
      });
    },
    [dispatch, leftSideBarVisible, rightSideBarVisible]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
    CustomHeader,
    {
      actions: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(import_jsx_runtime80.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(CustomHeaderActions, { children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
        Button,
        {
          onClick: () => {
            const data = appStore.getState().state.data;
            onPublish && onPublish(data);
          },
          icon: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(Globe, { size: "14px" }),
          children: "Publish"
        }
      ) }) }),
      children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
        "header",
        {
          className: getClassName32({
            leftSideBarVisible,
            rightSideBarVisible,
            hidePlugins
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { className: getClassName32("inner"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { className: getClassName32("toggle"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("div", { className: getClassName32("leftSideBarToggle"), children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
                IconButton,
                {
                  type: "button",
                  onClick: () => {
                    toggleSidebars("left");
                  },
                  title: "Toggle left sidebar",
                  children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(PanelLeft, { focusable: "false" })
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("div", { className: getClassName32("rightSideBarToggle"), children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
                IconButton,
                {
                  type: "button",
                  onClick: () => {
                    toggleSidebars("right");
                  },
                  title: "Toggle right sidebar",
                  children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(PanelRight, { focusable: "false" })
                }
              ) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("div", { className: getClassName32("title"), children: /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(Heading7, { rank: "2", size: "xs", children: [
              headerTitle || rootTitle || "Page",
              headerPath && /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(import_jsx_runtime80.Fragment, { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("code", { className: getClassName32("path"), children: headerPath })
              ] })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { className: getClassName32("tools"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("div", { className: getClassName32("menuButton"), children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
                IconButton,
                {
                  type: "button",
                  onClick: () => {
                    return setMenuOpen(!menuOpen);
                  },
                  title: "Toggle menu bar",
                  children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(ChevronUp, { focusable: "false" }) : /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(ChevronDown, { focusable: "false" })
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
                MenuBar,
                {
                  dispatch,
                  onPublish,
                  menuOpen,
                  renderHeaderActions: () => /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(CustomHeaderActions, { children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
                    Button,
                    {
                      onClick: () => {
                        const data = appStore.getState().state.data;
                        onPublish && onPublish(data);
                      },
                      icon: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(Globe, { size: "14px" }),
                      children: "Publish"
                    }
                  ) }),
                  setMenuOpen
                }
              )
            ] })
          ] })
        }
      )
    }
  );
};
var Header = (0, import_react84.memo)(HeaderInner);

// components/SidebarSection/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/SidebarSection/styles.module.css#css-module
init_react_import();
var styles_module_default25 = { "SidebarSection": "_SidebarSection_5otpt_1", "SidebarSection-title": "_SidebarSection-title_5otpt_12", "SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_5otpt_20", "SidebarSection-content": "_SidebarSection-content_5otpt_24", "SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_5otpt_33", "SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_5otpt_62", "SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_5otpt_33", "SidebarSection-heading": "_SidebarSection-heading_5otpt_74", "SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_5otpt_78" };

// components/SidebarSection/index.tsx
init_get_class_name_factory();
init_Loader();

// components/Breadcrumbs/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/Breadcrumbs/styles.module.css#css-module
init_react_import();
var styles_module_default26 = { "Breadcrumbs": "_Breadcrumbs_1c9yh_1", "Breadcrumbs-breadcrumbLabel": "_Breadcrumbs-breadcrumbLabel_1c9yh_7", "Breadcrumbs-breadcrumb": "_Breadcrumbs-breadcrumb_1c9yh_7" };

// components/Breadcrumbs/index.tsx
init_get_class_name_factory();
init_lucide_react();

// lib/use-breadcrumbs.ts
init_react_import();
var import_react85 = require("react");
init_store();
var useBreadcrumbs = (renderCount) => {
  const selectedId = useAppStore((s) => {
    var _a;
    return (_a = s.selectedItem) == null ? void 0 : _a.props.id;
  });
  const config = useAppStore((s) => s.config);
  const path = useAppStore((s) => {
    var _a;
    return (_a = s.state.indexes.nodes[selectedId]) == null ? void 0 : _a.path;
  });
  const appStore = useAppStoreApi();
  return (0, import_react85.useMemo)(() => {
    const breadcrumbs = (path == null ? void 0 : path.map((zoneCompound) => {
      var _a, _b, _c, _d;
      const [componentId] = zoneCompound.split(":");
      if (componentId === "root") {
        return {
          label: ((_a = config == null ? void 0 : config.root) == null ? void 0 : _a.label) || "Page",
          selector: null
        };
      }
      const node = appStore.getState().state.indexes.nodes[componentId];
      const parentId = node.path[node.path.length - 1];
      const contentIds = ((_b = appStore.getState().state.indexes.zones[parentId]) == null ? void 0 : _b.contentIds) || [];
      const index = contentIds.indexOf(componentId);
      const label = node ? (_d = (_c = config.components[node.data.type]) == null ? void 0 : _c.label) != null ? _d : node.data.type : "Component";
      return {
        label,
        selector: node ? {
          index,
          zone: node.path[node.path.length - 1]
        } : null
      };
    })) || [];
    if (renderCount) {
      return breadcrumbs.slice(breadcrumbs.length - renderCount);
    }
    return breadcrumbs;
  }, [path, renderCount]);
};

// components/Breadcrumbs/index.tsx
init_store();
var import_jsx_runtime81 = require("react/jsx-runtime");
var getClassName33 = get_class_name_factory_default("Breadcrumbs", styles_module_default26);
var Breadcrumbs = ({
  children,
  numParents = 1
}) => {
  const setUi = useAppStore((s) => s.setUi);
  const breadcrumbs = useBreadcrumbs(numParents);
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { className: getClassName33(), children: [
    breadcrumbs.map((breadcrumb, i) => /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { className: getClassName33("breadcrumb"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
        "button",
        {
          type: "button",
          className: getClassName33("breadcrumbLabel"),
          onClick: () => setUi({ itemSelector: breadcrumb.selector }),
          children: breadcrumb.label
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(ChevronRight, { size: 16 })
    ] }, i)),
    children
  ] });
};

// components/SidebarSection/index.tsx
var import_jsx_runtime82 = require("react/jsx-runtime");
var getClassName34 = get_class_name_factory_default("SidebarSection", styles_module_default25);
var SidebarSection = ({
  children,
  title,
  background,
  showBreadcrumbs,
  noBorderTop,
  isLoading
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { className: getClassName34({ noBorderTop }), style: { background }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("div", { className: getClassName34("title"), children: /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { className: getClassName34("breadcrumbs"), children: [
      showBreadcrumbs && /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(Breadcrumbs, {}),
      /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("div", { className: getClassName34("heading"), children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(Heading7, { rank: "2", size: "xs", children: title }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("div", { className: getClassName34("content"), children }),
    isLoading && /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("div", { className: getClassName34("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(Loader, { size: 32 }) })
  ] });
};

// components/Puck/components/Canvas/index.tsx
init_react_import();
init_css_box_model_esm();
var import_react88 = require("react");
init_store();

// components/ViewportControls/index.tsx
init_react_import();
init_lucide_react();
init_IconButton2();
init_store();
var import_react86 = require("react");
init_lib();

// css-module:/Users/mariusmuller/puck/packages/core/components/ViewportControls/styles.module.css#css-module
init_react_import();
var styles_module_default27 = { "ViewportControls": "_ViewportControls_e3unb_1", "ViewportControls--fullScreen": "_ViewportControls--fullScreen_e3unb_5", "ViewportControls-toggleButton": "_ViewportControls-toggleButton_e3unb_14", "ViewportControls--isExpanded": "_ViewportControls--isExpanded_e3unb_38", "ViewportControls-actions": "_ViewportControls-actions_e3unb_42", "ViewportControls-actionsInner": "_ViewportControls-actionsInner_e3unb_46", "ViewportControls-divider": "_ViewportControls-divider_e3unb_75", "ViewportControls-zoomSelect": "_ViewportControls-zoomSelect_e3unb_81", "ViewportControls-zoom": "_ViewportControls-zoom_e3unb_81", "ViewportButton-inner": "_ViewportButton-inner_e3unb_111", "ViewportButton--isActive": "_ViewportButton--isActive_e3unb_119" };

// components/ViewportControls/index.tsx
var import_jsx_runtime83 = require("react/jsx-runtime");
var icons = {
  Smartphone: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Smartphone, { size: 16 }),
  Tablet: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Tablet, { size: 16 }),
  Monitor: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Monitor, { size: 16 }),
  FullWidth: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Expand, { size: 16 })
};
var getClassName35 = get_class_name_factory_default("ViewportControls", styles_module_default27);
var getClassNameButton = get_class_name_factory_default("ViewportButton", styles_module_default27);
var ActionButton = ({
  children,
  title,
  onClick,
  isActive,
  disabled
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("span", { className: getClassNameButton({ isActive }), suppressHydrationWarning: true, children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
    IconButton,
    {
      type: "button",
      title,
      disabled: disabled || isActive,
      onClick,
      suppressHydrationWarning: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("span", { className: getClassNameButton("inner"), children })
    }
  ) });
};
var defaultZoomOptions = [
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 },
  { label: "125%", value: 1.25 },
  { label: "150%", value: 1.5 },
  { label: "200%", value: 2 }
];
var ViewportControls = ({
  autoZoom,
  zoom,
  onViewportChange,
  onZoom,
  fullScreen
}) => {
  var _a, _b;
  const viewports = useAppStore((s) => s.viewports);
  const uiViewports = useAppStore((s) => s.state.ui.viewports);
  const defaultsContainAutoZoom = defaultZoomOptions.find(
    (option) => option.value === autoZoom
  );
  const zoomOptions = (0, import_react86.useMemo)(
    () => [
      ...defaultZoomOptions,
      ...defaultsContainAutoZoom ? [] : [
        {
          value: autoZoom,
          label: `${(autoZoom * 100).toFixed(0)}% (Auto)`
        }
      ]
    ].filter((a) => a.value <= autoZoom).sort((a, b) => a.value > b.value ? 1 : -1),
    [autoZoom]
  );
  const [activeViewport, setActiveViewport] = (0, import_react86.useState)(
    uiViewports.current.width
  );
  (0, import_react86.useEffect)(() => {
    setActiveViewport(uiViewports.current.width);
  }, [uiViewports.current]);
  const [isExpanded, setIsExpanded] = (0, import_react86.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)(
    "div",
    {
      className: getClassName35({ isExpanded, fullScreen }),
      suppressHydrationWarning: true,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { className: getClassName35("actions"), children: /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { className: getClassName35("actionsInner"), children: [
          viewports.map((viewport, i) => /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
            ActionButton,
            {
              title: viewport.label ? `Switch to ${viewport.label} viewport` : "Switch viewport",
              onClick: () => {
                setActiveViewport(viewport.width);
                onViewportChange(viewport);
              },
              isActive: activeViewport === viewport.width,
              children: typeof viewport.icon === "string" ? icons[viewport.icon] || viewport.icon : viewport.icon || icons.Smartphone
            },
            i
          )),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { className: getClassName35("divider") }),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
            ActionButton,
            {
              title: "Zoom viewport out",
              disabled: zoom <= ((_a = zoomOptions[0]) == null ? void 0 : _a.value),
              onClick: (e) => {
                e.stopPropagation();
                onZoom(
                  zoomOptions[Math.max(
                    zoomOptions.findIndex((option) => option.value === zoom) - 1,
                    0
                  )].value
                );
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(ZoomOut, { size: 16 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
            ActionButton,
            {
              title: "Zoom viewport in",
              disabled: zoom >= ((_b = zoomOptions[zoomOptions.length - 1]) == null ? void 0 : _b.value),
              onClick: (e) => {
                e.stopPropagation();
                onZoom(
                  zoomOptions[Math.min(
                    zoomOptions.findIndex((option) => option.value === zoom) + 1,
                    zoomOptions.length - 1
                  )].value
                );
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(ZoomIn, { size: 16 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { className: getClassName35("zoom"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { className: getClassName35("divider") }),
            /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
              "select",
              {
                className: getClassName35("zoomSelect"),
                value: zoom.toString(),
                onClick: (e) => {
                  e.stopPropagation();
                },
                onChange: (e) => {
                  onZoom(parseFloat(e.currentTarget.value));
                },
                children: zoomOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
                  "option",
                  {
                    value: option.value,
                    label: option.label
                  },
                  option.label
                ))
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
          "button",
          {
            className: getClassName35("toggleButton"),
            title: "Toggle viewport menu",
            onClick: () => setIsExpanded((s) => !s),
            children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(X, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Monitor, { size: 16 })
          }
        )
      ]
    }
  );
};

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Canvas/styles.module.css#css-module
init_react_import();
var styles_module_default28 = { "PuckCanvas": "_PuckCanvas_t6s9b_1", "PuckCanvas-controls": "_PuckCanvas-controls_t6s9b_17", "PuckCanvas--fullScreen": "_PuckCanvas--fullScreen_t6s9b_22", "PuckCanvas-inner": "_PuckCanvas-inner_t6s9b_33", "PuckCanvas-root": "_PuckCanvas-root_t6s9b_42", "PuckCanvas--ready": "_PuckCanvas--ready_t6s9b_67", "PuckCanvas-loader": "_PuckCanvas-loader_t6s9b_72", "PuckCanvas--showLoader": "_PuckCanvas--showLoader_t6s9b_82" };

// components/Puck/components/Canvas/index.tsx
init_lib();
init_Loader();
var import_shallow10 = require("zustand/react/shallow");

// lib/frame-context.tsx
init_react_import();
var import_react87 = require("react");
var import_jsx_runtime84 = require("react/jsx-runtime");
var FrameContext = (0, import_react87.createContext)(null);
var FrameProvider = ({
  children
}) => {
  const frameRef = (0, import_react87.useRef)(null);
  const value = (0, import_react87.useMemo)(
    () => ({
      frameRef
    }),
    []
  );
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(FrameContext.Provider, { value, children });
};
var useCanvasFrame = () => {
  const context = (0, import_react87.useContext)(FrameContext);
  if (context === null) {
    throw new Error("useCanvasFrame must be used within a FrameProvider");
  }
  return context;
};

// components/Puck/components/Canvas/index.tsx
init_default_viewports();
var import_jsx_runtime85 = require("react/jsx-runtime");
var getClassName36 = get_class_name_factory_default("PuckCanvas", styles_module_default28);
var ZOOM_ON_CHANGE = true;
var TRANSITION_DURATION = 150;
var Canvas = () => {
  var _a;
  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);
  const {
    _experimentalFullScreenCanvas,
    viewports: viewportOptions = defaultViewports,
    ui: uiProp
  } = usePropsContext();
  const {
    dispatch,
    overrides,
    setUi,
    zoomConfig,
    setZoomConfig,
    status,
    iframe
  } = useAppStore(
    (0, import_shallow10.useShallow)((s) => ({
      dispatch: s.dispatch,
      overrides: s.overrides,
      setUi: s.setUi,
      zoomConfig: s.zoomConfig,
      setZoomConfig: s.setZoomConfig,
      status: s.status,
      iframe: s.iframe
    }))
  );
  const {
    leftSideBarVisible,
    rightSideBarVisible,
    leftSideBarWidth,
    rightSideBarWidth,
    viewports
  } = useAppStore(
    (0, import_shallow10.useShallow)((s) => ({
      leftSideBarVisible: s.state.ui.leftSideBarVisible,
      rightSideBarVisible: s.state.ui.rightSideBarVisible,
      leftSideBarWidth: s.state.ui.leftSideBarWidth,
      rightSideBarWidth: s.state.ui.rightSideBarWidth,
      viewports: s.state.ui.viewports
    }))
  );
  const [showTransition, setShowTransition] = (0, import_react88.useState)(false);
  const isResizingRef = (0, import_react88.useRef)(false);
  const defaultRender = (0, import_react88.useMemo)(() => {
    const PuckDefault = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_jsx_runtime85.Fragment, { children });
    return PuckDefault;
  }, []);
  const CustomPreview = (0, import_react88.useMemo)(
    () => overrides.preview || defaultRender,
    [overrides]
  );
  const getFrameDimensions = (0, import_react88.useCallback)(() => {
    if (frameRef.current) {
      const frame = frameRef.current;
      const box = getBox(frame);
      return { width: box.contentBox.width, height: box.contentBox.height };
    }
    return { width: 0, height: 0 };
  }, [frameRef]);
  (0, import_react88.useEffect)(() => {
    resetAutoZoom();
  }, [
    frameRef,
    leftSideBarVisible,
    rightSideBarVisible,
    leftSideBarWidth,
    rightSideBarWidth,
    viewports
  ]);
  (0, import_react88.useEffect)(() => {
    const { height: frameHeight } = getFrameDimensions();
    if (viewports.current.height === "auto") {
      setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), {
        rootHeight: frameHeight / zoomConfig.zoom
      }));
    }
  }, [zoomConfig.zoom, getFrameDimensions, setZoomConfig]);
  (0, import_react88.useEffect)(() => {
    if (ZOOM_ON_CHANGE) {
      resetAutoZoom();
    }
  }, [viewports.current.width, viewports]);
  (0, import_react88.useEffect)(() => {
    if (!frameRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (!isResizingRef.current) {
        resetAutoZoom();
      }
    });
    resizeObserver.observe(frameRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [frameRef.current]);
  const [showLoader, setShowLoader] = (0, import_react88.useState)(false);
  (0, import_react88.useEffect)(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 500);
  }, []);
  const appStoreApi = useAppStoreApi();
  (0, import_react88.useEffect)(() => {
    var _a2, _b;
    if (typeof window === "undefined") return;
    if ((_a2 = uiProp == null ? void 0 : uiProp.viewports) == null ? void 0 : _a2.current) return;
    const viewportWidth = window.innerWidth;
    const frameWidth = (_b = frameRef.current) == null ? void 0 : _b.getBoundingClientRect().width;
    if (!viewportWidth) return;
    if (!frameWidth) return;
    if (viewportOptions.length === 0) return;
    const fullWidthViewport = Object.values(viewportOptions).find(
      (v) => v.width === "100%"
    );
    const containsFullWidthViewport = !!fullWidthViewport;
    const viewportDifferences = Object.entries(viewportOptions).filter(([_, value]) => value.width !== "100%").map(([key, value]) => ({
      key,
      diff: Math.abs(
        viewportWidth - (typeof value.width === "string" ? viewportWidth : value.width)
      ),
      value
    })).sort((a, b) => a.diff > b.diff ? 1 : -1);
    let closestViewport = viewportDifferences[0].value;
    if (closestViewport.width < frameWidth && containsFullWidthViewport) {
      closestViewport = fullWidthViewport;
    }
    if (iframe.enabled) {
      const s = appStoreApi.getState();
      const appState = {
        state: __spreadProps(__spreadValues({}, s.state), {
          ui: __spreadProps(__spreadValues({}, s.state.ui), {
            viewports: __spreadProps(__spreadValues({}, s.state.ui.viewports), {
              current: __spreadProps(__spreadValues({}, s.state.ui.viewports.current), {
                height: (closestViewport == null ? void 0 : closestViewport.height) || "auto",
                width: closestViewport == null ? void 0 : closestViewport.width
              })
            })
          })
        })
      };
      let history = s.history;
      if (s.history.histories.length === 1) {
        history = __spreadProps(__spreadValues({}, history), { histories: [appState] });
      }
      appStoreApi.setState(__spreadProps(__spreadValues({}, appState), { history }));
    }
  }, [
    viewportOptions,
    frameRef.current,
    iframe,
    appStoreApi,
    (_a = uiProp == null ? void 0 : uiProp.viewports) == null ? void 0 : _a.current
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(
    "div",
    {
      className: getClassName36({
        ready: status === "READY" || !iframe.enabled || !iframe.waitForStyles,
        showLoader,
        fullScreen: _experimentalFullScreenCanvas
      }),
      onClick: (e) => {
        const el = e.target;
        if (!el.hasAttribute("data-puck-component") && !el.hasAttribute("data-puck-dropzone")) {
          dispatch({
            type: "setUi",
            ui: { itemSelector: null },
            recordHistory: true
          });
        }
      },
      children: [
        viewports.controlsVisible && iframe.enabled && /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: getClassName36("controls"), children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
          ViewportControls,
          {
            fullScreen: _experimentalFullScreenCanvas,
            autoZoom: zoomConfig.autoZoom,
            zoom: zoomConfig.zoom,
            onViewportChange: (viewport) => {
              setShowTransition(true);
              isResizingRef.current = true;
              const uiViewport = __spreadProps(__spreadValues({}, viewport), {
                height: viewport.height || "auto",
                zoom: zoomConfig.zoom
              });
              const newUi = {
                viewports: __spreadProps(__spreadValues({}, viewports), { current: uiViewport })
              };
              setUi(newUi);
              if (ZOOM_ON_CHANGE) {
                resetAutoZoom({
                  viewports: __spreadProps(__spreadValues({}, viewports), { current: uiViewport })
                });
              }
            },
            onZoom: (zoom) => {
              setShowTransition(true);
              isResizingRef.current = true;
              setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), { zoom }));
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: getClassName36("inner"), ref: frameRef, children: [
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
            "div",
            {
              className: getClassName36("root"),
              style: {
                width: iframe.enabled ? viewports.current.width : "100%",
                height: zoomConfig.rootHeight,
                transform: iframe.enabled ? `scale(${zoomConfig.zoom})` : void 0,
                transition: showTransition ? `width ${TRANSITION_DURATION}ms ease-out, height ${TRANSITION_DURATION}ms ease-out, transform ${TRANSITION_DURATION}ms ease-out` : "",
                overflow: iframe.enabled ? void 0 : "auto"
              },
              suppressHydrationWarning: true,
              id: "puck-canvas-root",
              onTransitionEnd: () => {
                setShowTransition(false);
                isResizingRef.current = false;
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(CustomPreview, { children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Preview2, {}) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: getClassName36("loader"), children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Loader, { size: 24 }) })
        ] })
      ]
    }
  );
};

// lib/use-sidebar-resize.ts
init_react_import();
var import_react89 = require("react");
init_store();
function useSidebarResize(position, dispatch) {
  const [width, setWidth] = (0, import_react89.useState)(null);
  const sidebarRef = (0, import_react89.useRef)(null);
  const storeWidth = useAppStore(
    (s) => position === "left" ? s.state.ui.leftSideBarWidth : s.state.ui.rightSideBarWidth
  );
  (0, import_react89.useEffect)(() => {
    if (typeof window !== "undefined" && !storeWidth) {
      try {
        const savedWidths = localStorage.getItem("puck-sidebar-widths");
        if (savedWidths) {
          const widths = JSON.parse(savedWidths);
          const savedWidth = widths[position];
          const key = position === "left" ? "leftSideBarWidth" : "rightSideBarWidth";
          if (savedWidth) {
            dispatch({
              type: "setUi",
              ui: {
                [key]: savedWidth
              }
            });
          }
        }
      } catch (error) {
        console.error(
          `Failed to load ${position} sidebar width from localStorage`,
          error
        );
      }
    }
  }, [dispatch, position, storeWidth]);
  (0, import_react89.useEffect)(() => {
    if (storeWidth !== void 0) {
      setWidth(storeWidth);
    }
  }, [storeWidth]);
  const handleResizeEnd = (0, import_react89.useCallback)(
    (width2) => {
      dispatch({
        type: "setUi",
        ui: {
          [position === "left" ? "leftSideBarWidth" : "rightSideBarWidth"]: width2
        }
      });
      let widths = {};
      try {
        const savedWidths = localStorage.getItem("puck-sidebar-widths");
        widths = savedWidths ? JSON.parse(savedWidths) : {};
      } catch (error) {
        console.error(
          `Failed to save ${position} sidebar width to localStorage`,
          error
        );
      } finally {
        localStorage.setItem(
          "puck-sidebar-widths",
          JSON.stringify(__spreadProps(__spreadValues({}, widths), {
            [position]: width2
          }))
        );
      }
      window.dispatchEvent(
        new CustomEvent("viewportchange", {
          bubbles: true,
          cancelable: false
        })
      );
    },
    [dispatch, position]
  );
  return {
    width,
    setWidth,
    sidebarRef,
    handleResizeEnd
  };
}

// components/Puck/components/Sidebar/index.tsx
init_react_import();

// components/Puck/components/ResizeHandle/index.tsx
init_react_import();
var import_react90 = require("react");
init_get_class_name_factory();

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/ResizeHandle/styles.module.css#css-module
init_react_import();
var styles_module_default29 = { "ResizeHandle": "_ResizeHandle_144bf_2", "ResizeHandle--left": "_ResizeHandle--left_144bf_16", "ResizeHandle--right": "_ResizeHandle--right_144bf_20" };

// components/Puck/components/ResizeHandle/index.tsx
init_lib();
var import_jsx_runtime86 = require("react/jsx-runtime");
var getClassName37 = get_class_name_factory_default("ResizeHandle", styles_module_default29);
var ResizeHandle = ({
  position,
  sidebarRef,
  onResize,
  onResizeEnd
}) => {
  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);
  const handleRef = (0, import_react90.useRef)(null);
  const isDragging = (0, import_react90.useRef)(false);
  const startX = (0, import_react90.useRef)(0);
  const startWidth = (0, import_react90.useRef)(0);
  const handleMouseMove = (0, import_react90.useCallback)(
    (e) => {
      if (!isDragging.current) return;
      const delta = e.clientX - startX.current;
      const newWidth = position === "left" ? startWidth.current + delta : startWidth.current - delta;
      const width = Math.max(192, newWidth);
      onResize(width);
      e.preventDefault();
    },
    [onResize, position]
  );
  const handleMouseUp = (0, import_react90.useCallback)(() => {
    var _a;
    if (!isDragging.current) return;
    isDragging.current = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
    const overlay = document.getElementById("resize-overlay");
    if (overlay) {
      document.body.removeChild(overlay);
    }
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    const finalWidth = ((_a = sidebarRef.current) == null ? void 0 : _a.getBoundingClientRect().width) || 0;
    onResizeEnd(finalWidth);
    resetAutoZoom();
  }, [onResizeEnd]);
  const handleMouseDown = (0, import_react90.useCallback)(
    (e) => {
      var _a;
      isDragging.current = true;
      startX.current = e.clientX;
      startWidth.current = ((_a = sidebarRef.current) == null ? void 0 : _a.getBoundingClientRect().width) || 0;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      const overlay = document.createElement("div");
      overlay.id = "resize-overlay";
      overlay.setAttribute("data-resize-overlay", "");
      document.body.appendChild(overlay);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      e.preventDefault();
    },
    [position, handleMouseMove, handleMouseUp]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
    "div",
    {
      ref: handleRef,
      className: getClassName37({ [position]: true }),
      onMouseDown: handleMouseDown
    }
  );
};

// components/Puck/components/Sidebar/index.tsx
init_get_class_name_factory();

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Sidebar/styles.module.css#css-module
init_react_import();
var styles_module_default30 = { "Sidebar": "_Sidebar_o396p_1", "Sidebar--isVisible": "_Sidebar--isVisible_o396p_9", "Sidebar--left": "_Sidebar--left_o396p_13", "Sidebar--right": "_Sidebar--right_o396p_25", "Sidebar-resizeHandle": "_Sidebar-resizeHandle_o396p_37" };

// components/Puck/components/Sidebar/index.tsx
var import_jsx_runtime87 = require("react/jsx-runtime");
var getClassName38 = get_class_name_factory_default("Sidebar", styles_module_default30);
var Sidebar = ({
  position,
  sidebarRef,
  isVisible,
  onResize,
  onResizeEnd,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(import_jsx_runtime87.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
      "div",
      {
        ref: sidebarRef,
        className: getClassName38({ [position]: true, isVisible }),
        children
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", { className: `${getClassName38("resizeHandle")}`, children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
      ResizeHandle,
      {
        position,
        sidebarRef,
        onResize,
        onResizeEnd
      }
    ) })
  ] });
};

// lib/use-delete-hotkeys.ts
init_react_import();
var import_react91 = require("react");
init_use_hotkey();
init_store();
var isElementVisible = (element) => {
  let current = element;
  while (current && current !== document.body) {
    const style = window.getComputedStyle(current);
    if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0" || current.getAttribute("aria-hidden") === "true" || current.hasAttribute("hidden")) {
      return false;
    }
    current = current.parentElement;
  }
  return true;
};
var shouldBlockDeleteHotkey = (e) => {
  var _a;
  if (e == null ? void 0 : e.defaultPrevented) return true;
  const origin = ((_a = e == null ? void 0 : e.composedPath) == null ? void 0 : _a.call(e)[0]) || (e == null ? void 0 : e.target) || document.activeElement;
  if (origin instanceof HTMLElement) {
    const tag = origin.tagName.toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return true;
    if (origin.isContentEditable) return true;
    const role = origin.getAttribute("role");
    if (role === "textbox" || role === "combobox" || role === "searchbox" || role === "listbox" || role === "grid") {
      return true;
    }
  }
  const modal = document.querySelector(
    'dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]'
  );
  if (modal && isElementVisible(modal)) {
    return true;
  }
  return false;
};
var useDeleteHotkeys = () => {
  const appStore = useAppStoreApi();
  const deleteSelectedComponent = (0, import_react91.useCallback)(
    (e) => {
      var _a;
      if (shouldBlockDeleteHotkey(e)) {
        return false;
      }
      const { state, dispatch, permissions, selectedItem } = appStore.getState();
      const sel = (_a = state.ui) == null ? void 0 : _a.itemSelector;
      if (!(sel == null ? void 0 : sel.zone) || !selectedItem) return true;
      if (!permissions.getPermissions({ item: selectedItem }).delete)
        return true;
      dispatch({
        type: "remove",
        index: sel.index,
        zone: sel.zone
      });
      return true;
    },
    [appStore]
  );
  useHotkey({ delete: true }, deleteSelectedComponent);
  useHotkey({ backspace: true }, deleteSelectedComponent);
};

// components/Puck/components/Nav/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Nav/styles.module.css#css-module
init_react_import();
var styles_module_default31 = { "Nav": "_Nav_1tvxq_1", "Nav-list": "_Nav-list_1tvxq_5", "Nav-mobileActions": "_Nav-mobileActions_1tvxq_23", "NavItem-link": "_NavItem-link_1tvxq_38", "NavItem": "_NavItem_1tvxq_38", "NavItem-linkIcon": "_NavItem-linkIcon_1tvxq_89", "NavItem--active": "_NavItem--active_1tvxq_94", "NavItem--mobileOnly": "_NavItem--mobileOnly_1tvxq_121", "NavItem--desktopOnly": "_NavItem--desktopOnly_1tvxq_126" };

// components/Puck/components/Nav/index.tsx
init_lib();
var import_jsx_runtime88 = require("react/jsx-runtime");
var getClassName39 = get_class_name_factory_default("Nav", styles_module_default31);
var getClassNameItem3 = get_class_name_factory_default("NavItem", styles_module_default31);
var MenuItem = ({
  label,
  icon,
  onClick,
  isActive,
  mobileOnly,
  desktopOnly
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
    "li",
    {
      className: getClassNameItem3({
        active: isActive,
        mobileOnly,
        desktopOnly
      }),
      children: onClick && /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { className: getClassNameItem3("link"), onClick, children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("span", { className: getClassNameItem3("linkIcon"), children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("span", { className: getClassNameItem3("linkLabel"), children: label })
      ] })
    }
  );
};
var Nav = ({
  items,
  mobileActions
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("nav", { className: getClassName39(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("ul", { className: getClassName39("list"), children: Object.entries(items).map(([key, item]) => /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(MenuItem, __spreadValues({}, item), key)) }),
    mobileActions && /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: getClassName39("mobileActions"), children: mobileActions })
  ] });
};

// components/Puck/components/Layout/index.tsx
init_IconButton2();
init_lucide_react();

// plugins/blocks/index.tsx
init_react_import();
init_lucide_react();

// css-module:/Users/mariusmuller/puck/packages/core/plugins/blocks/styles.module.css#css-module
init_react_import();
var styles_module_default32 = { "BlocksPlugin": "_BlocksPlugin_1ey1i_1" };

// plugins/blocks/index.tsx
init_lib();
var import_jsx_runtime89 = require("react/jsx-runtime");
var getClassName40 = get_class_name_factory_default("BlocksPlugin", styles_module_default32);
var blocksPlugin = () => ({
  name: "blocks",
  label: "Blocks",
  render: () => /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("div", { className: getClassName40(), children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(Components, {}) }),
  icon: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(Hammer, {})
});

// plugins/outline/index.tsx
init_react_import();
init_lucide_react();

// css-module:/Users/mariusmuller/puck/packages/core/plugins/outline/styles.module.css#css-module
init_react_import();
var styles_module_default33 = { "OutlinePlugin": "_OutlinePlugin_q92j6_1" };

// plugins/outline/index.tsx
init_lib();
var import_jsx_runtime90 = require("react/jsx-runtime");
var getClassName41 = get_class_name_factory_default("OutlinePlugin", styles_module_default33);
var outlinePlugin = () => ({
  name: "outline",
  label: "Outline",
  render: () => /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: getClassName41(), children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(Outline, {}) }),
  icon: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(Layers, {})
});

// plugins/fields/index.tsx
init_react_import();
init_lucide_react();
init_store();

// css-module:/Users/mariusmuller/puck/packages/core/plugins/fields/styles.module.css#css-module
init_react_import();
var styles_module_default34 = { "FieldsPlugin": "_FieldsPlugin_nd930_1", "FieldsPlugin-header": "_FieldsPlugin-header_nd930_7" };

// plugins/fields/index.tsx
init_lib();
var import_jsx_runtime91 = require("react/jsx-runtime");
var getClassName42 = get_class_name_factory_default("FieldsPlugin", styles_module_default34);
var CurrentTitle = () => {
  const label = useAppStore((s) => {
    var _a, _b;
    const selectedItem = s.selectedItem;
    return selectedItem ? (_b = (_a = s.config.components[selectedItem.type]) == null ? void 0 : _a.label) != null ? _b : selectedItem.type : "Page";
  });
  return label;
};
var fieldsPlugin = ({ desktopSideBar = "right" } = {}) => ({
  name: "fields",
  label: "Fields",
  render: () => /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)("div", { className: getClassName42(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("div", { className: getClassName42("header"), children: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(Breadcrumbs, { numParents: 2, children: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(CurrentTitle, {}) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(Fields, {})
  ] }),
  icon: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(RectangleEllipsis, {}),
  mobileOnly: desktopSideBar === "right"
});

// components/Puck/components/Layout/index.tsx
var import_jsx_runtime92 = require("react/jsx-runtime");
var getClassName43 = get_class_name_factory_default("Puck", styles_module_default22);
var getLayoutClassName = get_class_name_factory_default("PuckLayout", styles_module_default22);
var getPluginTabClassName = get_class_name_factory_default("PuckPluginTab", styles_module_default22);
var FieldSideBar = () => {
  const title = useAppStore(
    (s) => {
      var _a, _b, _c;
      return s.selectedItem ? (_b = (_a = s.config.components[s.selectedItem.type]) == null ? void 0 : _a["label"]) != null ? _b : s.selectedItem.type.toString() : ((_c = s.config.root) == null ? void 0 : _c.label) || "Page";
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(SidebarSection, { noBorderTop: true, showBreadcrumbs: true, title, children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Fields, {}) });
};
var PluginTab = ({
  children,
  visible,
  mobileOnly
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: getPluginTabClassName({ visible, mobileOnly }), children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: getPluginTabClassName("body"), children }) });
};
var Layout = ({ children }) => {
  const {
    iframe: _iframe,
    dnd,
    initialHistory: _initialHistory,
    plugins,
    height
  } = usePropsContext();
  const iframe = (0, import_react92.useMemo)(
    () => __spreadValues({
      enabled: true,
      waitForStyles: true
    }, _iframe),
    [_iframe]
  );
  useInjectGlobalCss(iframe.enabled);
  const dispatch = useAppStore((s) => s.dispatch);
  const leftSideBarVisible = useAppStore((s) => s.state.ui.leftSideBarVisible);
  const rightSideBarVisible = useAppStore(
    (s) => s.state.ui.rightSideBarVisible
  );
  const instanceId = useAppStore((s) => s.instanceId);
  const {
    width: leftWidth,
    setWidth: setLeftWidth,
    sidebarRef: leftSidebarRef,
    handleResizeEnd: handleLeftSidebarResizeEnd
  } = useSidebarResize("left", dispatch);
  const {
    width: rightWidth,
    setWidth: setRightWidth,
    sidebarRef: rightSidebarRef,
    handleResizeEnd: handleRightSidebarResizeEnd
  } = useSidebarResize("right", dispatch);
  (0, import_react92.useEffect)(() => {
    if (!window.matchMedia("(min-width: 638px)").matches) {
      dispatch({
        type: "setUi",
        ui: {
          leftSideBarVisible: false,
          rightSideBarVisible: false
        }
      });
    }
    const handleResize = () => {
      if (!window.matchMedia("(min-width: 638px)").matches) {
        dispatch({
          type: "setUi",
          ui: (ui) => __spreadValues(__spreadValues({}, ui), ui.rightSideBarVisible ? { leftSideBarVisible: false } : {})
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const overrides = useAppStore((s) => s.overrides);
  const CustomPuck = (0, import_react92.useMemo)(
    () => overrides.puck || DefaultOverride,
    [overrides]
  );
  const [mounted, setMounted] = (0, import_react92.useState)(false);
  (0, import_react92.useEffect)(() => {
    setMounted(true);
  }, []);
  const ready = useAppStore((s) => s.status === "READY");
  useMonitorHotkeys();
  (0, import_react92.useEffect)(() => {
    if (ready && iframe.enabled) {
      const frameDoc = getFrame();
      if (frameDoc) {
        return monitorHotkeys(frameDoc);
      }
    }
  }, [ready, iframe.enabled]);
  usePreviewModeHotkeys();
  useDeleteHotkeys();
  const layoutOptions = {};
  if (leftWidth) {
    layoutOptions["--puck-user-left-side-bar-width"] = `${leftWidth}px`;
  }
  if (rightWidth) {
    layoutOptions["--puck-user-right-side-bar-width"] = `${rightWidth}px`;
  }
  const setUi = useAppStore((s) => s.setUi);
  const currentPlugin = useAppStore((s) => {
    var _a;
    return (_a = s.state.ui.plugin) == null ? void 0 : _a.current;
  });
  const appStoreApi = useAppStoreApi();
  const [mobilePanelHeightMode, setMobilePanelHeightMode] = (0, import_react92.useState)("toggle");
  const hasLegacySideBarPlugin = (0, import_react92.useMemo)(
    () => !!(plugins == null ? void 0 : plugins.find((p) => p.name === "legacy-side-bar")),
    [plugins]
  );
  const pluginItems = (0, import_react92.useMemo)(() => {
    const details = {};
    const defaultPlugins = [blocksPlugin(), outlinePlugin()];
    const isLegacy = (plugin) => plugin.name === "legacy-side-bar" ? -1 : 0;
    const combinedPlugins = [
      ...defaultPlugins,
      ...plugins != null ? plugins : []
    ].sort((a, b) => isLegacy(a) - isLegacy(b));
    if (!(plugins == null ? void 0 : plugins.some((p) => p.name === "fields"))) {
      combinedPlugins.push(fieldsPlugin());
    }
    combinedPlugins == null ? void 0 : combinedPlugins.forEach((plugin) => {
      var _a, _b;
      if (plugin.name && plugin.render) {
        if (details[plugin.name]) {
          delete details[plugin.name];
        }
        details[plugin.name] = {
          label: (_a = plugin.label) != null ? _a : plugin.name,
          icon: (_b = plugin.icon) != null ? _b : /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(ToyBrick, {}),
          onClick: () => {
            var _a2;
            setMobilePanelHeightMode((_a2 = plugin.mobilePanelHeight) != null ? _a2 : "toggle");
            if (plugin.name === currentPlugin) {
              if (leftSideBarVisible) {
                setUi({ leftSideBarVisible: false });
              } else {
                setUi({ leftSideBarVisible: true });
              }
            } else {
              if (plugin.name) {
                setUi({
                  plugin: { current: plugin.name },
                  leftSideBarVisible: true
                });
              }
            }
          },
          isActive: leftSideBarVisible && currentPlugin === plugin.name,
          render: plugin.render,
          mobileOnly: hasLegacySideBarPlugin || plugin.mobileOnly,
          desktopOnly: plugin.name === "legacy-side-bar" || plugin.desktopOnly
        };
      }
    });
    return details;
  }, [plugins, currentPlugin, appStoreApi, leftSideBarVisible]);
  (0, import_react92.useEffect)(() => {
    if (!currentPlugin) {
      const names = Object.keys(pluginItems);
      setUi({ plugin: { current: names[0] } });
    }
  }, [pluginItems, currentPlugin]);
  const hasDesktopFieldsPlugin = pluginItems["fields"] && pluginItems["fields"].mobileOnly === false;
  const mobilePanelExpanded = useAppStore(
    (s) => {
      var _a;
      return (_a = s.state.ui.mobilePanelExpanded) != null ? _a : false;
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
    "div",
    {
      className: `Puck ${getClassName43({
        hidePlugins: hasLegacySideBarPlugin
      })}`,
      id: instanceId,
      style: { height },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(DragDropContext, { disableAutoScroll: dnd == null ? void 0 : dnd.disableAutoScroll, children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(CustomPuck, { children: children || /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(FrameProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
          "div",
          {
            className: getLayoutClassName({
              leftSideBarVisible,
              mounted,
              rightSideBarVisible: !hasDesktopFieldsPlugin && rightSideBarVisible,
              isExpanded: mobilePanelExpanded,
              mobilePanelHeightToggle: mobilePanelHeightMode === "toggle",
              mobilePanelHeightMinContent: mobilePanelHeightMode === "min-content"
            }),
            style: { height },
            children: /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
              "div",
              {
                className: getLayoutClassName("inner"),
                style: layoutOptions,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: getLayoutClassName("header"), children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Header, { hidePlugins: hasLegacySideBarPlugin }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: getLayoutClassName("nav"), children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                    Nav,
                    {
                      items: pluginItems,
                      mobileActions: leftSideBarVisible && mobilePanelHeightMode === "toggle" && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                        IconButton,
                        {
                          type: "button",
                          title: "maximize",
                          onClick: () => {
                            setUi({
                              mobilePanelExpanded: !mobilePanelExpanded
                            });
                          },
                          children: mobilePanelExpanded ? /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Minimize2, { size: 21 }) : /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Maximize2, { size: 21 })
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                    Sidebar,
                    {
                      position: "left",
                      sidebarRef: leftSidebarRef,
                      isVisible: leftSideBarVisible,
                      onResize: setLeftWidth,
                      onResizeEnd: handleLeftSidebarResizeEnd,
                      children: Object.entries(pluginItems).map(
                        ([id, { mobileOnly, render: Render2, label }]) => /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                          PluginTab,
                          {
                            visible: currentPlugin === id,
                            mobileOnly,
                            children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Render2, {})
                          },
                          id
                        )
                      )
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Canvas, {}),
                  !hasDesktopFieldsPlugin && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
                    Sidebar,
                    {
                      position: "right",
                      sidebarRef: rightSidebarRef,
                      isVisible: rightSideBarVisible,
                      onResize: setRightWidth,
                      onResizeEnd: handleRightSidebarResizeEnd,
                      children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(FieldSideBar, {})
                    }
                  )
                ]
              }
            )
          }
        ) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { id: "puck-portal-root", className: getClassName43("portal") })
      ]
    }
  );
};

// components/Puck/index.tsx
var import_jsx_runtime93 = require("react/jsx-runtime");
var propsContext = (0, import_react93.createContext)({});
function PropsProvider(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(propsContext.Provider, { value: props, children: props.children });
}
var usePropsContext = () => (0, import_react93.useContext)(propsContext);
function PuckProvider({ children }) {
  const {
    config,
    data: initialData,
    ui: initialUi,
    onChange,
    permissions = {},
    plugins,
    overrides,
    viewports = defaultViewports,
    iframe: _iframe,
    initialHistory: _initialHistory,
    metadata,
    onAction,
    fieldTransforms
  } = usePropsContext();
  const iframe = (0, import_react93.useMemo)(
    () => __spreadValues({
      enabled: true,
      waitForStyles: true
    }, _iframe),
    [_iframe]
  );
  const [generatedAppState] = (0, import_react93.useState)(() => {
    var _a, _b, _c;
    const initial = __spreadValues(__spreadValues({}, defaultAppState.ui), initialUi);
    let clientUiState = {};
    if (Object.keys((initialData == null ? void 0 : initialData.root) || {}).length > 0 && !((_a = initialData == null ? void 0 : initialData.root) == null ? void 0 : _a.props)) {
      console.warn(
        "Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically."
      );
    }
    const rootProps = ((_b = initialData == null ? void 0 : initialData.root) == null ? void 0 : _b.props) || (initialData == null ? void 0 : initialData.root) || {};
    const defaultedRootProps = __spreadValues(__spreadValues({}, (_c = config.root) == null ? void 0 : _c.defaultProps), rootProps);
    const root = populateIds(
      toComponent(__spreadProps(__spreadValues({}, initialData == null ? void 0 : initialData.root), { props: defaultedRootProps })),
      config
    );
    const newAppState = __spreadProps(__spreadValues({}, defaultAppState), {
      data: __spreadProps(__spreadValues({}, initialData), {
        root: __spreadProps(__spreadValues({}, initialData == null ? void 0 : initialData.root), { props: root.props }),
        content: initialData.content || []
      }),
      ui: __spreadProps(__spreadValues(__spreadValues({}, initial), clientUiState), {
        // Store categories under componentList on state to allow render functions and plugins to modify
        componentList: config.categories ? Object.entries(config.categories).reduce(
          (acc, [categoryName, category]) => {
            return __spreadProps(__spreadValues({}, acc), {
              [categoryName]: {
                title: category.title,
                components: category.components,
                expanded: category.defaultExpanded,
                visible: category.visible
              }
            });
          },
          {}
        ) : {}
      })
    });
    return walkAppState(newAppState, config);
  });
  const { appendData = true } = _initialHistory || {};
  const [blendedHistories] = (0, import_react93.useState)(
    [
      ...(_initialHistory == null ? void 0 : _initialHistory.histories) || [],
      ...appendData ? [{ state: generatedAppState }] : []
    ].map((history) => {
      let newState = __spreadValues(__spreadValues({}, generatedAppState), history.state);
      if (!history.state.indexes) {
        newState = walkAppState(newState, config);
      }
      return __spreadProps(__spreadValues({}, history), {
        state: newState
      });
    })
  );
  const initialHistoryIndex = (0, import_react93.useMemo)(() => {
    if ((_initialHistory == null ? void 0 : _initialHistory.index) !== void 0 && (_initialHistory == null ? void 0 : _initialHistory.index) >= 0 && (_initialHistory == null ? void 0 : _initialHistory.index) < blendedHistories.length) {
      return _initialHistory == null ? void 0 : _initialHistory.index;
    }
    return blendedHistories.length - 1;
  }, []);
  const initialAppState = blendedHistories[initialHistoryIndex].state;
  const loadedOverrides = useLoadedOverrides({
    overrides,
    plugins
  });
  const loadedFieldTransforms = (0, import_react93.useMemo)(() => {
    const _plugins = plugins || [];
    const pluginFieldTransforms = _plugins.reduce(
      (acc, plugin) => __spreadValues(__spreadValues({}, acc), plugin.fieldTransforms),
      {}
    );
    return __spreadValues(__spreadValues({}, pluginFieldTransforms), fieldTransforms);
  }, [fieldTransforms, plugins]);
  const instanceId = useSafeId();
  const generateAppStore = (0, import_react93.useCallback)(
    (state) => {
      return {
        instanceId,
        state,
        config,
        plugins: plugins || [],
        overrides: loadedOverrides,
        viewports,
        iframe,
        onAction,
        metadata,
        fieldTransforms: loadedFieldTransforms
      };
    },
    [
      instanceId,
      initialAppState,
      config,
      plugins,
      loadedOverrides,
      viewports,
      iframe,
      onAction,
      metadata,
      loadedFieldTransforms
    ]
  );
  const [appStore] = (0, import_react93.useState)(
    () => createAppStore(generateAppStore(initialAppState))
  );
  (0, import_react93.useEffect)(() => {
    if (process.env.NODE_ENV !== "production") {
      window.__PUCK_INTERNAL_DO_NOT_USE = { appStore };
    }
  }, [appStore]);
  (0, import_react93.useEffect)(() => {
    const state = appStore.getState().state;
    appStore.setState(__spreadValues({}, generateAppStore(state)));
  }, [config, plugins, loadedOverrides, viewports, iframe, onAction, metadata]);
  useRegisterHistorySlice(appStore, {
    histories: blendedHistories,
    index: initialHistoryIndex,
    initialAppState
  });
  const previousData = (0, import_react93.useRef)(null);
  (0, import_react93.useEffect)(() => {
    return appStore.subscribe(
      (s) => s.state.data,
      (data) => {
        if (onChange) {
          if ((0, import_fast_equals4.deepEqual)(data, previousData.current)) return;
          onChange(data);
          previousData.current = data;
        }
      }
    );
  }, [onChange]);
  useRegisterPermissionsSlice(appStore, permissions);
  const uPuckStore = useRegisterUsePuckStore(appStore);
  (0, import_react93.useEffect)(() => {
    const { resolveAndCommitData } = appStore.getState();
    resolveAndCommitData();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(appStoreContext.Provider, { value: appStore, children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(UsePuckStoreContext.Provider, { value: uPuckStore, children }) });
}
function Puck(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(PropsProvider, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(PuckProvider, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(Layout, { children: props.children }) })) }));
}
Puck.Components = Components;
Puck.Fields = Fields;
Puck.Layout = Layout;
Puck.Outline = Outline;
Puck.Preview = Preview2;

// bundle/core.ts
init_inner();

// lib/migrate.ts
init_react_import();
init_default_app_state();
init_walk_app_state();
init_walk_tree();
var migrations = [
  // Migrate root to root.props
  (data) => {
    const rootProps = data.root.props || data.root;
    if (Object.keys(data.root).length > 0 && !data.root.props) {
      console.warn(
        "Migration applied: Root props moved from `root` to `root.props`."
      );
      return __spreadProps(__spreadValues({}, data), {
        root: {
          props: __spreadValues({}, rootProps)
        }
      });
    }
    return data;
  },
  // Migrate zones to slots
  (data, config, migrationOptions) => {
    var _a, _b;
    if (!config) return data;
    console.log("Migrating DropZones to slots...");
    const updatedItems = {};
    const appState = __spreadProps(__spreadValues({}, defaultAppState), { data });
    const { indexes } = walkAppState(appState, config);
    const deletedCompounds = [];
    walkAppState(appState, config, (content, zoneCompound, zoneType) => {
      var _a2, _b2, _c;
      if (zoneType === "dropzone") {
        const [id, slotName] = zoneCompound.split(":");
        const nodeData = indexes.nodes[id].data;
        const componentType = nodeData.type;
        const configForComponent = id === "root" ? config.root : config.components[componentType];
        if (((_b2 = (_a2 = configForComponent == null ? void 0 : configForComponent.fields) == null ? void 0 : _a2[slotName]) == null ? void 0 : _b2.type) === "slot") {
          updatedItems[id] = __spreadProps(__spreadValues({}, nodeData), {
            props: __spreadProps(__spreadValues(__spreadValues({}, nodeData.props), (_c = updatedItems[id]) == null ? void 0 : _c.props), {
              [slotName]: content
            })
          });
          deletedCompounds.push(zoneCompound);
        }
        return content;
      }
      return content;
    });
    const updated = walkAppState(
      appState,
      config,
      (content) => content,
      (item) => {
        var _a2;
        return (_a2 = updatedItems[item.props.id]) != null ? _a2 : item;
      }
    );
    deletedCompounds.forEach((zoneCompound) => {
      var _a2;
      const [_, propName] = zoneCompound.split(":");
      console.log(
        `\u2713 Success: Migrated "${zoneCompound}" from DropZone to slot field "${propName}"`
      );
      (_a2 = updated.data.zones) == null ? true : delete _a2[zoneCompound];
    });
    if (migrationOptions == null ? void 0 : migrationOptions.migrateDynamicZonesForComponent) {
      const unmigratedZonesGrouped = {};
      Object.keys((_a = updated.data.zones) != null ? _a : {}).forEach((zoneCompound) => {
        var _a2;
        const [componentId, propName] = zoneCompound.split(":");
        const content = (_a2 = updated.data.zones) == null ? void 0 : _a2[zoneCompound];
        if (!content) {
          return;
        }
        if (!unmigratedZonesGrouped[componentId]) {
          unmigratedZonesGrouped[componentId] = {};
        }
        if (!unmigratedZonesGrouped[componentId][propName]) {
          unmigratedZonesGrouped[componentId][propName] = content;
        }
      });
      Object.keys(unmigratedZonesGrouped).forEach((componentId) => {
        updated.data = walkTree(updated.data, config, (content) => {
          return content.map((child) => {
            var _a2;
            if (child.props.id !== componentId) {
              return child;
            }
            const migrateFn = (_a2 = migrationOptions == null ? void 0 : migrationOptions.migrateDynamicZonesForComponent) == null ? void 0 : _a2[child.type];
            if (!migrateFn) {
              return child;
            }
            const zones = unmigratedZonesGrouped[componentId];
            const migratedProps = migrateFn(child.props, zones);
            Object.keys(zones).forEach((propName) => {
              var _a3;
              const zoneCompound = `${componentId}:${propName}`;
              console.log(`\u2713 Success: Migrated "${zoneCompound}" DropZone`);
              (_a3 = updated.data.zones) == null ? true : delete _a3[zoneCompound];
            });
            return __spreadProps(__spreadValues({}, child), {
              props: migratedProps
            });
          });
        });
      });
    }
    Object.keys((_b = updated.data.zones) != null ? _b : {}).forEach((zoneCompound) => {
      const [_, propName] = zoneCompound.split(":");
      throw new Error(
        `Could not migrate DropZone "${zoneCompound}" to slot field. No slot exists with the name "${propName}".`
      );
    });
    delete updated.data.zones;
    return updated.data;
  }
];
function migrate(data, config, migrationOptions) {
  return migrations == null ? void 0 : migrations.reduce(
    (acc, migration) => migration(acc, config, migrationOptions),
    data
  );
}

// lib/transform-props.ts
init_react_import();
init_walk_tree();

// lib/data/default-data.ts
init_react_import();
var defaultData = (data) => __spreadProps(__spreadValues({}, data), {
  root: data.root || {},
  content: data.content || []
});

// lib/transform-props.ts
function transformProps(data, propTransforms, config = { components: {} }) {
  const mapItem = (item) => {
    if (propTransforms[item.type]) {
      return __spreadProps(__spreadValues({}, item), {
        props: __spreadValues({
          id: item.props.id
        }, propTransforms[item.type](item.props))
      });
    }
    return item;
  };
  const defaultedData = defaultData(data);
  const rootProps = defaultedData.root.props || defaultedData.root;
  let newRoot = __spreadValues({}, defaultedData.root);
  if (propTransforms["root"]) {
    newRoot.props = propTransforms["root"](rootProps);
  }
  const dataWithUpdatedRoot = __spreadProps(__spreadValues({}, defaultedData), { root: newRoot });
  const updatedData = walkTree(
    dataWithUpdatedRoot,
    config,
    (content) => content.map(mapItem)
  );
  if (!defaultedData.root.props) {
    updatedData.root = updatedData.root.props;
  }
  return updatedData;
}

// lib/resolve-all-data.ts
init_react_import();
init_resolve_component_data();

// lib/group-zones-by-component.ts
init_react_import();
init_get_zone_id();
var groupZonesByComponent = (data) => {
  var _a;
  const zoneEntries = Object.entries((_a = data.zones) != null ? _a : {});
  return zoneEntries.reduce((acc, [zoneCompound, zoneContent]) => {
    const [componentId, zoneName] = getZoneId(zoneCompound);
    if (!componentId.length || !zoneName.length) return acc;
    if (!acc[componentId]) {
      acc[componentId] = [];
    }
    acc[componentId].push({ zoneCompound, content: zoneContent });
    return acc;
  }, {});
};

// lib/resolve-all-data.ts
init_to_component();
init_map_fields();
function resolveAllData(_0, _1) {
  return __async(this, arguments, function* (data, config, metadata = {}, onResolveStart, onResolveEnd) {
    const defaultedData = defaultData(data);
    const zonesByComponent = groupZonesByComponent(defaultedData);
    let resolvedZones = {};
    const resolveNode = (_node, parent) => __async(null, null, function* () {
      const node = toComponent(_node);
      onResolveStart == null ? void 0 : onResolveStart(node);
      const resolved = (yield resolveComponentData(
        node,
        config,
        metadata,
        () => {
        },
        () => {
        },
        "force",
        parent
      )).node;
      const resolvedAsComponent = toComponent(resolved);
      const resolvedDeepPromise = mapFields(
        resolved,
        {
          slot: ({ value }) => processContent(value, resolvedAsComponent)
        },
        config
      );
      let resolveZonePromises = [];
      if (zonesByComponent[resolvedAsComponent.props.id]) {
        resolveZonePromises = zonesByComponent[resolvedAsComponent.props.id].map(
          (_02) => __async(null, [_02], function* ({ zoneCompound, content }) {
            resolvedZones[zoneCompound] = yield processContent(
              content,
              resolvedAsComponent
            );
          })
        );
      }
      const resolvedDeep = yield resolvedDeepPromise;
      yield Promise.all(resolveZonePromises);
      onResolveEnd == null ? void 0 : onResolveEnd(toComponent(resolvedDeep));
      return resolvedDeep;
    });
    const processContent = (content, parent) => __async(null, null, function* () {
      return Promise.all(content.map((item) => resolveNode(item, parent)));
    });
    const result = defaultData({});
    result.root = yield resolveNode(defaultedData.root, null);
    result.content = yield processContent(
      defaultedData.content,
      toComponent(result.root)
    );
    result.zones = resolvedZones;
    return result;
  });
}

// bundle/core.ts
init_walk_tree();

// plugins/legacy-side-bar/index.tsx
init_react_import();
var import_jsx_runtime94 = require("react/jsx-runtime");
var legacySideBarPlugin = () => ({
  name: "legacy-side-bar",
  render: () => /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)("div", { style: { overflowY: "auto" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(SidebarSection, { title: "Components", noBorderTop: true, children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(Components, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(SidebarSection, { title: "Outline", children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(Outline, {}) })
  ] })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Action,
  ActionBar,
  AutoField,
  Button,
  Drawer,
  DropZone,
  FieldLabel,
  Group,
  IconButton,
  Label,
  Puck,
  Render,
  RichTextMenu,
  Separator,
  blocksPlugin,
  createUsePuck,
  fieldsPlugin,
  legacySideBarPlugin,
  migrate,
  outlinePlugin,
  overrideKeys,
  registerOverlayPortal,
  renderContext,
  resolveAllData,
  setDeep,
  transformProps,
  useGetPuck,
  usePuck,
  walkTree
});
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/align-center.js:
lucide-react/dist/esm/icons/align-justify.js:
lucide-react/dist/esm/icons/align-left.js:
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
lucide-react/dist/esm/icons/heading.js:
lucide-react/dist/esm/icons/italic.js:
lucide-react/dist/esm/icons/layers.js:
lucide-react/dist/esm/icons/layout-grid.js:
lucide-react/dist/esm/icons/link.js:
lucide-react/dist/esm/icons/list-ordered.js:
lucide-react/dist/esm/icons/list.js:
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
