import React from 'react'
import { FaUser } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import checkIconMobile from '../../assets/mobile/checkpoint.svg'
import { useSpring, animated } from 'react-spring'

const Content: React.FC = () => {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } })
  const card = useSpring({ cards: 12045, from: { cards: 0 } })
  return (
    <section className='md:flex md:flex-row'>
      <div className='ml-[70px] mr-[54px] text-bold flex flex-col items-center shadow-md bg-gradient-to-b from-white/40 to to-transparent rounded-3xl md:w-[20%]'>
        <div className='mt-16 gap-8 flex items-start'>
          <FaUser size={'24px'} className='mt-[12px]' />
          <div className='text-26'>
            <animated.div>{customer.customers.to((val) => Math.floor(val))}</animated.div>
            <p className='text-13 font-semibold mb-[36px] md:text-16'>Customers</p>
          </div>
        </div>
        <div className='flex items-start mb-16 gap-8'>
          <BsFillCreditCardFill size={'22px'} className='mt-[12px]' />
          <div className='text-26'>
            <animated.div>{card.cards.to((val) => Math.floor(val))}</animated.div>
            <div className='text-13 font-semibold md:text-16'>Cards Issued</div>
          </div>
        </div>
      </div>
      <div className='text-13 flex flex-col md:justify-center w-full mt-[90px] font-semibold md:w-[30%] md:text-16 md:ml-[20%] md:mt-0'>
        <div className='check-content '>
          <img src={checkIconMobile} alt=''></img>
          <p>Crad reports sent to your phone every week</p>
        </div>
        <div className='check-content'>
          <img src={checkIconMobile} alt=''></img>
          <p>No externals fees</p>
        </div>
        <div className='check-content'>
          <img src={checkIconMobile} alt=''></img>
          <p>Set spending limit ans restrictions</p>
        </div>
      </div>
    </section>
  )
}

export default Content
