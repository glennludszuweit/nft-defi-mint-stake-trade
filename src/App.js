import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Main from "./pages/Main";
require("dotenv").config();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
