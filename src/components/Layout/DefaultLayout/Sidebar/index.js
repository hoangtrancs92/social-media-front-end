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

interface LinkItemProps {
    name: string;
    icon: IconType;
    to: string
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Trang chủ', icon: FiHome, to: '/'  },
    { name: 'Xu hướng', icon: FiTrendingUp, to: '/xuhuong' },
    { name: 'Khám phá', icon: FiCompass, to: '/khampha' },
    { name: 'Ưa Thích', icon: FiStar, to: '/uathich' },
    { name: 'Cài đặt', icon: FiSettings, to: 'caidat' },
];

export default function Sidebar({children,}: { children: ReactNode;  }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
            <Box bg={useColorModeValue('gray.50', '')} position='fixed'>
            <SidebarContent minW="15vw"
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            {/*<MobileNav onOpen={onOpen} />*/}
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            zIndex='2'
            {...rest}>
            <Flex h="40" alignItems="center" mx="8" justifyContent="space-between">
                <Image src='logo_2.svg' position='relative' boxSize='80px' mx='2'/>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} as={RouterLink} to={link.to}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <div>
            {/*{LinkItems.map((link) => (*/}
            <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} >
                <Flex
                    align="center"
                    p="10"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: '#3867d6',
                        color: 'white',
                        transition: 'all .50s ease',
                    }}
                    {...rest}>
                    {icon && (
                        <Icon
                            mr="4"
                            fontSize="16"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={icon}
                        />
                    )}
                    {children}
                </Flex>
            </Link>
                {/*))}*/}
        </div>
    );
};