import { AppContainer } from "@/ui/app-container/app-container";
import { Upload } from "@/features/upload/ui/upload";
import { PlaybackSection } from "@/ui/playback/playback-section";
import { useEditorState } from "./state/editor";
import { Playback } from "./features/playback/ui/playback";

function App() {
  const { videoUrl } = useEditorState();

  return (
    <AppContainer>
      <PlaybackSection>{!videoUrl ? <Upload /> : <Playback />}</PlaybackSection>
    </AppContainer>
  );
}

export default App;
