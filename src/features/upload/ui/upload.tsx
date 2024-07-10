import { IconMovie } from "@tabler/icons-react";
import { setVideoFile } from "@state/editor/actions";

function Upload() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center border-b border-neutral-50 dark:border-neutral-700">
      <label
        htmlFor="video-input"
        className="flex flex-col items-center justify-center gap-2 text-center"
      >
        <IconMovie className="w-8 h-8" />
        <p>
          Click or drag a<br /> file to start
        </p>
      </label>
      <input
        accept="video/mp4,video/x-m4v,video/*"
        id="video-input"
        type="file"
        className="absolute inset-0 opacity-0"
        onChange={setVideoFile}
      />
    </div>
  );
}

export { Upload };
