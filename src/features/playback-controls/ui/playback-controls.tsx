import { usePlaybackStatus } from "@/state/playback-status/playback-status";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";

function PlaybackControls() {
  const { playing, play, pause, canPlay } = usePlaybackStatus();

  return (
    <div className="flex items-center justify-center py-4 border-b">
      {playing ? (
        <button
          type="button"
          onClick={pause}
          disabled={!canPlay}
          className="disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <IconPlayerPauseFilled />
        </button>
      ) : (
        <button
          type="button"
          onClick={play}
          disabled={!canPlay}
          className="disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <IconPlayerPlayFilled />
        </button>
      )}
    </div>
  );
}

export { PlaybackControls };
