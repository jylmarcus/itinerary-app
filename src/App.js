import logo from './logo.svg';
import './App.css';
import Home from './home';
import SavedRoutes from './saved-routes/saved-routes';
import RouteFinder from './routefinder/route-finder';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path= "/savedRoutes" element = {<SavedRoutes/>}/>
        <Route path= "/routeFinder" element = {<RouteFinder/>}/>
      </Routes>
    </div>
  );
}

export default App;
