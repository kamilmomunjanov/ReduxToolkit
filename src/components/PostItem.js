import React from 'react'

const PostItem = ({item}) => {
    return (
        <div className='flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4'>
            {item.title}
        </div>
    )
}

export default PostItem
