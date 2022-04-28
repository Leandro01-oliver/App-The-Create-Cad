import { db } from "../../../../../config/fireBaseConnecting";
import { deleteDoc, doc } from "firebase/firestore";


const handlerDeliteCard = async (id) => {
    if (deleteDoc) {
        if (title != null && description != null) {
             await deleteDoc(doc(db, "cards",id))
             alert("Sucesso na exclusão")
             location.reload();
         }else if(title != null){
             alert("Preencha o campo de title");
         }else if(description != null){
             alert("Preencha o campo de description");
         }else{
             alert("preencha todos os dois campos ")
         }
     } else {
         console.log("Não foi possível exclusão")
     }
}

export {handlerDeliteCard}