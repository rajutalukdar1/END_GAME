import { Box, Button, Circle, Input, Text, WrapItem } from '@chakra-ui/react';
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
        <div>
            <div style={{ height: '100%vh' }} className='h-[693px] flex justify-center items-center text-black lg:px-0 md:px-0 px-3 rounded'>
                <div className='w-96  p-7 bg-white shadow-2xl rounded'>
                    <div>
                        <Circle mb={8}><Text as='b' fontSize='3xl'>Signup Now</Text></Circle>
                    </div>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <Box className="form-control w-full max-w-xs mb-4">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <Input type="text"
                                {...register("name", {
                                    required: "Name is required"
                                })}
                                className="w-full max-w-xs py-2 rounded pl-4 text-black"
                                isInvalid
                                errorBorderColor='aqua.300'
                                placeholder='Inter Your Name' />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </Box>
                        <Box className="form-control w-full max-w-xs mb-4">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <Input type="email"
                                {...register("email", {
                                    required: "Email Address is required"
                                })}
                                className="w-full max-w-xs py-2 rounded pl-4 text-black"
                                isInvalid
                                errorBorderColor='aqua.300'
                                placeholder='Inter Your Email' />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </Box>
                        <Box className="form-control w-full max-w-xs mb-4">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <Input type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                })}
                                className="input input-bordered w-full max-w-xs py-2 rounded pl-4 text-black"
                                isInvalid
                                errorBorderColor='aqua.300'
                                placeholder='Inter Your Password' />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </Box>
                        <WrapItem>
                            <Button className='w-[98%] mb-4' colorScheme='linkedin'><input value='Signup' type="submit" /></Button>
                        </WrapItem>

                        {/* <input className='btn btn-accent w-full text-xl pt-2' value="Login" type="submit" /> */}
                        <div>
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </div>
                        <small><p className='flex justify-center'>Already have a accounts?<Link className='text-purple-600 font-bold' to='/login'>Login now</Link></p></small>
                    </form>
                    <p className='text-center'>-------------Or-------------</p>
                    {/* onClick={handleSignInWithGoogle} */}
                    <Link>
                        <div className='flex justify-content-center align-items-center mt-3 '>
                            <div className='flex justify-between items-center login-container hover:bg-warning'>
                                <div className='w-8 h-8 ml-1'>
                                    <img
                                        src='https://i.ibb.co/7yz77Hj/google.png' alt=''
                                    ></img>
                                </div>
                                <div className=' font-semibold '>
                                    Continue with Google
                                </div>
                                <div className='mr-6'>

                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className='flex justify-content-center align-items-center mt-3 '>
                            <div className='flex justify-between items-center login-container hover:bg-warning'>
                                <div className='w-8 h-8 ml-1'>
                                    <img
                                        src='https://i.ibb.co/Z62F8M5/github-512.png' alt=''
                                    ></img>
                                </div>
                                <div className=' font-semibold '>
                                    Continue with github
                                </div>
                                <div className='mr-6'>

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;