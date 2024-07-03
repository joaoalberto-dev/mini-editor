import { IconMovie } from "@tabler/icons-react";
import { useVideoStore } from "@/state/video/video";
import { handleInputChange } from "../data/handle-input-change";

function Upload() {
  const { setVideo } = useVideoStore();

  return (
    <div className="flex flex-col items-center justify-center aspect-square w-[300px] border-4 border-dashed border-neutral-300 rounded-xl relative">
      <label
        htmlFor="video-input"
        className="flex flex-col items-center justify-center text-center text-neutral-400"
      >
        <IconMovie className="w-8 h-8" />
        <p className="text-xl font-black">
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
