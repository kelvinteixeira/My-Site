import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import { Home } from "./Screens/Home";
import { PageNotFound } from "./components/PageNotFound";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <img src="images/waves.svg" style={{ position: "absolute", width: '100%' }} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
