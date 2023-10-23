import './App.css';
import { Routes, Route } from 'react-router-dom';
import LeaderPage from './pages/LeaderPage/LeaderPage';
import CharPage from './pages/CharPage/CharPage';
import NavBar from './components/NavBar';

export default function App() {
  const apiKey = 'USnIZp4bYg82LmpfKkD7QTRf8EWHhZw48r'

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <>
        <Routes>
          <Route path='/' element={<LeaderPage apiKey={apiKey}/>} />
          <Route path='/hello' element={<CharPage apiKey={apiKey}/>} />
        </Routes>
        </>
      </header>
    </div>
  );
}
