import { useEffect } from "react";

function useControlVideoElement(
  playbackStatus: boolean,
  videoElement: HTMLVideoElement | null,
) {
  useEffect(() => {
    if (videoElement) {
      playbackStatus ? videoElement.play() : videoElement.pause();
    }
  }, [playbackStatus, videoElement]);
}

export { useControlVideoElement };
