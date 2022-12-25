import React from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, IconButton, Stack, useDisclosure } from '@chakra-ui/react';
import { Link, } from 'react-router-dom';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
    </React.Fragment>
    return (
        <div className='list-none ff font-normal text-1xl'>
            <Box  color='black' px={4}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Flex h={16} alignItems={"center"}>
                        <IconButton
                            size={"sm"}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={"Open Menu"}
                            display={{ sm: "none" }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack spacing={8} alignItems={"center"}>
                            <Box ml={2}>SRJR</Box>
                        </HStack>
                    </Flex>
                    <Flex alignItems={"center"}>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{base:"none", md:"flex", sm:"flex"}}
                        >
                            {menuItems}
                        </HStack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4}>
                        <Stack as={"nav"} spacing={4}>
                            {menuItems}
                        </Stack>
                    </Box>
                ) : null}
            </Box>


        </div>
    );
}

export default Navbar;