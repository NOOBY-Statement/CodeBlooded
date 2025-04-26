// App.jsx — no <BrowserRouter> here!
import { Routes, Route, NavLink } from 'react-router-dom';
import Members from './pages/Members';
import { HashRouter } from 'react-router-dom';
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

export default function App() {
  return (
    <div className="text-white bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/member" element={<Members />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

