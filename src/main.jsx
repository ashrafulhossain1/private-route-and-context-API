import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import AuthComponent from './providers/AuthComponent.jsx'

const routes = createBrowserRouter([
   {
      path: '/',
      element: <Root></Root>,
      children: [
         {
            path: '/',
            element: <h1 className='text-center font-bold text-3xl'>This is Home Page</h1>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/signUp',
            element: <SignUp></SignUp>
         }
      ]
   }
])

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <AuthComponent>
         <RouterProvider router={routes}>
         </RouterProvider>
      </AuthComponent>
   </StrictMode>,
)
