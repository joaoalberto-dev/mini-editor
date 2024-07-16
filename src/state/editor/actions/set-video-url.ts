import { editorState } from "../editor";

function setVideoUrl(file: File) {
  const url = URL.createObjectURL(file);

  editorState.videoUrl = url;

  return url;
}

export { setVideoUrl };
