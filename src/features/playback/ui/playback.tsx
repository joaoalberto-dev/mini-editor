import { PlaybackControls } from "@/features/playback-controls/ui/playback-controls";
import { useEditorState } from "@/state/editor";
import { setCurrentTime } from "@/state/editor/actions/set-current-time";
import { type SyntheticEvent, useEffect, useRef } from "react";

function Playback() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { videoUrl, playing } = useEditorState();

  function handleTimeUpdate(event: SyntheticEvent<HTMLVideoElement, Event>) {
    setCurrentTime((event.target as HTMLVideoElement).currentTime);
  }

  useEffect(() => {
    if (videoRef.current) {
      // TODO: Make 'playing' a enum
      if (playing === true) videoRef.current?.play();
      if (playing === false) videoRef.current?.pause();
    }
  }, [playing]);

  if (!videoUrl) return null;

  return (
    <div className="flex absolute inset-0 flex-col justify-center items-center p-12 h-full border-b border-neutral-50 dark:border-neutral-700">
      <video
        ref={videoRef}
        className="flex-1 max-h-full"
        src={videoUrl}
        onTimeUpdate={handleTimeUpdate}
        playsInline
        controls
        muted
      />
      <PlaybackControls />
    </div>
  );
}

export { Playback };
