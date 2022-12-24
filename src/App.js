import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <PlaceOrder></PlaceOrder>
          </RequireAuth>
        }></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
