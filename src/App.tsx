import { AppContainer } from "@/ui/app-container/app-container";
import { Upload } from "@/features/upload/ui/upload";
import { PlaybackSection } from "./ui/playback/playback-section";

function App() {
  return (
    <AppContainer>
      <PlaybackSection>
        <Upload />
      </PlaybackSection>
    </AppContainer>
  );
}

export default App;
