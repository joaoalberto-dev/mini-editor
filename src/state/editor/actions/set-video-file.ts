import { editorState } from "@/state/editor/editor";
import { ref } from "valtio";

function setVideoFile(event: React.ChangeEvent<HTMLInputElement>) {
  if (!event?.target?.files?.length) return;

  const file = event.target.files[0];

  if (!file.type.includes("video/")) return;

  editorState.videoFile = ref(file);
}

export { setVideoFile };
