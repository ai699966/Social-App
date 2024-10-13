
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "scenes/homePage/home";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "themes";
import Widgets from "scenes/Widgets/widgets";
import { Navigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <>
    <div className="app">
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />}  />
      <Route path="/widget" element={<Widgets />} />
      
      
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
