import { Box, Center, Circle, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUPError] = useState('');

    const handleSignUp = (data) => {
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center ff text-white'>
            <div className='w-96 p-7 bg-green-600'>
                <Circle mb={8}><Text as='b' fontSize='3xl'>Sign Up</Text></Circle>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <Box className="form-control w-full max-w-xs mb-4">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs py-2 rounded pl-4 text-black" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </Box>
                    <Box className="form-control w-full max-w-xs mb-4">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs py-2 rounded pl-4 text-black" />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                    </Box>
                    <Box className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs py-2 rounded pl-4 text-black" />
                        {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
                    </Box>
                    <input className='btn btn-accent w-full mt-2 text-xl' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600 text-sm'>{signUpError}</p>}
                </form>
                <Center pt={4}>Have an account ? <Link className='text-secondary' to="/login">Please Login</Link></Center>
                <Center pt={2}>OR</Center>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;