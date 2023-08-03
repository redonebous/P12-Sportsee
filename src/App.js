import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/:id' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
