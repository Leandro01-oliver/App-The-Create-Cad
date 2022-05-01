import { db } from "../../../../../config/fireBaseConnecting";
import { deleteDoc, doc } from "firebase/firestore";


const handlerDeliteCard = async (id) => {
    if (deleteDoc) {
             await deleteDoc(doc(db, "cards",id))
             alert("Sucesso na exclusão")
             setTimeout(()=>{
                window.location = "/Dropdow-Rota/MeusCards";
            },3000)
     } else {
         console.log("Não foi possível exclusão")
     }
}

export {handlerDeliteCard}