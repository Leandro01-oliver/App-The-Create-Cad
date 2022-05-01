import { db, storage } from "../../../../../config/fireBaseConnecting";
import { updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const handlerUpdateCard = async (id, img, setProgress, title, description) => {

  const storageRef = ref(storage, `/files/${img.name}`);

  const uploadTask = uploadBytesResumable(storageRef, img);


  uploadTask.on('state_changed',
    (snapshot) => {

      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      setProgress(progress);
    },
    (error) => {
      console.log(error);
    },
    () => {

      getDownloadURL(uploadTask.snapshot.ref)
        .then(async (url) => {
          const refCollection = doc(db, 'cards', id);
          if (updateDoc) {
            await updateDoc(refCollection, {
              Img: url,
              Title: title,
              Description: description
            })
            alert("Sucesso na atualização do card");
            setTimeout(() => {
              window.location = "/Dropdow-Rota/MeusCards";
            }, 3000)
          }
        });
    }
  );

}

export { handlerUpdateCard }