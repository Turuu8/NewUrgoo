import { async } from "@firebase/util";
import { collection,
     doc,
      getDocs, 
      addDoc, 
      deleteDoc,
      updateDoc
     } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./pages/ScreenSelect/Screeen";


export const Demo = () => {
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState(0)
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "users")

    const createUser = async () => {
        await addDoc(userCollectionRef, { name: newName, phone: Number(newPhone) })
    }

    const updateUser = async (id, phone) => {
        const userDoc = doc(db, "users", id)
        const newFile = { phone: phone + 1 }
        await updateDoc(userDoc, newFile)
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db , "users" , id)
        await deleteDoc ( userDoc )
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            // data.forEach(doc => {
            //     setUsers([...users, doc.data()])
            // })
        }
        getUsers();
    }, [])
    // console.log(users)
    return (
        <div style={{ color: "white" }}>
            <input placeholder="name" onChange={(event) => { setNewName(event.target.value) }} />

            <input type='number'
                placeholder="phone"
                onChange={(event) => {
                    setNewPhone(event.target.value)
                }} />

            <button onClick={createUser}> Create User </button>
            {users.map((user) => {
                return (
                    <div>
                        {" "}
                        <h1>{user.name}</h1>
                        <h1>{user.phone}</h1>
                        <button onClick={() => { updateUser(user.id, user.phone) }}> Increase phone</button>
                        <button onClick={() => {deleteUser(user.id)}} >Delete</button>
                    </div>
                )
            })}
        </div>
    )
}