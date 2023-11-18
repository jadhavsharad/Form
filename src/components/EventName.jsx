import React from 'react'

const EventName = ({name}) => {
    return (
        <div>
            <div className='h-44 md:h-[128px] w-full bg-black flex justify-center items-center rounded-t-xl'>
                <h1 className='uppercase text-white font-semibold font-audiowide text-4xl md:text-5xl'>{name}</h1>
            </div>
        </div>
    )
}

export default EventName