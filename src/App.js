import './index.css';
import { Header } from './pages/Header';
import { Routes, Route } from 'react-router-dom'
import { HomePageBody } from './pages/HomeBody/From';
import { FirstMovie } from './pages/FirstMovie/From';
import { Reserved } from './pages/Reserved/Body';

const HomePage = () => {
  const style = {
    width: '100%',
    display: 'flex',
    flexDirection: "column",
    alignItems: "center"
  }
  return (
    <div style={style}>
      <Header />
      <HomePageBody />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<HomePage />}></Route>
      <Route path='/movie/about' element={<FirstMovie />}></Route>
      <Route path='/movie/about/reserved' element={<Reserved />}></Route>
    </Routes>
  );
}

export default App;
