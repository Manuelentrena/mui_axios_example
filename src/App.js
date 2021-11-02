import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/theme";
// Router
import RouterComponent from "./router/RouterComponent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
