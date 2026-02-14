import {
  SlotRenderPure,
  migrate,
  resolveAllData,
  transformProps,
  useRichtextProps,
  useSlots
} from "./chunk-6RM6VUMX.mjs";
import "./chunk-SQT3TR4R.mjs";
import "./chunk-MDUBGHWF.mjs";
import "./chunk-Y2EFNT5P.mjs";
import {
  rootAreaId,
  rootDroppableId,
  rootZone,
  setupZone,
  walkTree
} from "./chunk-PMXRXC2B.mjs";
import {
  __spreadProps,
  __spreadValues,
  init_react_import
} from "./chunk-M6W7YEVX.mjs";

// bundle/rsc.tsx
init_react_import();

// components/ServerRender/index.tsx
init_react_import();
import { Fragment, jsx } from "react/jsx-runtime";
function DropZoneRender({
  zone,
  data,
  areaId = "root",
  config,
  metadata = {}
}) {
  let zoneCompound = rootDroppableId;
  let content = (data == null ? void 0 : data.content) || [];
  if (!data || !config) {
    return null;
  }
  if (areaId !== rootAreaId && zone !== rootZone) {
    zoneCompound = `${areaId}:${zone}`;
    content = setupZone(data, zoneCompound).zones[zoneCompound];
  }
  return /* @__PURE__ */ jsx(Fragment, { children: content.map((item) => {
    const Component = config.components[item.type];
    const props = __spreadProps(__spreadValues({}, item.props), {
      puck: {
        renderDropZone: ({ zone: zone2 }) => /* @__PURE__ */ jsx(
          DropZoneRender,
          {
            zone: zone2,
            data,
            areaId: item.props.id,
            config,
            metadata
          }
        ),
        metadata,
        dragRef: null,
        isEditing: false
      }
    });
    const renderItem = __spreadProps(__spreadValues({}, item), { props });
    const propsWithSlots = useSlots(config, renderItem, (props2) => /* @__PURE__ */ jsx(SlotRenderPure, __spreadProps(__spreadValues({}, props2), { config, metadata })));
    if (Component) {
      return /* @__PURE__ */ jsx(Component.render, __spreadValues({}, propsWithSlots), renderItem.props.id);
    }
    return null;
  }) });
}
function Render({
  config,
  data,
  metadata = {}
}) {
  var _a, _b;
  const rootProps = "props" in data.root ? data.root.props : data.root;
  const title = rootProps.title || "";
  const props = __spreadProps(__spreadValues({}, rootProps), {
    puck: {
      renderDropZone: ({ zone }) => /* @__PURE__ */ jsx(
        DropZoneRender,
        {
          zone,
          data,
          config,
          metadata
        }
      ),
      isEditing: false,
      dragRef: null,
      metadata
    },
    title,
    editMode: false,
    id: "puck-root"
  });
  const propsWithSlots = useSlots(config, { type: "root", props }, (props2) => /* @__PURE__ */ jsx(SlotRenderPure, __spreadProps(__spreadValues({}, props2), { config, metadata })));
  const richtextProps = useRichtextProps((_a = config.root) == null ? void 0 : _a.fields, props);
  if ((_b = config.root) == null ? void 0 : _b.render) {
    return /* @__PURE__ */ jsx(config.root.render, __spreadProps(__spreadValues(__spreadValues({}, propsWithSlots), richtextProps), { children: /* @__PURE__ */ jsx(
      DropZoneRender,
      {
        config,
        data,
        zone: rootZone,
        metadata
      }
    ) }));
  }
  return /* @__PURE__ */ jsx(
    DropZoneRender,
    {
      config,
      data,
      zone: rootZone,
      metadata
    }
  );
}
export {
  Render,
  migrate,
  resolveAllData,
  transformProps,
  walkTree
};
