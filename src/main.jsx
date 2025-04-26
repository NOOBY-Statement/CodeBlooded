import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
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

const root = createRoot(document.getElementById('root'));

root.render(   
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
          <Route path="projects" element={<Projectspage />} />
          <Route path="members" element={<Members />} />
          <Route path="members/lacambra" element={<LacambraPage />} />
          <Route path="members/legaspi" element={<LegaspiPage />} />
          <Route path="members/sonaliza" element={<SonalizaPage />} />
          <Route path="members/datu" element={<DatuPage />} />
          <Route path="members/defensor" element={<DefensorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);