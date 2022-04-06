import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/header"
import Footer from './components/footer';
import Home from './components/home';
import Register from './components/register';
import Changepassword from './components/changepassword';
import Dashboard from './components/dashboard';
import Errorpage from './components/404error';
import { Profiler } from 'react';
import Profie from './components/app';
import Hookcounter from './components/cart';
import ProductPage from './components/productpage';
import Product from './components/productpage';

function App() {
  return (
 
      <div className="App">
        <Header/>
        {/* <Product/> */}
        {/* <Changepassword/> */}
        {/* <Dashboard/> */}
        {/* <Errorpage/> */}
        <Profie/>
        {/* <Home/> */}
        {/* <Hookcounter/> */}
        <Footer/>
      </div>
    // react router left to insert as caused error.
  );
}

export default App;
