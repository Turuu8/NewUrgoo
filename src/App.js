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
  // const {e ,i} = useMoviesContext()
  // console.log(e.name)
  return (
    <Routes>
      <Route path='/' element={<HomePage />} ></Route>
      <Route path='/0' element={<FirstMovie />}></Route>
      {/* <Route path={`/${data.name}`} element={<NextMovie />}></Route>
      <Route path={`/${data.name}`} element={<LastMovie />}></Route> */}
    </Routes> 
  );
}

export default App;
