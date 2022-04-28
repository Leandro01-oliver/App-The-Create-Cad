import { db } from "../../../../../config/fireBaseConnecting";
import { collection, addDoc } from "firebase/firestore";


const colectionRef = collection(db, "cards");

const handlerCreateCard = async (title, description) => {
    if (addDoc) {
        if (title != null && description != null) {
            await addDoc(colectionRef, {
                Title: title,
                Description: description,
            })
            alert("Criado com sucesso o card");
            location.reload;
        } else if (title != null) {
            alert("Preencha o campo de title");
        } else if (description != null) {
            alert("Preencha o campo de description");
        } else {
            alert("preencha todos os dois campos ")
        }
    }else{
        console.log("Não foi possível criar card")
    }
}

export { handlerCreateCard };