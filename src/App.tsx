import "./App.css";
import { SceneProvider } from "./context/SceneProvider";
import Container from "@mui/material/Container";
import { SceneContainer } from "./components/game/SceneContainer";

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
        <SceneContainer></SceneContainer>
      </SceneProvider>
    </Container>
  );
}

export default App;
