import React, { Component } from 'react'
import Inputbar from './Inputbar'
import Batchinput from './Batchinput'
import Button from './Button'
import Transaction from './Transaction'
import Heading from './Heading'
import EventName from './EventName'


const Form = () => {
    return (
        <>
            <div className='px-2 md:p-0'>
                <div className='max-w-[512px] md:w-[512px] mx-auto my-6 bg-white rounded-xl'>

                    {/* Edit The Event Name Here  */}
                    <EventName name={"Event Name"} />

                    <div className='px-4 py-6'>

                        {/* Form Heading */}
                        <Heading />

                        <div className='text-black font-montserrat'>

                            {/* Name */}
                            <Inputbar placeholder={"Enter Your Name"} title={"Full Name"} />

                            {/* Registration Number */}
                            <Inputbar placeholder={"Enter Your Registration Number"} title={"Registration Number"} onChange={""} />

                            {/* Phone Number */}
                            <Inputbar placeholder={"Enter Your Phone Number"} title={"Phone Number"} onChange={""} />

                            {/* Email */}
                            <Inputbar placeholder={"Enter Your College Email"} title={"College Email ID"} onChange={""} />

                            {/* Batch Selection */}
                            <Batchinput title={"Year"} />

                            {/* Set Amount Here */}
                            <Transaction amount={"10000/-"} />
                        </div>
                        <div>

                            {/* Submit Button */}
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form