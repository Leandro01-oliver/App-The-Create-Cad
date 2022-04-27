import { db } from "../../../../../config/fireBaseConnecting";
import { collection, deleteDoc } from "firebase/firestore";

const colectionRef = collection(db, "cards");

const handlerDeliteCard = async (id) => {
 await deleteDoc(colectionRef,"cards",id)
 .then(()=>{
     console.log("Sucesso na deleção do card")
 })
 .catch(()=>{
     console.log("Não foi possível deletar card")
 });
}

export {handlerDeliteCard}