import './index.css';
import { Header } from './pages/Header';
import { Routes , Route } from 'react-router-dom'
import MovieListProvider, { HomePageBody } from './pages/HomeBody/From';
import { FirstMovie } from './pages/FirstMovie/From';

const HomePage = () => {
    const style = {
      width: '100%',
      display: 'flex',
      flexDirection:"column",
      alignItems:"center"
    }
  return( 
    <div style={style}>
      <Header/>
      <HomePageBody/>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<HomePage />}></Route>
      <Route path='/movie/about' element={<FirstMovie />}></Route>
    </Routes> 
  );
}

export default App;
