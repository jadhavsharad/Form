import React, {useRef} from 'react'
import Inputbar from './Inputbar'
import IMAGES from '../assets/Images'

const Transaction = ({ amount }) => {

const fileUpload = useRef(null);

    return (
        <div className='mt-6'>
            <p className='font-bold'><span>Amount to be Paid {amount}</span></p>
            <Inputbar placeholder={'Enter Transaction ID'} title={"Enter Transaction ID"} onChange={""} />
            <p className='capitalize'><span>upload screenshot</span></p>
            <button onClick={ () => {fileUpload.current.click()}} className='flex items-center bg-zinc-800 px-4 py-2 my-2 text-white font-poppins hover:cursor-pointer rounded-md'><img src={IMAGES.Icon} className='w-5 h-5 mr-3 invert' alt="" srcset="" /> Upload File</button>
            <input type="file" ref={fileUpload} hidden />
        </div>
    )
}

export default Transaction