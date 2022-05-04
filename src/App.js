import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import Test from './pages/test/test';

function App() {
  return (
    <BrowserRouter>
   <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/test" element={<Test/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
