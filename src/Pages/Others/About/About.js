import { Box} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Edit from '../../Shared/Modal/Edit';
import { FiEdit2 } from "react-icons/fi";



const About = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div className='text-black font-normal mx-auto'>
            <h1 className='text-2xl'>About</h1>
            <div className='max-w-[600px] shadow-2xl p-8 mt-5'>
                <div className="card-actions gap-0 flex items-center justify-end mb-5 text-blue-500">
                    {/* <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white w-full bg hover:bg-white hover:text-red-600"
                        onClick=''
                    >Book Now</label> */}
                   
                    <label className=' cursor-pointer flex items-center' htmlFor="my-modal-3"> <FiEdit2/>Edit</label>
                </div>
                {user && <Edit/>}
                <Box mb={5}>
                    <h3>Name</h3>
                    <h1 className='text-xl'>{user?.displayName}</h1>
                </Box>
                <Box mb={5}>
                    <h3>Email</h3>
                    <h1 className='text-xl'>{user?.email}</h1>
                </Box>
                <Box mb={5}>
                    <h3>University</h3>
                    <h1 className='text-xl'>National</h1>
                </Box>
                <Box>
                    <h3>Address</h3>
                    <h1 className='text-xl'>Dhaka</h1>
                </Box>
            </div>
        </div>
    );
};

export default About;