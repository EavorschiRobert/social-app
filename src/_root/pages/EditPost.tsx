import React from 'react'
import createLogo from '../../../public/icons/add-post.svg'
import PostForm from '../../components/forms/PostForm.jsx'
import { useParams } from 'react-router-dom'
import { useGetPostById } from '@/lib/react-query/queriesAndMutations.js'
import Loader from '@/components/shared/Loader.js'

const EditPost = () => {
  const {id} = useParams();
  const {data : post, isPending} = useGetPostById(id || '');
  if(isPending){
    return(
      <Loader/>
    )
  }
  return (
    <div className='flex flex-1'>
    <div className='common-container'>
      <div className='max-w-5xl flex-start gap-3 justify-start w-full'>
        <img src={createLogo}
          width={36}
          height={36}
          alt='add'
        />
        <h2 className='h3-bold md:h2-bold text-left w-full'>Edit Post</h2>
      </div>
      <PostForm action='Update' post={post}/>
    </div>
  </div>
  )
}

export default EditPost