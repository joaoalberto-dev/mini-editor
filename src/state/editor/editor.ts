import { proxy, useSnapshot } from "valtio";
import type { VideoFile } from "@state/editor/types";

type EditorState = {
  videoFile: VideoFile;
  videoUrl: string | null;
  playing: boolean | null;
};

const editorState = proxy<EditorState>({
  videoFile: null,
  videoUrl: null,
  playing: null,
});

const useEditorState = () => useSnapshot(editorState);

export { editorState, useEditorState };
