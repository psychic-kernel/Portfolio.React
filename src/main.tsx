import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, 
  createBrowserRouter,
  RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'

// import pages.
import MainPg from './pages/MainPg.tsx';
import AcademicsPg from './pages/AcademicsPg.tsx';
import BioPg from './pages/BioPg.tsx';
import ProjectsPg from './pages/ProjectsPg.tsx';
import NoPg from './pages/NoPg.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPg/>
  },
  {
    path: "/academics",
    element: <AcademicsPg/>
  },
  {
    path: "/bio",
    element: <BioPg/>
  },
  {
    path: "/projects",
    element: <ProjectsPg/>
  },
  {
    path: "*",
    element: <NoPg/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


