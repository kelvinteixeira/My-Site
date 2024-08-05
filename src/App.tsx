import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import { Home } from "./Screens/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
