import { db } from "../../../../../config/fireBaseConnecting";
import { collection, addDoc } from "firebase/firestore";


const colectionRef = collection(db, "cards");

const handlerCreateCard = async (img, title, description) => {
    if (addDoc) {
        if (img != "" && title != null && description != null) {
            await addDoc(colectionRef, {
                Img: img,
                Title: title,
                Description: description,
            })
            alert("Sucesso na criação do card");
            setTimeout(()=>{
                window.location = "/Dropdow-Rota/MeusCards";
            },3000)
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