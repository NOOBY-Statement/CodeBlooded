import { Routes, Route } from 'react-router-dom';
import Members from './pages/Members';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Team from './pages/Team';
import LacambraPage from "./members/LacambraPage";
import LegaspiPage from "./members/LegaspiPage";
import SonalizaPage from "./members/SonalizaPage";
import DatuPage from "./members/DatuPage";
import DefensorPage from "./members/DefensorPage";
import Projectspage from "./pages/Projects";

export default function App() {
  return (
    <div className="text-white bg-black min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/lacambra" element={<LacambraPage />} />
        <Route path="/members/legaspi" element={<LegaspiPage />} />
        <Route path="/members/sonaliza" element={<SonalizaPage />} />
        <Route path="/members/datu" element={<DatuPage />} />
        <Route path="/members/defensor" element={<DefensorPage />} />
        <Route path="/projects" element={<Projectspage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}