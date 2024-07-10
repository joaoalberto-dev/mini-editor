import { proxy, useSnapshot } from "valtio";
import type { VideoFile } from "@state/editor/types";

type EditorState = {
  videoFile: VideoFile;
};

const editorState = proxy<EditorState>({
  videoFile: null,
});

const useEditorState = () => useSnapshot(editorState);

export { editorState, useEditorState };
