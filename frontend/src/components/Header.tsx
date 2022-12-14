import { ConnectKitButton } from 'connectkit'

const Header = () => {
    return (
        <header className='h-20 w-full justify-between bg-purple-500 flex items-center px-4'>
            <div className='flex space-x-2 items-center'>
                <p className='font-logo text-3xl text-white'>
                    Horoscope NFT
                </p>
                <img src='/logo.png' alt='logo' className='h-12 w-12' />
            </div>
            <ConnectKitButton />
        </header>
    )
}

export default Header