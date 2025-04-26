import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createHashRouter, HashRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Members from './pages/Members';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Team from './pages/Team.jsx';
import LacambraPage from "./members/LacambraPage";
import LegaspiPage from "./members/LegaspiPage";
import SonalizaPage from "./members/SonalizaPage";
import DatuPage from "./members/DatuPage";
import DefensorPage from "./members/DefensorPage";
import Projectspage from "./pages/Projects.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { index: true, element: <Contact/> },
      { index: true, element: <About /> },
      { index: true, element: <Team /> },
      { index: true, element: <LacambraPage /> },
      { index: true, element: <LegaspiPage /> },
      { index: true, element: <SonalizaPage /> },
      { index: true, element: <DatuPage /> },
      { index: true, element: <Projectspage /> },
      { index: true, element: <Member /> },

    
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
