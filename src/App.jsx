import './App.css';
import { Routes, Route } from 'react-router-dom';
import LeaderPage from './pages/LeaderPage/LeaderPage';
import CharPage from './pages/CharPage/CharPage';
import NavBar from './components/NavBar';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <>
        <Routes>
          <Route path='/' element={<LeaderPage />} />
          <Route path='/hello' element={<CharPage />} />
        </Routes>
        </>
      </header>
    </div>
  );
}
