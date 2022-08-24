import './index.css';
import { Header } from './pages/Header';
import { Routes , Route } from 'react-router-dom'
import { HomePageBody } from './pages/HomeBody/From';
import { FirstMovie } from './pages/FirstMovie/From';
import { useMoviesContext } from './context/List';

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
  const data = useMoviesContext()
  const movies = data.newData;

  return (
    <Routes>
      <Route path='/' exact element={<HomePage />}></Route>
      <Route path='/movies/about' element></Route>
    </Routes> 
  );
}

export default App;
