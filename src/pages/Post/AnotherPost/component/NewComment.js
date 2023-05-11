import {Avatar, Box, Flex, Grid, Input, Spacer, StackDivider, Text, VStack, WrapItem} from "@chakra-ui/react";

function NewComment(){
    return(
        <>
            <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch' w='100%'>
                <Box minH='50px'>
                    <Flex>
                        <Box w='70px'>
                            <WrapItem>
                                <Avatar
                                    size='lg'
                                    name='Kola Tioluwani'
                                    src='https://bit.ly/tioluwani-kolawole'
                                />{' '}
                            </WrapItem>
                        </Box>
                        <Input variant='flushed' placeholder='Bình luận' size='xl'  w='100%'/>

                    </Flex>

                </Box>`

            </VStack>
        </>
    )
}

export default NewComment