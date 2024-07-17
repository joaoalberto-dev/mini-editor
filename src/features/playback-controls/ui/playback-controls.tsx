import type { RefObject } from "react";

import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useEditorState } from "@/state/editor";
import { toggleVideoPlaying } from "@/state/editor/actions/toggle-video-playing";

type PlaybackControlsProps = {
  video: RefObject<HTMLVideoElement>;
};

function PlaybackControls({ video }: PlaybackControlsProps) {
  const { playing, videoUrl } = useEditorState();

  function handleControl() {
    if (playing) {
      video.current?.pause();
    } else {
      video.current?.play();
    }

    toggleVideoPlaying();
  }

  return (
    <button
      type="button"
      onClick={handleControl}
      disabled={!videoUrl}
      className="absolute bottom-0 left-0 flex items-center justify-center p-4 m-4 rounded-full bg-[rgba(255,255,255,.1)] disabled:opacity-30 disabled:cursor-not-allowed"
    >
      {!playing ? <IconPlayerPlayFilled /> : <IconPlayerPauseFilled />}
    </button>
  );
}

export { PlaybackControls };
