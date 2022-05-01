import React, { useRef } from 'react'
import { GrTable, GrView } from 'react-icons/gr'
import { BiCreditCardFront} from 'react-icons/bi'
import { Flex, Box } from '@chakra-ui/react'
import TypeTable from '../../components/MyCard/NavTypeCard/TypeTable'
import TypeCard from '../../components/MyCard/NavTypeCard/TypeCard'
import ViewCard from '../../components/MyCard/ViewCard'


function MeusCards() {

  const table = useRef();
  const card = useRef();
  const viewCard = useRef();

  const handlerMenuViewCard = () => {
    table.current.style.display = 'none'
    card.current.style.display = 'none'
    viewCard.current.style.display = 'flex'
  }

  const handlerMenuCard = () => {
    table.current.style.display = 'none'
    card.current.style.display = 'flex'
    viewCard.current.style.display = 'none'
  }

  const handlerMenuTable = () => {
    table.current.style.display = 'flex'
    card.current.style.display = 'none'
    viewCard.current.style.display = 'none'
  }
  return (
    <>
      <Flex
        w={'100%'}  
        direction={'column'}
        p={'2rem'}
      >
        <Flex
          boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
          borderRadius={'10px'}
          p={'1rem'}
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
              onClick={handlerMenuViewCard}
            >
              <GrView />
            </Flex>
            <Flex
              w={'30px'}
              h={'30px'}
              borderRadius={'50%'}
              border={'2px solid #000'}
              mx={'1rem'}
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
              h={'30px'} 
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
        <Flex
           ref={viewCard}
           w={'100%'}
        >
          <ViewCard/>
        </Flex>
      </Flex>
    </>
  )
}

export default MeusCards