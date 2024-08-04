"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(() => {return import ("react-animated-numbers")}, {ssr: false})

const achievementsList = [
    {
metric: "Projects",
value: "10",
postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100",
    },
    {
        metric: "Awards",
        value: "7",
    },
    {
        metric: "Years",
        value: "1",
    },
]
const Achievement = () => {
  return (
      <div className='py-8 px-4 sm:py-16 sm:px-8 lg:px-16'>
          <div className='border-slate-600 border rounded-md py-8 px-16 flex flex-row items-center justify-between space-y-8 md:flex-row md:space-y-0'>
        {achievementsList.map((achievement, index) => {
        return (
            <div key={index} className='flex flex-col items-center justify-center mx-4'>
                <h2 className='text-black text-4xl font-bold flex flex-row'>
                    {achievement.prefix}
                    <AnimatedNumbers includeComma animateToNumber={parseInt(achievement.value)}
                        locale='en-US' className='text-black text-3xl sm:text-4xl font-bold' configs={(_, index) => {
                             return {
                                mass: 1,
                                friction: 100,
                                tensions: 140 + (index + 1),
                            };
                        }}
                    />
                    {achievement.postfix}
                </h2>
                <p className='text-black text-base sm:text-lg'>{achievement.metric}</p>
            </div>
        )
      })}
        </div>

    </div>

  )
}

export default Achievement
