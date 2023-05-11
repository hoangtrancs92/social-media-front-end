import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay, Button, MenuItem, useDisclosure
} from "@chakra-ui/react";
import React, {useContext, useEffect, useRef, useState} from "react";
import {DetailPostContext} from "../../../../contexts/Post/DetailPostContext";
import {post_discussion} from "../../../../services/discussionService";
import {delete_user_post} from "../../../../services/postService";
function AlertDanger() {
    useEffect(()=>{
        console.log(idDetailPost)
    },[])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {idDetailPost} = useContext(DetailPostContext);

    const handleDelete = async (e) => {
        const res =  await delete_user_post({},idDetailPost)
        onClose()
        console.log(res)
        if(res.status === 200){
            console.log(res)
        }
    }
    const cancelRef = React.useRef()
    return (

        <>
            <MenuItem onClick={onOpen}>Xoá</MenuItem>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Xoá bài viết
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Bạn có chắc chắn xoá bài viết không ?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Huỷ
                            </Button>
                            <Button colorScheme='red' onClick={handleDelete} ml={3}>
                                Xoá
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>

    )
}

export default AlertDanger