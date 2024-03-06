import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/03 Home/Home.jsx'
import About from './components/04 About/About.jsx'
import Contact from './components/05 Contact/Contact.jsx'
import GitHub, { githubInfoLoader } from './components/06 Github/GitHub.jsx'
import User from './components/07 User/User.jsx'
import Kunj from './components/08 Kunj/Kunj.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />} >   
    {/* Main (root) is layout and as we defined Outlet (the nesting of elements is done downbelow the layout) */}
      <Route path='' element = {<Home />} />
      <Route path='/' element={<Outlet />}>
        <Route path='/about/' element={<About />} />
        <Route path='/about/kunj/' element={<Kunj />} />
        
        {/* if we want to do more nesting then make it open tags and don't want to nest route then make it self closing tags as we did for Contact */}
      </Route> 
      <Route path='contact' element = {<Contact />} />
      <Route path='user/:userid' element = {<User />} />
      <Route 
      loader={githubInfoLoader} 
      // what is loader ? - use to optimise the page
      // how ?? - when the user cursor comes at the "GitHub" it starts loading the data even before clicking on the "GitHub". And also saves the data in memory (cache)
      path='github'
      element = {<GitHub />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
