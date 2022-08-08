import React, { useState, useEffect } from 'react';
import './AcctHolder.css';
import { db } from "../firebase-config";
import axios from "axios";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function AcctHolder({setId,setShowData}) {

    const [users, setUsers] = useState([]);
    const ucr = collection(db, "users");

    const dataHandler =(value)=> {
       setId(value);
       setShowData(true);
       console.log(value);
    }

  useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(ucr);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
        console.log(users);
      }, []);

  return (
    <>
      <div className='acctHolder'>
        <div className='acctHolder-container'>
          Recent:
          <ul className= 'acctHolder-menu '>
            {
            users?users.map((data)=>{
                return(
                    <li
                        className='acctHolder-item'
                        onClick={()=>{
                            dataHandler(data.player_id)
                         }}>
                        <a
                            className='acctHolder-links'
                        >
                            {data.name}
                        </a>
                    </li>
                );
            }):[]
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default AcctHolder;
