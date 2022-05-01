import React from 'react'
import {
    Flex,
    Button,
    Box,
    FormLabel,
    Input,
    Text
} from '@chakra-ui/react'

function ModalEdite({props}) {
    return (
        <>
            <Flex
                w={'100%'}
                minH={'100vh'}
                backgroundColor={'rgba(0,0,0,.5)'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                display={props.btnShow ? 'block' : 'none'}
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

                            functionUpdate(props.idModal, props.varTitle, props.varDescription);
                        }
                    }
                        style={{ width: '100%' }}
                    >
                        
                        {
                            dado.map((d) => {
                                if (d.id === props.idModal) {
                                    return (
                                        <>
                                            <Box >
                                                <Text>{props.idModal}</Text>
                                                <FormLabel htmlFor='title' mt={'1rem'}>
                                                    Title
                                                </FormLabel>
                                                <Input id="title"
                                                    onChange={(e) => {props.stateTitle(e.target.value) }} 
                                                    onClick={
                                                        props.functionOcultarDataTitle
                                                    }
                                                    value={props.varOcultTitle ? null : d.Title} />
                                            </Box>

                                            <Box my={'1rem'}>
                                                <FormLabel htmlFor='description'>
                                                    Description
                                                </FormLabel>
                                                <Input id="description"
                                                    onChange={(e) => {props.stateDescription(e.target.value) }} 
                                                    onClick={
                                                        props.functionOcultarDataDescription
                                                    } 
                                                    value={props.varOcultDescription ? null : d.Description} />
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
                            onClick={props.functionUpdateShow}
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

export default ModalEdite