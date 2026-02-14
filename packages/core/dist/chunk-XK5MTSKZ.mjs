import {
  EditorInner,
  LoadedRichTextMenu
} from "./chunk-37ENU3PE.mjs";
import {
  RichTextRenderFallback,
  SlotRender,
  SlotRenderPure,
  buildMappers,
  getSlotTransform,
  useRichtextProps,
  useSlots
} from "./chunk-6RM6VUMX.mjs";
import {
  ActionBar,
  IconButton,
  LoadedRichTextMenuInner,
  Loader
} from "./chunk-EDAKE6U3.mjs";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleCheckBig,
  Copy,
  CornerLeftUp,
  EllipsisVertical,
  Expand,
  Globe,
  Hammer,
  Hash,
  Layers,
  LayoutGrid,
  Link,
  List,
  Lock,
  LockOpen,
  Maximize2,
  Minimize2,
  Monitor,
  PanelLeft,
  PanelRight,
  Plus,
  RectangleEllipsis,
  Redo2,
  Search,
  SlidersHorizontal,
  Smartphone,
  Tablet,
  ToyBrick,
  Trash,
  Type,
  Undo2,
  X,
  ZoomIn,
  ZoomOut,
  appStoreContext,
  createAppStore,
  getBox,
  monitorHotkeys,
  reorder,
  replace,
  useAppStore,
  useAppStoreApi,
  useHotkey,
  useMonitorHotkeys,
  useRegisterFieldsSlice,
  useRegisterHistorySlice,
  useRegisterPermissionsSlice,
  useResetAutoZoom
} from "./chunk-4YHCXWZF.mjs";
import {
  getItem,
  insert,
  insertAction,
  makeStatePublic,
  populateIds
} from "./chunk-37HTE4KO.mjs";
import {
  defaultAppState,
  defaultViewports,
  toComponent
} from "./chunk-MDUBGHWF.mjs";
import {
  get_class_name_factory_default
} from "./chunk-Y2EFNT5P.mjs";
import {
  defaultSlots,
  expandNode,
  generateId,
  mapFields,
  rootAreaId,
  rootDroppableId,
  rootZone,
  setupZone,
  walkAppState,
  walkField
} from "./chunk-PMXRXC2B.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  init_react_import
} from "./chunk-M6W7YEVX.mjs";

// bundle/index.ts
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

// components/AutoField/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/AutoField/styles.module.css#css-module
init_react_import();
var styles_module_default = { "InputWrapper": "_InputWrapper_bsxfo_1", "Input-label": "_Input-label_bsxfo_5", "Input-labelIcon": "_Input-labelIcon_bsxfo_14", "Input-disabledIcon": "_Input-disabledIcon_bsxfo_21", "Input-input": "_Input-input_bsxfo_26", "Input": "_Input_bsxfo_1", "Input--readOnly": "_Input--readOnly_bsxfo_82", "Input-radioGroupItems": "_Input-radioGroupItems_bsxfo_93", "Input-radio": "_Input-radio_bsxfo_93", "Input-radioInner": "_Input-radioInner_bsxfo_110", "Input-radioInput": "_Input-radioInput_bsxfo_155" };

// components/AutoField/index.tsx
import {
  useCallback as useCallback4,
  useContext as useContext4,
  useEffect as useEffect7,
  useMemo as useMemo5
} from "react";

// components/AutoField/fields/index.tsx
init_react_import();

// components/AutoField/fields/ArrayField/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css#css-module
init_react_import();
var styles_module_default2 = { "ArrayField": "_ArrayField_1vaho_5", "ArrayField--isDraggingFrom": "_ArrayField--isDraggingFrom_1vaho_13", "ArrayField-addButton": "_ArrayField-addButton_1vaho_18", "ArrayField--hasItems": "_ArrayField--hasItems_1vaho_33", "ArrayField-inner": "_ArrayField-inner_1vaho_59", "ArrayFieldItem": "_ArrayFieldItem_1vaho_67", "ArrayFieldItem--isDragging": "_ArrayFieldItem--isDragging_1vaho_78", "ArrayFieldItem--isExpanded": "_ArrayFieldItem--isExpanded_1vaho_82", "ArrayFieldItem-summary": "_ArrayFieldItem-summary_1vaho_97", "ArrayFieldItem--noFields": "_ArrayFieldItem--noFields_1vaho_122", "ArrayField--addDisabled": "_ArrayField--addDisabled_1vaho_131", "ArrayFieldItem-body": "_ArrayFieldItem-body_1vaho_170", "ArrayFieldItem-fieldset": "_ArrayFieldItem-fieldset_1vaho_179", "ArrayFieldItem-rhs": "_ArrayFieldItem-rhs_1vaho_187", "ArrayFieldItem-actions": "_ArrayFieldItem-actions_1vaho_193" };

// components/AutoField/store.ts
init_react_import();
import { useContext as useContext2 } from "react";
import { useShallow as useShallow2 } from "zustand/react/shallow";

// lib/use-context-store.tsx
init_react_import();
import { createContext, useContext, useState } from "react";
import { createStore, useStore } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";
import { jsx } from "react/jsx-runtime";
function useContextStore(context, selector) {
  const store = useContext(context);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return useStore(store, useShallow(selector));
}
function createStoreProvider(ContextComponent) {
  const StoreProvider = ({
    children,
    value
  }) => {
    const [store] = useState(() => createStore(() => value));
    return /* @__PURE__ */ jsx(ContextComponent.Provider, { value: store, children });
  };
  return StoreProvider;
}
function createContextStore(defaultValue) {
  const ctx = createContext(
    createStore(subscribeWithSelector(() => defaultValue))
  );
  return {
    ctx,
    Provider: createStoreProvider(ctx)
  };
}

// components/AutoField/store.ts
import { useStore as useStore2 } from "zustand";
var fieldContextStore = createContextStore({});
var useFieldStoreApi = () => useContext2(fieldContextStore.ctx);
function useFieldStore(selector) {
  const store = useContext2(fieldContextStore.ctx);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return useStore2(store, useShallow2(selector));
}

// components/AutoField/fields/ArrayField/index.tsx
import {
  memo as memo2,
  useCallback,
  useEffect,
  useMemo as useMemo2,
  useRef,
  useState as useState3
} from "react";

// components/DragIcon/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/DragIcon/styles.module.css#css-module
init_react_import();
var styles_module_default3 = { "DragIcon": "_DragIcon_17p8x_1", "DragIcon--disabled": "_DragIcon--disabled_17p8x_8" };

// components/DragIcon/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("DragIcon", styles_module_default3);
var DragIcon = ({ isDragDisabled }) => /* @__PURE__ */ jsx2("div", { className: getClassName({ disabled: isDragDisabled }), children: /* @__PURE__ */ jsx2("svg", { viewBox: "0 0 20 20", width: "12", fill: "currentColor", children: /* @__PURE__ */ jsx2("path", { d: "M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" }) }) });

// components/Sortable/index.tsx
init_react_import();
import { DragDropProvider } from "@dnd-kit/react";

// lib/dnd/use-sensors.ts
init_react_import();
import { useState as useState2 } from "react";
import { PointerSensor } from "@dnd-kit/react";
import { isElement } from "@dnd-kit/dom/utilities";
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
  const [sensors] = useState2(() => [
    PointerSensor.configure({
      activationConstraints(event, source) {
        var _a;
        const { pointerType, target } = event;
        if (pointerType === "mouse" && isElement(target) && (source.handle === target || ((_a = source.handle) == null ? void 0 : _a.contains(target)))) {
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
import {
  CollisionPriority as CollisionPriority7,
  CollisionType as CollisionType7
} from "@dnd-kit/abstract";

// lib/dnd/collision/directional/index.ts
init_react_import();
import { CollisionType } from "@dnd-kit/abstract";

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
      type: CollisionType.Collision
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
import { Point } from "@dnd-kit/geometry";
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
    intervalCache.previous = Point.from(point);
  }
  return intervalCache;
};

// ../../node_modules/@dnd-kit/collision/dist/index.js
init_react_import();
import { CollisionPriority, CollisionType as CollisionType2 } from "@dnd-kit/abstract";
import { Point as Point2 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority2, CollisionType as CollisionType22 } from "@dnd-kit/abstract";
import { Point as Point22 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority3, CollisionType as CollisionType3 } from "@dnd-kit/abstract";
import { Point as Point3, Rectangle } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority4, CollisionType as CollisionType4 } from "@dnd-kit/abstract";
import { Point as Point4 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority5, CollisionType as CollisionType5 } from "@dnd-kit/abstract";
import { Point as Point5 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority6, CollisionType as CollisionType6 } from "@dnd-kit/abstract";
import { Point as Point6 } from "@dnd-kit/geometry";
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
    const distance = Point2.distance(droppable.shape.center, pointerCoordinates);
    return {
      id,
      value: 1 / distance,
      type: CollisionType2.PointerIntersection,
      priority: CollisionPriority.High
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
  const shapeCorners = shape ? Rectangle.from(shape.current.boundingRectangle).corners : void 0;
  const distance = Rectangle.from(
    droppable.shape.boundingRectangle
  ).corners.reduce(
    (acc, corner, index) => {
      var _a;
      return acc + Point3.distance(
        Point3.from(corner),
        (_a = shapeCorners == null ? void 0 : shapeCorners[index]) != null ? _a : position.current
      );
    },
    0
  );
  const value = distance / 4;
  return {
    id: droppable.id,
    value: 1 / value,
    type: CollisionType3.Collision,
    priority: CollisionPriority3.Normal
  };
};

// lib/dnd/collision/dynamic/store.ts
init_react_import();
import { createStore as createStore2 } from "zustand/vanilla";
var collisionStore = createStore2(() => ({
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
        priority: CollisionPriority7.Highest,
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
      priority: CollisionPriority7.High,
      type: CollisionType7.Collision
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
            priority: CollisionPriority7.Low,
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
          priority: CollisionPriority7.Lowest,
          data
        });
      }
    }
  }
  collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "hotpink");
  return null;
});

// components/Sortable/index.tsx
import { useSortable } from "@dnd-kit/react/sortable";
import { jsx as jsx3 } from "react/jsx-runtime";
var SortableProvider = ({
  children,
  onDragStart,
  onDragEnd,
  onMove
}) => {
  const sensors = useSensors({
    mouse: { distance: { value: 5 } }
  });
  return /* @__PURE__ */ jsx3(
    DragDropProvider,
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
  } = useSortable({
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
import { createContext as createContext2, useContext as useContext3, useMemo } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var NestedFieldContext = createContext2({});
var useNestedFieldContext = () => {
  const context = useContext3(NestedFieldContext);
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
  const subReadOnlyFields = useMemo(
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
  return /* @__PURE__ */ jsx4(
    NestedFieldContext.Provider,
    {
      value: { readOnlyFields: subReadOnlyFields, localName: subName },
      children
    }
  );
};

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
import { memo } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx5(
    NestedFieldProvider,
    {
      name: localIndexName,
      wildcardName: localWildcardName,
      subName,
      readOnlyFields,
      children: /* @__PURE__ */ jsx5(
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
var SubField = memo(SubFieldInternal);

// components/AutoField/fields/ArrayField/index.tsx
import { Fragment, jsx as jsx6, jsxs } from "react/jsx-runtime";
var getClassName2 = get_class_name_factory_default("ArrayField", styles_module_default2);
var getClassNameItem = get_class_name_factory_default("ArrayFieldItem", styles_module_default2);
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
  const itemSummary = useMemo2(() => {
    if (data && field.getItemSummary) {
      return field.getItemSummary(data, index);
    }
    return `Item #${originalIndex}`;
  }, [data, field, originalIndex, index]);
  return itemSummary;
};
var ItemSummary = memo2(ItemSummaryInner);
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
  const hasVisibleFields = useMemo2(() => {
    if (!field.arrayFields) {
      return false;
    }
    return Object.values(field.arrayFields).some(
      (subField) => subField.type !== "slot" && subField.visible !== false
    );
  }, [field.arrayFields]);
  return /* @__PURE__ */ jsx6(Sortable, { id, index: dragIndex, disabled: readOnly, children: ({ isDragging, ref, handleRef }) => /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: getClassNameItem({
        isExpanded: isExpanded && hasVisibleFields,
        isDragging,
        noFields: !hasVisibleFields
      }),
      children: [
        /* @__PURE__ */ jsxs(
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
              /* @__PURE__ */ jsx6(
                ItemSummary,
                {
                  index,
                  originalIndex,
                  field,
                  name
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: getClassNameItem("rhs"), children: [
                !readOnly && /* @__PURE__ */ jsx6("div", { className: getClassNameItem("actions"), children: actions }),
                /* @__PURE__ */ jsx6("div", { children: /* @__PURE__ */ jsx6(DragIcon, {}) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx6("div", { className: getClassNameItem("body"), children: isExpanded && hasVisibleFields && /* @__PURE__ */ jsx6("fieldset", { className: getClassNameItem("fieldset"), children: Object.keys(field.arrayFields).map((subName) => {
          const subField = field.arrayFields[subName];
          return /* @__PURE__ */ jsx6(
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
var ArrayFieldItem = memo2(ArrayFieldItemInternal);
var ArrayField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  readOnly,
  Label = (props) => /* @__PURE__ */ jsx6("div", __spreadValues({}, props))
}) => {
  const setUi = useAppStore((s) => s.setUi);
  const appStoreApi = useAppStoreApi();
  const fieldStore = useFieldStoreApi();
  const { localName = name } = useNestedFieldContext();
  const getValue = () => {
    var _a;
    return (_a = getDeep(fieldStore.getState(), name)) != null ? _a : [];
  };
  const getArrayState = useCallback(() => {
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
  const defaultArrayState = useMemo2(getArrayState, [getArrayState]);
  const mirror = useAppStore((s) => {
    const thisArrayState = s.state.ui.arrayState[id];
    return thisArrayState != null ? thisArrayState : defaultArrayState;
  });
  const appStore = useAppStoreApi();
  const mapArrayStateToUi = useCallback(
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
  const getHighestIndex = useCallback(() => {
    return getArrayState().items.reduce(
      (acc, item) => item._originalIndex > acc ? item._originalIndex : acc,
      -1
    );
  }, []);
  const regenerateArrayState = useCallback((value) => {
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
  const [draggedItem, setDraggedItem] = useState3("");
  const isDraggingAny = !!draggedItem;
  const valueRef = useRef([]);
  useEffect(() => {
    valueRef.current = getValue();
  }, []);
  const uniqifyItem = useCallback(
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
  const syncCurrentIndexes = useCallback(() => {
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
  const updateValue = useCallback(
    (newValue) => {
      const newArrayState = regenerateArrayState(newValue);
      setUi(mapArrayStateToUi(newArrayState), false);
      onChange(newValue);
    },
    [regenerateArrayState, setUi, mapArrayStateToUi, onChange]
  );
  useEffect(() => {
    const newArrayState = regenerateArrayState(getValue());
    setUi(mapArrayStateToUi(newArrayState), false);
  }, [numItems]);
  if (field.type !== "array" || !field.arrayFields) {
    return null;
  }
  const addDisabled = field.max !== void 0 && (mirror == null ? void 0 : mirror.items.length) >= field.max || readOnly;
  return /* @__PURE__ */ jsx6(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx6(List, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ jsx6(
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
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: getClassName2({
                hasItems: numItems > 0,
                addDisabled
              }),
              children: [
                mirror.items.length > 0 && /* @__PURE__ */ jsx6("div", { className: getClassName2("inner"), "data-dnd-container": true, children: mirror.items.map((item, index) => {
                  const {
                    _arrayId = `${id}-${index}`,
                    _originalIndex = index,
                    _currentIndex = index
                  } = item;
                  return /* @__PURE__ */ jsx6(
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
                      actions: /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx6("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ jsx6(
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
                            children: /* @__PURE__ */ jsx6(Copy, { size: 16 })
                          }
                        ) }),
                        /* @__PURE__ */ jsx6("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ jsx6(
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
                            children: /* @__PURE__ */ jsx6(Trash, { size: 16 })
                          }
                        ) })
                      ] })
                    },
                    _arrayId
                  );
                }) }),
                !addDisabled && /* @__PURE__ */ jsx6(
                  "button",
                  {
                    type: "button",
                    className: getClassName2("addButton"),
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
                    children: /* @__PURE__ */ jsx6(Plus, { size: 21 })
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

// components/AutoField/lib/use-local-value.ts
init_react_import();
import { useCallback as useCallback2, useEffect as useEffect2, useState as useState4 } from "react";

// components/AutoField/lib/use-deep-field.ts
init_react_import();
var useDeepField = (path) => {
  return useFieldStore((s) => getDeep(s, path));
};

// components/AutoField/lib/use-is-focused.ts
init_react_import();
var useIsFocused = (path) => {
  return useAppStore((s) => s.state.ui.field.focus === path);
};

// components/AutoField/lib/use-local-value.ts
var useLocalValue = (path, onChange) => {
  const value = useDeepField(path);
  const isFocused = useIsFocused(path);
  const [localValue, setLocalValue] = useState4(value == null ? void 0 : value.toString());
  const onChangeLocal = useCallback2((val) => {
    setLocalValue(val);
    onChange(val);
  }, []);
  useEffect2(() => {
    if (!isFocused) {
      setLocalValue(value);
    }
  }, [isFocused, value]);
  return [localValue != null ? localValue : "", onChangeLocal];
};

// components/AutoField/fields/DefaultField/index.tsx
import { Fragment as Fragment2, jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
var getClassName3 = get_class_name_factory_default("Input", styles_module_default);
var DefaultField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label
}) => {
  const [localValue, onChangeLocal] = useLocalValue(name, onChange);
  return /* @__PURE__ */ jsx7(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsxs2(Fragment2, { children: [
        field.type === "text" && /* @__PURE__ */ jsx7(Type, { size: 16 }),
        field.type === "number" && /* @__PURE__ */ jsx7(Hash, { size: 16 })
      ] }),
      readOnly,
      children: /* @__PURE__ */ jsx7(
        "input",
        {
          className: getClassName3("input"),
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
import { useEffect as useEffect6 } from "react";

// components/ExternalInput/index.tsx
init_react_import();
import {
  useMemo as useMemo3,
  useEffect as useEffect5,
  useState as useState7,
  useCallback as useCallback3,
  isValidElement
} from "react";

// css-module:/Users/mariusmuller/puck/packages/core/components/ExternalInput/styles.module.css#css-module
init_react_import();
var styles_module_default4 = { "ExternalInput-actions": "_ExternalInput-actions_91ls0_1", "ExternalInput-button": "_ExternalInput-button_91ls0_5", "ExternalInput--dataSelected": "_ExternalInput--dataSelected_91ls0_24", "ExternalInput--readOnly": "_ExternalInput--readOnly_91ls0_31", "ExternalInput-detachButton": "_ExternalInput-detachButton_91ls0_35", "ExternalInput": "_ExternalInput_91ls0_1", "ExternalInputModal": "_ExternalInputModal_91ls0_79", "ExternalInputModal-grid": "_ExternalInputModal-grid_91ls0_89", "ExternalInputModal--filtersToggled": "_ExternalInputModal--filtersToggled_91ls0_100", "ExternalInputModal-filters": "_ExternalInputModal-filters_91ls0_105", "ExternalInputModal-masthead": "_ExternalInputModal-masthead_91ls0_124", "ExternalInputModal-tableWrapper": "_ExternalInputModal-tableWrapper_91ls0_133", "ExternalInputModal-table": "_ExternalInputModal-table_91ls0_133", "ExternalInputModal-thead": "_ExternalInputModal-thead_91ls0_149", "ExternalInputModal-th": "_ExternalInputModal-th_91ls0_149", "ExternalInputModal-td": "_ExternalInputModal-td_91ls0_164", "ExternalInputModal-tr": "_ExternalInputModal-tr_91ls0_169", "ExternalInputModal-tbody": "_ExternalInputModal-tbody_91ls0_176", "ExternalInputModal--hasData": "_ExternalInputModal--hasData_91ls0_202", "ExternalInputModal-loadingBanner": "_ExternalInputModal-loadingBanner_91ls0_206", "ExternalInputModal--isLoading": "_ExternalInputModal--isLoading_91ls0_223", "ExternalInputModal-searchForm": "_ExternalInputModal-searchForm_91ls0_227", "ExternalInputModal-search": "_ExternalInputModal-search_91ls0_227", "ExternalInputModal-searchIcon": "_ExternalInputModal-searchIcon_91ls0_264", "ExternalInputModal-searchIconText": "_ExternalInputModal-searchIconText_91ls0_289", "ExternalInputModal-searchInput": "_ExternalInputModal-searchInput_91ls0_299", "ExternalInputModal-searchActions": "_ExternalInputModal-searchActions_91ls0_313", "ExternalInputModal-searchActionIcon": "_ExternalInputModal-searchActionIcon_91ls0_326", "ExternalInputModal-footerContainer": "_ExternalInputModal-footerContainer_91ls0_330", "ExternalInputModal-footer": "_ExternalInputModal-footer_91ls0_330", "ExternalInputModal-field": "_ExternalInputModal-field_91ls0_343" };

// components/Modal/index.tsx
init_react_import();
import { useEffect as useEffect3, useState as useState5 } from "react";

// css-module:/Users/mariusmuller/puck/packages/core/components/Modal/styles.module.css#css-module
init_react_import();
var styles_module_default5 = { "Modal": "_Modal_ikbaj_1", "Modal--isOpen": "_Modal--isOpen_ikbaj_15", "Modal-inner": "_Modal-inner_ikbaj_19" };

// components/Modal/index.tsx
import { createPortal } from "react-dom";
import { jsx as jsx8 } from "react/jsx-runtime";
var getClassName4 = get_class_name_factory_default("Modal", styles_module_default5);
var Modal = ({
  children,
  onClose,
  isOpen
}) => {
  const [rootEl, setRootEl] = useState5(null);
  useEffect3(() => {
    setRootEl(document.getElementById("puck-portal-root"));
  }, []);
  if (!rootEl) {
    return /* @__PURE__ */ jsx8("div", {});
  }
  return createPortal(
    /* @__PURE__ */ jsx8("div", { className: getClassName4({ isOpen }), onClick: onClose, children: /* @__PURE__ */ jsx8(
      "div",
      {
        className: getClassName4("inner"),
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
var styles_module_default6 = { "Heading": "_Heading_qxrry_1", "Heading--xxxxl": "_Heading--xxxxl_qxrry_12", "Heading--xxxl": "_Heading--xxxl_qxrry_18", "Heading--xxl": "_Heading--xxl_qxrry_22", "Heading--xl": "_Heading--xl_qxrry_26", "Heading--l": "_Heading--l_qxrry_30", "Heading--m": "_Heading--m_qxrry_34", "Heading--s": "_Heading--s_qxrry_38", "Heading--xs": "_Heading--xs_qxrry_42" };

// components/Heading/index.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var getClassName5 = get_class_name_factory_default("Heading", styles_module_default6);
var Heading = ({ children, rank, size = "m" }) => {
  const Tag = rank ? `h${rank}` : "span";
  return /* @__PURE__ */ jsx9(
    Tag,
    {
      className: getClassName5({
        [size]: true
      }),
      children
    }
  );
};

// components/Button/index.ts
init_react_import();

// components/Button/Button.tsx
init_react_import();
import { useEffect as useEffect4, useState as useState6 } from "react";

// css-module:/Users/mariusmuller/puck/packages/core/components/Button/Button.module.css#css-module
init_react_import();
var Button_module_default = { "Button": "_Button_10byl_1", "Button--medium": "_Button--medium_10byl_29", "Button--large": "_Button--large_10byl_37", "Button-icon": "_Button-icon_10byl_44", "Button--primary": "_Button--primary_10byl_48", "Button--secondary": "_Button--secondary_10byl_67", "Button--flush": "_Button--flush_10byl_84", "Button--disabled": "_Button--disabled_10byl_88", "Button--fullWidth": "_Button--fullWidth_10byl_95", "Button-spinner": "_Button-spinner_10byl_100" };

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
import { jsx as jsx10, jsxs as jsxs3 } from "react/jsx-runtime";
var getClassName6 = get_class_name_factory_default("Button", Button_module_default);
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
  const [loading, setLoading] = useState6(loadingProp);
  useEffect4(() => setLoading(loadingProp), [loadingProp]);
  const ElementType = href ? "a" : type ? "button" : "span";
  const dataAttrs = filterDataAttrs(props);
  const el = /* @__PURE__ */ jsxs3(
    ElementType,
    __spreadProps(__spreadValues({
      className: getClassName6({
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
        icon && /* @__PURE__ */ jsx10("div", { className: getClassName6("icon"), children: icon }),
        children,
        loading && /* @__PURE__ */ jsx10("div", { className: getClassName6("spinner"), children: /* @__PURE__ */ jsx10(Loader, { size: 14 }) })
      ]
    })
  );
  return el;
};

// components/ExternalInput/index.tsx
import { Fragment as Fragment3, jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
var getClassName7 = get_class_name_factory_default("ExternalInput", styles_module_default4);
var getClassNameModal = get_class_name_factory_default("ExternalInputModal", styles_module_default4);
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
  const [data, setData] = useState7([]);
  const [isOpen, setOpen] = useState7(false);
  const [isLoading, setIsLoading] = useState7(true);
  const hasFilterFields = !!filterFields;
  const [filters, setFilters] = useState7(field.initialFilters || {});
  const [filtersToggled, setFiltersToggled] = useState7(hasFilterFields);
  const mappedData = useMemo3(() => {
    return data.map(mapRow);
  }, [data]);
  const keys = useMemo3(() => {
    const validKeys = /* @__PURE__ */ new Set();
    for (const item of mappedData) {
      for (const key of Object.keys(item)) {
        if (typeof item[key] === "string" || typeof item[key] === "number" || isValidElement(item[key])) {
          validKeys.add(key);
        }
      }
    }
    return Array.from(validKeys);
  }, [mappedData]);
  const [searchQuery, setSearchQuery] = useState7(field.initialQuery || "");
  const search = useCallback3(
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
  const Footer = useCallback3(
    (props) => field.renderFooter ? field.renderFooter(props) : /* @__PURE__ */ jsxs4("span", { className: getClassNameModal("footer"), children: [
      props.items.length,
      " result",
      props.items.length === 1 ? "" : "s"
    ] }),
    [field.renderFooter]
  );
  useEffect5(() => {
    search(searchQuery, filters);
  }, []);
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: getClassName7({
        dataSelected: !!value,
        modalVisible: isOpen,
        readOnly
      }),
      id,
      children: [
        /* @__PURE__ */ jsxs4("div", { className: getClassName7("actions"), children: [
          /* @__PURE__ */ jsx11(
            "button",
            {
              type: "button",
              onClick: () => setOpen(true),
              className: getClassName7("button"),
              disabled: readOnly,
              children: value ? field.getItemSummary ? field.getItemSummary(value) : "External item" : /* @__PURE__ */ jsxs4(Fragment3, { children: [
                /* @__PURE__ */ jsx11(Link, { size: "16" }),
                /* @__PURE__ */ jsx11("span", { children: field.placeholder })
              ] })
            }
          ),
          value && /* @__PURE__ */ jsx11(
            "button",
            {
              type: "button",
              className: getClassName7("detachButton"),
              onClick: () => {
                onChange(null);
              },
              disabled: readOnly,
              children: /* @__PURE__ */ jsx11(LockOpen, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx11(Modal, { onClose: () => setOpen(false), isOpen, children: /* @__PURE__ */ jsxs4(
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
              /* @__PURE__ */ jsx11("div", { className: getClassNameModal("masthead"), children: field.showSearch ? /* @__PURE__ */ jsxs4("div", { className: getClassNameModal("searchForm"), children: [
                /* @__PURE__ */ jsxs4("label", { className: getClassNameModal("search"), children: [
                  /* @__PURE__ */ jsx11("span", { className: getClassNameModal("searchIconText"), children: "Search" }),
                  /* @__PURE__ */ jsx11("div", { className: getClassNameModal("searchIcon"), children: /* @__PURE__ */ jsx11(Search, { size: "18" }) }),
                  /* @__PURE__ */ jsx11(
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
                /* @__PURE__ */ jsxs4("div", { className: getClassNameModal("searchActions"), children: [
                  /* @__PURE__ */ jsx11(Button, { type: "submit", loading: isLoading, fullWidth: true, children: "Search" }),
                  hasFilterFields && /* @__PURE__ */ jsx11("div", { className: getClassNameModal("searchActionIcon"), children: /* @__PURE__ */ jsx11(
                    IconButton,
                    {
                      type: "button",
                      title: "Toggle filters",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFiltersToggled(!filtersToggled);
                      },
                      children: /* @__PURE__ */ jsx11(SlidersHorizontal, { size: 20 })
                    }
                  ) })
                ] })
              ] }) : /* @__PURE__ */ jsx11(Heading, { rank: "2", size: "xs", children: field.placeholder || "Select data" }) }),
              /* @__PURE__ */ jsxs4("div", { className: getClassNameModal("grid"), children: [
                hasFilterFields && /* @__PURE__ */ jsx11("div", { className: getClassNameModal("filters"), children: hasFilterFields && Object.keys(filterFields).map((fieldName) => {
                  const filterField = filterFields[fieldName];
                  return /* @__PURE__ */ jsx11(
                    "div",
                    {
                      className: getClassNameModal("field"),
                      children: /* @__PURE__ */ jsx11(FieldLabel, { label: filterField.label || fieldName, children: /* @__PURE__ */ jsx11(
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
                /* @__PURE__ */ jsxs4("div", { className: getClassNameModal("tableWrapper"), children: [
                  /* @__PURE__ */ jsxs4("table", { className: getClassNameModal("table"), children: [
                    /* @__PURE__ */ jsx11("thead", { className: getClassNameModal("thead"), children: /* @__PURE__ */ jsx11("tr", { className: getClassNameModal("tr"), children: keys.map((key) => /* @__PURE__ */ jsx11(
                      "th",
                      {
                        className: getClassNameModal("th"),
                        style: { textAlign: "left" },
                        children: key
                      },
                      key
                    )) }) }),
                    /* @__PURE__ */ jsx11("tbody", { className: getClassNameModal("tbody"), children: mappedData.map((item, i) => {
                      return /* @__PURE__ */ jsx11(
                        "tr",
                        {
                          style: { whiteSpace: "nowrap" },
                          className: getClassNameModal("tr"),
                          onClick: () => {
                            onChange(mapProp(data[i]));
                            setOpen(false);
                          },
                          children: keys.map((key) => /* @__PURE__ */ jsx11("td", { className: getClassNameModal("td"), children: item[key] }, key))
                        },
                        i
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ jsx11("div", { className: getClassNameModal("loadingBanner"), children: /* @__PURE__ */ jsx11(Loader, { size: 24 }) })
                ] })
              ] }),
              /* @__PURE__ */ jsx11("div", { className: getClassNameModal("footerContainer"), children: /* @__PURE__ */ jsx11(Footer, { items: mappedData }) })
            ]
          }
        ) })
      ]
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var ExternalField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  Label,
  readOnly
}) => {
  var _a, _b, _c;
  const value = useDeepField(name);
  const validField = field;
  const deprecatedField = field;
  useEffect6(() => {
    if (deprecatedField.adaptor) {
      console.error(
        "Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release."
      );
    }
  }, []);
  if (field.type !== "external") {
    return null;
  }
  return /* @__PURE__ */ jsx12(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx12(Link, { size: 16 }),
      el: "div",
      children: /* @__PURE__ */ jsx12(
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
import { jsx as jsx13, jsxs as jsxs5 } from "react/jsx-runtime";
var getClassName8 = get_class_name_factory_default("Input", styles_module_default);
var RadioField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label
}) => {
  const value = useDeepField(name);
  if (field.type !== "radio" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ jsx13(
    Label,
    {
      icon: labelIcon || /* @__PURE__ */ jsx13(CircleCheckBig, { size: 16 }),
      label: label || name,
      readOnly,
      el: "div",
      children: /* @__PURE__ */ jsx13("div", { className: getClassName8("radioGroupItems"), id, children: field.options.map((option) => {
        var _a;
        return /* @__PURE__ */ jsxs5(
          "label",
          {
            className: getClassName8("radio"),
            children: [
              /* @__PURE__ */ jsx13(
                "input",
                {
                  type: "radio",
                  className: getClassName8("radioInput"),
                  value: JSON.stringify({ value: option.value }),
                  name,
                  onChange: (e) => {
                    onChange(JSON.parse(e.target.value).value);
                  },
                  disabled: readOnly,
                  checked: value === option.value
                }
              ),
              /* @__PURE__ */ jsx13("div", { className: getClassName8("radioInner"), children: option.label || ((_a = option.value) == null ? void 0 : _a.toString()) })
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
import { jsx as jsx14 } from "react/jsx-runtime";
var getClassName9 = get_class_name_factory_default("Input", styles_module_default);
var SelectField = ({
  field,
  onChange,
  label,
  labelIcon,
  Label,
  id,
  name = id,
  readOnly
}) => {
  const value = useDeepField(name);
  if (field.type !== "select" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ jsx14(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx14(ChevronDown, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ jsx14(
        "select",
        {
          id,
          title: label || name,
          className: getClassName9("input"),
          disabled: readOnly,
          onChange: (e) => {
            onChange(JSON.parse(e.target.value).value);
          },
          value: JSON.stringify({ value }),
          children: field.options.map((option) => /* @__PURE__ */ jsx14(
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
import { jsx as jsx15 } from "react/jsx-runtime";
var getClassName10 = get_class_name_factory_default("Input", styles_module_default);
var TextareaField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label
}) => {
  const [localValue, onChangeLocal] = useLocalValue(name, onChange);
  return /* @__PURE__ */ jsx15(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx15(Type, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ jsx15(
        "textarea",
        {
          id,
          className: getClassName10("input"),
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
import { lazy, Suspense } from "react";

// components/RichTextEditor/components/EditorFallback.tsx
init_react_import();
import { memo as memo3 } from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var EditorFallback = memo3((props) => {
  var _a;
  return /* @__PURE__ */ jsx16(
    EditorInner,
    __spreadProps(__spreadValues({}, props), {
      editor: null,
      menu: /* @__PURE__ */ jsx16(
        LoadedRichTextMenuInner,
        {
          field: props.field,
          editor: null,
          editorState: null,
          readOnly: (_a = props.readOnly) != null ? _a : false
        }
      ),
      children: /* @__PURE__ */ jsx16(
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
import { Fragment as Fragment4, jsx as jsx17 } from "react/jsx-runtime";
var Editor = lazy(
  () => import("./Editor-643UIU2I.mjs").then((m) => ({
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
  Label,
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
  return /* @__PURE__ */ jsx17(Fragment4, { children: /* @__PURE__ */ jsx17(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx17(Type, { size: 16 }),
      readOnly,
      el: "div",
      children: /* @__PURE__ */ jsx17(Suspense, { fallback: /* @__PURE__ */ jsx17(EditorFallback, __spreadValues({}, editorProps)), children: /* @__PURE__ */ jsx17(Editor, __spreadValues({}, editorProps)) })
    }
  ) });
};

// components/AutoField/fields/ObjectField/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/AutoField/fields/ObjectField/styles.module.css#css-module
init_react_import();
var styles_module_default7 = { "ObjectField": "_ObjectField_1ua3y_5", "ObjectField-fieldset": "_ObjectField-fieldset_1ua3y_13" };

// components/AutoField/fields/ObjectField/index.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
var getClassName11 = get_class_name_factory_default("ObjectField", styles_module_default7);
var ObjectField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  Label,
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
  return /* @__PURE__ */ jsx18(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx18(EllipsisVertical, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ jsx18("div", { className: getClassName11(), children: /* @__PURE__ */ jsx18("fieldset", { className: getClassName11("fieldset"), children: Object.keys(field.objectFields).map((subName) => {
        const subField = field.objectFields[subName];
        const subPath = `${localName}.${subName}`;
        return /* @__PURE__ */ jsx18(
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

// lib/use-safe-id.ts
init_react_import();
import React2, { useState as useState8 } from "react";
var useSafeId = () => {
  if (typeof React2.useId !== "undefined") {
    return React2.useId();
  }
  const [id] = useState8(generateId());
  return id;
};

// components/AutoField/index.tsx
import { useShallow as useShallow3 } from "zustand/react/shallow";

// components/AutoField/FieldLabel.tsx
init_react_import();
import { useMemo as useMemo4 } from "react";
import { Fragment as Fragment5, jsx as jsx19, jsxs as jsxs6 } from "react/jsx-runtime";
var getClassName12 = get_class_name_factory_default("Input", styles_module_default);
var FieldLabel = ({
  children,
  icon,
  label,
  el = "label",
  readOnly,
  className
}) => {
  const El = el;
  return /* @__PURE__ */ jsxs6(El, { className, children: [
    /* @__PURE__ */ jsxs6("div", { className: getClassName12("label"), children: [
      icon ? /* @__PURE__ */ jsx19("div", { className: getClassName12("labelIcon"), children: icon }) : /* @__PURE__ */ jsx19(Fragment5, {}),
      label,
      readOnly && /* @__PURE__ */ jsx19("div", { className: getClassName12("disabledIcon"), title: "Read-only", children: /* @__PURE__ */ jsx19(Lock, { size: "12" }) })
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
  const Wrapper = useMemo4(
    () => overrides.fieldLabel || FieldLabel,
    [overrides]
  );
  if (!label) {
    return /* @__PURE__ */ jsx19(Fragment5, { children });
  }
  return /* @__PURE__ */ jsx19(
    Wrapper,
    {
      label,
      icon,
      className: getClassName12({ readOnly }),
      readOnly,
      el,
      children
    }
  );
};

// components/AutoField/index.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var getClassName13 = get_class_name_factory_default("Input", styles_module_default);
var getClassNameWrapper = get_class_name_factory_default("InputWrapper", styles_module_default);
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
  const readOnly = useAppStore(useShallow3((s) => {
    var _a2;
    return (_a2 = s.selectedItem) == null ? void 0 : _a2.readOnly;
  }));
  const nestedFieldContext = useContext4(NestedFieldContext);
  const { id, Label = FieldLabelInternal } = props;
  const field = props.field;
  const label = field.label;
  const labelIcon = field.labelIcon;
  const defaultId = useSafeId();
  const resolvedId = id || defaultId;
  const render = useMemo5(
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
  const mergedProps = useMemo5(
    () => __spreadProps(__spreadValues({}, props), {
      field,
      label,
      labelIcon,
      Label,
      id: resolvedId,
      value: fieldValue
    }),
    [props, field, label, labelIcon, Label, resolvedId, fieldValue]
  );
  const onFocus = useCallback4(
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
  const onBlur = useCallback4((e) => {
    if ("name" in e.target) {
      dispatch({
        type: "setUi",
        ui: {
          field: { focus: null }
        }
      });
    }
  }, []);
  let Children = useMemo5(() => {
    if (field.type !== "custom" && field.type !== "slot") {
      return defaultFields[field.type];
    }
    return (_props) => null;
  }, [field.type]);
  const fieldKey = field.type === "custom" ? field.key : void 0;
  let FieldComponent = useMemo5(() => {
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
  return /* @__PURE__ */ jsx20(
    NestedFieldContext.Provider,
    {
      value: {
        readOnlyFields: nestedFieldContext.readOnlyFields || readOnly || {},
        localName: (_a = nestedFieldContext.localName) != null ? _a : mergedProps.name
      },
      children: /* @__PURE__ */ jsx20(
        "div",
        {
          className: getClassNameWrapper(),
          onFocus,
          onBlur,
          onClick: (e) => {
            e.stopPropagation();
          },
          children: /* @__PURE__ */ jsx20(FieldComponent, __spreadProps(__spreadValues({}, mergedProps), { children: /* @__PURE__ */ jsx20(Children, __spreadValues({}, mergedProps)) }))
        }
      )
    }
  );
}
function AutoFieldPrivate(props) {
  return /* @__PURE__ */ jsx20(AutoFieldInternal, __spreadValues({}, props));
}
function AutoFieldPublicInternal(_a) {
  var _b = _a, { value } = _b, props = __objRest(_b, ["value"]);
  const DefaultLabel = useMemo5(() => {
    const DefaultLabel2 = (labelProps) => /* @__PURE__ */ jsx20(
      "div",
      __spreadProps(__spreadValues({}, labelProps), {
        className: getClassName13({ readOnly: props.readOnly })
      })
    );
    return DefaultLabel2;
  }, [props.readOnly]);
  const fieldStore = useFieldStoreApi();
  const onChange = useCallback4(
    (value2) => {
      if (!props.id) return;
      fieldStore.setState({ [props.id]: value2 });
      props.onChange(value2);
    },
    [fieldStore, props.onChange, props.id]
  );
  useEffect7(() => {
    if (!props.id) return;
    fieldStore.setState({ [props.id]: value });
  }, [props.id, value, fieldStore]);
  return /* @__PURE__ */ jsx20(
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
  return /* @__PURE__ */ jsx20(fieldContextStore.Provider, { value: { [id]: props.value }, children: /* @__PURE__ */ jsx20(AutoFieldPublicInternal, __spreadProps(__spreadValues({}, props), { id })) });
}

// components/Drawer/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/Drawer/styles.module.css#css-module
init_react_import();
var styles_module_default8 = { "Drawer": "_Drawer_pl7z0_1", "Drawer-draggable": "_Drawer-draggable_pl7z0_8", "Drawer-draggableBg": "_Drawer-draggableBg_pl7z0_12", "DrawerItem-draggable": "_DrawerItem-draggable_pl7z0_22", "DrawerItem--disabled": "_DrawerItem--disabled_pl7z0_35", "DrawerItem": "_DrawerItem_pl7z0_22", "Drawer--isDraggingFrom": "_Drawer--isDraggingFrom_pl7z0_45", "DrawerItem-name": "_DrawerItem-name_pl7z0_63" };

// components/Drawer/index.tsx
import { useMemo as useMemo12, useState as useState16 } from "react";

// components/DragDropContext/index.tsx
init_react_import();
import { DragDropProvider as DragDropProvider2 } from "@dnd-kit/react";
import {
  createContext as createContext4,
  useCallback as useCallback12,
  useContext as useContext8,
  useEffect as useEffect16,
  useMemo as useMemo11,
  useRef as useRef8,
  useState as useState15
} from "react";
import { AutoScroller, defaultPreset } from "@dnd-kit/dom";

// components/DropZone/index.tsx
init_react_import();
import {
  forwardRef,
  memo as memo7,
  useCallback as useCallback11,
  useContext as useContext7,
  useEffect as useEffect15,
  useMemo as useMemo10,
  useRef as useRef7
} from "react";

// components/DraggableComponent/index.tsx
init_react_import();
import {
  useCallback as useCallback7,
  useContext as useContext5,
  useEffect as useEffect9,
  useMemo as useMemo7,
  useRef as useRef2,
  useState as useState10,
  useTransition
} from "react";

// css-module:/Users/mariusmuller/puck/packages/core/components/DraggableComponent/styles.module.css#css-module
init_react_import();
var styles_module_default9 = { "DraggableComponent": "_DraggableComponent_1vaqy_1", "DraggableComponent-overlayWrapper": "_DraggableComponent-overlayWrapper_1vaqy_12", "DraggableComponent-overlay": "_DraggableComponent-overlay_1vaqy_12", "DraggableComponent-loadingOverlay": "_DraggableComponent-loadingOverlay_1vaqy_34", "DraggableComponent--hover": "_DraggableComponent--hover_1vaqy_50", "DraggableComponent--isSelected": "_DraggableComponent--isSelected_1vaqy_57", "DraggableComponent-actionsOverlay": "_DraggableComponent-actionsOverlay_1vaqy_71", "DraggableComponent-actions": "_DraggableComponent-actions_1vaqy_71" };

// components/DraggableComponent/index.tsx
import { createPortal as createPortal2 } from "react-dom";

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
import {
  createContext as createContext3,
  useCallback as useCallback5,
  useMemo as useMemo6
} from "react";
import { createStore as createStore3 } from "zustand";
import { Fragment as Fragment6, jsx as jsx21 } from "react/jsx-runtime";
var dropZoneContext = createContext3(null);
var ZoneStoreContext = createContext3(
  createStore3(() => ({
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
  return /* @__PURE__ */ jsx21(ZoneStoreContext.Provider, { value: store, children });
};
var DropZoneProvider = ({
  children,
  value
}) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const registerZone = useCallback5(
    (zoneCompound) => {
      dispatch({
        type: "registerZone",
        zone: zoneCompound
      });
    },
    [dispatch]
  );
  const memoValue = useMemo6(
    () => __spreadValues({
      registerZone
    }, value),
    [value]
  );
  return /* @__PURE__ */ jsx21(Fragment6, { children: memoValue && /* @__PURE__ */ jsx21(dropZoneContext.Provider, { value: memoValue, children }) });
};

// components/DraggableComponent/index.tsx
import { useShallow as useShallow4 } from "zustand/react/shallow";
import { useSortable as useSortable2 } from "@dnd-kit/react/sortable";

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
import { useCallback as useCallback6 } from "react";
var useOnDragFinished = (cb, deps = []) => {
  const appStore = useAppStoreApi();
  return useCallback6(() => {
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
import { Fragment as Fragment7, jsx as jsx22, jsxs as jsxs7 } from "react/jsx-runtime";
var getClassName14 = get_class_name_factory_default("DraggableComponent", styles_module_default9);
var DEBUG2 = false;
var space = 8;
var actionsOverlayTop = space * 6.5;
var actionsTop = -(actionsOverlayTop - 8);
var actionsSide = space;
var DefaultActionBar = ({
  label,
  children,
  parentAction
}) => /* @__PURE__ */ jsxs7(ActionBar, { children: [
  /* @__PURE__ */ jsxs7(ActionBar.Group, { children: [
    parentAction,
    label && /* @__PURE__ */ jsx22(ActionBar.Label, { label })
  ] }),
  /* @__PURE__ */ jsx22(ActionBar.Group, { children })
] });
var DefaultOverlay = ({
  children
}) => /* @__PURE__ */ jsx22(Fragment7, { children });
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
  const ctx = useContext5(dropZoneContext);
  const [localZones, setLocalZones] = useState10({});
  const registerLocalZone = useCallback7(
    (zoneCompound2, active) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.registerLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2, active);
      setLocalZones((obj) => __spreadProps(__spreadValues({}, obj), {
        [zoneCompound2]: active
      }));
    },
    [setLocalZones]
  );
  const unregisterLocalZone = useCallback7(
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
  const path = useAppStore(useShallow4((s) => {
    var _a;
    return (_a = s.state.indexes.nodes[id]) == null ? void 0 : _a.path;
  }));
  const permissions = useAppStore(
    useShallow4((s) => {
      const item = getItem({ index, zone: zoneCompound }, s.state);
      return s.permissions.getPermissions({ item });
    })
  );
  const zoneStore = useContext5(ZoneStoreContext);
  const [dragAxis, setDragAxis] = useState10(userDragAxis || autoDragAxis);
  const dynamicCollisionDetector = useMemo7(
    () => createDynamicCollisionDetector(dragAxis),
    [dragAxis]
  );
  const {
    ref: sortableRef,
    isDragging: thisIsDragging,
    sortable
  } = useSortable2({
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
  useEffect9(() => {
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
  const [, setRerender] = useState10(0);
  const ref = useRef2(null);
  const refSetter = useCallback7(
    (el) => {
      sortableRef(el);
      if (ref.current !== el) {
        ref.current = el;
        setRerender((update) => update + 1);
      }
    },
    [sortableRef]
  );
  const [portalEl, setPortalEl] = useState10();
  useEffect9(() => {
    var _a, _b, _c;
    setPortalEl(
      iframeEnabled ? (_a = ref.current) == null ? void 0 : _a.ownerDocument.body : (_c = (_b = ref.current) == null ? void 0 : _b.closest("[data-puck-preview]")) != null ? _c : document.body
    );
  }, [iframeEnabled, ref.current]);
  const getStyle = useCallback7(() => {
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
  const [style, setStyle] = useState10();
  const sync = useCallback7(() => {
    setStyle(getStyle());
  }, [ref.current, iframeEnabled]);
  useEffect9(() => {
    if (ref.current) {
      const observer = new ResizeObserver(sync);
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref.current]);
  const registerNode = useAppStore((s) => s.nodes.registerNode);
  const hideOverlay = useCallback7(() => {
    setIsVisible(false);
  }, []);
  const showOverlay = useCallback7(() => {
    setIsVisible(true);
  }, []);
  const syncRef = useRef2(sync);
  syncRef.current = sync;
  const showOverlayRef = useRef2(showOverlay);
  showOverlayRef.current = showOverlay;
  const hideOverlayRef = useRef2(hideOverlay);
  hideOverlayRef.current = hideOverlay;
  useEffect9(() => {
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
  const onClick = useCallback7(
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
  const onSelectParent = useCallback7(() => {
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
  const onDuplicate = useCallback7(() => {
    dispatch({
      type: "duplicate",
      sourceIndex: index,
      sourceZone: zoneCompound
    });
  }, [index, zoneCompound]);
  const onDelete = useCallback7(() => {
    dispatch({
      type: "remove",
      index,
      zone: zoneCompound
    });
  }, [index, zoneCompound]);
  const [hover, setHover] = useState10(false);
  const indicativeHover = useContextStore(
    ZoneStoreContext,
    (s) => s.hoveringComponent === id
  );
  useEffect9(() => {
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
  useEffect9(() => {
    if (!ref.current) return;
    const el = ref.current;
    if (isSelected) {
      el.setAttribute("data-puck-selected", "");
    } else {
      el.removeAttribute("data-puck-selected");
    }
  }, [isSelected]);
  const [isVisible, setIsVisible] = useState10(false);
  const [dragFinished, setDragFinished] = useState10(true);
  const [_, startTransition] = useTransition();
  useEffect9(() => {
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
  const [thisWasDragging, setThisWasDragging] = useState10(false);
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
  useEffect9(() => {
    if (thisIsDragging) {
      setThisWasDragging(true);
    }
  }, [thisIsDragging]);
  useEffect9(() => {
    if (thisWasDragging) return onDragFinished();
  }, [thisWasDragging, onDragFinished]);
  const syncActionsPosition = useCallback7(
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
  useEffect9(() => {
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
  const parentAction = useMemo7(
    () => (ctx == null ? void 0 : ctx.areaId) && (ctx == null ? void 0 : ctx.areaId) !== "root" && /* @__PURE__ */ jsx22(ActionBar.Action, { onClick: onSelectParent, label: "Select parent", children: /* @__PURE__ */ jsx22(CornerLeftUp, { size: 16 }) }),
    [ctx == null ? void 0 : ctx.areaId]
  );
  const nextContextValue = useMemo7(
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
  return /* @__PURE__ */ jsxs7(DropZoneProvider, { value: nextContextValue, children: [
    dragFinished && isVisible && createPortal2(
      /* @__PURE__ */ jsxs7(
        "div",
        {
          className: getClassName14({
            isSelected,
            isDragging: thisIsDragging,
            hover: hover || indicativeHover
          }),
          style: __spreadValues({}, style),
          "data-puck-overlay": true,
          children: [
            debug,
            isLoading && /* @__PURE__ */ jsx22("div", { className: getClassName14("loadingOverlay"), children: /* @__PURE__ */ jsx22(Loader, {}) }),
            /* @__PURE__ */ jsx22(
              "div",
              {
                className: getClassName14("actionsOverlay"),
                style: {
                  top: actionsOverlayTop / zoom
                },
                children: /* @__PURE__ */ jsx22(
                  "div",
                  {
                    className: getClassName14("actions"),
                    style: {
                      transform: `scale(${1 / zoom}`,
                      top: actionsTop / zoom,
                      right: 0,
                      paddingLeft: actionsSide,
                      paddingRight: actionsSide
                    },
                    ref: syncActionsPosition,
                    children: /* @__PURE__ */ jsxs7(
                      CustomActionBar,
                      {
                        parentAction,
                        label: DEBUG2 ? id : label,
                        componentType,
                        children: [
                          richText && /* @__PURE__ */ jsxs7(Fragment7, { children: [
                            /* @__PURE__ */ jsx22(
                              LoadedRichTextMenu,
                              {
                                editor: richText.editor,
                                field: richText.field,
                                inline: true,
                                readOnly: false
                              }
                            ),
                            hasNormalActions && /* @__PURE__ */ jsx22(ActionBar.Separator, {})
                          ] }),
                          permissions.duplicate && /* @__PURE__ */ jsx22(ActionBar.Action, { onClick: onDuplicate, label: "Duplicate", children: /* @__PURE__ */ jsx22(Copy, { size: 16 }) }),
                          permissions.delete && /* @__PURE__ */ jsx22(ActionBar.Action, { onClick: onDelete, label: "Delete", children: /* @__PURE__ */ jsx22(Trash, { size: 16 }) })
                        ]
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx22("div", { className: getClassName14("overlayWrapper"), children: /* @__PURE__ */ jsx22(
              CustomOverlay,
              {
                componentId: id,
                componentType,
                hover,
                isSelected,
                children: /* @__PURE__ */ jsx22("div", { className: getClassName14("overlay") })
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

// css-module:/Users/mariusmuller/puck/packages/core/components/DropZone/styles.module.css#css-module
init_react_import();
var styles_module_default10 = { "DropZone": "_DropZone_1i2sv_1", "DropZone--hasChildren": "_DropZone--hasChildren_1i2sv_11", "DropZone--isAreaSelected": "_DropZone--isAreaSelected_1i2sv_24", "DropZone--hoveringOverArea": "_DropZone--hoveringOverArea_1i2sv_25", "DropZone--isRootZone": "_DropZone--isRootZone_1i2sv_25", "DropZone--isDestination": "_DropZone--isDestination_1i2sv_35", "DropZone-item": "_DropZone-item_1i2sv_47", "DropZone-hitbox": "_DropZone-hitbox_1i2sv_51", "DropZone--isEnabled": "_DropZone--isEnabled_1i2sv_59", "DropZone--isAnimating": "_DropZone--isAnimating_1i2sv_68" };

// components/DropZone/index.tsx
import { useDroppable } from "@dnd-kit/react";

// components/DropZone/lib/use-min-empty-height.ts
init_react_import();
import { useEffect as useEffect10, useRef as useRef3, useState as useState11 } from "react";
var getNumItems = (appStore, zoneCompound) => appStore.getState().state.indexes.zones[zoneCompound].contentIds.length;
var useMinEmptyHeight = ({
  zoneCompound,
  userMinEmptyHeight,
  ref
}) => {
  const appStore = useAppStoreApi();
  const [prevHeight, setPrevHeight] = useState11(0);
  const [isAnimating, setIsAnimating] = useState11(false);
  const { draggedItem, isZone } = useContextStore(ZoneStoreContext, (s) => {
    var _a, _b;
    return {
      draggedItem: ((_a = s.draggedItem) == null ? void 0 : _a.data.zone) === zoneCompound ? s.draggedItem : null,
      isZone: ((_b = s.draggedItem) == null ? void 0 : _b.data.zone) === zoneCompound
    };
  });
  const numItems = useRef3(0);
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
  useEffect10(() => {
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
import { useContext as useContext6, useEffect as useEffect11, useState as useState12 } from "react";

// lib/dnd/use-rendered-callback.ts
init_react_import();
import { useDragDropManager } from "@dnd-kit/react";
import { useCallback as useCallback8 } from "react";
function useRenderedCallback(callback, deps) {
  const manager = useDragDropManager();
  return useCallback8(
    (...args) => __async(null, null, function* () {
      yield manager == null ? void 0 : manager.renderer.rendering;
      return callback(...args);
    }),
    [...deps, manager]
  );
}

// components/DropZone/lib/use-content-with-preview.ts
var useContentIdsWithPreview = (contentIds, zoneCompound) => {
  const zoneStore = useContext6(ZoneStoreContext);
  const preview = useContextStore(
    ZoneStoreContext,
    (s) => s.previewIndex[zoneCompound]
  );
  const isDragging = useAppStore((s) => s.state.ui.isDragging);
  const [contentIdsWithPreview, setContentIdsWithPreview] = useState12(contentIds);
  const [localPreview, setLocalPreview] = useState12(
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
  useEffect11(() => {
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
import { useCallback as useCallback9, useEffect as useEffect12, useState as useState13 } from "react";
var GRID_DRAG_AXIS = "dynamic";
var FLEX_ROW_DRAG_AXIS = "x";
var DEFAULT_DRAG_AXIS = "y";
var useDragAxis = (ref, collisionAxis) => {
  const status = useAppStore((s) => s.status);
  const [dragAxis, setDragAxis] = useState13(
    collisionAxis || DEFAULT_DRAG_AXIS
  );
  const calculateDragAxis = useCallback9(() => {
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
  useEffect12(() => {
    const onViewportChange = () => {
      calculateDragAxis();
    };
    window.addEventListener("viewportchange", onViewportChange);
    return () => {
      window.removeEventListener("viewportchange", onViewportChange);
    };
  }, []);
  useEffect12(calculateDragAxis, [status, collisionAxis]);
  return [dragAxis, calculateDragAxis];
};

// components/DropZone/index.tsx
import { useShallow as useShallow6 } from "zustand/react/shallow";

// components/Render/index.tsx
init_react_import();
import React3, { useMemo as useMemo8 } from "react";

// components/SlotRender/index.tsx
init_react_import();
import { useShallow as useShallow5 } from "zustand/react/shallow";
import { jsx as jsx23 } from "react/jsx-runtime";
var ContextSlotRender = ({
  componentId,
  zone
}) => {
  const config = useAppStore((s) => s.config);
  const metadata = useAppStore((s) => s.metadata);
  const slotContent = useAppStore(
    useShallow5((s) => {
      var _a, _b;
      const indexes = s.state.indexes;
      const contentIds = (_b = (_a = indexes.zones[`${componentId}:${zone}`]) == null ? void 0 : _a.contentIds) != null ? _b : [];
      return contentIds.map((contentId) => indexes.nodes[contentId].flatData);
    })
  );
  return /* @__PURE__ */ jsx23(
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
import { jsx as jsx24 } from "react/jsx-runtime";
var renderContext = React3.createContext({
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
    (props) => /* @__PURE__ */ jsx24(SlotRender, __spreadProps(__spreadValues({}, props), { config, metadata }))
  );
  const richtextProps = useRichtextProps((_a = config.root) == null ? void 0 : _a.fields, pageProps);
  const nextContextValue = useMemo8(
    () => ({
      mode: "render",
      depth: 0
    }),
    []
  );
  if ((_b = config.root) == null ? void 0 : _b.render) {
    return /* @__PURE__ */ jsx24(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ jsx24(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ jsx24(config.root.render, __spreadProps(__spreadValues(__spreadValues({}, propsWithSlots), richtextProps), { children: /* @__PURE__ */ jsx24(DropZoneRenderPure, { zone: rootZone }) })) }) });
  }
  return /* @__PURE__ */ jsx24(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ jsx24(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ jsx24(DropZoneRenderPure, { zone: rootZone }) }) });
}

// lib/field-transforms/use-field-transforms-tracked.tsx
init_react_import();
import { useMemo as useMemo9, useRef as useRef4 } from "react";
function useFieldTransformsTracked(config, item, transforms, readOnly, forceReadOnly) {
  const prevProps = useRef4(null);
  const prevResult = useRef4(item.props);
  const mappers = useMemo9(
    () => buildMappers(transforms, readOnly, forceReadOnly),
    [transforms, readOnly, forceReadOnly]
  );
  const transformedProps = useMemo9(() => {
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
  const mergedProps = useMemo9(
    () => __spreadValues(__spreadValues({}, item.props), transformedProps),
    [item.props, transformedProps]
  );
  return mergedProps;
}

// lib/field-transforms/default-transforms/inline-text-transform.tsx
init_react_import();

// components/InlineTextField/index.tsx
init_react_import();
import { memo as memo4, useEffect as useEffect13, useRef as useRef5, useState as useState14 } from "react";

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

// css-module:/Users/mariusmuller/puck/packages/core/components/InlineTextField/styles.module.css#css-module
init_react_import();
var styles_module_default11 = { "InlineTextField": "_InlineTextField_104qp_1" };

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
import { jsx as jsx25 } from "react/jsx-runtime";
var getClassName15 = get_class_name_factory_default("InlineTextField", styles_module_default11);
var InlineTextFieldInternal = ({
  propPath,
  componentId,
  value,
  isReadOnly,
  opts = {}
}) => {
  var _a;
  const ref = useRef5(null);
  const appStoreApi = useAppStoreApi();
  const disableLineBreaks = (_a = opts.disableLineBreaks) != null ? _a : false;
  useEffect13(() => {
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
  const [isHovering, setIsHovering] = useState14(false);
  const [isFocused, setIsFocused] = useState14(false);
  return /* @__PURE__ */ jsx25(
    "span",
    {
      className: getClassName15(),
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
var InlineTextField = memo4(InlineTextFieldInternal);

// lib/field-transforms/default-transforms/inline-text-transform.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
var getInlineTextTransform = () => ({
  text: ({ value, componentId, field, propPath, isReadOnly }) => {
    if (field.contentEditable) {
      return /* @__PURE__ */ jsx26(
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
      return /* @__PURE__ */ jsx26(
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
      return /* @__PURE__ */ jsx26(
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
import {
  useEffect as useEffect14,
  useRef as useRef6,
  useCallback as useCallback10,
  memo as memo5,
  lazy as lazy2,
  Suspense as Suspense2
} from "react";
import { jsx as jsx27 } from "react/jsx-runtime";
var Editor2 = lazy2(
  () => import("./Editor-643UIU2I.mjs").then((m) => ({
    default: m.Editor
  }))
);
var RichTextRender = lazy2(
  () => import("./Render-SSARMVD5.mjs").then((m) => ({
    default: m.RichTextRender
  }))
);
var InlineEditorWrapper = memo5(
  ({
    value,
    componentId,
    propPath,
    field,
    id
  }) => {
    const portalRef = useRef6(null);
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
    useEffect14(() => {
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
    useEffect14(() => {
      if (!isEditorActiveButDeselected) return;
      const richText = appStoreApi.getState().currentRichText;
      if ((richText == null ? void 0 : richText.inlineComponentId) === componentId) {
        richText.editor.commands.blur();
        appStoreApi.setState({ currentRichText: null });
      }
    }, [isEditorActiveButDeselected, appStoreApi, componentId]);
    const handleChange = useCallback10(
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
    const handleFocus = useCallback10(
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
      return /* @__PURE__ */ jsx27(Suspense2, { fallback: /* @__PURE__ */ jsx27(RichTextRenderFallback, { content: value }), children: /* @__PURE__ */ jsx27(RichTextRender, { content: value, field }) });
    const editorProps = {
      content: value,
      onChange: handleChange,
      field,
      inline: true,
      onFocus: handleFocus,
      id,
      name: propPath
    };
    return /* @__PURE__ */ jsx27(
      "div",
      {
        ref: portalRef,
        onClick: onClickHandler,
        onClickCapture: onClickCaptureHandler,
        children: /* @__PURE__ */ jsx27(Suspense2, { fallback: /* @__PURE__ */ jsx27(EditorFallback, __spreadValues({}, editorProps)), children: /* @__PURE__ */ jsx27(Editor2, __spreadValues({}, editorProps)) })
      }
    );
  }
);
InlineEditorWrapper.displayName = "InlineEditorWrapper";
var getRichTextTransform = () => ({
  richtext: ({ value, componentId, field, propPath, isReadOnly }) => {
    const { contentEditable = true, tiptap } = field;
    if (contentEditable === false || isReadOnly) {
      return /* @__PURE__ */ jsx27(RichTextRender, { content: value, field });
    }
    const id = `${componentId}_${field.type}_${propPath}`;
    return /* @__PURE__ */ jsx27(
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
import { deepEqual } from "fast-equals";
import { memo as memo6 } from "react";

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
import { jsx as jsx28 } from "react/jsx-runtime";
var RenderComponent = ({
  Component,
  componentProps: renderProps
}) => {
  return /* @__PURE__ */ jsx28(Component, __spreadValues({}, renderProps));
};
var MemoizeComponent = memo6(RenderComponent, (prev, next) => {
  let puckEquals = true;
  if ("puck" in prev.componentProps && "puck" in next.componentProps) {
    puckEquals = deepEqual(prev.componentProps.puck, next.componentProps.puck);
  }
  return prev.Component === next.Component && shallowEqual(prev.componentProps, next.componentProps, ["puck"]) && puckEquals;
});

// components/DropZone/index.tsx
import { Fragment as Fragment8, jsx as jsx29, jsxs as jsxs8 } from "react/jsx-runtime";
var getClassName16 = get_class_name_factory_default("DropZone", styles_module_default10);
var getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
var RENDER_DEBUG = false;
var InsertPreview = ({
  element,
  label,
  override
}) => {
  if (element) {
    return (
      // Safe to use this since the HTML is set by the user
      /* @__PURE__ */ jsx29("div", { dangerouslySetInnerHTML: { __html: element.outerHTML } })
    );
  }
  return /* @__PURE__ */ jsx29(DrawerItemInner, { name: label, children: override });
};
var DropZoneEditPure = (props) => /* @__PURE__ */ jsx29(DropZoneEdit, __spreadValues({}, props));
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
  const ctx = useContext7(dropZoneContext);
  const { depth = 1 } = ctx != null ? ctx : {};
  const zoneStore = useContext7(ZoneStoreContext);
  const nodeProps = useAppStore(
    useShallow6((s) => {
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
    useShallow6((s) => {
      var _a2;
      return (_a2 = s.state.indexes.nodes[componentId]) == null ? void 0 : _a2.data.readOnly;
    })
  );
  const appStore = useAppStoreApi();
  const item = useMemo10(() => {
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
  const puckProps = useMemo10(
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
  const defaultsProps = useMemo10(
    () => __spreadProps(__spreadValues(__spreadValues({}, componentConfig == null ? void 0 : componentConfig.defaultProps), item == null ? void 0 : item.props), {
      puck: puckProps,
      editMode: true
      // DEPRECATED
    }),
    [componentConfig == null ? void 0 : componentConfig.defaultProps, item == null ? void 0 : item.props, puckProps]
  );
  const defaultedNode = useMemo10(
    () => {
      var _a2;
      return { type: (_a2 = item == null ? void 0 : item.type) != null ? _a2 : nodeType, props: defaultsProps };
    },
    [item == null ? void 0 : item.type, nodeType, defaultsProps]
  );
  const config = useAppStore((s) => s.config);
  const plugins = useAppStore((s) => s.plugins);
  const userFieldTransforms = useAppStore((s) => s.fieldTransforms);
  const combinedFieldTransforms = useMemo10(
    () => __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, getSlotTransform(DropZoneEditPure, (slotProps) => /* @__PURE__ */ jsx29(ContextSlotRender, { componentId, zone: slotProps.zone }))), getInlineTextTransform()), getRichTextTransform()), plugins.reduce(
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
  const Render2 = componentConfig ? componentConfig.render : () => /* @__PURE__ */ jsxs8("div", { style: { padding: 48, textAlign: "center" }, children: [
    "No configuration for ",
    item.type
  ] });
  let componentType = item.type;
  const isInserting = "previewType" in item ? item.previewType === "insert" : false;
  return /* @__PURE__ */ jsx29(
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
          return /* @__PURE__ */ jsx29(
            MemoizeComponent,
            {
              Component: Render2,
              componentProps: __spreadProps(__spreadValues({}, transformedProps), {
                puck: __spreadProps(__spreadValues({}, transformedProps.puck), { dragRef })
              })
            }
          );
        }
        return /* @__PURE__ */ jsx29("div", { ref: dragRef, children: isInserting ? /* @__PURE__ */ jsx29(
          InsertPreview,
          {
            label,
            override: (_a2 = overrides.componentItem) != null ? _a2 : overrides.drawerItem,
            element: "element" in item && item.element ? item.element : void 0
          }
        ) : /* @__PURE__ */ jsx29(
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
var DropZoneChildMemo = memo7(DropZoneChild);
var DropZoneEdit = forwardRef(
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
    const ctx = useContext7(dropZoneContext);
    const appStoreApi = useAppStoreApi();
    const {
      // These all need setting via context
      areaId,
      depth = 0,
      registerLocalZone,
      unregisterLocalZone
    } = ctx != null ? ctx : {};
    const path = useAppStore(
      useShallow6((s) => {
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
      useShallow6((s) => {
        var _a;
        return (_a = s.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.contentIds;
      })
    );
    const zoneType = useAppStore(
      useShallow6((s) => {
        var _a;
        return (_a = s.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.type;
      })
    );
    useEffect15(() => {
      if (!zoneType || zoneType === "dropzone") {
        if (ctx == null ? void 0 : ctx.registerZone) {
          ctx == null ? void 0 : ctx.registerZone(zoneCompound);
        }
      }
    }, [zoneType, appStoreApi]);
    useEffect15(() => {
      if (zoneType === "dropzone") {
        if (zoneCompound !== rootDroppableId) {
          console.warn(
            "DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots"
          );
        }
      }
    }, [zoneType]);
    const contentIds = useMemo10(() => {
      return zoneContentIds || [];
    }, [zoneContentIds]);
    const ref = useRef7(null);
    const acceptsTarget = useCallback11(
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
    useEffect15(() => {
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
    const zoneStore = useContext7(ZoneStoreContext);
    useEffect15(() => {
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
    const { ref: dropRef } = useDroppable(droppableConfig);
    const isAreaSelected = useAppStore(
      (s) => (s == null ? void 0 : s.selectedItem) && areaId === (s == null ? void 0 : s.selectedItem.props.id)
    );
    const [dragAxis] = useDragAxis(ref, collisionAxis);
    const [minEmptyHeight, isAnimating] = useMinEmptyHeight({
      zoneCompound,
      userMinEmptyHeight,
      ref
    });
    const setRefs = useCallback11(
      (node) => {
        assignRefs([ref, dropRef, userRef], node);
      },
      [dropRef]
    );
    const El = as != null ? as : "div";
    return /* @__PURE__ */ jsx29(
      El,
      {
        className: `${getClassName16({
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
          return /* @__PURE__ */ jsx29(
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
  const props = useSlots(config, item, (slotProps) => /* @__PURE__ */ jsx29(SlotRenderPure, __spreadProps(__spreadValues({}, slotProps), { config, metadata })));
  const nextContextValue = useMemo10(
    () => ({
      areaId: props.id,
      depth: 1
    }),
    [props]
  );
  const richtextProps = useRichtextProps(Component.fields, props);
  return /* @__PURE__ */ jsx29(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ jsx29(
    Component.render,
    __spreadProps(__spreadValues(__spreadValues({}, props), richtextProps), {
      puck: __spreadProps(__spreadValues({}, props.puck), {
        renderDropZone: DropZoneRenderPure,
        metadata: __spreadValues(__spreadValues({}, metadata), Component.metadata)
      })
    })
  ) }, props.id);
};
var DropZoneRenderPure = (props) => /* @__PURE__ */ jsx29(DropZoneRender, __spreadValues({}, props));
var DropZoneRender = forwardRef(
  function DropZoneRenderInternal({ className, style, zone, as }, ref) {
    const ctx = useContext7(dropZoneContext);
    const { areaId = "root" } = ctx || {};
    const { config, data, metadata } = useContext7(renderContext);
    let zoneCompound = `${areaId}:${zone}`;
    let content = (data == null ? void 0 : data.content) || [];
    useEffect15(() => {
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
    return /* @__PURE__ */ jsx29(El, { className, style, ref, children: content.map((item) => {
      const Component = config.components[item.type];
      if (Component) {
        return /* @__PURE__ */ jsx29(
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
var DropZonePure = (props) => /* @__PURE__ */ jsx29(DropZone, __spreadValues({}, props));
var DropZone = forwardRef(
  function DropZone2(props, ref) {
    const ctx = useContext7(dropZoneContext);
    if ((ctx == null ? void 0 : ctx.mode) === "edit") {
      return /* @__PURE__ */ jsx29(Fragment8, { children: /* @__PURE__ */ jsx29(DropZoneEdit, __spreadProps(__spreadValues({}, props), { ref })) });
    }
    return /* @__PURE__ */ jsx29(Fragment8, { children: /* @__PURE__ */ jsx29(DropZoneRender, __spreadProps(__spreadValues({}, props), { ref })) });
  }
);

// lib/dnd/NestedDroppablePlugin.ts
init_react_import();
import { Plugin } from "@dnd-kit/abstract";

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
var getZoneId = (candidate) => {
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
    const zone = getZoneId(primaryCandidate);
    const area = primaryCandidateIsComponent && primaryCandidateData.containsActiveZone ? filteredCandidates[0].id : (_a = filteredCandidates[0]) == null ? void 0 : _a.data.areaId;
    return { zone, area };
  }
  return {
    zone: rootDroppableId,
    area: rootAreaId
  };
};
var createNestedDroppablePlugin = ({ onChange }, id) => class NestedDroppablePlugin extends Plugin {
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
  const resolveComponentData = getState().resolveComponentData;
  const resolved = yield resolveComponentData(itemData, "insert");
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
  const resolveComponentData = appStore.getState().resolveComponentData;
  const resolvedData = yield resolveComponentData(componentData, "move");
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
import { useDebouncedCallback } from "use-debounce";
import { createStore as createStore4 } from "zustand";

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
import { effect } from "@dnd-kit/state";
import { jsx as jsx30 } from "react/jsx-runtime";
var DEBUG3 = false;
var dragListenerContext = createContext4({
  dragListeners: {}
});
function useDragListener(type, fn, deps = []) {
  const { setDragListeners } = useContext8(dragListenerContext);
  useEffect16(() => {
    if (setDragListeners) {
      setDragListeners((old) => __spreadProps(__spreadValues({}, old), {
        [type]: [...old[type] || [], fn]
      }));
    }
  }, deps);
}
var AREA_CHANGE_DEBOUNCE_MS = 100;
var useTempDisableFallback = (timeout3) => {
  const lastFallbackDisable = useRef8(null);
  return useCallback12((manager) => {
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
  const debouncedParamsRef = useRef8(null);
  const tempDisableFallback = useTempDisableFallback(100);
  const [zoneStore] = useState15(
    () => createStore4(() => ({
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
  const getChanged = useCallback12(
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
  const setDeepestAndCollide = useCallback12(
    (params, manager) => {
      const { zoneChanged, areaChanged } = getChanged(params);
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
  const setDeepestDb = useDebouncedCallback(
    setDeepestAndCollide,
    AREA_CHANGE_DEBOUNCE_MS
  );
  const cancelDb = () => {
    setDeepestDb.cancel();
    debouncedParamsRef.current = null;
  };
  useEffect16(() => {
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
  const [plugins] = useState15(() => [
    ...disableAutoScroll ? defaultPreset.plugins.filter((plugin) => plugin !== AutoScroller) : defaultPreset.plugins,
    createNestedDroppablePlugin(
      {
        onChange: (params, manager) => {
          const state = zoneStore.getState();
          const { zoneChanged, areaChanged } = getChanged(params);
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
  const [dragListeners, setDragListeners] = useState15({});
  const dragMode = useRef8(null);
  const initialSelector = useRef8(void 0);
  const nextContextValue = useMemo11(
    () => ({
      mode: "edit",
      areaId: "root",
      depth: 0
    }),
    []
  );
  return /* @__PURE__ */ jsx30(
    dragListenerContext.Provider,
    {
      value: {
        dragListeners,
        setDragListeners
      },
      children: /* @__PURE__ */ jsx30(
        DragDropProvider2,
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
            dispose = effect(() => {
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
          children: /* @__PURE__ */ jsx30(ZoneStoreProvider, { store: zoneStore, children: /* @__PURE__ */ jsx30(DropZoneProvider, { value: nextContextValue, children }) })
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
  return /* @__PURE__ */ jsx30(DragDropContextClient, { disableAutoScroll, children });
};

// components/Drawer/index.tsx
import { useDraggable, useDroppable as useDroppable2 } from "@dnd-kit/react";
import { jsx as jsx31, jsxs as jsxs9 } from "react/jsx-runtime";
var getClassName17 = get_class_name_factory_default("Drawer", styles_module_default8);
var getClassNameItem2 = get_class_name_factory_default("DrawerItem", styles_module_default8);
var DrawerItemInner = ({
  children,
  name,
  label,
  dragRef,
  isDragDisabled
}) => {
  const CustomInner = useMemo12(
    () => children || (({ children: children2 }) => /* @__PURE__ */ jsx31("div", { className: getClassNameItem2("default"), children: children2 })),
    [children]
  );
  return /* @__PURE__ */ jsx31(
    "div",
    {
      className: getClassNameItem2({ disabled: isDragDisabled }),
      ref: dragRef,
      onMouseDown: (e) => e.preventDefault(),
      "data-testid": dragRef ? `drawer-item:${name}` : "",
      "data-puck-drawer-item": true,
      children: /* @__PURE__ */ jsx31(CustomInner, { name, children: /* @__PURE__ */ jsx31("div", { className: getClassNameItem2("draggableWrapper"), children: /* @__PURE__ */ jsxs9("div", { className: getClassNameItem2("draggable"), children: [
        /* @__PURE__ */ jsx31("div", { className: getClassNameItem2("name"), children: label != null ? label : name }),
        /* @__PURE__ */ jsx31("div", { className: getClassNameItem2("icon"), children: /* @__PURE__ */ jsx31(DragIcon, {}) })
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
  const { ref } = useDraggable({
    id,
    data: { componentType: name },
    disabled: isDragDisabled,
    type: "drawer"
  });
  return /* @__PURE__ */ jsxs9("div", { className: getClassName17("draggable"), children: [
    /* @__PURE__ */ jsx31("div", { className: getClassName17("draggableBg"), children: /* @__PURE__ */ jsx31(DrawerItemInner, { name, label, children }) }),
    /* @__PURE__ */ jsx31("div", { className: getClassName17("draggableFg"), children: /* @__PURE__ */ jsx31(
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
  const [dynamicId, setDynamicId] = useState16(generateId(resolvedId));
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
  return /* @__PURE__ */ jsx31("div", { children: /* @__PURE__ */ jsx31(
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
  const { ref } = useDroppable2({
    id,
    type: "void",
    collisionPriority: 0
    // Never collide with this, but we use it so NestedDroppablePlugin respects the Drawer
  });
  return /* @__PURE__ */ jsx31(
    "div",
    {
      className: getClassName17(),
      ref,
      "data-puck-dnd": id,
      "data-puck-drawer": true,
      "data-puck-dnd-void": true,
      children
    }
  );
};
Drawer.Item = DrawerItem;

// components/Puck/index.tsx
init_react_import();
import {
  createContext as createContext8,
  useCallback as useCallback22,
  useContext as useContext14,
  useEffect as useEffect29,
  useMemo as useMemo24,
  useRef as useRef14,
  useState as useState26
} from "react";

// components/Puck/components/Fields/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Fields/styles.module.css#css-module
init_react_import();
var styles_module_default12 = { "PuckFields": "_PuckFields_10bh7_1", "PuckFields--isLoading": "_PuckFields--isLoading_10bh7_6", "PuckFields-loadingOverlay": "_PuckFields-loadingOverlay_10bh7_10", "PuckFields-loadingOverlayInner": "_PuckFields-loadingOverlayInner_10bh7_25", "PuckFields-field": "_PuckFields-field_10bh7_32", "PuckFields--wrapFields": "_PuckFields--wrapFields_10bh7_36" };

// components/Puck/components/Fields/index.tsx
import {
  memo as memo8,
  useCallback as useCallback13,
  useContext as useContext9,
  useEffect as useEffect17,
  useMemo as useMemo13
} from "react";
import { useShallow as useShallow7 } from "zustand/react/shallow";
import { Fragment as Fragment9, jsx as jsx32, jsxs as jsxs10 } from "react/jsx-runtime";
var getClassName18 = get_class_name_factory_default("PuckFields", styles_module_default12);
var DefaultFields = ({
  children
}) => {
  return /* @__PURE__ */ jsx32(Fragment9, { children });
};
var createOnChange = (fieldName, appStore) => (value, updatedUi) => __async(null, null, function* () {
  const { dispatch, state, selectedItem, resolveComponentData } = appStore.getState();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const rootProps = data.root.props || data.root;
  const currentProps = selectedItem ? selectedItem.props : rootProps;
  const newProps = __spreadProps(__spreadValues({}, currentProps), { [fieldName]: value });
  if (selectedItem && itemSelector) {
    const resolved = yield resolveComponentData(
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
      root: (yield resolveComponentData(
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
    useShallow7((s) => {
      const { selectedItem, permissions: permissions2 } = s;
      return selectedItem ? permissions2.getPermissions({ item: selectedItem }) : permissions2.getPermissions({ root: true });
    })
  );
  const appStore = useAppStoreApi();
  const onChange = useCallback13(createOnChange(fieldName, appStore), [
    fieldName
  ]);
  const { visible = true } = field != null ? field : {};
  const fieldStore = useContext9(fieldContextStore.ctx);
  useEffect17(() => {
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
  return /* @__PURE__ */ jsx32("div", { className: getClassName18("field"), children: /* @__PURE__ */ jsx32(
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
  const initialValue = useMemo13(() => {
    var _a;
    const value = (_a = appStore.getState().getCurrentData().props) == null ? void 0 : _a[fieldName];
    return { [fieldName]: value };
  }, []);
  return /* @__PURE__ */ jsx32(fieldContextStore.Provider, { value: initialValue, children: /* @__PURE__ */ jsx32(FieldsChildInner, { fieldName }) });
};
var FieldsChildMemo = memo8(FieldsChild);
var FieldsInternal = ({ wrapFields = true }) => {
  const overrides = useAppStore((s) => s.overrides);
  const componentResolving = useAppStore((s) => {
    var _a, _b;
    const loadingCount = s.selectedItem ? (_a = s.componentState[s.selectedItem.props.id]) == null ? void 0 : _a.loadingCount : (_b = s.componentState["root"]) == null ? void 0 : _b.loadingCount;
    return (loadingCount != null ? loadingCount : 0) > 0;
  });
  const itemSelector = useAppStore(useShallow7((s) => s.state.ui.itemSelector));
  const id = useAppStore((s) => {
    var _a;
    return (_a = s.selectedItem) == null ? void 0 : _a.props.id;
  });
  const appStore = useAppStoreApi();
  useRegisterFieldsSlice(appStore, id);
  const fieldsLoading = useAppStore((s) => s.fields.loading);
  const fieldNames = useAppStore(
    useShallow7((s) => {
      if (s.fields.id === id) {
        return Object.keys(s.fields.fields);
      }
      return [];
    })
  );
  const isLoading = fieldsLoading || componentResolving;
  const Wrapper = useMemo13(() => overrides.fields || DefaultFields, [overrides]);
  return /* @__PURE__ */ jsxs10(
    "form",
    {
      className: getClassName18({ wrapFields }),
      onSubmit: (e) => {
        e.preventDefault();
      },
      children: [
        /* @__PURE__ */ jsx32(Wrapper, { isLoading, itemSelector, children: fieldNames.map((fieldName) => /* @__PURE__ */ jsx32(FieldsChildMemo, { fieldName }, fieldName)) }),
        isLoading && /* @__PURE__ */ jsx32("div", { className: getClassName18("loadingOverlay"), children: /* @__PURE__ */ jsx32("div", { className: getClassName18("loadingOverlayInner"), children: /* @__PURE__ */ jsx32(Loader, { size: 16 }) }) })
      ]
    }
  );
};
var Fields = memo8(FieldsInternal);

// components/Puck/components/Components/index.tsx
init_react_import();

// lib/use-component-list.tsx
init_react_import();
import { useEffect as useEffect19, useState as useState17 } from "react";

// components/ComponentList/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/ComponentList/styles.module.css#css-module
init_react_import();
var styles_module_default13 = { "ComponentList": "_ComponentList_1rrlt_1", "ComponentList--isExpanded": "_ComponentList--isExpanded_1rrlt_5", "ComponentList-content": "_ComponentList-content_1rrlt_9", "ComponentList-title": "_ComponentList-title_1rrlt_17", "ComponentList-titleIcon": "_ComponentList-titleIcon_1rrlt_53" };

// components/ComponentList/index.tsx
import { useEffect as useEffect18 } from "react";
import { jsx as jsx33, jsxs as jsxs11 } from "react/jsx-runtime";
var getClassName19 = get_class_name_factory_default("ComponentList", styles_module_default13);
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
  useEffect18(() => {
    if (overrides.componentItem) {
      console.warn(
        "The `componentItem` override has been deprecated and renamed to `drawerItem`"
      );
    }
  }, [overrides]);
  return /* @__PURE__ */ jsx33(Drawer.Item, { label, name, isDragDisabled: !canInsert, children: (_a = overrides.componentItem) != null ? _a : overrides.drawerItem });
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
  return /* @__PURE__ */ jsxs11("div", { className: getClassName19({ isExpanded: expanded }), children: [
    title && /* @__PURE__ */ jsxs11(
      "button",
      {
        type: "button",
        className: getClassName19("title"),
        onClick: () => setUi({
          componentList: __spreadProps(__spreadValues({}, componentList), {
            [id]: __spreadProps(__spreadValues({}, componentList[id]), {
              expanded: !expanded
            })
          })
        }),
        title: expanded ? `Collapse${title ? ` ${title}` : ""}` : `Expand${title ? ` ${title}` : ""}`,
        children: [
          /* @__PURE__ */ jsx33("div", { children: title }),
          /* @__PURE__ */ jsx33("div", { className: getClassName19("titleIcon"), children: expanded ? /* @__PURE__ */ jsx33(ChevronUp, { size: 12 }) : /* @__PURE__ */ jsx33(ChevronDown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx33("div", { className: getClassName19("content"), children: /* @__PURE__ */ jsx33(Drawer, { children: children || Object.keys(config.components).map((componentKey) => {
      var _a;
      return /* @__PURE__ */ jsx33(
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
import { jsx as jsx34 } from "react/jsx-runtime";
var useComponentList = () => {
  const [componentList, setComponentList] = useState17();
  const config = useAppStore((s) => s.config);
  const uiComponentList = useAppStore((s) => s.state.ui.componentList);
  useEffect19(() => {
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
          return /* @__PURE__ */ jsx34(
            ComponentList,
            {
              id: categoryKey,
              title: category.title || categoryKey,
              children: category.components.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ jsx34(
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
          /* @__PURE__ */ jsx34(
            ComponentList,
            {
              id: "other",
              title: ((_c = uiComponentList.other) == null ? void 0 : _c.title) || "Other",
              children: remainingComponents.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ jsx34(
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
import { useMemo as useMemo14 } from "react";
import { jsx as jsx35 } from "react/jsx-runtime";
var Components = () => {
  const overrides = useAppStore((s) => s.overrides);
  const componentList = useComponentList();
  const Wrapper = useMemo14(() => {
    if (overrides.components) {
      console.warn(
        "The `components` override has been deprecated and renamed to `drawer`"
      );
    }
    return overrides.components || overrides.drawer || "div";
  }, [overrides]);
  return /* @__PURE__ */ jsx35(Wrapper, { children: componentList ? componentList : /* @__PURE__ */ jsx35(ComponentList, { id: "all" }) });
};

// components/Puck/components/Preview/index.tsx
init_react_import();
import { useCallback as useCallback14, useEffect as useEffect21, useRef as useRef9, useMemo as useMemo15 } from "react";

// components/AutoFrame/index.tsx
init_react_import();
import {
  createContext as createContext5,
  useContext as useContext10,
  useEffect as useEffect20,
  useState as useState18
} from "react";
import hash from "object-hash";
import { createPortal as createPortal3 } from "react-dom";
import { Fragment as Fragment10, jsx as jsx36 } from "react/jsx-runtime";
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
  useEffect20(() => {
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
      const elHash = hash(mirror.outerHTML);
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
      const elHash = hash(el.outerHTML);
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
        const elHash = hash(el.outerHTML);
        hashes[elHash] = true;
      });
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsx36(Fragment10, { children });
};
var autoFrameContext = createContext5({});
var useFrame = () => useContext10(autoFrameContext);
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
  const [loaded, setLoaded] = useState18(false);
  const [ctx, setCtx] = useState18({});
  const [mountTarget, setMountTarget] = useState18();
  const [stylesLoaded, setStylesLoaded] = useState18(false);
  useEffect20(() => {
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
  return /* @__PURE__ */ jsx36(
    "iframe",
    __spreadProps(__spreadValues({}, props), {
      className,
      id,
      srcDoc: '<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',
      ref: frameRef,
      onLoad: () => {
        setLoaded(true);
      },
      children: /* @__PURE__ */ jsx36(autoFrameContext.Provider, { value: ctx, children: loaded && mountTarget && /* @__PURE__ */ jsx36(
        CopyHostStyles,
        {
          debug,
          onStylesLoaded: () => setStylesLoaded(true),
          children: createPortal3(children, mountTarget)
        }
      ) })
    })
  );
}
AutoFrame.displayName = "AutoFrame";
var AutoFrame_default = AutoFrame;

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Preview/styles.module.css#css-module
init_react_import();
var styles_module_default14 = { "PuckPreview": "_PuckPreview_z2rgu_1", "PuckPreview-frame": "_PuckPreview-frame_z2rgu_6" };

// components/Puck/components/Preview/index.tsx
import { Fragment as Fragment11, jsx as jsx37 } from "react/jsx-runtime";
var getClassName20 = get_class_name_factory_default("PuckPreview", styles_module_default14);
var useBubbleIframeEvents = (ref) => {
  const status = useAppStore((s) => s.status);
  useEffect21(() => {
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
  const Page = useCallback14(
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
      }, propsWithSlots), richtextProps)) : /* @__PURE__ */ jsx37(Fragment11, { children: propsWithSlots.children });
    },
    [config]
  );
  const Frame = useMemo15(() => overrides.iframe, [overrides]);
  const rootProps = root.props || root;
  const ref = useRef9(null);
  useBubbleIframeEvents(ref);
  const inner = !renderData ? /* @__PURE__ */ jsx37(
    Page,
    __spreadProps(__spreadValues({}, rootProps), {
      puck: {
        renderDropZone: DropZonePure,
        isEditing: true,
        dragRef: null,
        metadata
      },
      editMode: true,
      children: /* @__PURE__ */ jsx37(DropZonePure, { zone: rootDroppableId })
    })
  ) : /* @__PURE__ */ jsx37(Render, { data: renderData, config, metadata });
  useEffect21(() => {
    if (!iframe.enabled) {
      setStatus("READY");
    }
  }, [iframe.enabled]);
  return /* @__PURE__ */ jsx37(
    "div",
    {
      className: getClassName20(),
      id,
      "data-puck-preview": true,
      onClick: (e) => {
        const el = e.target;
        if (!el.hasAttribute("data-puck-component") && !el.hasAttribute("data-puck-dropzone")) {
          dispatch({ type: "setUi", ui: { itemSelector: null } });
        }
      },
      children: iframe.enabled ? /* @__PURE__ */ jsx37(
        AutoFrame_default,
        {
          id: "preview-frame",
          className: getClassName20("frame"),
          "data-rfd-iframe": true,
          onReady: () => {
            setStatus("READY");
          },
          onNotReady: () => {
            setStatus("MOUNTED");
          },
          frameRef: ref,
          children: /* @__PURE__ */ jsx37(autoFrameContext.Consumer, { children: ({ document: document2 }) => {
            if (Frame) {
              return /* @__PURE__ */ jsx37(Frame, { document: document2, children: inner });
            }
            return inner;
          } })
        }
      ) : /* @__PURE__ */ jsx37(
        "div",
        {
          id: "preview-frame",
          className: getClassName20("frame"),
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
var styles_module_default15 = { "LayerTree": "_LayerTree_7rx04_1", "LayerTree-zoneTitle": "_LayerTree-zoneTitle_7rx04_11", "LayerTree-helper": "_LayerTree-helper_7rx04_17", "Layer": "_Layer_7rx04_1", "Layer-inner": "_Layer-inner_7rx04_29", "Layer--containsZone": "_Layer--containsZone_7rx04_35", "Layer-clickable": "_Layer-clickable_7rx04_39", "Layer--isSelected": "_Layer--isSelected_7rx04_61", "Layer-chevron": "_Layer-chevron_7rx04_77", "Layer--childIsSelected": "_Layer--childIsSelected_7rx04_78", "Layer-zones": "_Layer-zones_7rx04_82", "Layer-title": "_Layer-title_7rx04_96", "Layer-name": "_Layer-name_7rx04_105", "Layer-icon": "_Layer-icon_7rx04_111", "Layer-zoneIcon": "_Layer-zoneIcon_7rx04_116" };

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
import { useCallback as useCallback15, useContext as useContext11 } from "react";

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
import { useShallow as useShallow8 } from "zustand/react/shallow";
import { Fragment as Fragment12, jsx as jsx38, jsxs as jsxs12 } from "react/jsx-runtime";
var getClassName21 = get_class_name_factory_default("LayerTree", styles_module_default15);
var getClassNameLayer = get_class_name_factory_default("Layer", styles_module_default15);
var Layer = ({
  index,
  itemId,
  zoneCompound
}) => {
  var _a;
  const config = useAppStore((s) => s.config);
  const itemSelector = useAppStore((s) => s.state.ui.itemSelector);
  const dispatch = useAppStore((s) => s.dispatch);
  const setItemSelector = useCallback15(
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
    useShallow8(
      (s) => Object.keys(s.state.indexes.zones).filter(
        (z) => z.split(":")[0] === itemId
      )
    )
  );
  const containsZone = zonesForItem.length > 0;
  const zoneStore = useContext11(ZoneStoreContext);
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
  return /* @__PURE__ */ jsxs12(
    "li",
    {
      className: getClassNameLayer({
        isSelected,
        isHovering,
        containsZone,
        childIsSelected
      }),
      children: [
        /* @__PURE__ */ jsx38("div", { className: getClassNameLayer("inner"), children: /* @__PURE__ */ jsxs12(
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
              containsZone && /* @__PURE__ */ jsx38(
                "div",
                {
                  className: getClassNameLayer("chevron"),
                  title: isSelected ? "Collapse" : "Expand",
                  children: /* @__PURE__ */ jsx38(ChevronDown, { size: "12" })
                }
              ),
              /* @__PURE__ */ jsxs12("div", { className: getClassNameLayer("title"), children: [
                /* @__PURE__ */ jsx38("div", { className: getClassNameLayer("icon"), children: nodeData.data.type === "Text" || nodeData.data.type === "Heading" ? /* @__PURE__ */ jsx38(Type, { size: "16" }) : /* @__PURE__ */ jsx38(LayoutGrid, { size: "16" }) }),
                /* @__PURE__ */ jsx38("div", { className: getClassNameLayer("name"), children: label })
              ] })
            ]
          }
        ) }),
        containsZone && zonesForItem.map((subzone) => /* @__PURE__ */ jsx38("div", { className: getClassNameLayer("zones"), children: /* @__PURE__ */ jsx38(LayerTree, { zoneCompound: subzone }) }, subzone))
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
    useShallow8(
      (s) => {
        var _a, _b;
        return zoneCompound ? (_b = (_a = s.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.contentIds) != null ? _b : [] : [];
      }
    )
  );
  return /* @__PURE__ */ jsxs12(Fragment12, { children: [
    label && /* @__PURE__ */ jsxs12("div", { className: getClassName21("zoneTitle"), children: [
      /* @__PURE__ */ jsx38("div", { className: getClassName21("zoneIcon"), children: /* @__PURE__ */ jsx38(Layers, { size: "16" }) }),
      label
    ] }),
    /* @__PURE__ */ jsxs12("ul", { className: getClassName21(), children: [
      contentIds.length === 0 && /* @__PURE__ */ jsx38("div", { className: getClassName21("helper"), children: "No items" }),
      contentIds.map((itemId, i) => {
        return /* @__PURE__ */ jsx38(
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
import { useMemo as useMemo16 } from "react";

// lib/data/find-zones-for-area.ts
init_react_import();
var findZonesForArea = (state, area) => {
  return Object.keys(state.indexes.zones).filter(
    (zone) => zone.split(":")[0] === area
  );
};

// components/Puck/components/Outline/index.tsx
import { useShallow as useShallow9 } from "zustand/react/shallow";
import { jsx as jsx39 } from "react/jsx-runtime";
var Outline = () => {
  const outlineOverride = useAppStore((s) => s.overrides.outline);
  const rootZones = useAppStore(
    useShallow9((s) => findZonesForArea(s.state, "root"))
  );
  const Wrapper = useMemo16(() => outlineOverride || "div", [outlineOverride]);
  return /* @__PURE__ */ jsx39(Wrapper, { children: rootZones.map((zoneCompound) => /* @__PURE__ */ jsx39(
    LayerTree,
    {
      label: rootZones.length === 1 ? "" : zoneCompound.split(":")[1],
      zoneCompound
    },
    zoneCompound
  )) });
};

// lib/use-loaded-overrides.ts
init_react_import();
import { useMemo as useMemo17 } from "react";

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
  return useMemo17(() => {
    return loadOverrides({ overrides, plugins });
  }, [plugins, overrides]);
};

// lib/use-puck.ts
init_react_import();
import { createContext as createContext6, useContext as useContext12, useEffect as useEffect22, useState as useState19 } from "react";
import { createStore as createStore5, useStore as useStore3 } from "zustand";

// lib/data/resolve-data-by-id.ts
init_react_import();

// lib/data/resolve-and-replace-data.ts
init_react_import();
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
var UsePuckStoreContext = createContext6(
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
  const [usePuckStore] = useState19(
    () => createStore5(
      () => generateUsePuck(
        convertToPickedStore(appStore.getState()),
        appStore.getState
      )
    )
  );
  useEffect22(() => {
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
    const usePuckApi = useContext12(UsePuckStoreContext);
    if (!usePuckApi) {
      throw new Error("usePuck must be used inside <Puck>.");
    }
    const result = useStore3(
      usePuckApi,
      selector != null ? selector : ((s) => s)
    );
    return result;
  };
}
function usePuck() {
  useEffect22(() => {
    console.warn(
      "You're using the `usePuck` method without a selector, which may cause unnecessary re-renders. Replace with `createUsePuck` and provide a selector for improved performance."
    );
  }, []);
  return createUsePuck()((s) => s);
}
function useGetPuck() {
  const usePuckApi = useContext12(UsePuckStoreContext);
  if (!usePuckApi) {
    throw new Error("usePuckGet must be used inside <Puck>.");
  }
  return usePuckApi.getState;
}

// components/Puck/index.tsx
import { deepEqual as deepEqual2 } from "fast-equals";

// components/Puck/components/Layout/index.tsx
init_react_import();
import { useEffect as useEffect28, useMemo as useMemo23, useState as useState25 } from "react";

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Layout/styles.module.css#css-module
init_react_import();
var styles_module_default16 = { "Puck": "_Puck_1dd16_19", "Puck-portal": "_Puck-portal_1dd16_31", "PuckLayout": "_PuckLayout_1dd16_36", "PuckLayout-inner": "_PuckLayout-inner_1dd16_40", "Puck--hidePlugins": "_Puck--hidePlugins_1dd16_72", "PuckLayout--mounted": "_PuckLayout--mounted_1dd16_77", "PuckLayout--mobilePanelHeightToggle": "_PuckLayout--mobilePanelHeightToggle_1dd16_81", "PuckLayout--leftSideBarVisible": "_PuckLayout--leftSideBarVisible_1dd16_81", "PuckLayout--isExpanded": "_PuckLayout--isExpanded_1dd16_87", "PuckLayout--mobilePanelHeightMinContent": "_PuckLayout--mobilePanelHeightMinContent_1dd16_105", "PuckLayout--rightSideBarVisible": "_PuckLayout--rightSideBarVisible_1dd16_132", "PuckLayout-mounted": "_PuckLayout-mounted_1dd16_151", "PuckLayout-nav": "_PuckLayout-nav_1dd16_192", "PuckLayout-header": "_PuckLayout-header_1dd16_208", "PuckPluginTab": "_PuckPluginTab_1dd16_222", "PuckPluginTab--visible": "_PuckPluginTab--visible_1dd16_228", "PuckPluginTab-body": "_PuckPluginTab-body_1dd16_233" };

// lib/use-inject-css.ts
init_react_import();
import { useEffect as useEffect23, useState as useState20 } from "react";
var styles = ``;
var useInjectStyleSheet = (initialStyles, iframeEnabled) => {
  const [el, setEl] = useState20();
  useEffect23(() => {
    setEl(document.createElement("style"));
  }, []);
  useEffect23(() => {
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

// components/DefaultOverride/index.tsx
init_react_import();
import { Fragment as Fragment13, jsx as jsx40 } from "react/jsx-runtime";
var DefaultOverride = ({ children }) => /* @__PURE__ */ jsx40(Fragment13, { children });

// lib/use-preview-mode-hotkeys.ts
init_react_import();
import { useCallback as useCallback16 } from "react";
var usePreviewModeHotkeys = () => {
  const appStore = useAppStoreApi();
  const toggleInteractive = useCallback16(() => {
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
import { memo as memo9, useCallback as useCallback17, useMemo as useMemo18, useState as useState21 } from "react";

// components/MenuBar/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/MenuBar/styles.module.css#css-module
init_react_import();
var styles_module_default17 = { "MenuBar": "_MenuBar_8pf8c_1", "MenuBar--menuOpen": "_MenuBar--menuOpen_8pf8c_14", "MenuBar-inner": "_MenuBar-inner_8pf8c_29", "MenuBar-history": "_MenuBar-history_8pf8c_45" };

// components/MenuBar/index.tsx
import { Fragment as Fragment14, jsx as jsx41, jsxs as jsxs13 } from "react/jsx-runtime";
var getClassName22 = get_class_name_factory_default("MenuBar", styles_module_default17);
function MenuBar({
  menuOpen = false,
  renderHeaderActions,
  setMenuOpen
}) {
  const back = useAppStore((s) => s.history.back);
  const forward = useAppStore((s) => s.history.forward);
  const hasFuture = useAppStore((s) => s.history.hasFuture());
  const hasPast = useAppStore((s) => s.history.hasPast());
  return /* @__PURE__ */ jsx41(
    "div",
    {
      className: getClassName22({ menuOpen }),
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
      children: /* @__PURE__ */ jsxs13("div", { className: getClassName22("inner"), children: [
        /* @__PURE__ */ jsxs13("div", { className: getClassName22("history"), children: [
          /* @__PURE__ */ jsx41(
            IconButton,
            {
              type: "button",
              title: "undo",
              disabled: !hasPast,
              onClick: back,
              children: /* @__PURE__ */ jsx41(Undo2, { size: 21 })
            }
          ),
          /* @__PURE__ */ jsx41(
            IconButton,
            {
              type: "button",
              title: "redo",
              disabled: !hasFuture,
              onClick: forward,
              children: /* @__PURE__ */ jsx41(Redo2, { size: 21 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx41(Fragment14, { children: renderHeaderActions && renderHeaderActions() })
      ] })
    }
  );
}

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Header/styles.module.css#css-module
init_react_import();
var styles_module_default18 = { "PuckHeader": "_PuckHeader_63pti_1", "PuckHeader--hidePlugins": "_PuckHeader--hidePlugins_63pti_15", "PuckHeader-inner": "_PuckHeader-inner_63pti_20", "PuckHeader-toggle": "_PuckHeader-toggle_63pti_40", "PuckHeader--rightSideBarVisible": "_PuckHeader--rightSideBarVisible_63pti_47", "PuckHeader-rightSideBarToggle": "_PuckHeader-rightSideBarToggle_63pti_47", "PuckHeader--leftSideBarVisible": "_PuckHeader--leftSideBarVisible_63pti_48", "PuckHeader-leftSideBarToggle": "_PuckHeader-leftSideBarToggle_63pti_48", "PuckHeader-title": "_PuckHeader-title_63pti_64", "PuckHeader-path": "_PuckHeader-path_63pti_68", "PuckHeader-tools": "_PuckHeader-tools_63pti_75", "PuckHeader-menuButton": "_PuckHeader-menuButton_63pti_81", "PuckHeader--menuOpen": "_PuckHeader--menuOpen_63pti_86" };

// components/Puck/components/Header/index.tsx
import { Fragment as Fragment15, jsx as jsx42, jsxs as jsxs14 } from "react/jsx-runtime";
var getClassName23 = get_class_name_factory_default("PuckHeader", styles_module_default18);
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
  const defaultHeaderRender = useMemo18(() => {
    if (renderHeader) {
      console.warn(
        "`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"
      );
      const RenderHeader = (_a) => {
        var _b = _a, { actions } = _b, props = __objRest(_b, ["actions"]);
        const Comp = renderHeader;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ jsx42(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState, children: actions }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader]);
  const defaultHeaderActionsRender = useMemo18(() => {
    if (renderHeaderActions) {
      console.warn(
        "`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."
      );
      const RenderHeader = (props) => {
        const Comp = renderHeaderActions;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ jsx42(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState }));
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
  const [menuOpen, setMenuOpen] = useState21(false);
  const rootTitle = useAppStore((s) => {
    var _a, _b;
    const rootData = (_a = s.state.indexes.nodes["root"]) == null ? void 0 : _a.data;
    return (_b = rootData.props.title) != null ? _b : "";
  });
  const leftSideBarVisible = useAppStore((s) => s.state.ui.leftSideBarVisible);
  const rightSideBarVisible = useAppStore(
    (s) => s.state.ui.rightSideBarVisible
  );
  const toggleSidebars = useCallback17(
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
  return /* @__PURE__ */ jsx42(
    CustomHeader,
    {
      actions: /* @__PURE__ */ jsx42(Fragment15, { children: /* @__PURE__ */ jsx42(CustomHeaderActions, { children: /* @__PURE__ */ jsx42(
        Button,
        {
          onClick: () => {
            const data = appStore.getState().state.data;
            onPublish && onPublish(data);
          },
          icon: /* @__PURE__ */ jsx42(Globe, { size: "14px" }),
          children: "Publish"
        }
      ) }) }),
      children: /* @__PURE__ */ jsx42(
        "header",
        {
          className: getClassName23({
            leftSideBarVisible,
            rightSideBarVisible,
            hidePlugins
          }),
          children: /* @__PURE__ */ jsxs14("div", { className: getClassName23("inner"), children: [
            /* @__PURE__ */ jsxs14("div", { className: getClassName23("toggle"), children: [
              /* @__PURE__ */ jsx42("div", { className: getClassName23("leftSideBarToggle"), children: /* @__PURE__ */ jsx42(
                IconButton,
                {
                  type: "button",
                  onClick: () => {
                    toggleSidebars("left");
                  },
                  title: "Toggle left sidebar",
                  children: /* @__PURE__ */ jsx42(PanelLeft, { focusable: "false" })
                }
              ) }),
              /* @__PURE__ */ jsx42("div", { className: getClassName23("rightSideBarToggle"), children: /* @__PURE__ */ jsx42(
                IconButton,
                {
                  type: "button",
                  onClick: () => {
                    toggleSidebars("right");
                  },
                  title: "Toggle right sidebar",
                  children: /* @__PURE__ */ jsx42(PanelRight, { focusable: "false" })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx42("div", { className: getClassName23("title"), children: /* @__PURE__ */ jsxs14(Heading, { rank: "2", size: "xs", children: [
              headerTitle || rootTitle || "Page",
              headerPath && /* @__PURE__ */ jsxs14(Fragment15, { children: [
                " ",
                /* @__PURE__ */ jsx42("code", { className: getClassName23("path"), children: headerPath })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs14("div", { className: getClassName23("tools"), children: [
              /* @__PURE__ */ jsx42("div", { className: getClassName23("menuButton"), children: /* @__PURE__ */ jsx42(
                IconButton,
                {
                  type: "button",
                  onClick: () => {
                    return setMenuOpen(!menuOpen);
                  },
                  title: "Toggle menu bar",
                  children: menuOpen ? /* @__PURE__ */ jsx42(ChevronUp, { focusable: "false" }) : /* @__PURE__ */ jsx42(ChevronDown, { focusable: "false" })
                }
              ) }),
              /* @__PURE__ */ jsx42(
                MenuBar,
                {
                  dispatch,
                  onPublish,
                  menuOpen,
                  renderHeaderActions: () => /* @__PURE__ */ jsx42(CustomHeaderActions, { children: /* @__PURE__ */ jsx42(
                    Button,
                    {
                      onClick: () => {
                        const data = appStore.getState().state.data;
                        onPublish && onPublish(data);
                      },
                      icon: /* @__PURE__ */ jsx42(Globe, { size: "14px" }),
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
var Header = memo9(HeaderInner);

// components/SidebarSection/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/SidebarSection/styles.module.css#css-module
init_react_import();
var styles_module_default19 = { "SidebarSection": "_SidebarSection_5otpt_1", "SidebarSection-title": "_SidebarSection-title_5otpt_12", "SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_5otpt_20", "SidebarSection-content": "_SidebarSection-content_5otpt_24", "SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_5otpt_33", "SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_5otpt_62", "SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_5otpt_33", "SidebarSection-heading": "_SidebarSection-heading_5otpt_74", "SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_5otpt_78" };

// components/Breadcrumbs/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/components/Breadcrumbs/styles.module.css#css-module
init_react_import();
var styles_module_default20 = { "Breadcrumbs": "_Breadcrumbs_1c9yh_1", "Breadcrumbs-breadcrumbLabel": "_Breadcrumbs-breadcrumbLabel_1c9yh_7", "Breadcrumbs-breadcrumb": "_Breadcrumbs-breadcrumb_1c9yh_7" };

// lib/use-breadcrumbs.ts
init_react_import();
import { useMemo as useMemo19 } from "react";
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
  return useMemo19(() => {
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
import { jsx as jsx43, jsxs as jsxs15 } from "react/jsx-runtime";
var getClassName24 = get_class_name_factory_default("Breadcrumbs", styles_module_default20);
var Breadcrumbs = ({
  children,
  numParents = 1
}) => {
  const setUi = useAppStore((s) => s.setUi);
  const breadcrumbs = useBreadcrumbs(numParents);
  return /* @__PURE__ */ jsxs15("div", { className: getClassName24(), children: [
    breadcrumbs.map((breadcrumb, i) => /* @__PURE__ */ jsxs15("div", { className: getClassName24("breadcrumb"), children: [
      /* @__PURE__ */ jsx43(
        "button",
        {
          type: "button",
          className: getClassName24("breadcrumbLabel"),
          onClick: () => setUi({ itemSelector: breadcrumb.selector }),
          children: breadcrumb.label
        }
      ),
      /* @__PURE__ */ jsx43(ChevronRight, { size: 16 })
    ] }, i)),
    children
  ] });
};

// components/SidebarSection/index.tsx
import { jsx as jsx44, jsxs as jsxs16 } from "react/jsx-runtime";
var getClassName25 = get_class_name_factory_default("SidebarSection", styles_module_default19);
var SidebarSection = ({
  children,
  title,
  background,
  showBreadcrumbs,
  noBorderTop,
  isLoading
}) => {
  return /* @__PURE__ */ jsxs16("div", { className: getClassName25({ noBorderTop }), style: { background }, children: [
    /* @__PURE__ */ jsx44("div", { className: getClassName25("title"), children: /* @__PURE__ */ jsxs16("div", { className: getClassName25("breadcrumbs"), children: [
      showBreadcrumbs && /* @__PURE__ */ jsx44(Breadcrumbs, {}),
      /* @__PURE__ */ jsx44("div", { className: getClassName25("heading"), children: /* @__PURE__ */ jsx44(Heading, { rank: "2", size: "xs", children: title }) })
    ] }) }),
    /* @__PURE__ */ jsx44("div", { className: getClassName25("content"), children }),
    isLoading && /* @__PURE__ */ jsx44("div", { className: getClassName25("loadingOverlay"), children: /* @__PURE__ */ jsx44(Loader, { size: 32 }) })
  ] });
};

// components/Puck/components/Canvas/index.tsx
init_react_import();
import {
  useCallback as useCallback18,
  useEffect as useEffect25,
  useMemo as useMemo22,
  useRef as useRef11,
  useState as useState23
} from "react";

// components/ViewportControls/index.tsx
init_react_import();
import { useEffect as useEffect24, useMemo as useMemo20, useState as useState22 } from "react";

// css-module:/Users/mariusmuller/puck/packages/core/components/ViewportControls/styles.module.css#css-module
init_react_import();
var styles_module_default21 = { "ViewportControls": "_ViewportControls_e3unb_1", "ViewportControls--fullScreen": "_ViewportControls--fullScreen_e3unb_5", "ViewportControls-toggleButton": "_ViewportControls-toggleButton_e3unb_14", "ViewportControls--isExpanded": "_ViewportControls--isExpanded_e3unb_38", "ViewportControls-actions": "_ViewportControls-actions_e3unb_42", "ViewportControls-actionsInner": "_ViewportControls-actionsInner_e3unb_46", "ViewportControls-divider": "_ViewportControls-divider_e3unb_75", "ViewportControls-zoomSelect": "_ViewportControls-zoomSelect_e3unb_81", "ViewportControls-zoom": "_ViewportControls-zoom_e3unb_81", "ViewportButton-inner": "_ViewportButton-inner_e3unb_111", "ViewportButton--isActive": "_ViewportButton--isActive_e3unb_119" };

// components/ViewportControls/index.tsx
import { jsx as jsx45, jsxs as jsxs17 } from "react/jsx-runtime";
var icons = {
  Smartphone: /* @__PURE__ */ jsx45(Smartphone, { size: 16 }),
  Tablet: /* @__PURE__ */ jsx45(Tablet, { size: 16 }),
  Monitor: /* @__PURE__ */ jsx45(Monitor, { size: 16 }),
  FullWidth: /* @__PURE__ */ jsx45(Expand, { size: 16 })
};
var getClassName26 = get_class_name_factory_default("ViewportControls", styles_module_default21);
var getClassNameButton = get_class_name_factory_default("ViewportButton", styles_module_default21);
var ActionButton = ({
  children,
  title,
  onClick,
  isActive,
  disabled
}) => {
  return /* @__PURE__ */ jsx45("span", { className: getClassNameButton({ isActive }), suppressHydrationWarning: true, children: /* @__PURE__ */ jsx45(
    IconButton,
    {
      type: "button",
      title,
      disabled: disabled || isActive,
      onClick,
      suppressHydrationWarning: true,
      children: /* @__PURE__ */ jsx45("span", { className: getClassNameButton("inner"), children })
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
  const zoomOptions = useMemo20(
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
  const [activeViewport, setActiveViewport] = useState22(
    uiViewports.current.width
  );
  useEffect24(() => {
    setActiveViewport(uiViewports.current.width);
  }, [uiViewports.current]);
  const [isExpanded, setIsExpanded] = useState22(false);
  return /* @__PURE__ */ jsxs17(
    "div",
    {
      className: getClassName26({ isExpanded, fullScreen }),
      suppressHydrationWarning: true,
      children: [
        /* @__PURE__ */ jsx45("div", { className: getClassName26("actions"), children: /* @__PURE__ */ jsxs17("div", { className: getClassName26("actionsInner"), children: [
          viewports.map((viewport, i) => /* @__PURE__ */ jsx45(
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
          /* @__PURE__ */ jsx45("div", { className: getClassName26("divider") }),
          /* @__PURE__ */ jsx45(
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
              children: /* @__PURE__ */ jsx45(ZoomOut, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsx45(
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
              children: /* @__PURE__ */ jsx45(ZoomIn, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsxs17("div", { className: getClassName26("zoom"), children: [
            /* @__PURE__ */ jsx45("div", { className: getClassName26("divider") }),
            /* @__PURE__ */ jsx45(
              "select",
              {
                className: getClassName26("zoomSelect"),
                value: zoom.toString(),
                onClick: (e) => {
                  e.stopPropagation();
                },
                onChange: (e) => {
                  onZoom(parseFloat(e.currentTarget.value));
                },
                children: zoomOptions.map((option) => /* @__PURE__ */ jsx45(
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
        /* @__PURE__ */ jsx45(
          "button",
          {
            className: getClassName26("toggleButton"),
            title: "Toggle viewport menu",
            onClick: () => setIsExpanded((s) => !s),
            children: isExpanded ? /* @__PURE__ */ jsx45(X, { size: 16 }) : /* @__PURE__ */ jsx45(Monitor, { size: 16 })
          }
        )
      ]
    }
  );
};

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Canvas/styles.module.css#css-module
init_react_import();
var styles_module_default22 = { "PuckCanvas": "_PuckCanvas_t6s9b_1", "PuckCanvas-controls": "_PuckCanvas-controls_t6s9b_17", "PuckCanvas--fullScreen": "_PuckCanvas--fullScreen_t6s9b_22", "PuckCanvas-inner": "_PuckCanvas-inner_t6s9b_33", "PuckCanvas-root": "_PuckCanvas-root_t6s9b_42", "PuckCanvas--ready": "_PuckCanvas--ready_t6s9b_67", "PuckCanvas-loader": "_PuckCanvas-loader_t6s9b_72", "PuckCanvas--showLoader": "_PuckCanvas--showLoader_t6s9b_82" };

// components/Puck/components/Canvas/index.tsx
import { useShallow as useShallow10 } from "zustand/react/shallow";

// lib/frame-context.tsx
init_react_import();
import {
  createContext as createContext7,
  useContext as useContext13,
  useRef as useRef10,
  useMemo as useMemo21
} from "react";
import { jsx as jsx46 } from "react/jsx-runtime";
var FrameContext = createContext7(null);
var FrameProvider = ({
  children
}) => {
  const frameRef = useRef10(null);
  const value = useMemo21(
    () => ({
      frameRef
    }),
    []
  );
  return /* @__PURE__ */ jsx46(FrameContext.Provider, { value, children });
};
var useCanvasFrame = () => {
  const context = useContext13(FrameContext);
  if (context === null) {
    throw new Error("useCanvasFrame must be used within a FrameProvider");
  }
  return context;
};

// components/Puck/components/Canvas/index.tsx
import { Fragment as Fragment16, jsx as jsx47, jsxs as jsxs18 } from "react/jsx-runtime";
var getClassName27 = get_class_name_factory_default("PuckCanvas", styles_module_default22);
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
    useShallow10((s) => ({
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
    useShallow10((s) => ({
      leftSideBarVisible: s.state.ui.leftSideBarVisible,
      rightSideBarVisible: s.state.ui.rightSideBarVisible,
      leftSideBarWidth: s.state.ui.leftSideBarWidth,
      rightSideBarWidth: s.state.ui.rightSideBarWidth,
      viewports: s.state.ui.viewports
    }))
  );
  const [showTransition, setShowTransition] = useState23(false);
  const isResizingRef = useRef11(false);
  const defaultRender = useMemo22(() => {
    const PuckDefault = ({ children }) => /* @__PURE__ */ jsx47(Fragment16, { children });
    return PuckDefault;
  }, []);
  const CustomPreview = useMemo22(
    () => overrides.preview || defaultRender,
    [overrides]
  );
  const getFrameDimensions = useCallback18(() => {
    if (frameRef.current) {
      const frame = frameRef.current;
      const box = getBox(frame);
      return { width: box.contentBox.width, height: box.contentBox.height };
    }
    return { width: 0, height: 0 };
  }, [frameRef]);
  useEffect25(() => {
    resetAutoZoom();
  }, [
    frameRef,
    leftSideBarVisible,
    rightSideBarVisible,
    leftSideBarWidth,
    rightSideBarWidth,
    viewports
  ]);
  useEffect25(() => {
    const { height: frameHeight } = getFrameDimensions();
    if (viewports.current.height === "auto") {
      setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), {
        rootHeight: frameHeight / zoomConfig.zoom
      }));
    }
  }, [zoomConfig.zoom, getFrameDimensions, setZoomConfig]);
  useEffect25(() => {
    if (ZOOM_ON_CHANGE) {
      resetAutoZoom();
    }
  }, [viewports.current.width, viewports]);
  useEffect25(() => {
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
  const [showLoader, setShowLoader] = useState23(false);
  useEffect25(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 500);
  }, []);
  const appStoreApi = useAppStoreApi();
  useEffect25(() => {
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
  return /* @__PURE__ */ jsxs18(
    "div",
    {
      className: getClassName27({
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
        viewports.controlsVisible && iframe.enabled && /* @__PURE__ */ jsx47("div", { className: getClassName27("controls"), children: /* @__PURE__ */ jsx47(
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
        /* @__PURE__ */ jsxs18("div", { className: getClassName27("inner"), ref: frameRef, children: [
          /* @__PURE__ */ jsx47(
            "div",
            {
              className: getClassName27("root"),
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
              children: /* @__PURE__ */ jsx47(CustomPreview, { children: /* @__PURE__ */ jsx47(Preview2, {}) })
            }
          ),
          /* @__PURE__ */ jsx47("div", { className: getClassName27("loader"), children: /* @__PURE__ */ jsx47(Loader, { size: 24 }) })
        ] })
      ]
    }
  );
};

// lib/use-sidebar-resize.ts
init_react_import();
import { useCallback as useCallback19, useEffect as useEffect26, useRef as useRef12, useState as useState24 } from "react";
function useSidebarResize(position, dispatch) {
  const [width, setWidth] = useState24(null);
  const sidebarRef = useRef12(null);
  const storeWidth = useAppStore(
    (s) => position === "left" ? s.state.ui.leftSideBarWidth : s.state.ui.rightSideBarWidth
  );
  useEffect26(() => {
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
  useEffect26(() => {
    if (storeWidth !== void 0) {
      setWidth(storeWidth);
    }
  }, [storeWidth]);
  const handleResizeEnd = useCallback19(
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
import { useCallback as useCallback20, useRef as useRef13 } from "react";

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/ResizeHandle/styles.module.css#css-module
init_react_import();
var styles_module_default23 = { "ResizeHandle": "_ResizeHandle_144bf_2", "ResizeHandle--left": "_ResizeHandle--left_144bf_16", "ResizeHandle--right": "_ResizeHandle--right_144bf_20" };

// components/Puck/components/ResizeHandle/index.tsx
import { jsx as jsx48 } from "react/jsx-runtime";
var getClassName28 = get_class_name_factory_default("ResizeHandle", styles_module_default23);
var ResizeHandle = ({
  position,
  sidebarRef,
  onResize,
  onResizeEnd
}) => {
  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);
  const handleRef = useRef13(null);
  const isDragging = useRef13(false);
  const startX = useRef13(0);
  const startWidth = useRef13(0);
  const handleMouseMove = useCallback20(
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
  const handleMouseUp = useCallback20(() => {
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
  const handleMouseDown = useCallback20(
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
  return /* @__PURE__ */ jsx48(
    "div",
    {
      ref: handleRef,
      className: getClassName28({ [position]: true }),
      onMouseDown: handleMouseDown
    }
  );
};

// css-module:/Users/mariusmuller/puck/packages/core/components/Puck/components/Sidebar/styles.module.css#css-module
init_react_import();
var styles_module_default24 = { "Sidebar": "_Sidebar_o396p_1", "Sidebar--isVisible": "_Sidebar--isVisible_o396p_9", "Sidebar--left": "_Sidebar--left_o396p_13", "Sidebar--right": "_Sidebar--right_o396p_25", "Sidebar-resizeHandle": "_Sidebar-resizeHandle_o396p_37" };

// components/Puck/components/Sidebar/index.tsx
import { Fragment as Fragment17, jsx as jsx49, jsxs as jsxs19 } from "react/jsx-runtime";
var getClassName29 = get_class_name_factory_default("Sidebar", styles_module_default24);
var Sidebar = ({
  position,
  sidebarRef,
  isVisible,
  onResize,
  onResizeEnd,
  children
}) => {
  return /* @__PURE__ */ jsxs19(Fragment17, { children: [
    /* @__PURE__ */ jsx49(
      "div",
      {
        ref: sidebarRef,
        className: getClassName29({ [position]: true, isVisible }),
        children
      }
    ),
    /* @__PURE__ */ jsx49("div", { className: `${getClassName29("resizeHandle")}`, children: /* @__PURE__ */ jsx49(
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
import { useCallback as useCallback21 } from "react";
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
  const deleteSelectedComponent = useCallback21(
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
var styles_module_default25 = { "Nav": "_Nav_1tvxq_1", "Nav-list": "_Nav-list_1tvxq_5", "Nav-mobileActions": "_Nav-mobileActions_1tvxq_23", "NavItem-link": "_NavItem-link_1tvxq_38", "NavItem": "_NavItem_1tvxq_38", "NavItem-linkIcon": "_NavItem-linkIcon_1tvxq_89", "NavItem--active": "_NavItem--active_1tvxq_94", "NavItem--mobileOnly": "_NavItem--mobileOnly_1tvxq_121", "NavItem--desktopOnly": "_NavItem--desktopOnly_1tvxq_126" };

// components/Puck/components/Nav/index.tsx
import { jsx as jsx50, jsxs as jsxs20 } from "react/jsx-runtime";
var getClassName30 = get_class_name_factory_default("Nav", styles_module_default25);
var getClassNameItem3 = get_class_name_factory_default("NavItem", styles_module_default25);
var MenuItem = ({
  label,
  icon,
  onClick,
  isActive,
  mobileOnly,
  desktopOnly
}) => {
  return /* @__PURE__ */ jsx50(
    "li",
    {
      className: getClassNameItem3({
        active: isActive,
        mobileOnly,
        desktopOnly
      }),
      children: onClick && /* @__PURE__ */ jsxs20("div", { className: getClassNameItem3("link"), onClick, children: [
        icon && /* @__PURE__ */ jsx50("span", { className: getClassNameItem3("linkIcon"), children: icon }),
        /* @__PURE__ */ jsx50("span", { className: getClassNameItem3("linkLabel"), children: label })
      ] })
    }
  );
};
var Nav = ({
  items,
  mobileActions
}) => {
  return /* @__PURE__ */ jsxs20("nav", { className: getClassName30(), children: [
    /* @__PURE__ */ jsx50("ul", { className: getClassName30("list"), children: Object.entries(items).map(([key, item]) => /* @__PURE__ */ jsx50(MenuItem, __spreadValues({}, item), key)) }),
    mobileActions && /* @__PURE__ */ jsx50("div", { className: getClassName30("mobileActions"), children: mobileActions })
  ] });
};

// plugins/blocks/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/plugins/blocks/styles.module.css#css-module
init_react_import();
var styles_module_default26 = { "BlocksPlugin": "_BlocksPlugin_1ey1i_1" };

// plugins/blocks/index.tsx
import { jsx as jsx51 } from "react/jsx-runtime";
var getClassName31 = get_class_name_factory_default("BlocksPlugin", styles_module_default26);
var blocksPlugin = () => ({
  name: "blocks",
  label: "Blocks",
  render: () => /* @__PURE__ */ jsx51("div", { className: getClassName31(), children: /* @__PURE__ */ jsx51(Components, {}) }),
  icon: /* @__PURE__ */ jsx51(Hammer, {})
});

// plugins/outline/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/plugins/outline/styles.module.css#css-module
init_react_import();
var styles_module_default27 = { "OutlinePlugin": "_OutlinePlugin_q92j6_1" };

// plugins/outline/index.tsx
import { jsx as jsx52 } from "react/jsx-runtime";
var getClassName32 = get_class_name_factory_default("OutlinePlugin", styles_module_default27);
var outlinePlugin = () => ({
  name: "outline",
  label: "Outline",
  render: () => /* @__PURE__ */ jsx52("div", { className: getClassName32(), children: /* @__PURE__ */ jsx52(Outline, {}) }),
  icon: /* @__PURE__ */ jsx52(Layers, {})
});

// plugins/fields/index.tsx
init_react_import();

// css-module:/Users/mariusmuller/puck/packages/core/plugins/fields/styles.module.css#css-module
init_react_import();
var styles_module_default28 = { "FieldsPlugin": "_FieldsPlugin_nd930_1", "FieldsPlugin-header": "_FieldsPlugin-header_nd930_7" };

// plugins/fields/index.tsx
import { jsx as jsx53, jsxs as jsxs21 } from "react/jsx-runtime";
var getClassName33 = get_class_name_factory_default("FieldsPlugin", styles_module_default28);
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
  render: () => /* @__PURE__ */ jsxs21("div", { className: getClassName33(), children: [
    /* @__PURE__ */ jsx53("div", { className: getClassName33("header"), children: /* @__PURE__ */ jsx53(Breadcrumbs, { numParents: 2, children: /* @__PURE__ */ jsx53(CurrentTitle, {}) }) }),
    /* @__PURE__ */ jsx53(Fields, {})
  ] }),
  icon: /* @__PURE__ */ jsx53(RectangleEllipsis, {}),
  mobileOnly: desktopSideBar === "right"
});

// components/Puck/components/Layout/index.tsx
import { jsx as jsx54, jsxs as jsxs22 } from "react/jsx-runtime";
var getClassName34 = get_class_name_factory_default("Puck", styles_module_default16);
var getLayoutClassName = get_class_name_factory_default("PuckLayout", styles_module_default16);
var getPluginTabClassName = get_class_name_factory_default("PuckPluginTab", styles_module_default16);
var FieldSideBar = () => {
  const title = useAppStore(
    (s) => {
      var _a, _b, _c;
      return s.selectedItem ? (_b = (_a = s.config.components[s.selectedItem.type]) == null ? void 0 : _a["label"]) != null ? _b : s.selectedItem.type.toString() : ((_c = s.config.root) == null ? void 0 : _c.label) || "Page";
    }
  );
  return /* @__PURE__ */ jsx54(SidebarSection, { noBorderTop: true, showBreadcrumbs: true, title, children: /* @__PURE__ */ jsx54(Fields, {}) });
};
var PluginTab = ({
  children,
  visible,
  mobileOnly
}) => {
  return /* @__PURE__ */ jsx54("div", { className: getPluginTabClassName({ visible, mobileOnly }), children: /* @__PURE__ */ jsx54("div", { className: getPluginTabClassName("body"), children }) });
};
var Layout = ({ children }) => {
  const {
    iframe: _iframe,
    dnd,
    initialHistory: _initialHistory,
    plugins,
    height
  } = usePropsContext();
  const iframe = useMemo23(
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
  useEffect28(() => {
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
  const CustomPuck = useMemo23(
    () => overrides.puck || DefaultOverride,
    [overrides]
  );
  const [mounted, setMounted] = useState25(false);
  useEffect28(() => {
    setMounted(true);
  }, []);
  const ready = useAppStore((s) => s.status === "READY");
  useMonitorHotkeys();
  useEffect28(() => {
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
  const [mobilePanelHeightMode, setMobilePanelHeightMode] = useState25("toggle");
  const hasLegacySideBarPlugin = useMemo23(
    () => !!(plugins == null ? void 0 : plugins.find((p) => p.name === "legacy-side-bar")),
    [plugins]
  );
  const pluginItems = useMemo23(() => {
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
          icon: (_b = plugin.icon) != null ? _b : /* @__PURE__ */ jsx54(ToyBrick, {}),
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
  useEffect28(() => {
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
  return /* @__PURE__ */ jsxs22(
    "div",
    {
      className: `Puck ${getClassName34({
        hidePlugins: hasLegacySideBarPlugin
      })}`,
      id: instanceId,
      style: { height },
      children: [
        /* @__PURE__ */ jsx54(DragDropContext, { disableAutoScroll: dnd == null ? void 0 : dnd.disableAutoScroll, children: /* @__PURE__ */ jsx54(CustomPuck, { children: children || /* @__PURE__ */ jsx54(FrameProvider, { children: /* @__PURE__ */ jsx54(
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
            children: /* @__PURE__ */ jsxs22(
              "div",
              {
                className: getLayoutClassName("inner"),
                style: layoutOptions,
                children: [
                  /* @__PURE__ */ jsx54("div", { className: getLayoutClassName("header"), children: /* @__PURE__ */ jsx54(Header, { hidePlugins: hasLegacySideBarPlugin }) }),
                  /* @__PURE__ */ jsx54("div", { className: getLayoutClassName("nav"), children: /* @__PURE__ */ jsx54(
                    Nav,
                    {
                      items: pluginItems,
                      mobileActions: leftSideBarVisible && mobilePanelHeightMode === "toggle" && /* @__PURE__ */ jsx54(
                        IconButton,
                        {
                          type: "button",
                          title: "maximize",
                          onClick: () => {
                            setUi({
                              mobilePanelExpanded: !mobilePanelExpanded
                            });
                          },
                          children: mobilePanelExpanded ? /* @__PURE__ */ jsx54(Minimize2, { size: 21 }) : /* @__PURE__ */ jsx54(Maximize2, { size: 21 })
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx54(
                    Sidebar,
                    {
                      position: "left",
                      sidebarRef: leftSidebarRef,
                      isVisible: leftSideBarVisible,
                      onResize: setLeftWidth,
                      onResizeEnd: handleLeftSidebarResizeEnd,
                      children: Object.entries(pluginItems).map(
                        ([id, { mobileOnly, render: Render2, label }]) => /* @__PURE__ */ jsx54(
                          PluginTab,
                          {
                            visible: currentPlugin === id,
                            mobileOnly,
                            children: /* @__PURE__ */ jsx54(Render2, {})
                          },
                          id
                        )
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx54(Canvas, {}),
                  !hasDesktopFieldsPlugin && /* @__PURE__ */ jsx54(
                    Sidebar,
                    {
                      position: "right",
                      sidebarRef: rightSidebarRef,
                      isVisible: rightSideBarVisible,
                      onResize: setRightWidth,
                      onResizeEnd: handleRightSidebarResizeEnd,
                      children: /* @__PURE__ */ jsx54(FieldSideBar, {})
                    }
                  )
                ]
              }
            )
          }
        ) }) }) }),
        /* @__PURE__ */ jsx54("div", { id: "puck-portal-root", className: getClassName34("portal") })
      ]
    }
  );
};

// components/Puck/index.tsx
import { jsx as jsx55 } from "react/jsx-runtime";
var propsContext = createContext8({});
function PropsProvider(props) {
  return /* @__PURE__ */ jsx55(propsContext.Provider, { value: props, children: props.children });
}
var usePropsContext = () => useContext14(propsContext);
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
  const iframe = useMemo24(
    () => __spreadValues({
      enabled: true,
      waitForStyles: true
    }, _iframe),
    [_iframe]
  );
  const [generatedAppState] = useState26(() => {
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
  const [blendedHistories] = useState26(
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
  const initialHistoryIndex = useMemo24(() => {
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
  const loadedFieldTransforms = useMemo24(() => {
    const _plugins = plugins || [];
    const pluginFieldTransforms = _plugins.reduce(
      (acc, plugin) => __spreadValues(__spreadValues({}, acc), plugin.fieldTransforms),
      {}
    );
    return __spreadValues(__spreadValues({}, pluginFieldTransforms), fieldTransforms);
  }, [fieldTransforms, plugins]);
  const instanceId = useSafeId();
  const generateAppStore = useCallback22(
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
  const [appStore] = useState26(
    () => createAppStore(generateAppStore(initialAppState))
  );
  useEffect29(() => {
    if (process.env.NODE_ENV !== "production") {
      window.__PUCK_INTERNAL_DO_NOT_USE = { appStore };
    }
  }, [appStore]);
  useEffect29(() => {
    const state = appStore.getState().state;
    appStore.setState(__spreadValues({}, generateAppStore(state)));
  }, [config, plugins, loadedOverrides, viewports, iframe, onAction, metadata]);
  useRegisterHistorySlice(appStore, {
    histories: blendedHistories,
    index: initialHistoryIndex,
    initialAppState
  });
  const previousData = useRef14(null);
  useEffect29(() => {
    return appStore.subscribe(
      (s) => s.state.data,
      (data) => {
        if (onChange) {
          if (deepEqual2(data, previousData.current)) return;
          onChange(data);
          previousData.current = data;
        }
      }
    );
  }, [onChange]);
  useRegisterPermissionsSlice(appStore, permissions);
  const uPuckStore = useRegisterUsePuckStore(appStore);
  useEffect29(() => {
    const { resolveAndCommitData } = appStore.getState();
    resolveAndCommitData();
  }, []);
  return /* @__PURE__ */ jsx55(appStoreContext.Provider, { value: appStore, children: /* @__PURE__ */ jsx55(UsePuckStoreContext.Provider, { value: uPuckStore, children }) });
}
function Puck(props) {
  return /* @__PURE__ */ jsx55(PropsProvider, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx55(PuckProvider, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx55(Layout, { children: props.children }) })) }));
}
Puck.Components = Components;
Puck.Fields = Fields;
Puck.Layout = Layout;
Puck.Outline = Outline;
Puck.Preview = Preview2;

// plugins/legacy-side-bar/index.tsx
init_react_import();
import { jsx as jsx56, jsxs as jsxs23 } from "react/jsx-runtime";
var legacySideBarPlugin = () => ({
  name: "legacy-side-bar",
  render: () => /* @__PURE__ */ jsxs23("div", { style: { overflowY: "auto" }, children: [
    /* @__PURE__ */ jsx56(SidebarSection, { title: "Components", noBorderTop: true, children: /* @__PURE__ */ jsx56(Components, {}) }),
    /* @__PURE__ */ jsx56(SidebarSection, { title: "Outline", children: /* @__PURE__ */ jsx56(Outline, {}) })
  ] })
});

export {
  overrideKeys,
  Button,
  FieldLabel,
  AutoField,
  renderContext,
  Render,
  registerOverlayPortal,
  setDeep,
  DropZone,
  Drawer,
  createUsePuck,
  usePuck,
  useGetPuck,
  blocksPlugin,
  outlinePlugin,
  fieldsPlugin,
  Puck,
  legacySideBarPlugin
};
