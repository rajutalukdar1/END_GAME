import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <div className='flex justify-center mt-8'>
                <FadeLoader color="#FF7376" />
            </div>
        </div >
    );
};

export default Loader;
