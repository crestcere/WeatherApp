// import { GetData } from './components';
import { Home, Detail, Login } from './pages';
import { GetContextDataProvider } from "./context/";
import { IsAuthProvider } from "./context";
import { ErrorBoundary} from "./components"

// import "./styles/main.scss";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <IsAuthProvider>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path="/home" element={<GetContextDataProvider><ErrorBoundary type="home"><Home /></ErrorBoundary></GetContextDataProvider>}></Route>
          <Route path="/details" element={<GetContextDataProvider><ErrorBoundary type="detail"><Detail /></ErrorBoundary></GetContextDataProvider>}></Route>
        </Routes>
      </IsAuthProvider>
    </BrowserRouter>
  );
}

export default App;
