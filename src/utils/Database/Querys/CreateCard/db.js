import { db } from "../../../../../config/fireBaseConnecting";
import { collection, addDoc } from "firebase/firestore";


const colectionRef = collection(db, "cards");

const handlerCreateCard = async (title ,description) => {
    await addDoc(colectionRef,{
        title: title,
        description: description,
    }).then(()=>{
        console.log("Sucesso na criação do card")
    }).catch(()=>{
        console.log("Não foi possível criar card")
    });
}

export { handlerCreateCard };