import { BrowserRouter, Routes ,Route} from "react-router-dom";
import "./app.css"
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import {useSelector} from "react-redux"
import Detail from "./components/Details";

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
