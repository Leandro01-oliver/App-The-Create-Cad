import React from 'react'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../../public/logo.jpg'

function Footer() {
  return (
    <>
      <Flex
        boxShadow={'0 0 10px 0 rgba(0,0,0,0.5)'}
        w={'100%'}
        bg={'blue'}
        p={'1rem'}
        align={'center'}
      >
        <SimpleGrid columns={{sm:1,lg:4}} spacing={10} w={'100%'}>
          <Flex 
          justify={'center'}
          >
            <Image
              src={Logo}
              width={'100px'}
              height={'100px'}
              style={{borderRadius:'50%'}}
            />
          </Flex>
          <Box>
            <Box>
              <Text>
                Quem Somos :
              </Text>
              <Text>
                Somos um webApp para gerenciar seus cards.
              </Text>
            </Box>

          </Box>
          <Box>
            <Box>
              <Text>
                Contato :
              </Text>
              <Box>
                <Text>
                  Email: create.app@gmail.com
                </Text>
                <Text>
                  Telefone: 69 99999-9999
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <Text>
                Parcerias :
              </Text>
              <Flex mt={'1rem'} w={'100%'} display={{sm:'block',md:'flex',lg:'flex'}} justify={{sm:'center',lg:'start'}}>
                <Box mr={{sm:'0',md:'1rem',lg:'1rem'}} mb={{sm:'1rem',md:'1rem',lg:'0'}}>
                  <Image
                    src={Logo}
                    width={'50px'}
                    height={'50px'}
                    style={{borderRadius:'50%'}}
                  />
                </Box>
                <Box>
                  <Image
                    src={Logo}
                    width={'50px'}
                    height={'50px'}
                    style={{borderRadius:'50%'}}
                  />
                </Box>
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  )
}

export default Footer