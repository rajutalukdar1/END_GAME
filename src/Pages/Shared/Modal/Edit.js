
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Edit = () => {
  const {user} = useContext(AuthContext)

  return (
    <div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div>
          <form  className='grid grid-cols-1 gap-3 mt-10 text-black'>
                    
                        <input name="name" type="text" defaultValue={user?.displayName}   placeholder="Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email}   placeholder="Email" className="input w-full input-bordered" />
                        <input name="university" type="text"   placeholder="University" className="input w-full input-bordered" />
                        <input name="address" type="text" placeholder="Address" className="input w-full input-bordered" />
                        <br />
                        <input className='btn bg w-full hover:bg-white hover:text-red-600' type="submit" value="Submit" />
                    </form>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Edit;