import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Picture from './components/Picture/Picture.jsx'
import Quote from './components/Quote/Quote.jsx'
import Img from './Img.jsx'
import Imgview from './Imgview.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Img />}>
      <Route path='' element={<App />}>
        <Route path='' element={<Picture />} />
        <Route path='quote' element={<Quote />} />
      </Route>
      <Route path='image/:quote' element={<Imgview />} />

    
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
