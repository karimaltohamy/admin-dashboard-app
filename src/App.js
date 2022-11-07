import { ThemeColorContext, useMode } from "./theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";

import TopNav from "./pages/global/TopNav";
import SidebarCom from "./pages/global/SidebarCom";
import Routers from "./routes/Routers";

function App() {
  const [theme, themeMode] = useMode();
  return (
    <ThemeColorContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarCom />
          <div className="content">
            <TopNav />
            <Routers />
          </div>
        </div>
      </ThemeProvider>
    </ThemeColorContext.Provider>
  );
}

export default App;
