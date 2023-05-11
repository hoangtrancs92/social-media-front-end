import {
    Box,
    Button,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import React, {useState} from "react";
import Post from "../AnotherPost/Post";
import {BiChat} from "react-icons/bi";
import CommentInPost from "./CommentInPost";
import NewComment from "./NewComment";
function Lorem(props: { count: number }) {
    return null;
}

function DialogAnotherPost() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [list, setList ] = useState({title: "alo", description: "xin chao"});
    return (
        <>
            <Button onClick={onOpen} flex='1' variant='ghost' leftIcon={<BiChat />}>Bình luận</Button>
            <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Bài viết</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box overflowY="scroll" maxH='75vh'   sx={{
                            "&::-webkit-scrollbar": { width: "0" },
                            "&::-webkit-scrollbar-track": { bg: "transparent" },
                            "&::-webkit-scrollbar-thumb": { bg: "gray.500" },
                        }} >
                            <Post item={list}/>
                            <CommentInPost />

                        </Box>

                    </ModalBody>
                    <ModalFooter>
                        <NewComment />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default DialogAnotherPost