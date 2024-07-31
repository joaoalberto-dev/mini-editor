import { editorState } from "../editor";

function setCurrentTime(currentTime: number) {
  editorState.time = currentTime;
}

export { setCurrentTime };
