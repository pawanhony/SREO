import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Apply from './Components/Form/Apply';
import ToolKit from './Components/Form/ToolKit';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path={'/about'} element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/' element={<Apply/>}>
      <Route path='/toolkit' element={<ToolKit/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
