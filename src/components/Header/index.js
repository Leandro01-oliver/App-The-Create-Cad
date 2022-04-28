import React, { useState } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from "../../../public/logo.jpg"
import Menu from './Menu/index'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import AvatarUser from './AreaUser/index'


function Header() {

  const [showMenu, setShowMenu] = useState(false);


  const handlerMenu = () => setShowMenu(!showMenu)

  return (
    <>
      <Flex
        w={'100%'}
        h={'70px'}
        boxShadow={'0 0 10px 0 rgba(0,0,0,0.5)'}
        align={'center'}
        justify={'space-between'}
        px={'1rem'}
        position={{ sm: 'relative', lg: 'unset' }}
        zIndex={'1000'}
      >
        <Image
          src={Logo}
          height={'50px'}
          width={'50px'}
        />
        <Box display={{ sm: 'none', lg: 'flex' }}>
          <Menu />
        </Box>
        <Box display={{ sm: 'none', lg: 'flex' }}>
          <AvatarUser />
        </Box>
        <Box 
        position={'absolute'} 
        top={'70px'} 
        bg={'#fff'} 
        display={showMenu ? { sm: 'block', lg: 'none' } : 'none'} 
        w={'100%'} 
        left={'0'} 
        flexDirection={'column'} p={{ sm: '1rem', lg: '0' }} 
        zIndex={'1000'}
        >
          <AvatarUser />
          <Menu />
        </Box>
        <Flex
          h={'15px'}
          w={'15px'}
          borderRadius={'50%'}
          onClick={handlerMenu}
          className={'btn-drop'}
          boxShadow={'0 0 10px 0 rgba(0,0,0,.5'}
        >
          {showMenu ? <GrClose cursor={'pointer'} /> : <GiHamburgerMenu cursor={'pointer'} />}
        </Flex>
      </Flex>
    </>
  )
}

export default Header