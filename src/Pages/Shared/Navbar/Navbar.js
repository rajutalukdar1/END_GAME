import React, { useContext } from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, IconButton, Image, Stack, useDisclosure } from '@chakra-ui/react';
import { Link, useNavigate, } from 'react-router-dom';
import Logo from '../../../Assets/rsz_rsz_white-removebg-preview.png'
import { AuthContext } from '../../../Context/AuthProvider';
import { AiOutlineMessage, AiOutlineHome } from "react-icons/ai";
import { ImExit } from "react-icons/im";
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
        {
            user?.uid ?
                <>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt='' src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                             <li className='text-1l'><Link to="/about">About</Link></li>


                            <li className='text-1l'><Link onClick={handleLogOut} className='flex items-center'><ImExit />Log Out</Link></li>
                        </ul>
                    </div>

                </>
                :
                <li><Link to="/login">Log in</Link></li>

        }

    </React.Fragment>
    return (
        <div className='list-none ff font-normal text-1xl'>
            <Box color='black' px={4}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Flex h={16} alignItems={'center'}>
                        <IconButton
                            size={"sm"}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={"Open Menu"}
                            display={{ sm: "none" }}
                            onClick={isOpen ? onClose : onOpen}
                        />


                        <Link to='/'><Image className="lg:ml-0 md:ml-0 ml-3" src={Logo} alt='Logo' /></Link>

                    </Flex>
                    <Flex alignItems={"center"}>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex", sm: "flex" }}
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