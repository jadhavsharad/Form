import React from 'react';

const Inputbar = ({ title, placeholder }) => {
    return (
        <div className='w-full'>
            <div className='w-full my-2'>
                <p className=''>{title}</p>
            </div>
            <div className='my-3'>
                <input required placeholder={placeholder} className='w-full hover:border-emerald-500 focus:border-[1.5px] focus:border-blue-500 outline-none duration-150 h-12 bg-white border-[1.5px] px-4 py-1 rounded-md' type="text" />
            </div>
        </div>
    );
};

export default Inputbar;
