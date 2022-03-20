import './assets/styles/reset.scss';
import './assets/styles/settings.scss';
import './assets/styles/variables.scss';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Badge from './pages/Badge';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='badge' element={ <Badge /> }/>
      </Routes>
    </Router>
  );
}

export default App;
