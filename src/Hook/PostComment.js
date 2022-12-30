import toast from 'react-hot-toast';
export const PostComment = (product) => {
    fetch('https://srjr-server.vercel.app/postcomment', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                toast.success('Your Post Was Send');
            }

        })


}