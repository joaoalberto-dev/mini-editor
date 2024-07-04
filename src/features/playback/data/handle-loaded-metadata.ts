import type { VideoSettings } from "@/state/video/video";

function handleLoadedMetadata(
  onSuccess: (settings: VideoSettings) => void,
  videoElement: HTMLVideoElement | null,
) {
  if (videoElement) {
    const { videoWidth: width, videoHeight: height, duration } = videoElement;
    const aspect = width / height;

    onSuccess({ width, height, duration, aspect });
  }
}

export { handleLoadedMetadata };
