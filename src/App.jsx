import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LeaderPage from './pages/LeaderPage/LeaderPage';
import CharPage from './pages/CharPage/CharPage';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage/HomePage';

export default function App() {
  const [gameVersion, setGameVersion] = useState('wrath')

  return (
    <div className="App">
      <header className="App-header">
        <NavBar gameVersion={gameVersion} setGameVersion={setGameVersion}/>
        <>
        <Routes>
          <Route path ='/' element={<HomePage gameVersion={gameVersion}/>} />
          <Route path='/leaderboard' element={<LeaderPage gameVersion={gameVersion}/>} />
          <Route path='/character' element={<CharPage gameVersion={gameVersion}/>} />
          {/* <Route path='/' element={<Navigate to='/leaderboard' replace/>} /> */}
        </Routes>
        </>
      </header>
    </div>
  );
}
