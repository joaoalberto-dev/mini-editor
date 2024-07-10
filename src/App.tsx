import { AppContainer } from "@/ui/app-container";
import { Player } from "@/features/player/ui/player";
import { Upload } from "@/features/upload/ui/upload";

function App() {


  return (
    <AppContainer>
      <Player>
        <Upload />
      </Player>
    </AppContainer>
  );
}

export default App;
