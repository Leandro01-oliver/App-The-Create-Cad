import React,{ useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/fireBaseConnecting";
import { Button, Flex, FormLabel, Input, SimpleGrid, Box, Text} from "@chakra-ui/react";
import { handlerCreateCard} from '../../utils/Database/Querys/CreateCard/db'

function CriarCard() {

  const [dado,setDado] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handlerSubmitCreateCard = async(e) =>{
    e.preventDefault();
    if(title != "" && description != ""){
      await handlerCreateCard(title, description)
    }else if (title == ""){
       alert("preencha o titulo")
    }else if (description == ""){
      alert("preencha a descrição")

    }else{
      alert("preencha os campos")
    }
  }

  useEffect(()=>{

    const collectionRef = collection(db, "cards");

    const getCars = async () => {
      const data = await getDocs(collectionRef);
      setDado(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(dado.title)
    };

    getCars();
  },[])

  return (
    <>
        <SimpleGrid 
                columns={{sm:1, lg:2}} 
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
           minH={'50vh'}
          >
              <Box>
              <Text>
                  Card Title:
                </Text>
                <Text>
                {title}
                  </Text>
              </Box>
              <Box mt={'1rem'}>
                <Text>
                  Card Description:
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
  minH={'50vh'}
          >
          <form onSubmit={handlerSubmitCreateCard}>
            <Box>
            <FormLabel htmlFor='title'>
                              Title
                            </FormLabel>
                            <Input id="title" onChange = {(e)=>{setTitle(e.target.value)}}/>
            </Box>
                            
                            <Box  my={'1rem'}>
                            <FormLabel htmlFor='descption'>
                              Description
                            </FormLabel>
                            <Input id="descption" onChange = {(e)=>{setDescription(e.target.value)}}/>
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