import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LeaderPage from './pages/LeaderPage/LeaderPage';
import CharPage from './pages/CharPage/CharPage';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage/HomePage';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <>
        <Routes>
          <Route path ='/' element={<HomePage />} />
          <Route path='/leaderboard' element={<LeaderPage />} />
          <Route path='/character' element={<CharPage />} />
          {/* <Route path='/' element={<Navigate to='/leaderboard' replace/>} /> */}
        </Routes>
        </>
      </header>
    </div>
  );
}
