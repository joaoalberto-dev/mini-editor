import { AppContainer } from "@/ui/app-container";
import { Player } from "@/features/player/ui/player";
import { Timeline } from "@/features/timeline/ui/timeline";
import { Upload } from "@/features/upload/ui/upload";
import { useVideoStore } from "@/state/video/video";
import { Playback } from "@/features/playback/ui/playback";
import { PlaybackControls } from "@/features/playback-controls/ui/playback-controls";

function App() {
  const { videoSource } = useVideoStore();

  return (
    <AppContainer>
      <Player>
        {videoSource ? <Playback src={videoSource} /> : <Upload />}
      </Player>
      <PlaybackControls />
      <Timeline />
    </AppContainer>
  );
}

export default App;
