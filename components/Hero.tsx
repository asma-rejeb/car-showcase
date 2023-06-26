"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {}
    return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='hero__title'>
                The best way to learn React.js, NextJS and TailwindCSS!
            </h1>
            <p className='hero__subtitle'>
                Streamline ur car rental experience with our effortless booking process
            </p>
            <CustomButton
             title ="explore cars"
             containerStyles="bg-primary-blue text-white rounded-full mt-10"
             handleClick = {handleScroll}
            />
        </div>

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className='object-contain'/>
            </div>
                <div className="hero__image-overlay"/>
            
        </div>
    </div>
  )
}

export default Hero