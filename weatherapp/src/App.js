import { GetData } from './components';
import { Home, Detail } from './pages';
import { DataProvider } from "./context/";

function App() {
  return (
    <>
      <Detail />
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
