import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useEditorState } from "@/state/editor";
import { toggleVideoPlaying } from "@/state/editor/actions/toggle-video-playing";
import { parseSecondsTime } from "@/utils/time";

function PlaybackControls() {
  const { playing, videoUrl, time } = useEditorState();
  const parsedTime = parseSecondsTime(time);

  return (
    <div className="flex absolute bottom-0 justify-between w-full h-content items-between">
      <button
        type="button"
        onClick={toggleVideoPlaying}
        disabled={!videoUrl}
        className="flex items-center justify-center p-4 m-4 rounded-full bg-[rgba(255,255,255,.1)] disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {!playing ? <IconPlayerPlayFilled /> : <IconPlayerPauseFilled />}
      </button>
      <div className="flex items-center justify-center p-4 m-4 rounded-full bg-[rgba(255,255,255,.1)] disabled:opacity-30 disabled:cursor-not-allowed select-none tabular-nums">
        {parsedTime}
      </div>
    </div>
  );
}

export { PlaybackControls };
