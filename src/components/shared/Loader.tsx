import React from 'react'
import loader from '../../../public/icons/loader.svg'
const Loader = () => {
  return (
    <div className='flex-center w-full'>
      <img
        src={loader}
        alt='loader'
        width={24}
        height={24}
        className="animate-spin 1s"
      />
    </div>
  )
}

export default Loader