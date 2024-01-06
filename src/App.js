import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TopNavigation from './components/navigations/TopNavigation';
import PasswordTips from './components/pages/PasswordTips';
import PasswordStats from './components/pages/PasswordStats';
import PasswordFacts from './components/pages/PasswordFacts';







const App = () => {
  return (
  
      <Router>
        
          <Routes>
            <Route exact path ='/' element={<Home/>} />
            <Route path ='/tips' element={<PasswordTips/>} />
            <Route path ='/stats' element={<PasswordStats/>} />
            <Route path ='/facts' element={<PasswordFacts/>} />
        
          </Routes>

   
        
     </Router>
 
  );
};

export default App;
