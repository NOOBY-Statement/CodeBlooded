import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
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

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/members', element: <Members /> },
  { path: '/contact', element: <Contact /> },
  { path: '/about', element: <About /> },
  { path: '/home', element: <Home /> },
  { path: '/team', element: <Team /> },
  { path: '/projects', element: <Projectspage /> },
  { path: '/member1', element: <LacambraPage /> },
  { path: '/member2', element: <LegaspiPage /> },
  { path: '/member3', element: <SonalizaPage /> },
  { path: '/member4', element: <DatuPage /> },
  { path: '/member5', element: <DefensorPage /> },
]);

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </HashRouter>
);