import "./App.css"
import { MainContextProvider } from "./contexts/MainContext";
import Header from "./layouts/Header/Header";
import MainPage from "./MainPage";

function App() {
  return (
    <MainContextProvider>
      {/* <Header /> */}

      <MainPage />
    </MainContextProvider>
  );
}

export default App;
