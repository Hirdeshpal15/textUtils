import Navbar from './Pages/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Pages/Form';
import About from './Pages/About';
import Error from './Pages/Error';
import Contact from './Pages/Contact';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<Form />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
