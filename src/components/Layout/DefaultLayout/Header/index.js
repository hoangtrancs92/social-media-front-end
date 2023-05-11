import React, {ReactNode, useContext} from 'react';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList, Image, Button,
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import {Link as RouterLink, useNavigate, } from "react-router-dom";
import {UserContext} from "../../../../contexts/UserContext";

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
export default function Header ({ onOpen, ...rest }: MobileProps) {
    const {setUserToken} =useContext(UserContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('user_token')
    const logout = () => {
        localStorage.removeItem('user_token')
        setUserToken(null);
        navigate('/login');
    }
    return (
        <Flex
            minW = '100vw'
            position='fixed'
            px={{ base: 4, md: 10 }}
            height="100px"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <Image src='logo_2.svg' position='relative' boxSize='40px' display={{ base: 'flex', md: 'none' }}/>
            <HStack spacing={{ base: '0', md: '6' }}>
                <IconButton
                    size="2xl"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell />}
                />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/293976076_3117556991723221_1021463812372705989_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=-uRfUzb3sFgAX9rU3ol&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCLtVCYQhIiibGBqSoaO9_zEaiE_mCsu4eGoBg-N9IZmA&oe=642CCC9A'
                                    }
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="2xl">Trần Hoàng</Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>

                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            <MenuItem _hover={{bg: '#3867d6', color: 'white', transition: 'all .25s ease'}}>Trang cá nhân</MenuItem>
                            <MenuItem _hover={{bg: '#3867d6', color: 'white', transition: 'all .25s ease'}}>Tin nhắn</MenuItem>
                            <MenuItem _hover={{bg: '#3867d6', color: 'white', transition: 'all .25s ease'}}>Cài đặt</MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={logout} as={RouterLink} to='/login' _hover={{bg: '#3867d6', color: 'white', transition: 'all .25s ease'}}>Đăng xuất</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};