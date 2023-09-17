"use client"
import React from 'react'

export default function Time() {
    const [hidden, setHidden] = React.useState('null')
    React.useEffect(() => {
        setTimeout(() => {
            setHidden('hidden')
        }, 2000);
    }, [])


  return (
    <div className={`h-screen w-full absolute top-0 z-[200] bg-white ${hidden}` }>
    <div className="h-screen relative  w-full flex justify-center items-center">
    <div id='ok' className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    <p className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>Chargement ...</p>
    </div>


    </div>
  )
}
