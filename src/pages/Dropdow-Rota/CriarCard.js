import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db,storage } from "../../../config/fireBaseConnecting";
import { Button, Flex, FormLabel, Input, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { handlerCreateCard } from '../../utils/Database/Querys/CreateCard/db'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function CriarCard() {

  const [dado, setDado] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");
  
  const [progress, setProgress] = useState(0);


  const handlerSubmitCreateCard =  (e) => {
    e.preventDefault();

    const file = e.target[0].files[0];

    const storageRef = ref(storage, `/files/${file.name}`);

    const uploadTask =  uploadBytesResumable(storageRef, file);


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
          .then(async(url)=>{
            if (title != "" && description != "") {
              await handlerCreateCard(url, title, description)
            } else if (title == "") {
              alert("preencha o titulo")
            } else if (description == "") {
              alert("preencha a descrição")
        
            } else {
              alert("preencha os campos")
            }
          });
      }
    );
  }


  useEffect(() => {

    const collectionRef = collection(db, "cards");

    const getCars = async () => {
      const data = await getDocs(collectionRef);
      setDado(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(dado.title)
    };

    getCars();

   

  }, [])

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, lg: 2 }}
        spacing={10}
        minH={'calc(100vh - 70px)'}
        p={'2rem'}
        alignItems={'center'}
        justifyContent={'center'}
        my={'1rem'}
      >
        <Flex
          flexDirection={'column'}
          boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
          borderRadius={'10px'}
          p={'2rem'}
          minH={'30vh'}
        >

          <Box>
            <Text>
              Title:
            </Text>
            <Text>
              {title}
            </Text>
          </Box>
          <Box mt={'.5rem'}>
            <Text>
              Descrição:
            </Text>
            <Text>
              {description}
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDirection={'column'}
          boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
          borderRadius={'10px'}
          p={'2rem'}
          minH={'30vh'}
        >
          <form onSubmit={handlerSubmitCreateCard}>
          <Box>
            <FormLabel htmlFor="lb-img"  border={'2px dashed #000'} cursor={'pointer'} borderRadius={'10px'} p={'1rem'}>
              Insira sua Imagem
            <Input type={'file'} id="lb-img" display={'none'}/>
            </FormLabel>
          </Box>
          <Box mb={'1rem'}>
            <Text>Progresso de dowload {progress} % </Text>
          </Box>
            <Box>
              <FormLabel htmlFor='title'>
                Titulo
              </FormLabel>
              <Input id="title" onChange={(e) => { setTitle(e.target.value) }} maxLength={200} />
            </Box>

            <Box my={'1rem'}>
              <FormLabel htmlFor='descption'>
                Descricao
              </FormLabel>
              <Input id="descption" onChange={(e) => { setDescription(e.target.value) }} maxLength={400} />
            </Box>

            <Button type="submit">
              Enviar
            </Button>
          </form>
        </Flex>

      </SimpleGrid>
    </>
  )
}

export default CriarCard