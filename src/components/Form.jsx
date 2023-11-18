import React, { Component } from 'react'
import Inputbar from './Inputbar'
import Batchinput from './Batchinput'
import Button from './Button'
import Transcation from './Transcation'
import Heading from './Heading'
import EventName from './EventName'

const Form = () => {
    return (
       <div>
         <div className='max-w-[512px] md:w-[512px] my-6 bg-white rounded-xl'>
            <EventName name={"Event Name"} />
            <div className='px-4 py-6'>
                <Heading />
                <div className='text-black font-montserrat'>
                    <Inputbar placeholder={"Enter Your Name"} title={"Full Name"} />
                    <Inputbar placeholder={"Enter Your Registration Number"} title={"Registration Number"} onChange={""} />
                    <Inputbar placeholder={"Enter Your Phone Number"} title={"Phone Number"} onChange={""} />
                    <Inputbar placeholder={"Enter Your College Email"} title={"College Email ID"} onChange={""} />
                    <Batchinput title={"Year"} />
                    <Transcation amount={"10000/-"}/>
                </div>
                <div>
                    <Button />
                </div>
            </div>
        </div>
       </div>
    )
}

export default Form