import React,{useEffect,useState} from 'react'
import { db } from '../../../../config/fireBaseConnecting'
import { collection, getDocs } from 'firebase/firestore'
import {
    SimpleGrid,
    Flex,
    Text,
    Box
} from '@chakra-ui/react'

function ViewCard() {

    const [dado, setDado] = useState([]);
    

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
                                            Descrição
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
    </>
  )
}

export default ViewCard