import {Box, Button, Grid, GridItem, HStack, Text, useColorModeValue} from "@chakra-ui/react";
import React, {useContext} from "react";
import Avartar from "../../components/Chakara/Avartar";
import {buttonStyle_post} from "../../components/Chakara/Filters";
import {UserContext} from "../../contexts/UserContext";
import { FcMms, FcCloseUpMode, FcVoicePresentation } from "react-icons/fc";

function YourPost() {
    const {userToken, setUserToken} = useContext(UserContext)
    console.log(userToken)
    return (
        <Box zIndex='0' mt='100px' boxShadow={'base'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'}  minW = '35vw' minH = '10vh' align={'center'} >

            <Grid templateColumns='repeat(1, 1)' gap={1}>
                <GridItem w='100%' h='5' bg='white.500' mt='15px'>
                    <Box w='92%' bg='gray.300' h='1px' />
                </GridItem>
            </Grid>
            <Grid templateColumns='repeat(3, 1fr)' w='95%' justifyContent='center'>
                <GridItem w='100%' h='20'  >
                    <Button w='100%' h='40px' bg='#ffff'>
                        <HStack spacing='20px' >
                            <Box w='30%' h='40px'flexDirection='column' display='flex' justifyContent='center'>
                                <FcMms size='30px'/>
                            </Box>
                            <Box w='70%' h='40px' flexDirection='column' display='flex' justifyContent='center'>
                                <Text textAlign='left' fontSize='xl'> Ảnh/Video </Text>
                            </Box>
                        </HStack>
                    </Button>
                </GridItem>
                <GridItem w='100%' h='20'  >
                    <Button w='100%' h='40px' bg='#ffff'>
                        <HStack spacing='20px' >
                            <Box w='30%' h='40px' flexDirection='column' display='flex' justifyContent='center'>
                                <FcCloseUpMode size='30px'/>
                            </Box>
                            <Box w='70%' h='40px'flexDirection='column' display='flex' justifyContent='center' >
                                <Text  textAlign='left' fontSize='xl'> Cảm xúc </Text>
                            </Box>
                        </HStack>
                    </Button>
                </GridItem>
                <GridItem w='100%' h='20'  >
                    <Button w='100%' h='40px' bg='#ffff'>
                        <HStack spacing='20px'>
                            <Box w='30%' h='40px' flexDirection='column' display='flex' justifyContent='center'>
                                <FcVoicePresentation size='30px'/>
                            </Box>
                            <Box w='70%' h='40px' flexDirection='column' display='flex' justifyContent='center'>
                                <Text textAlign='left' fontSize='xl'> Hot Hastag </Text>
                            </Box>
                        </HStack>
                    </Button>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default YourPost