import './assets/styles/reset.scss';
import './assets/styles/settings.scss';
import './assets/styles/variables.scss';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Badge from './pages/Badge';
import Portfolio from './pages/Portfolio';
import ProjectFull from './pages/ProjectFull';
import Game from './pages/Game';
import Bootcamps from './pages/Bootcamps';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router className='teste'>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='badge' element={ <Badge /> }/>
        <Route path='portfolio' element={ <Portfolio /> }/>
        <Route path='portfolio/:projectId' element={ <ProjectFull />} />
        <Route path='jogos' element={ <Game /> } />
        <Route path='bootcamps' element={ <Bootcamps /> }/>
        <Route path='sobre' element={ <About /> } />
        <Route path='contato' element={ <Contact /> } />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
