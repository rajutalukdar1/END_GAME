
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const Edit = () => {
  const { user } = useContext(AuthContext);
  const { handleSubmit, register, reset } = useForm();


  const handleCommentPost = data => {
    const submitted = {
      displayName: data.displayName,
      university: data.university,
      email: data.email,
      address: data.address
    }
    console.log(data);
    fetch('https://srjr-server.vercel.app/about', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(submitted)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {

          toast.success('Address Submitted');
        }
        else {
          toast.error(data.message);
        }
      });
  }

  return (
    <div className='shadow-2xl'>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div>
            <form onSubmit={handleSubmit(handleCommentPost)} className='grid grid-cols-1 gap-3 mt-10 text-black'>

              <input name="name" type="text" {...register("displayName")} defaultValue={user?.displayName} placeholder="Name" className="input w-full input-bordered" />
              <input name="email" type="email" {...register("email")} defaultValue={user?.email} placeholder="Email" className="input w-full input-bordered" />
              <input name="university" type="text" {...register("university")} placeholder="University" className="input w-full input-bordered" />
              <input name="address" type="text" {...register("address")} placeholder="Address" className="input w-full input-bordered" />
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