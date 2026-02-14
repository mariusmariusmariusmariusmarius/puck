import {
  List,
  ListOrdered
} from "./chunk-4YHCXWZF.mjs";
import {
  init_react_import
} from "./chunk-M6W7YEVX.mjs";

// components/RichTextMenu/controls/ListSelect/use-options.ts
init_react_import();
import { useMemo } from "react";
var optionNodes = {
  ul: { label: "Bullet list", icon: List },
  ol: { label: "Numbered list", icon: ListOrdered }
};
var useListOptions = (fieldOptions) => {
  let blockOptions = [];
  if ((fieldOptions == null ? void 0 : fieldOptions.listItem) !== false) {
    blockOptions = ["ul", "ol"];
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
  useListOptions
};
