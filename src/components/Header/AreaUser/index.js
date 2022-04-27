import React,{useEffect,useState} from 'react'
import { auth } from '../../../../config/fireBaseConnecting'
import { onAuthStateChanged } from 'firebase/auth'
import { Avatar, Button, Flex,Text,Box, AvatarBadge } from '@chakra-ui/react';
import { SignInGoogle, SignOutGoogle } from '../../../utils/Authentication/AuthGoogle/google';
import Link from 'next/link';

function AvatarUser() {

    const [user, setUser] = useState(false);
    const [userName, setName] = useState(false);
    const [userImage, setImage] = useState(false);

    const [showMenu, setShowMenu] = useState(false);


    const handlerMenu = ()=> setShowMenu(!showMenu)
    

    const handlerSignInG = () =>{
        SignInGoogle()
      }
    
      const handlerSignOutG = () =>{
        SignOutGoogle()
      }
    

    useEffect(()=>{
       onAuthStateChanged(auth,((u)=>{
          if(u != null){
            setUser(u);
            if(u.displayName.valueOf().length > 10){
            setName(u.displayName.replace(u.displayName.substring(7,100),""));
            }
            setImage(u.photoURL)
          }else{
            console.log("usuario não logado")
          }
       }));
    },[]);

  return (
    <>
    <Flex
    position={{sm:'unset',lg:'relative'}}
    justify={{sm:'center',lg:'unset'}}
    >
        <Avatar src={userImage}  h={'50px'} w={'50px'} display={user ? 'flex' : 'none'} cursor={'pointer'} onClick={handlerMenu} mb={{sm:'1rem',lg:'0'}}>
        <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
          </Avatar>
        <Avatar  bg='teal.500' h={'50px'} w={'50px'} display={user ? 'none' : 'flex'} cursor={'pointer'} onClick={handlerMenu}  mb={{sm:'1rem',lg:'0'}}>
        <AvatarBadge bg='#319795' boxSize='1.25em' />
          </Avatar>
    </Flex>
  <Box
   position={{sm:'unset',lg:'absolute'}}
   top={'70px'}
   right={'1rem'}
   bg={'#ccc'}
   p={'.5rem'}
   borderBottomEndRadius={'10px'}
   borderBottomStartRadius={'10px'}
   display={showMenu ? 'block' : 'none'}
   mb={{sm:'1rem', lg:'0'}}
  >
              <Text display={user? 'flex' : 'none' }> Nick Name<br/>{userName}</Text>
              <Box my={'.5rem'} display={user ? 'flex' : 'none'} bg={'blue'} w={'100%'} h={'2px'}>
              </Box>
        <Button
         w={'100%'}
         display={user ? 'none' : 'flex'}
            onClick={handlerSignInG}
              
                >
                   SignIn
        </Button>

        <Link href='/Dropdow-Rota/CriarCard'>
        <Button
         w={'100%'}
         my={'.5rem'}
                display={user ? 'flex' : 'none'}
                >
                    Criar Card
        </Button>
        </Link>
        
        <Link href='/Dropdow-Rota/MeusCards'>
        <Button
            w={'100%'}
            mb={'.5rem'}
                display={user ? 'flex' : 'none'}
                >
                    Meus Card
        </Button>
        </Link>

        <Button
         w={'100%'}
            onClick={handlerSignOutG}
                display={user ? 'flex' : 'none'}
                >
                    SignOut
        </Button>
  </Box>

    </>
  )
}

export default AvatarUser