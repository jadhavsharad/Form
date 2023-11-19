import React from 'react'

const Batchinput = ({ title }) => {
    return (
        <div className=''>

            {/* Title: Year */}
            <p className='my-4'>{title}</p>

                {/* Batch 1 */}
                <div className='flex items-center'>
                <input type="radio" className='mx-2 my-1' id="batch1" name='year' />
                <label htmlFor="batch1" className='cursor-pointer'>2020</label><br />
                </div>

                {/* Batch 2 */}
                <div className='flex items-center'>
                <input type="radio" className='mx-2 my-1' id="batch2" name='year' />
                <label htmlFor="batch2" className='cursor-pointer'>2021</label><br />
                </div>

                {/* Batch 3 */}
                <div className='flex items-center'>
                <input type="radio" className='mx-2 my-1' id="batch3" name='year' />
                <label htmlFor="batch3" className='cursor-pointer'>2022</label><br />
                </div>

                {/* Batch 4 */}
                <div className='flex items-center'>
                <input type="radio" className='mx-2 my-1' id="batch4" name='year' />
                <label htmlFor="batch4" className='cursor-pointer'>2023</label>
                </div>
        </div>
    )
}

export default Batchinput