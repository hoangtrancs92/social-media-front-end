import {Avatar, Box, Flex, Spacer, StackDivider, VStack, WrapItem, Text, Button} from "@chakra-ui/react";

function CommentInPost(){
    return (
        <>
            <VStack mt='15px' divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
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
                        <Spacer />
                        <Box ml='10px'>
                            <Text fontSize='xl'> đầy đủ. Nhưng vẫn giữ được vẻ đẹp mộc mạc, giản dị, nhờ những khoảng sân vườn rộng rãi, thoáng đạt. Đi học ở xa, em chỉ về nhà vào mỗi cuối tuần. Nhưng lúc nào, trong lòng em nơi đây cũng đẹp và tuyệt vời nhất. Bởi nó chính là quê hương của em.</Text>
                        </Box>
                    </Flex>
                    <Box maxW='5vw' ml='50px'>
                        <Text fontSize='12px'fontWeight='bold'>Phản hồi</Text>
                    </Box>

                </Box>


            </VStack>

        </>
    )
}

export default CommentInPost