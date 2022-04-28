import React, { useEffect, useState } from 'react'
import { Link } from 'next/link'
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
    Flex
} from '@chakra-ui/react'
import { RiDeleteBin6Line } from "react-icons/ri"
import { AiFillEdit } from "react-icons/ai"




function TypeTable() {


    const [dado, setDado] = useState([]);

    useEffect(() => {

        const getCards = async () => {
            const collectionRef = collection(db, "cards");
            const data = await getDocs(collectionRef);
            setDado(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(dado.title)
        };

        getCards();
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
                            dado?.map((d) => {
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
                                                        transition={'1s ease-in-out'}
                                                        _hover={{
                                                            boxShadow: '0 0 10px 0 rgba(0,0,0,.5)'
                                                        }}
                                                    >
                                                        <a onClick={`/Dropdow-Rota/Delite/${d.id}`}>
                                                        <RiDeleteBin6Line />
                                                        </a>
                                                    </Flex>
                                                </Td>
                                        </Tr>

                                    </>)
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>

        </>
    )
}

export default TypeTable