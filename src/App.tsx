import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import { Home } from "./Screens/Home";
import "./i18n.js"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
