import { Reducer } from 'react';
import { D as Data, A as AppState, O as OnAction, P as PrivateAppState, a as PuckAction } from './actions-DygoV_5V.mjs';
import { A as AppStore } from './index-zVJsfY1Z.mjs';
import '@tiptap/react';
import '@tiptap/extension-blockquote';
import '@tiptap/extension-bold';
import '@tiptap/extension-code';
import '@tiptap/extension-code-block';
import '@tiptap/extension-hard-break';
import '@tiptap/extension-heading';
import '@tiptap/extension-horizontal-rule';
import '@tiptap/extension-italic';
import '@tiptap/extension-link';
import '@tiptap/extension-list';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-strike';
import '@tiptap/extension-text-align';
import '@tiptap/extension-underline';

type StateReducer<UserData extends Data = Data> = Reducer<PrivateAppState<UserData>, PuckAction>;
declare function createReducer<UserData extends Data>({ record, onAction, appStore, }: {
    record?: (appState: AppState<UserData>) => void;
    onAction?: OnAction<UserData>;
    appStore: AppStore;
}): StateReducer<UserData>;

export { createReducer };
