import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';
import { PostAdd } from '../../../Hook/PostAdd';

const Home = () => {
    const { handleSubmit, register, reset } = useForm();
    const { user } = useContext(AuthContext);
    const imgbbHostKey = process.env.REACT_APP_imgbb_key;

    const handelPost = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`
        console.log(url);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                // if (imgData.success) {
                // console.log(imgData);
                const addPost = {
                    image: imgData.data.url,
                    massage: data.massage,
                    email: `${user.email}`,
                    displayName: `${user?.displayName}`,
                    photoURL: `${user?.photoURL}`

                }
                PostAdd(addPost);
                reset();
            })
    }

    return (
        <div className='text-center md:w-full mt-5 lg:mt-5 md:mt-0 m-auto '>
            <form onSubmit={handleSubmit(handelPost)} className="w-full">

                <Box className="form-control">
                    <textarea name='massage'{...register("massage")} className="textarea textarea-success w-full lg:w-3/4 md:w-2/4  text-justify h-10" placeholder={`What's happening?${user?.displayName}`}></textarea>
                </Box>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <Box mt={3} className="form-control">
                        <input type="file" {...register("image")} name='image' className="file-input w-full lg:w-[560px] md:w-2/4 file-input-bordered file-input-success " />
                    </Box>

                    <Box mt={3} className="form-control">
                        <button className='btn btn-success w-full lg:w-1/2 md:w-2/4 bg' type="submit">Post</button>
                    </Box>
                </div>
            </form>
        </div>

    );
};

export default Home;