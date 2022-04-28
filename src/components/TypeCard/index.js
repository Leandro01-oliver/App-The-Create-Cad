import React, { useEffect, useState } from 'react'
import { db } from '../../../config/fireBaseConnecting'
import { collection, getDocs } from 'firebase/firestore'
import { Flex, SimpleGrid, Box } from '@chakra-ui/react'

function TypeCard() {

    const [dado, setDado] = useState([]);

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
                                >
                                    <Box
                                    >
                                        {d.Title}
                                        <br />
                                        {d.Description}
                                    </Box>
                                </Flex>
                            </>
                        )
                    })
                }
            </SimpleGrid>

        </>
    )
}

export default TypeCard