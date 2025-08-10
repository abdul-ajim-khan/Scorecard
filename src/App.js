import './App.css';
import Leaderboard from './Component/Leaderboard';
import HomePage from './Component/HomePage'; 
import { Routes, Route } from 'react-router-dom';
import Tournaments from './Component/Tournaments';
import Players from './Component/Players';

function App() {
  return (
    <div >
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tournaments/:idxx" element={<Tournaments />} />
      <Route path="/tournaments/:idxx/leaderboard" element={<Leaderboard />} />
      <Route path="/players" element={<Players />} />
    </Routes>
    </div>
  );
}

export default App;
