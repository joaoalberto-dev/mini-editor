import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useEditorState } from "@/state/editor";
import { toggleVideoPlaying } from "@/state/editor/actions/toggle-video-playing";

function PlaybackControls() {
  const { playing, videoUrl } = useEditorState();

  return (
    <button
      type="button"
      onClick={toggleVideoPlaying}
      disabled={!videoUrl}
      className="absolute bottom-0 left-0 flex items-center justify-center p-4 m-4 rounded-full bg-[rgba(255,255,255,.1)] disabled:opacity-30 disabled:cursor-not-allowed"
    >
      {!playing ? <IconPlayerPlayFilled /> : <IconPlayerPauseFilled />}
    </button>
  );
}

export { PlaybackControls };
