import { Box, Center, Circle, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');

    const handleLogin = data => {
        console.log(data);

    }

    return (
        <div style={{height:'100%vh'}} className='h-[693px] flex justify-center items-center text-white lg:px-0 md:px-0 px-3 rounded'>
            <div className='w-96  p-7 bg-green-600 rounded'>
                <Circle mb={8}><Text as='b' fontSize='3xl'>Log in</Text></Circle>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <Box className="form-control w-full max-w-xs mb-4">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs py-2 rounded pl-4 text-black" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </Box>
                    <Box className="form-control w-full max-w-xs mb-4">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs py-2 rounded pl-4 text-black" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </Box>
                    <input className='btn btn-accent w-full text-xl pt-2' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <Center pt={4}>New to SRJR ? <Link className='text-secondary ml-2' to="/signup">Sign Up</Link></Center>
                <Circle>OR</Circle>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;