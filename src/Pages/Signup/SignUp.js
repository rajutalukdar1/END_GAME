import { Box, Circle, Input, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import facebook from '../../Assets/images.png'
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = (data) => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User SignUp Successfully')

                // const userInfo = {
                //     displayName: data.name
                // }
                // console.log(userInfo);
                // updateUser(userInfo)
                //     .then(() => {
                //         saveUser(data.name, data.email, data.role);
                //     })
                //     .catch(err => console.log(err))
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)

            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                // const googleUser ={
                //     name:user.displayName,
                //     email:user.email
                // }

                // saveUser(user.displayName, user.email, 'buyer')

                if (user.uid) {
                    toast.success('Login successfully', {
                        position: "top-center"
                    });
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleSignInWithFacebook = () => {
        signInWithFacebook()
            .then(result => {
                const user = result.user;
                console.log(user);
                // const googleUser ={
                //     name:user.displayName,
                //     email:user.email
                // }

                // saveUser(user.displayName, user.email, 'buyer')

                if (user.uid) {
                    toast.success('Login successfully', {
                        position: "top-center"
                    });
                }
            })
            .catch(error => {
                console.error(error);
            })
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

                        <div>
                            <button style={{ border: '1px solid white' }}
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md  bg-slate-600  hover:text-red-400 text-white hover:border-none'
                            >
                                Sign Up
                            </button>
                        </div>

                        <div>
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </div>
                    </form>
                    <small><p className='flex justify-center mt-2'>Already have a accounts?<Link className='text-purple-600 font-bold' to='/login'>Login now</Link></p></small>
                    <p className='text-center'>-------------Or-------------</p>

                    <Link onClick={handleSignInWithGoogle}>
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
                    <Link onClick={handleSignInWithFacebook}>
                        <div className='flex justify-content-center align-items-center mt-3 '>
                            <div className='flex justify-between items-center login-container hover:bg-warning'>
                                <div className='w-8 h-8 ml-1'>
                                    <img
                                        src={facebook} alt=''
                                    ></img>
                                </div>
                                <div className=' font-semibold '>
                                    Continue with FaceBook
                                </div>
                                <div className='mr-6'>

                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* <Link onClick={handleSignInWithGitHub}>
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
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default SignUp;