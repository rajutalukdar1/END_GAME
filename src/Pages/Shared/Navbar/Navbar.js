import React from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex,  Image,  useDisclosure } from '@chakra-ui/react';
import { Link, } from 'react-router-dom';
import Logo from '../../../Assets/rsz_rsz_white-removebg-preview.png'
import './Navbar.css'
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
 

    return (
        <div className='list-none ff font-normal text-1xl'>
            <Box color='black' px={4}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Flex h={16} alignItems={'center'}>
                        <label htmlFor="dashboard-drawer" tabIndex={2} className="lg:hidden" size={"sm"}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={"Open Menu"}
                            display={{ sm:"none" }}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <Link to='/'><Image className="lg:ml-0 md:ml-0 ml-3" src={Logo} alt='Logo' /></Link>
                    </Flex>
                </Flex>
            </Box>


        </div>
    );
}

export default Navbar;