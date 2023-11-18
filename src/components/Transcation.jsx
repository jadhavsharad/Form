import React from 'react'
import Inputbar from './Inputbar'
import IMAGES from '../assets/Images'

const Transcation = ({ amount }) => {
    return (
        <div className='mt-6'>
            <p className='font-bold'><span>Amount to be Paid {amount}</span></p>
            <Inputbar placeholder={'Enter Transcation ID'} title={"Enter Transcation ID"} onChange={""} />
            <p className='capitalize'><span>upload screenshot</span></p>
            <button className='flex items-center bg-indigo-500 px-4 py-2 my-2 text-white font-sans font-bold hover:cursor-pointer rounded-md'><img src={IMAGES.Icon} className='w-5 h-5 mr-4 invert' alt="" srcset="" /> Upload File</button>
            {/* <input required id='file-upload' className='my-3 file:text-sm  file:text-white file:bg-gradient-to-tr from-zinc-900 to-zinc-700 file:border-none file:px-5 file:py-1  file:rounded-sm' type="file" ></input> */}
        </div>
    )
}

export default Transcation