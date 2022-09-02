import { useContext, useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../../context/MoviesContext';
import { BackButtonPage } from '../BackButton/BackButton';
import '../FirstMovie/BigCart/List.css'
import '../FirstMovie/From.css'
import '../Reserved/Body.css'
import { Header } from '../Header';
import { db } from '../../FireBase/Fire';
import { collection , addDoc } from 'firebase/firestore';

export const ScreenSelect = () => {

    const { userWantedMovie } = useContext(MoviesContext);

    const [item, setItem] = useState('10:00')
    const [time, setTime] = useState()
    const [timefour, setTimefour] = useState('16:30')

    // <<<<<<<<<<<<<<<< FireBase >>>>>>>>>>>>>>>>
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState(0)
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "users")

    const Add = async () => {
        await addDoc(userCollectionRef , { name: newName, phone: Number(newPhone) } )
    }
    // <<<<<<<<<<<<<<<< FireBase >>>>>>>>>>>>>>>>

    const Time = () => {
        setTime("12:30")
        console.log(time)
        const two = document.getElementById('time')
        two.style.display = "none"
        return (
            <div>{time}</div>
        )
    }
    const Time10 = () => {

    }

    return (
        <div>
            <Header />
            <div className='movie-part'>
                <div className="border">
                    <img className='movieImg' src={userWantedMovie.image} alt="" />
                    <div className='reviem'>
                        <h1>{userWantedMovie.name}</h1>
                        <div id='time'>
                            <button onClick={() => Time10()}>{item}</button>
                            <button onClick={() => Time()}>dsfsd</button>
                            <button>{timefour}</button>
                        </div>
                        <div>{time}</div>
                        <input type="text"  placeholder="name" onChange={(event) => { setNewName(event.target.value) }}   />
                        <input type='number'placeholder="phone" onChange={(event) => { setNewPhone(event.target.value)}}/>
                        <button onClick={Add} >Add</button>

                        {users.map((user) => {
                return (
                    <div>
                        {" "}
                        <h1>{user.name}</h1>
                        <h1>{user.phone}</h1>
                        {/* <button onClick={() => { updateUser(user.id, user.phone) }}> Increase phone</button> */}
                        {/* <button onClick={() => {deleteUser(user.id)}} >Delete</button> */}
                    </div>
                )
            })}
                        <Link to='/movie/about/reserved'>
                            <BackButtonPage />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}