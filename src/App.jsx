// App.jsx — no <BrowserRouter> here!
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Members from './pages/Members';
import Projectspage from './pages/Projects';

export default function App() {
  return (
    <div className="text-white bg-black">
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/members" element={<Members />}/>
        <Route path="/projects" element={<Projectspage />}/>
      </Routes>
    </div>
  );
}

