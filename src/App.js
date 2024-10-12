
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "scenes/homePage/home";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "themes";
import Widgets from "scenes/Widgets/widgets";


function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode])
  return (
    <>
    <div className="app">
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/widget" element={<Widgets />} />
      
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
