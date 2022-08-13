import { BrowserRouter, Routes ,Route} from "react-router-dom";
import "./app.css"
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
