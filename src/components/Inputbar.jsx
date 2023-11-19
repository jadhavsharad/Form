import React from 'react';

const Inputbar = ({ title, placeholder }) => {
    return (

        // Input Component

        <div className='w-full'>
            <div className='my-3'>
                <p className='my-2'>{title}</p>
                <input required placeholder={placeholder} className='w-full hover:border-emerald-500 focus:border-[1.5px] focus:border-blue-500 outline-none duration-150 h-12 bg-white border-[1.5px] px-4 py-1 rounded-md' type="text" />
            </div>
        </div>
    );
};

export default Inputbar;
