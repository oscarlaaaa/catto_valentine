import "./App.css";
import { SceneProvider } from "./context/SceneProvider";
import Container from "@mui/material/Container";
import { SceneContainer } from "./components/game/SceneContainer";
import { ContentProvider } from "./context/ContentProvider";
import { ContentContainer } from "./components/game/ContentContainer";

function App() {
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        maxHeight: "1000px",
        maxWidth: "500px",
        padding: 0,
      }}
    >
      <SceneProvider>
        <ContentProvider>
          <SceneContainer>
            <ContentContainer />
          </SceneContainer>
        </ContentProvider>
      </SceneProvider>
    </Container>
  );
}

export default App;
