import { Box, Center, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [signUpError, setSignUPError] = useState('');

    const handleSignUp = (data) => {
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center ff'>
            <div className='w-96 p-7 bg-green-600'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <FormControl onSubmit={handleSubmit(handleSignUp)} mt={5}>
                    <Box className="w-full max-w-xs mb-4">
                        <FormLabel mb={0}> Name</FormLabel>
                        <Input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p color='red'>{errors.name.message}</p>}
                    </Box>
                    <Box className="w-full max-w-xs mb-4">
                        <FormLabel mb={0}>Email</FormLabel>
                        <Input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p color='red'>{errors.email.message}</p>}
                    </Box>
                    <Box className=" w-full max-w-xs mb-4">
                        <FormLabel mb={0}>Password</FormLabel>
                        <Input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p color='red'>{errors.password.message}</p>}
                    </Box>
                    <Input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p color='red'>{signUpError}</p>}
                </FormControl>
                <Center mt={4}>Have an account <Link className='text-secondary' to="/login">Please Login</Link></Center>
                <Center className="divider">OR</Center>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;