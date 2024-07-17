import { editorState } from "../editor";

function toggleVideoPlaying() {
  editorState.playing = !editorState.playing;
}

export { toggleVideoPlaying };
