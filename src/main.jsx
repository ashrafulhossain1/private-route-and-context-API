import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import AuthComponent from './providers/AuthComponent.jsx'
import Home from './pages/Home.jsx'
import OrderList from './pages/OrderList.jsx'
import PrivateRoutes from './privateRoutes/PrivateRoutes.jsx'
import UpdateProfile from './pages/UpdateProfile.jsx'

const routes = createBrowserRouter([
   {
      path: '/',
      element: <Root></Root>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/signUp',
            element: <SignUp></SignUp>
         },
         {
            path: '/orderList',
            element: <PrivateRoutes><OrderList></OrderList></PrivateRoutes>
         },
         {
            path: '/updateProfile',
            element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
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
