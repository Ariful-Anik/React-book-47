import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Component/Root';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Component/Errorpage';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';
import BookDetail from './Component/BookDetail';
import ListedBooks from './Component/ListedBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'book/:bookId',
        element:<BookDetail></BookDetail>,
        loader: ()=>fetch('/booksData.json')

      },
      {
        path:'listedBooks',
        element:<ListedBooks></ListedBooks>,
        loader: ()=>fetch('/booksData.json'),
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
