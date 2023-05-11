import React, {useContext} from "react";
import {UserContext} from "../../../../contexts/UserContext";
import {Box, Button, Grid, GridItem, HStack, Text, useDisclosure} from "@chakra-ui/react";

import {FcMms} from "react-icons/fc";
import {FileContext} from "../../../../contexts/FileContext";
import {ImageBoxContext} from "../../../../contexts/ImgBoxContext";

function UploadButton() {
    const { isOpen, onToggle, onClose } = useDisclosure()
    const {userToken} = useContext(UserContext)
    const {file, setFile} = useContext(FileContext)
    const {hideImgBox, SetHideImgBox} = useContext(ImageBoxContext)

    const toogleImgaeBox = () => {
        SetHideImgBox('true')
    }
    if(file == null){
        return (
            <GridItem w='100%' h='20' onClick={toogleImgaeBox}  >
                <Button w='100%' h='40px' bg='#ffff' onClick={onToggle}>
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
        )
    }
    else
    return (
        <>
            <GridItem w='100%' h='20'  >
                <Button w='100%' h='40px' bg='#ffff' onClick={onToggle}>
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
        </>
    )
}

export default UploadButton