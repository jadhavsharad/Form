import React from 'react'
import Inputbar from './Inputbar'

const Transcation = ({amount}) => {
    return (
        <div className='mt-6'>
            <p className='font-bold'><span>Amount to be Paid {amount}</span></p>
            <Inputbar placeholder={'Enter Transcation ID'} title={"Enter Transcation ID"} onChange={""} />
            <label htmlFor="Upload Screenshot" className='text-black'>Upload Payment Screenshot Below</label>
            <input required id='file-upload' className='my-3 file:text-sm  file:text-white file:bg-gradient-to-tr from-zinc-900 to-zinc-700 file:border-none file:px-5 file:py-1  file:rounded-sm' type="file" ></input>
        </div>
    )
}

export default Transcation