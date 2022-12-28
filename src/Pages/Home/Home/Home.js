import { Box, Input } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';

const Home = () => {
    const { handleSubmit,  } = useForm();
    const { user } = useContext(AuthContext)
    return (
        <div className='text-center md:w-full mt-5 lg:mt-8 md:mt-0 m-auto'>
            <form onSubmit={handleSubmit} className="mx-auto">
            
                    <Box className="form-control">
                        <textarea className="textarea textarea-success w-full lg:w-2/4 md:w-2/4  text-justify h-10" placeholder={`What's happening?${user?.displayName}`}></textarea>
                    </Box>
                    <Box mt={3} className="form-control">
                        <input type="file" className="file-input w-full lg:w-2/4 md:w-2/4 file-input-bordered file-input-success " />
                    </Box>
                
                <Box mt={3} className="form-control">
                    <button className='btn btn-success w-full lg:w-2/4 md:w-2/4 bg' type="submit">Post</button>
                </Box>
            </form>
        </div>

    );
};

export default Home;