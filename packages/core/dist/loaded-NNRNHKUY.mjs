import {
  useHeadingOptions
} from "./chunk-R6DVFYN7.mjs";
import {
  Heading,
  SelectControl,
  useControlContext
} from "./chunk-4YHCXWZF.mjs";
import "./chunk-37HTE4KO.mjs";
import "./chunk-MDUBGHWF.mjs";
import "./chunk-Y2EFNT5P.mjs";
import "./chunk-PMXRXC2B.mjs";
import {
  init_react_import
} from "./chunk-M6W7YEVX.mjs";

// components/RichTextMenu/controls/HeadingSelect/loaded.tsx
init_react_import();
import { useEditorState } from "@tiptap/react";
import { jsx } from "react/jsx-runtime";
function HeadingSelectLoaded() {
  const { options } = useControlContext();
  const headingOptions = useHeadingOptions(options);
  const { editor } = useControlContext();
  const currentValue = useEditorState({
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
  return /* @__PURE__ */ jsx(
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
export {
  HeadingSelectLoaded
};
