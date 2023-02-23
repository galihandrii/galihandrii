
import './App.css';
import {Routes,Route} from "react-router-dom";
import Main from './Pages/Mainpage';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Portfoliopage from './Pages/Portfoliopage';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfoliopage/>}/>
    </Routes>
  );
}

export default App;
