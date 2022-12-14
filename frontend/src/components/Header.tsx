import { ConnectKitButton } from 'connectkit'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='h-20 w-full justify-between bg-purple-500 flex items-center px-4'>
            <div className='flex items-center space-x-2'>
                <p className='font-logo text-3xl text-white'>
                    Horoscope NFT
                </p>
                <img src='/logo.png' alt='logo' className='h-12 w-12' />
            </div>
            <div className=''>
                <ConnectKitButton />
            </div>
        </header>
    )
}

export default Header