import React from 'react'
import { Button, Box } from '@chakra-ui/react'
import {AiFillHome} from "react-icons/ai";
import Link from 'next/link'

function Menu() {

    const navMenu = [
        {
            id: 1,
            name: "Home",
            link: "/",
        }
    ];

    return (
        <>
            <Box
                alignItems={'center'}
                justifyContent={'space-between'}
                display={{ sm: 'block', lg: 'flex' }}
            >
                {
                    navMenu.map((item) => {
                        return (
                            <>
                                <Link href={item.link}>
                                    <Button
                                    w={'100%'}
                                        key={item.id}
                                        mx={{sm:'0',lg:'1rem'}}
                                        className={'btn-menu'}
                                    >
                                       <AiFillHome style={{marginRight:'.5rem'}}/> {item.name}
                                    </Button>
                                </Link>
                                <Box display={{ sm: 'block', md: 'none' }}>

                                </Box>
                            </>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default Menu