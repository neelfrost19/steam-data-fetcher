import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import axios from "axios";
import { Button } from './Button';
import "./DataFetcher.css";
import data from "../env.json"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function DataFetcher({Id, game}) {

  const [newName, setNewName] = useState("");
  const [steamId, setSteamId] = useState("");
  const [users, setUsers] = useState([]);
  const [steamData, setSteamData] = useState([]);
  const [boxShow, setBoxShow] = useState(false);

  const csgo_url = data.main.REACT_APP_CSGO_API_URL;
  const rust_url = data.main.REACT_APP_RUST_API_URL;
  const ucr = collection(db, "users");

  const close = () => {
    setBoxShow(false);
  }

  const csgoDetail = async () => {
      setBoxShow(true);
      axios.get(csgo_url+steamId)
          .then((res)=>{
          console.log(res?.data.playerstats.stats)
          setSteamData(res?.data.playerstats.stats)
          }
          )
    };

  //create
  const createUser = async () => {
    await addDoc(ucr, { name: newName, player_id: steamId });
  };

  //retreive
  useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(ucr);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      getUsers();
    }, []);

  //update
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  //delete
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(()=>{

    const datacs = async () => {
        const data = await axios.get(csgo_url+"76561198194056505").then((res)=>{
            setSteamData(res?.data.playerstats.stats)
            console.log(res?.data.playerstats.stats)
            console.log(steamData);
            }).catch((error)=>{
                console.log(error)
            })

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
    <div className='dataBox'>
    <div className="textflex">
     <h1 className='headerE'>Enter Your Steam ID</h1>
      <input
        className='inputT'
        placeholder="player name"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        className='inputT'
        placeholder={"steam id"}
        onChange={(event) => {
        setSteamId(event.target.value);
        }}
       />
       </div>
       <br/>
       <div className='textC'>
            <Button
                className='btns'
                style='btn--outline'
                size='btn--large'
                onClick={csgoDetail}
            >
                    Enter <i className='far fa-play-circle' />
            </Button>
       </div>
       <br/>
       { boxShow && <div className='dataList'>
      {steamData.map((data)=>{
      if((data.name.includes("kills") && data.name.includes("total")) || data.name.includes("deaths"))
        {return(
        <div>
        <h3>{data.name}{"  "}{data.value}</h3>
        </div>
        )}
      })
      }
      </div>}
      <br />
      <div className='textflex'>
      {boxShow && <Button
        className='btns'
        style='btn--outline'
        size='btn--large'
        onClick={()=>close()}
        >
            close
      </Button>}
      </div>
      </div>
    </div>
  );
}

export default DataFetcher;