
import Layout from './Layout/layout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
function App() {
  

  return (
    <>
    
    <RouterProvider router={router} />
     
    </>
  )
}

export default App
