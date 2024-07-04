import { useRef } from "react";
import { usePlaybackStatus } from "@/state/playback-status/playback-status";
import { useVideoStore } from "@/state/video/video";
import { handleLoadedMetadata } from "../data/handle-loaded-metadata";
import { useControlVideoElement } from "../hooks/use-control-video-element";

type PlaybackProps = {
  src: string;
};

function Playback({ src }: PlaybackProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setSettings } = useVideoStore();
  const { playing, enablePlayback } = usePlaybackStatus();

  useControlVideoElement(playing, videoRef.current);

  return (
    <div className="flex h-full p-12">
      <video
        ref={videoRef}
        className="flex-1"
        src={src}
        playsInline
        muted
        onLoadedMetadata={() =>
          handleLoadedMetadata(setSettings, videoRef.current)
        }
        onCanPlayThrough={enablePlayback}
      />
    </div>
  );
}

export { Playback };
