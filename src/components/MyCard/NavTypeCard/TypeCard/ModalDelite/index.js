import React from 'react'

function ModalDelite({props}) {
  return (
    <>
  <Flex
                display={props.btbDeliteShow ? 'block' : 'none'}
                w={'100%'}
                minH={'100vh'}
                backgroundColor={'rgba(0,0,0,.5)'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                px={'1rem'}
                py={'5rem'}
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
                        Você tem certeza que deseja excluir o card?
                    </Text>
                    <br />
                    <Button
                        w={'100%'}
                        onClick={() => props.functionDelite(props.idModal)}
                    >
                        Confirmar
                    </Button>
                    <br />
                    <Button
                        w={'100%'}
                        onClick={props.functionUpdateShow}
                    >
                        Cancelar
                    </Button>
                </Flex>
            </Flex>
    </>
  )
}

export default ModalDelite