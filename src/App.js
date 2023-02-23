import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/assets/themes/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./assets/StyledComponent/globalStyles";

//Components
import Main from "../src/components/main/Main";
import AboutPage from "../src/pages/AboutPage";
import WorkPage from "../src/pages/WorkPage";
import MySkillsPage from "../src/pages/MySkillsPage";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        {/* For framer-motion animation on page change! */}
        {/* Changed prop from exitBefore to mode */}
        <AnimatePresence mode="wait">
          {/* Changed Switch to Routes */}

          <Routes key={location.pathname} location={location}>
            {/* Changed component to element */}

            <Route path="/" element={<Main />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/work" element={<WorkPage />} />

            <Route path="/skills" element={<MySkillsPage />} />
            {/* Below is to catch all the other routes and send the user to main component,
you can add custom 404 component or message instead of Main component*/}
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
