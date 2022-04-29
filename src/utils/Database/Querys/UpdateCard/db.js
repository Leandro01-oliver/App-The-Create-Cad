import { db } from "../../../../../config/fireBaseConnecting";
import { updateDoc, doc } from "firebase/firestore";


const handlerUpdateCard = async (id, title, description) => {
    const refCollection = doc(db, 'cards', id);
    if (updateDoc) {
        if (title != null && description != null) {
            await updateDoc(refCollection,{
                Title: title,
                Description: description
            })
            alert("Sucesso na Editação")
            setTimeout(()=>{
                window.location = "/Dropdow-Rota/MeusCards";
            },3000)
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