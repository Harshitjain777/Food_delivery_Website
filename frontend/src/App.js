import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Signup from './screens/Signup.js';
import { CartProvider } from './Components/ContextReducer.js';
import Cart from './screens/Cart.js';
import MyOrder from './screens/MyOrder.js';

function App() {
  return (
    <CartProvider>

    <Router>

    <div>
       <Routes>
         <Route exact path='/' element={<Home></Home>}></Route>
         <Route exact path='/login' element={<Login></Login>}/>
         <Route exact path='/signup' element={<Signup></Signup>}/>
         <Route exact path='/cart' element={<Cart></Cart>}></Route>
         <Route exact path='/myorder' element={<MyOrder></MyOrder>}></Route>
       </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
