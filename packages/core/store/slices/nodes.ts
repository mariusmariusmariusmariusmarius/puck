import { AppStore } from "../";

type NodeMethods = {
  sync: () => void;
  hideOverlay: () => void;
  showOverlay: () => void;
};

type PuckNodeInstance = {
  id: string;
  methods: NodeMethods;
  element: HTMLElement | null;
};

export type NodesSlice = {
  nodes: Record<string, PuckNodeInstance | undefined>;
  registerNode: (id: string, node: Partial<PuckNodeInstance>) => void;
  unregisterNode: (id: string, node?: Partial<PuckNodeInstance>) => void;
};

const emptyMethods: NodeMethods = {
  sync: () => null,
  hideOverlay: () => null,
  showOverlay: () => null,
};

export const createNodesSlice = (
  set: (newState: Partial<AppStore>) => void,
  get: () => AppStore
): NodesSlice => {
  let pendingRegistrations = new Map<string, Partial<PuckNodeInstance>>();
  let flushScheduled = false;

  const flushRegistrations = () => {
    const pending = pendingRegistrations;
    pendingRegistrations = new Map();
    flushScheduled = false;

    if (pending.size === 0) return;

    const s = get().nodes;
    const newNodes = { ...s.nodes };

    for (const [id, node] of pending) {
      const existing = newNodes[id];

      newNodes[id] = {
        methods: emptyMethods,
        element: null,
        ...existing,
        ...node,
        id,
      };
    }

    set({
      nodes: {
        ...s,
        nodes: newNodes,
      },
    });
  };

  return {
    nodes: {},
    registerNode: (id: string, node: Partial<PuckNodeInstance>) => {
      pendingRegistrations.set(id, node);

      if (!flushScheduled) {
        flushScheduled = true;
        queueMicrotask(flushRegistrations);
      }
    },
    unregisterNode: (id) => {
      const s = get().nodes;
      const existingNode: PuckNodeInstance | undefined = s.nodes[id];

      if (existingNode) {
        const newNodes = { ...s.nodes };

        delete newNodes[id];

        set({
          nodes: {
            ...s,
            nodes: newNodes,
          },
        });
      }
    },
  };
};
