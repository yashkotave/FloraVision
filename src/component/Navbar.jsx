import { HamburgerIcon, SearchIcon, Share } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-12 flex justify-between p-4 text-white'>
            <div>FloraVision</div>
            <div className='flex gap-8'>
                <h1>Home</h1>
                <h1>Planis type</h1>
                <h1>More</h1>
                <h1>Contact</h1>
            </div>
            <div className='flex gap-8'>
                {/* iconss */}
                <SearchIcon />
                <Share/>
                <HamburgerIcon />
            </div>
        </div>
  )
}

export default Navbar