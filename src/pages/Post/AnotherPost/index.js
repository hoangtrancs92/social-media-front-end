import {Box, Button, Grid, GridItem, Text, useColorModeValue, VStack} from "@chakra-ui/react";
import React from "react";
import Avartar from "../../components/Chakara/Avartar";

function AnotherPost() {
    return (
        <div>
            <Box marginTop='20px' boxShadow={'base'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} minW = '35vw' minH = '70vh' align={'center'}>
                <Grid templateColumns='repeat(16, 1fr)' w='95%'>
                    <GridItem colStart={1} w='100%' h='20' >
                        <Box mt='10px'>
                            <Avartar />
                        </Box>
                    </GridItem>
                    <GridItem colStart={2} colEnd={17} w='100%' h='20' >
                    </GridItem>
                </Grid>
            </Box>
            <Box marginTop='20px' boxShadow={'base'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} minW = '35vw' minH = '70vh' align={'center'}>
                <Grid templateColumns='repeat(16, 1fr)' w='95%'>
                    <GridItem colStart={1} w='100%' h='20' >
                        <Box mt='10px'>
                            <Avartar />
                        </Box>
                    </GridItem>
                    <GridItem colStart={2} colEnd={17} w='100%' h='20' >
                    </GridItem>
                </Grid>
            </Box>
            <Box marginTop='20px' boxShadow={'base'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} minW = '35vw' minH = '70vh' align={'center'}>
                <Grid templateColumns='repeat(16, 1fr)' w='95%'>
                    <GridItem colStart={1} w='100%' h='20' >
                        <Box mt='10px'>
                            <Avartar />
                        </Box>
                    </GridItem>
                    <GridItem colStart={2} colEnd={17} w='100%' h='20' >
                    </GridItem>
                </Grid>
            </Box>
        </div>


    )
}

export default AnotherPost