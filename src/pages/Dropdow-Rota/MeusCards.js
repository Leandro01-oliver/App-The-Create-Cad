import React, { useRef } from 'react'
import { GrTable } from 'react-icons/gr'
import { BiCreditCardFront} from 'react-icons/bi'
import { Flex, Box } from '@chakra-ui/react'
import TypeTable from '../../components/TypeTable'
import TypeCard from '../../components/TypeCard'

function MeusCards() {

  const table = useRef();
  const card = useRef();

  const handlerMenuCard = () => {
    table.current.style.display = 'none'
    card.current.style.display = 'flex'
  }

  const handlerMenuTable = () => {
    table.current.style.display = 'flex'
    card.current.style.display = 'none'
  }
  return (
    <>
      <Flex
        w={'100%'}
        minH={'calc(100vh - 70px)'}
        direction={'column'}
        p={'2rem'}
      >
        <Flex
          boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
          borderRadius={'10px'}
          p={'1rem'}
          pb={'2.5rem'}
          align={'center'}
          justify={'center'}
          position={'relative'}
          w={'100%'}
        >


          <Flex>
            <Flex
              w={'30px'}
              h={'30px'}
              borderRadius={'50%'}
              border={'2px solid #000'}
              justify={'center'}
              align={'center'}
              cursor={'pointer'}
              title={'Visualizar em formato de card'}
              onClick={handlerMenuCard}
            >
              <BiCreditCardFront />
            </Flex>
            <Flex
              w={'30px'}
              h={'30px'} ml={'1rem'}
              borderRadius={'50%'}
              border={'2px solid #000'}
              justify={'center'}
              align={'center'}
              cursor={'pointer'}
              title={'Visualizar em formato de tabela'}
              onClick={handlerMenuTable}
            >
              <GrTable />
            </Flex>
          </Flex>

        </Flex>

        <Box w={'100%'} h={'2px'} bg={'blue'} mt={'2.5rem'}></Box>

        <Flex
          ref={table}
          w={'100%'}
          display={'none'}
        >
          <TypeTable />
        </Flex>

        <Flex
          ref={card}
          w={'100%'}
          display={'none'}
        >
          <TypeCard />
        </Flex>
      </Flex>
    </>
  )
}

export default MeusCards