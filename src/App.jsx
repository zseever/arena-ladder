import './App.css';
import { Routes, Route } from 'react-router-dom';
import LeaderPage from './pages/LeaderPage/LeaderPage';
import CharPage from './pages/CharPage/CharPage';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
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
