import {
  styles_module_default
} from "./chunk-SQT3TR4R.mjs";
import {
  LoadedRichTextMenuInner
} from "./chunk-EDAKE6U3.mjs";
import {
  useAppStore,
  useAppStoreApi
} from "./chunk-4YHCXWZF.mjs";
import {
  get_class_name_factory_default
} from "./chunk-Y2EFNT5P.mjs";
import {
  __spreadValues,
  init_react_import
} from "./chunk-M6W7YEVX.mjs";

// components/RichTextEditor/components/EditorInner.tsx
init_react_import();
import {
  memo,
  useCallback
} from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("RichTextEditor", styles_module_default);
var EditorInner = memo(
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
    const handleHotkeyCapture = useCallback(
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
    const handleBlur = useCallback(
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
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: getClassName({
          editor: !inline,
          inline,
          isActive,
          disabled: readOnly
        }),
        style: inline ? {} : { height: initialHeight != null ? initialHeight : 192, overflowY: "auto" },
        onKeyDownCapture: handleHotkeyCapture,
        onBlur: handleBlur,
        children: [
          !inline && /* @__PURE__ */ jsx("div", { className: getClassName("menu"), children: menu }),
          children
        ]
      }
    );
  }
);
EditorInner.displayName = "EditorInner";

// components/RichTextMenu/index.tsx
init_react_import();
import { lazy, Suspense } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var LoadedRichTextMenuFull = lazy(
  () => import("./full-S7PO6XGT.mjs").then((m) => ({
    default: m.LoadedRichTextMenuFull
  }))
);
var LoadedRichTextMenu = (props) => {
  return /* @__PURE__ */ jsx2(Suspense, { fallback: /* @__PURE__ */ jsx2(LoadedRichTextMenuInner, __spreadValues({}, props)), children: /* @__PURE__ */ jsx2(LoadedRichTextMenuFull, __spreadValues({}, props)) });
};

export {
  EditorInner,
  LoadedRichTextMenu
};
