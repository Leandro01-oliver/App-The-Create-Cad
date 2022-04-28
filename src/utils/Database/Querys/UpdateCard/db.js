import { db } from "../../../../../config/fireBaseConnecting";
import { updateDoc, doc } from "firebase/firestore";


const handlerUpdateCard = async (id, title, description) => {
    if (updateDoc) {
        if (title != null && description != null) {
            await updateDoc(doc(db, "cards", id, {
                Title: title,
                Description: description
            }))
            alert("Sucesso na Editação")
            location.reload();
        }else if(title != null){
            alert("Preencha o campo de title");
        }else if(description != null){
            alert("Preencha o campo de description");
        }else{
            alert("preencha todos os dois campos ")
        }
    } else {
        console.log("Não foi possível editar")
    }


}

export { handlerUpdateCard }