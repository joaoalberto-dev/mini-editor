import { PlaybackControls } from "@/features/playback-controls/ui/playback-controls";
import { useEditorState } from "@/state/editor";
import { useRef } from "react";

function Playback() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { videoUrl } = useEditorState();

  if (!videoUrl) return null;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center h-full p-12 border-b border-neutral-50 dark:border-neutral-700">
      <video
        ref={videoRef}
        className="flex-1"
        src={videoUrl}
        playsInline
        muted
      />
      <PlaybackControls video={videoRef} />
    </div>
  );
}

export { Playback };
