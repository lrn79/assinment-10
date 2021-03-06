
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Cheakout from './pages/Cheakout/Cheakout';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import RequreAuth from './pages/RequreAuth/RequreAuth';
import Service from './pages/Service/Service';
import Header from './Share/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/cheakout' element={<RequreAuth><Cheakout></Cheakout></RequreAuth>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
