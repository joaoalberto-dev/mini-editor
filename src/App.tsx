import { AppContainer } from "@/ui/app-container";
import { Player } from "@/features/player/ui/player";
import { Timeline } from "@/features/timeline/ui/timeline";
import { Upload } from "@/features/upload/ui/upload";
import { useVideoStore } from "./state/video/video";

function App() {
  const { video } = useVideoStore();

  return (
    <AppContainer>
      <Player>{video ? null : <Upload />}</Player>
      <Timeline />
    </AppContainer>
  );
}

export default App;
