import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';


const Review = ({ post }) => {
  // const { handleSubmit, register, reset } = useForm();
  const { _id } = post;
  console.log(_id);
  const { user } = useContext(AuthContext);
  const handleComment = event => {
    event.preventDefault()
    const form = event.target;
    const message = form.message.value;
    // console.log(message)
    const reviews = {
      message: message,
      email: `${user.email}`,
      displayName: `${user?.displayName}`,
      photoURL: `${user?.photoURL}`,
      _id: post._id
    }
    console.log(reviews)
    fetch(`https://connect-dun.vercel.app/postcomment`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviews)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Comment Posted')

        }
      })
      .catch(error => console.error(error))
  }
  return (
    <div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div>
            <form onSubmit={handleComment} className="w-full">

              <input type="text" name='message' placeholder="message" className="input input-bordered input-secondary w-full" />
              <Box mt={3} className="form-control">
                <button className='btn btn-success w-full lg:w-1/2 md:w-2/4 bg' type="submit">Post</button>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Review;