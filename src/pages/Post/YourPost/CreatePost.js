import {Box, Button, Grid, GridItem, Text} from "@chakra-ui/react";
import Avartar from "../../../components/Chakara/Avartar";
import {buttonStyle_post} from "../../../components/Chakara/Filters";
import React from "react";

function ButtonImage() {
    return (
        <Box>
            <Grid templateColumns='repeat(16, 1fr)' w='95%' >
                <GridItem colStart={1} w='100%' h='20' >
                    <Box mt='10px'>
                        <Avartar />
                    </Box>
                </GridItem>
                <GridItem colStart={2} colEnd={17} w='100%' h='20' >
                    <Button sx={buttonStyle_post}>
                        <Text fontSize='2xl' ml='10px' color={'gray.500'}> Trần ơi hãy đăng bài viết của bạn.</Text>
                    </Button>
                </GridItem>
            </Grid>
        </Box>
    )
}