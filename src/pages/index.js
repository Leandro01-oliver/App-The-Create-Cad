import React,{ useEffect, useState } from "react";
import { db } from "../../config/fireBaseConnecting";
import { collection, getDocs } from "firebase/firestore";


 function Home() {

   const [dado, setDado] = useState([]);

  useEffect(()=>{

    const getCards = async () => {
      const colectionRef = collection(db, "cards");
      const data = await getDocs(colectionRef);
      setDado(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(dado)
      
    };

    getCards();

  },[])

  return (
    <>

        
    </>
  )
}
export default Home;
