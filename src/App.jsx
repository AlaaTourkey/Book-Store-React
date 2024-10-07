import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Books from './Components/Books/Books';
import NewBooks from './Components/NewBooks/NewBooks';
import Notfound from './Components/Notfound/Notfound';
import Categories from './Components/Categories/Categories';
import Contact from './Components/Contact/Contact';
import Card from './Components/Card/Card';
import Search from './Components/Search/Search';
import CardDetails from './Components/CardDetails/CardDetails';
import WOW from 'wowjs';
import 'animate.css';
import { useEffect } from 'react';


let routes = createBrowserRouter([
  {path:'/' , element: <Layout/> , children : [
    {index : true , element : <Home/> },
    {path  : '/' ,  element :<Home/> },
    {path  : 'books' ,  element :<Books/> },
    {path  : 'newbooks' ,  element :<NewBooks/> },
    {path  : 'categories' ,  element :<Categories/> },
    {path  : 'search' ,  element :<Search/> },
    {path  : 'CardDetails/:bookId' ,  element :<CardDetails/> },
    {path  : 'contact' ,  element :<Contact/> },
    {path  : '*' ,  element :<Notfound/> },
  ]}
])

function App() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init(); 
  }, []);

  return <RouterProvider router={routes} />;
}

export default App;
