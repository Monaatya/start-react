import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  const routers = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
      {path: '/', element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'portfolio', element : <Portfolio/>},
      {path: 'contact', element: <Contact/>}
    ]}
  ])
  return (
    <>
     <RouterProvider router= {routers}> </RouterProvider>
    </>
  );
}

export default App;
