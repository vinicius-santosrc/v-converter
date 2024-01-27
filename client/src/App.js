import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ConverterMp3 from "./pages/ConverterMp3";
import ConverterMp4 from "./pages/ConverterMp4";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/converter-mp4" element={<ConverterMp4 />} />
          <Route path="/converter-mp3" element={<ConverterMp3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
