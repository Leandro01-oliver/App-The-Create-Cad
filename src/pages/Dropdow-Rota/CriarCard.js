import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../../../config/fireBaseConnecting";
import { Button, Flex, FormLabel, Input, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { handlerCreateCard } from '../../utils/Database/Querys/CreateCard/db'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function CriarCard() {

  const [dado, setDado] = useState([]);

  const [img, setImg] = useState("");

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [progress, setProgress] = useState(0);


  const handlerSubmitCreateCard = (e) => {
    e.preventDefault();

    if (img != "" && title != "" && description != "") {

      const file = e.target[0].files[0];

      const storageRef = ref(storage, `/files/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

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
              await handlerCreateCard(url, title, description)
            });
        }
      );

    } else if (img == "") {
      alert("Faça o upload da imagem")
    } else if (title == "" && description == "") {
      alert("Preencha os campos de titulo e descrição")
    } else if (title == "") {
      alert("Preencha o titulo")
    } else if (description == "") {
      alert("Preencha a descrição")
    } else {
      alert("Preencha todos os campos")
    }
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
      <Flex
        w={'100%'}
        minH={'100vh'}
        px={'2rem'}
        py={'10rem'}
      >
        <Flex
          flexDirection={'column'}
          boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
          borderRadius={'10px'}
          p={'2rem'}
          w={'100%'}
          minH={'calc(100vh - 20rem)'}
          maxW={'900px'}
          mx={'auto'}
        >
          <form onSubmit={handlerSubmitCreateCard}>
            <Box>
              <FormLabel
                htmlFor="lb-img"
                border={'2px dashed #000'}
                cursor={'pointer'}
                borderRadius={'10px'}
                p={'1rem'}
                textAlign={'center'}
                fontWeight={'bold'}
              >
                Insira sua Imagem
                <Input
                  type={'file'}
                  id="lb-img"
                  display={'none'}
                  onChange={(e) => { setImg(e.target.value) }}
                />
              </FormLabel>
            </Box>
            <Box my={'1rem'} textAlign={'center'}>
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

            <Button type="submit" w={'100%'}>
              Enviar
            </Button>
          </form>
        </Flex>
      </Flex>
    </>
  )
}

export default CriarCard