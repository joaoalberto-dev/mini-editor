import { AppContainer } from "@/ui/app-container";
import { Player } from "@/features/player/ui/player";
import { Timeline } from "@/features/timeline/ui/timeline";

function App() {
  return (
    <AppContainer>
      <Player />
      <Timeline />
    </AppContainer>
  );
}

export default App;
