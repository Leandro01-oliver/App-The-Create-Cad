import React,{ useEffect, useState } from "react";
import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import { handlerCreateCard} from '../../utils/Database/Querys/CreateCard/db'

function CriarCard() {


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

  return (
    <>
  <Flex>
              <form onSubmit={handlerSubmitCreateCard}>
                    <FormLabel htmlFor='title'>
                      Title
                    </FormLabel>
                    <Input id="title" onChange = {(e)=>{setTitle(e.target.value)}}/>
                    <FormLabel htmlFor='descption'>
                      Descption
                    </FormLabel>
                    <Input id="descption" onChange = {(e)=>{setDescription(e.target.value)}}/>
                    <Button type="submit">
                        Enviar
                    </Button>
              </form>
          </Flex>
    </>
  )
}

export default CriarCard