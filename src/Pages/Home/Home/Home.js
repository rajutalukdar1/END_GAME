import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='mx-auto'>
            <div>
                <textarea className="textarea textarea-success w-3/4 text-justify h-10" placeholder={`What's happening?${user?.displayName}`}></textarea>
            </div>
            <div className='w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <input type="file" className="file-input file-input-bordered file-input-success" />
                <input type="file" className="file-input file-input-bordered file-input-success" />
            </div>
        </div>

    );
};

export default Home;