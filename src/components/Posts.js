import React from 'react';
import PostItem from './PostItem';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {getPosts} from "../features/posts/postSlice";

const Posts = () => {
    const dispatch = useDispatch()

    const posts = useSelector(state => state.post.posts)

    return (
        <div>
            <button
                type='submit'
                onClick={() => dispatch(getPosts())}
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>

            {
                posts?.map(item => (
                    <PostItem key={item.title} item={item}/>
                ))
            }

        </div>
    )
}

export default Posts
