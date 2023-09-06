import React from 'react'
import RatingStars from '../common/ratingStars'
import { CheckCircleIcon} from "@heroicons/react/24/outline";



const TestimonialCard = () => {
  return (
    <div className='w-full px-8 py-7 border rounded-3xl'>
      <div className='flex flex-col gap-3'>
        <RatingStars/>
        <div className='flex flex-row justify-start items-center mt-2'>
        <span className=' font-satoshi text-xl font-bold'>Sarah M.</span>
        <CheckCircleIcon className='h-6 w-6' fill='#01AB31' stroke='#ffffff'/>
        </div>
        <p className=' font-satoshi text-base text-black/60 '>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
      </div>
    </div>
  )
}

export default TestimonialCard