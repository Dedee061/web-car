import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import {Dashboard} from './pages/DashBord'
import {CarDetail} from './pages/Car'
import New from './pages/DashBord/new'
import Layout from './components/Layout'

const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/car/:id',
        element: <CarDetail />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/dashboard/new',
        element: <New />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
  // Add more routes as needed
])

export {router}