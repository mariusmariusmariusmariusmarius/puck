import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight
} from "./chunk-4YHCXWZF.mjs";
import {
  init_react_import
} from "./chunk-M6W7YEVX.mjs";

// components/RichTextMenu/controls/AlignSelect/use-options.ts
init_react_import();
import { useMemo } from "react";
var optionNodes = {
  left: { label: "Left", icon: AlignLeft },
  center: { label: "Center", icon: AlignCenter },
  right: { label: "Right", icon: AlignRight },
  justify: { label: "Justify", icon: AlignJustify }
};
var useAlignOptions = (fieldOptions) => {
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
  return useMemo(
    () => blockOptions.map((item) => ({
      value: item,
      label: optionNodes[item].label,
      icon: optionNodes[item].icon
    })),
    [blockOptions]
  );
};

export {
  useAlignOptions
};
