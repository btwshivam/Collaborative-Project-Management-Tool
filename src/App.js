import './App.css';
import Home from './pages/Home/Home';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { LightMode } from '@mui/icons-material';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
              <Routes>
                <Route exact path="/">
                  <Route index element={
                    <Home />} />
                </Route>
              </Routes>
            </BrowserRouter>
         </ThemeProvider> 
     </DndProvider>         
  );
}

export default App;
