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

function DataFetcher() {
  const [newName, setNewName] = useState("");
  const [steamId, setSteamId] = useState("76561199016051382");
  const [users, setUsers] = useState([]);
  const [steamData, setSteamData] = useState([]);

  const csgo_url = process.env.REACT_APP_CSGO_API_URL;
  const rust_url = process.env.REACT_APP_RUST_API_URL;

  const ucr = collection(db, "users");

  const csgoDetail = async () => {
      axios.get(csgo_url+steamId)
          .then((res)=>{
          console.log(res?.data)}
          )
    };

  const createUser = async () => {
    await addDoc(ucr, { name: newName, age: Number(1) });
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
        const data = await axios.get(csgo_url+steamId)
        setSteamData(data.data.playerstats.stats)
        console.log(data.data.playerstats.stats)
        console.log(steamData);
        }

    const datarust = async () =>{
    const data = await axios.get(rust_url)
    console.log(data);
    }

    datacs();
    datarust();
  },[]);

  return (
    <div className="App">
    <h1>csgo stats</h1>
    <div className="textflex">
      <h5>name</h5>
      <input
        placeholder="ex: frost"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <h5>player id</h5>
      <input
        placeholder={"ex: "+steamId}
        onChange={(event) => {
        setSteamId(event.target.value);
        }}
       />
       </div>
      <button onClick={csgoDetail}> enter</button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
          </div>
        );
      })}
      {
      steamData.map((data)=>{
      if((data.name.includes("kills") && data.name.includes("total")) || data.name.includes("deaths"))
        {return(
        <div>
        <h3>{data.name}{"  "}{data.value}</h3>
        </div>
        )}
      })

      }
    </div>
  );
}

export default DataFetcher;