import { db } from "../../../../../config/fireBaseConnecting";
import { deleteDoc, doc } from "firebase/firestore";


const handlerDeliteCard = async (id) => {
    if (deleteDoc) {
             await deleteDoc(doc(db, "cards",id))
             alert("Sucesso na exclusão")
     } else {
         console.log("Não foi possível exclusão")
     }
}

export {handlerDeliteCard}