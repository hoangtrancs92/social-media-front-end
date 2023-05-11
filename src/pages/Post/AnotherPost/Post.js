import {
    Avatar,
    Box, Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    IconButton,
    Image,
    Text
} from "@chakra-ui/react";
import {BsThreeDotsVertical} from "react-icons/bs";
import {BiChat, BiLike, BiShare} from "react-icons/bi";
import React from "react";
import DialogAnotherPost from "../DialogAnotherPost";

function Post(Props){
    return (
        <>
            {console.log(Props)}
            <Card maxW=''>
                <CardHeader>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                            <Box>
                                <Heading size='sm'>Segun Adebayo</Heading>
                                <Text>Creator, Chakra UI</Text>
                            </Box>
                        </Flex>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<BsThreeDotsVertical />}
                        />
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Text>
                        {/*{Props.item.title}*/}
                    </Text>
                    <Text>
                        {/*{Props.item.description}*/}
                    </Text>
                </CardBody>
                <Image
                    objectFit='cover'
                    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Chakra UI'
                />

                <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >
                    <Button flex='1' variant='ghost' color='#4b7bec' fontWeight='extrabold' leftIcon={<BiLike />}>
                        Like
                    </Button>
                    <Button flex='1' variant='ghost' >
                        <DialogAnotherPost />
                    </Button>
                    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                        Share
                    </Button>

                </CardFooter>
            </Card>        </>
    )
}

export default Post