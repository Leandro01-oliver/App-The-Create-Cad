import React, { useEffect, useState, useRef } from 'react'
import { db, storage } from '../../../../../config/fireBaseConnecting'
import { collection, getDocs } from 'firebase/firestore'
import { Flex, SimpleGrid, Box, Text, Button, FormLabel, Input } from '@chakra-ui/react'
import { RiDeleteBin6Line } from "react-icons/ri"
import { AiFillEdit } from "react-icons/ai"
import { handlerUpdateCard } from '../../../../utils/Database/Querys/UpdateCard/db'
import { handlerDeliteCard } from '../../../../utils/Database/Querys/DeliteCard/db'

function TypeCard() {

    const [dado, setDado] = useState([]);

    const [idCard, setIdCard] = useState('');

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    const [btbDeliteShow, setBtbDeliteShow] = useState(false);

    const [btbUpdateShow, setBtbUpdateShow] = useState(false);

    const [ocultDataTitle, setOcultDataTitle] = useState(false);

    const [ocultDataDescription, setOcultDataDescription] = useState(false);

    const [progress, setProgress] = useState(0);

    const nullTitle = useRef();

    const nullDescription = useRef();

    const handlerOcultDataTitle = () => setOcultDataTitle(!ocultDataTitle);

    const handlerOcultDataDescription = () => setOcultDataDescription(!ocultDataDescription);

    const handlerDeliteShow = () => setBtbDeliteShow(!btbDeliteShow);

    const handlerUpdateShow = () => setBtbUpdateShow(!btbUpdateShow);

    const idCardUpdate = (id) => {
        setIdCard(id);
    }

    const idCardDelite = (id) => {
        setIdCard(id);
    }


    useEffect(() => {
        const getCards = async () => {
            const colectionRef = collection(db, "cards");
            const data = await getDocs(colectionRef);
            setDado(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getCards();

    }, [])

    return (
        <>
            <SimpleGrid
                w={'100%'}
                columns={{ sm: 1, lg: 3, xl: '4' }}
                spacing={10}
            >
                {
                    dado.map((d) => {
                        return (
                            <>
                                <Flex
                                    mt={'1rem'}
                                    flexDirection={'column'}
                                    boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
                                    borderRadius={'10px'}
                                    p={'2rem'}
                                    position={'relative'}
                                >
                                    <Flex
                                        position={'absolute'}
                                        top={'1rem'}
                                        right={'1rem'}
                                    >
                                        <Flex
                                            w={'30px'}
                                            h={'30px'}
                                            borderRadius={'50%'}
                                            justify={'center'}
                                            align={'center'}
                                            transition={'1s ease-in-out'}
                                            cursor={'pointer'}
                                            onClick={() => { idCardUpdate(d.id); handlerUpdateShow(); }}
                                            _hover={{
                                                boxShadow: '0 0 10px 0 rgba(0,0,0,.5)'
                                            }}
                                        >
                                            <AiFillEdit />
                                        </Flex>
                                        <Flex
                                            w={'30px'}
                                            h={'30px'}
                                            borderRadius={'50%'}
                                            cursor={'pointer'}
                                            justify={'center'}
                                            align={'center'}
                                            alt={'Bot??o para Excluir'}
                                            transition={'1s ease-in-out'}
                                            onClick={(e) => { idCardDelite(d.id); handlerDeliteShow(); }}
                                            _hover={{
                                                boxShadow: '0 0 10px 0 rgba(0,0,0,.5)'
                                            }}
                                        >
                                            <RiDeleteBin6Line />
                                        </Flex>
                                    </Flex>

                                    <Box
                                    >
                                        <Text>
                                            Titulo
                                        </Text>
                                        <Box>
                                            {d.Title}
                                        </Box>

                                    </Box>
                                    <Box
                                        mt={'1rem'}
                                    >
                                        <Text>
                                            Descri????o
                                        </Text>
                                        <Box>
                                            {d.Description}
                                        </Box>

                                    </Box>

                                </Flex>
                            </>
                        )
                    })
                }
            </SimpleGrid>

            {/* <ModalEdite 
            idModal={idCard} 
            functionUpdate={handlerUpdateCard} 
            varTitle={title} 
            varDescription={description} 
            stateTitle={setTitle}  
            stateDescription={setDescription} 
            functionOcultarDataTitle={handlerOcultDataTitle} 
            functionOcultarDataDescription={handlerOcultDataDescription} 
            varOcultTitle={ocultDataTitle} 
            varOcultDescription={ocultDataDescription} 
            btnUpdateShow={btbUpdateShow} 
            functionUpdateShow={handlerUpdateShow}
          />
       
           <ModalEdite 
            idModal={idCard} 
            btnDeliteShow={btbDeliteShow} 
            functionDelite={handlerDeliteCard} 
            functionUpdateShow={handlerDeliteShow}
            /> */}

            <Flex
                display={btbDeliteShow ? 'block' : 'none'}
                w={'100%'}
                minH={'100vh'}
                backgroundColor={'rgba(0,0,0,.5)'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                px={'1rem'}
                py={'5rem'}
                zIndex={'1000'}
            >
                <Flex
                    w={'100%'}
                    minH={'calc(50vh - 5rem)'}
                    maxW={'900px'}
                    mx={'auto'}
                    bg={'#fff'}
                    justify={'center'}
                    align={'center'}
                    boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
                    p={'1rem'}
                    borderRadius={'20px'}
                    direction={'column'}
                >
                    <Text>
                        Voc?? tem certeza que deseja excluir o card?
                    </Text>
                    <br />
                    <Button
                        w={'100%'}
                        onClick={() => handlerDeliteCard(idCard)}
                    >
                        Confirmar
                    </Button>
                    <br />
                    <Button
                        w={'100%'}
                        onClick={handlerDeliteShow}
                    >
                        Cancelar
                    </Button>
                </Flex>
            </Flex>

            <Flex
                w={'100%'}
                minH={'100vh'}
                backgroundColor={'rgba(0,0,0,.5)'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                display={btbUpdateShow ? 'block' : 'none'}
                px={'1rem'}
                py={'5rem'}
                zIndex={'1000'}
            >
                <Flex
                    w={'100%'}
                    minH={'calc(70vh - 5rem)'}
                    maxW={'900px'}
                    mx={'auto'}
                    bg={'#fff'}
                    justify={'center'}
                    align={'center'}
                    boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
                    p={'1rem'}
                    borderRadius={'20px'}
                >
                    <form onSubmit={
                        (e) => {
                            e.preventDefault();
                            const file = e.target[0].files[0];
                            handlerUpdateCard(idCard, file, setProgress, title, description);
                        }
                    }
                        style={{ width: '100%' }}
                    >
                        {
                            dado.map((d) => {
                                if (d.id === idCard) {
                                    return (
                                        <>
                                            <Box mb={'1rem'}>
                                                <Text>{idCard}</Text>
                                            </Box>

                                            <Box>
                                                <FormLabel htmlFor="lb-img" border={'2px dashed #000'} cursor={'pointer'} borderRadius={'10px'} p={'1rem'}>
                                                    Insira sua Imagem
                                                    <Input type={'file'} id="lb-img" display={'none'} />
                                                </FormLabel>
                                            </Box>
                                            <Box mb={'1rem'}>
                                                <Text>Progresso de dowload {progress} % </Text>
                                            </Box>
                                            <Box >
                                                <FormLabel htmlFor='title' mt={'1rem'}>
                                                    Title
                                                </FormLabel>
                                                <Input id="title"
                                                    ref={nullTitle}
                                                    onChange={(e) => { setTitle(e.target.value) }} 
                                                    onClick={handlerOcultDataTitle}
                                                    value={ocultDataTitle ? null : d.Title} />
                                            </Box>

                                            <Box my={'1rem'}>
                                                <FormLabel htmlFor='description'>
                                                    Description
                                                </FormLabel>
                                                <Input id="description"
                                                    ref={nullDescription}
                                                    onChange={(e) => { setDescription(e.target.value) }} 
                                                    onClick={handlerOcultDataDescription} 
                                                    value={ocultDataDescription ? null : d.Description} />
                                            </Box>
                                        </>
                                    )
                                }
                            })}

                        <Button
                            type='submit'
                            w={'100%'}
                        >
                            Confirmar
                        </Button>
                        <br />
                        <Button
                            mt={'1rem'}
                            onClick={handlerUpdateShow}
                            w={'100%'}
                        >
                            Cancelar
                        </Button>

                    </form>
                </Flex>
            </Flex>
        </>
    )
}

export default TypeCard