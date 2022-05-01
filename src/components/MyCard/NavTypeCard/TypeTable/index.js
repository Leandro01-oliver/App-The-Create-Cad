import React, { useEffect, useState, useRef } from 'react'
import { db, storage } from '../../../../../config/fireBaseConnecting'
import { collection, getDocs } from 'firebase/firestore'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Button,
    Box,
    FormLabel,
    Input,
    Text,
    Image
} from '@chakra-ui/react'
import { RiDeleteBin6Line } from "react-icons/ri"
import { AiFillEdit } from "react-icons/ai"
import { handlerUpdateCard } from '../../../../utils/Database/Querys/UpdateCard/db'
import { handlerDeliteCard } from '../../../../utils/Database/Querys/DeliteCard/db'




function TypeTable() {

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

    const handlerDeliteShow = () => setBtbDeliteShow(!btbDeliteShow);

    const handlerUpdateShow = () => setBtbUpdateShow(!btbUpdateShow);

    const handlerOcultDataTitle = () => setOcultDataTitle(!ocultDataTitle);

    const handlerOcultDataDescription = () => setOcultDataDescription(!ocultDataDescription);

    const idCardUpdate = (id) => {
        setIdCard(id);
    }

    const idCardDelite = (id) => {
        setIdCard(id);
    }

    useEffect(() => {

        const getCards = async () => {
            const collectionRef = collection(db, "cards");
            const data = await getDocs(collectionRef);
            setDado(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getCards();


    }, [])

    return (
        <>
            <TableContainer
                w={'100%'}
                my={'2rem'}
            >
                <Table >
                    <Thead>
                        <Tr>
                            <Th>Imagem</Th>
                            <Th>Titulo</Th>
                            <Th>Descrição</Th>
                            <Th>Editar</Th>
                            <Th>Excluir</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            dado.map((d) => {
                                return (
                                    <>
                                        <Tr>
                                            <Td
                                                w={'20%'}
                                            >
                                                <Image
                                                    src={d.Img}
                                                    alt='Dan Abramov'
                                                    w={'100%'}
                                                    h={'150px'}
                                                    style={{ borderRadius: '10px' }}
                                                    cursor={'pointer'}
                                                    transition={'.3s ease-in-out'}
                                                    _hover={{
                                                        transform: 'scale(1.05)'
                                                    }}
                                                />
                                            </Td>
                                            <Td
                                                w={'20%'}
                                            >{d.Title}</Td>
                                            <Td
                                                w={'20%'}
                                            >{d.Description}</Td>
                                            <Td
                                                w={'20%'}
                                            >
                                                <Flex
                                                    w={'40px'}
                                                    h={'40px'}
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
                                            </Td>

                                            <Td
                                                w={'20%'}
                                            >
                                                <Flex
                                                    w={'40px'}
                                                    h={'40px'}
                                                    borderRadius={'50%'}
                                                    cursor={'pointer'}
                                                    justify={'center'}
                                                    align={'center'}
                                                    alt={'Botão para Excluir'}
                                                    transition={'1s ease-in-out'}
                                                    onClick={(e) => { idCardDelite(d.id); handlerDeliteShow(); }}
                                                    _hover={{
                                                        boxShadow: '0 0 10px 0 rgba(0,0,0,.5)'
                                                    }}
                                                >
                                                    <RiDeleteBin6Line />
                                                </Flex>
                                            </Td>
                                        </Tr>
                                    </>)
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>

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
                backgroundColor={'rgba(0,0,0,.5)'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                bottom={'0'}
                px={'1rem'}
                py={'15rem'}
                zIndex={'1000'}
            >
                <Flex
                    w={'100%'}
                    minH={'calc(100vh - 30rem)'}
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
                        Você tem certeza que deseja excluir o card?
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
                bottom={'0'}
                left={'0'}
                display={btbUpdateShow ? 'block' : 'none'}
                px={'1rem'}
                py={'10rem'}
                zIndex={'1000'}
            >
                <Flex
                    w={'100%'}
                    minH={'calc(100vh - 20rem)'}
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
                                                <FormLabel htmlFor="lb-img" 
                                                border={'2px dashed #000'} 
                                                cursor={'pointer'} 
                                                borderRadius={'10px'} 
                                                p={'1rem'}
                                                textAlign={'center'}
                                                fontWeight={'bold'}
                                                >
                                                    Insira sua Imagem
                                                    <Input type={'file'} id="lb-img" display={'none'} />
                                                </FormLabel>
                                            </Box>
                                            <Box my={'1rem'} textAlign={'center'}>
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

export default TypeTable