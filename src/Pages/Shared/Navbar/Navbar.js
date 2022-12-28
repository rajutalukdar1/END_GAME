import React, { useContext } from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, IconButton, Image, Stack, useDisclosure } from '@chakra-ui/react';
import { Link, useNavigate, } from 'react-router-dom';
import Logo from '../../../Assets/rsz_rsz_white-removebg-preview.png'
import { AuthContext } from '../../../Context/AuthProvider';
import { AiOutlineMessage, AiOutlineHome } from "react-icons/ai";
import './Navbar.css'
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li className='text-xl'><Link to="/"><AiOutlineHome /></Link></li>
        <li className='text-xl'><Link to="/message"><AiOutlineMessage /></Link></li>
      
    </React.Fragment>
    return (
        <div className='list-none ff font-normal text-1xl'>
            <Box color='black' px={4}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Flex h={16} alignItems={'center'}>

                        <Link to='/'><Image className="lg:ml-0 md:ml-0 ml-3" src={Logo} alt='Logo' /></Link>

                    </Flex>
                    <Flex alignItems={"center"}>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex", sm: "flex" }}
                        >
                            <label htmlFor="my-drawer-2" className="text-xl drawer-button lg:hidden"><HamburgerIcon/></label>
                        </HStack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4}>
                        <Stack as={"nav"} spacing={4}>
                        
                        </Stack>
                    </Box>
                ) : null}
            </Box>


        </div>
    );
}

export default Navbar;