import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import axios from "axios";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const [steamId, setSteamId] = useState("");

  const csgo_url = process.env.REACT_APP_CSGO_API_URL;

  const player_id = "76561199016051382";


  const ucr = collection(db, "users");

  const createUser = async () => {
      axios.get(csgo_url+player_id)
          .then((res)=>{
          console.log(res?.data)}
          )
    };

  const csgoDetail = async () => {
    axios.get(csgo_url+player_id)
        .then((res)=>{
        console.log(res?.data)})
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(ucr);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  useEffect(()=>{

    const datacs = async () => {
    axios.get(csgo_url+player_id)
    .then((res)=>{
    console.log(res?.data)}
    )}

    datacs();
  },[]);

  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <button onClick={createUser}> Create User</button>
      <h3>csgo stats</h3>
        <input
            placeholder="player_id..."
            onChange={(event) => {
            setSteamId(event.target.value);
            }}
        />
        <button onClick={csgoDetail}> enter</button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;