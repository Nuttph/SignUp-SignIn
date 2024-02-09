import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signin from './container/Signin';
import Login from './container/Login';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Signin />
  },
  {
    path:'Login',
    element: <Login />
  }
])

function App() {
  return (
    <div id='appMain'>
      <div className='appLeft'>
        <header>
          <h1>Hello Welcome to my Website.</h1>
          <h2>You need to Login for looking my full website</h2>
        </header>
      </div>
      <div className="appRight">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App