import { editorState } from "@/state/editor/editor";
import { ref } from "valtio";

function setVideoFile(event: React.ChangeEvent<HTMLInputElement>) {
  if (!event?.target?.files?.length) throw new Error("File not selected");

  const file = event.target.files[0];

  if (!file.type.includes("video/")) throw new Error("Incorrect File format");

  editorState.videoFile = ref(file);

  return file;
}

export { setVideoFile };
