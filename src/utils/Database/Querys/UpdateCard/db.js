import { db } from "../../../../../config/fireBaseConnecting";
import { collection, updateDoc } from "firebase/firestore";

const colectionRef = collection(db, "cards");

const handlerUpdateCard = async (id) => {
 await updateDoc(colectionRef,"cards",id)
 .then(()=>{
     console.log("Sucesso na atualização do card")
 })
 .catch(()=>{
     console.log("Não foi possível atualizar card")
 });
}

export {handlerUpdateCard}