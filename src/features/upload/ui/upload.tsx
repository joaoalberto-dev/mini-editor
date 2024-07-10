import { IconMovie } from "@tabler/icons-react";
import { useVideoStore } from "@/state/video/video";
import { handleInputChange } from "../data/handle-input-change";

function Upload() {
  const { setVideo } = useVideoStore();

  return (
    <div className="flex flex-col items-center justify-center aspect-square w-[300px] rounded-xl relative">
      <label
        htmlFor="video-input"
        className="flex flex-col items-center justify-center text-center"
      >
        <IconMovie className="w-4 h-4" />
        <p>
          Click or drag a<br /> file to start
        </p>
      </label>
      <input
        accept="video/mp4,video/x-m4v,video/*"
        id="video-input"
        type="file"
        className="absolute inset-0 opacity-0"
        onChange={handleInputChange(setVideo)}
      />
    </div>
  );
}

export { Upload };
