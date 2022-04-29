import React, { useEffect, useState, useRef } from 'react'
import { db } from '../../../config/fireBaseConnecting'
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
    FormControl,
    Input,
    Text
} from '@chakra-ui/react'
import { RiDeleteBin6Line } from "react-icons/ri"
import { AiFillEdit } from "react-icons/ai"
import { handlerUpdateCard } from '../../utils/Database/Querys/UpdateCard/db'
import { handlerDeliteCard } from '../../utils/Database/Querys/DeliteCard/db'




function TypeTable() {

    const [dado, setDado] = useState([]);

    const [idCard, setIdCard] = useState('');

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");
    
    const [btbDeliteShow, setBtbDeliteShow] = useState(false);

    const [btbUpdateShow, setBtbUpdateShow] = useState(false);

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
            const collectionRef = collection(db, "cards");
            const data = await getDocs(collectionRef);
            setDado(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getCards();

        console.log(idCard.toString())
    }, [])

    return (
        <>
            <TableContainer
                w={'100%'}
                mt={'1rem'}
            >
                <Table >
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th >Descrição by</Th>
                            <Th>Edit</Th>
                            <Th>Delite</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            dado.map((d) => {
                                return (
                                    <>
                                        <Tr>
                                            <Td>{d.Title}</Td>
                                            <Td >{d.Description}</Td>
                                            <Td>
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
                                            </Td>

                                            <Td>
                                                <Flex
                                                    w={'30px'}
                                                    h={'30px'}
                                                    borderRadius={'50%'}
                                                    cursor={'pointer'}
                                                    justify={'center'}
                                                    align={'center'}
                                                    alt={'Botão para Excluir'}
                                                    transition={'1s ease-in-out'}
                                                    onClick={(e) => { idCardDelite(d.id); handlerDeliteShow();  }}
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

            <Flex
                w={'100%'}
                minH={'100vh'}
                bg={'rbga(0,0,0,.5)'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                display={btbDeliteShow ? 'block' : 'none'}
            >
                <Button
                    onClick={()=> handlerDeliteCard(idCard)}
                >
                    Confirmar
                </Button>
                <Button
                    onClick={handlerDeliteShow}
                >
                    Cancelar
                </Button>
            </Flex>

            <Flex
                w={'100%'}
                minH={'100vh'}
                bg={'rbga(0,0,0,.5)'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                display={btbUpdateShow ? 'block' : 'none'}
            >
                <form onSubmit={
                                (e)=>  {
                                            e.preventDefault();
                                            handlerUpdateCard(idCard,title,description);
                                        }
                               }
                >
                    <Box>
                        <Text>{idCard}</Text>
                        <FormLabel htmlFor='title'>
                            Title
                        </FormLabel>
                        <Input id="title" onChange={(e) => { setTitle(e.target.value) }} />
                    </Box>

                    <Box my={'1rem'}>
                        <FormLabel htmlFor='description'>
                            Description
                        </FormLabel>
                        <Input id="description" onChange={(e) => { setDescription(e.target.value) }} />
                    </Box>

                    <Button
                        type='submit'
                    >
                        Confirmar
                    </Button>
                    <Button
                        onClick={handlerUpdateShow}
                    >
                        Cancelar
                    </Button>
                </form>

            </Flex>
        </>
    )
}

export default TypeTable