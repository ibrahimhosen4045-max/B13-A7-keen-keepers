import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { router } from './Routes.jsx'
import ContextProvider from './Context/ContextProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router}/>
    <ToastContainer />
  </ContextProvider>
)
