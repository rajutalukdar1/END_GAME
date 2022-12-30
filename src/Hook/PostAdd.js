import toast from 'react-hot-toast';
export const PostAdd = (product) => {
    fetch('https://connect-dun.vercel.app/srjrPost', {
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