import Container from "./components/layouts/container";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container />
      </div>
    </ThemeProvider>
  );
}

export default App;
