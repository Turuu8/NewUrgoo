import './index.css';
import { Header } from './pages/Header';
import { Routes  ,Router, Route } from 'react-router-dom'
import { HomePageBody } from './pages/HomeBody/From';

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
      <Route path='/' element={<HomePage />} ></Route>
    </Routes> 
  );
}

export default App;
