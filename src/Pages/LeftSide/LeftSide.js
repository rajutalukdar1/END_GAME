import React, { useContext } from 'react';
import { AiOutlineHome, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';
import { RxExit } from "react-icons/rx";
import { BiLogInCircle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const LeftSide = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='sticky'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 bg-base-100 text-base-content font-normal">

                        <li className='rounded-md'><Link className='pl-0 text-2xl' to="/"><AiOutlineHome /> Home</Link></li>
                        <li className='rounded-md'><Link className='pl-0 text-2xl' to="/message"><AiOutlineMessage />Message</Link></li>
                        <li className='rounded-md'><Link className=' pl-0 text-2xl' to="/about"><AiOutlineUser />About</Link></li>
                        {
                            user?.uid ?
                                <>
                                    <div className='flex items-center text-xl py-2'>
                                        {/* <Avatar name='Dan Abrahmov' src={user?.photoURL} /> */}
                                        {
                                            user?.photoURL ?
                                                <img className='rounded-full mt-3 ml-4' style={{ height: '45px', width: '45px' }} src={user.photoURL} alt="" />
                                                : <FaUser></FaUser>
                                        }
                                        <p className='pl-2 text-sm'>{user?.displayName}</p>

                                    </div>
                                    <li className='rounded-md'><Link onClick={handleLogOut} className='flex items-center pl-0 text-2xl'><RxExit />Log Out</Link></li>
                                </>
                                :
                                <li className='rounded-md'><Link className='flex items-center pl-0 text-2xl' to="/login"><BiLogInCircle />Log In</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;