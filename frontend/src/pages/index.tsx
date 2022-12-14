import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction, useAccount } from "wagmi"
import nftContractInfo from "@abi/horoscopeNFT.json"
import { toast } from "react-hot-toast"

const Home: NextPage = () => {

  const { address } = useAccount()
  const [selectedSign, setSelectedSign] = useState('Aries');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSign(event.target.value);
  };

  const { config } = usePrepareContractWrite({
    address: nftContractInfo.address,
    abi: nftContractInfo.abi,
    functionName: "mintNFT",
    args: [address, selectedSign],
  })

  const { write: mintNFT, data: nftData } = useContractWrite({
    ...config,
    onError: () => {
      toast.error('Error minting NFT', {
        id: 'minting',
      })
    },
    onSuccess: () => {
      toast.loading('Minting NFT...', {
        id: 'minting',
      })
    }
  })

  useWaitForTransaction({
    hash: nftData?.hash,
    onError() {
      toast.error('Error minting NFT', {
        id: 'minting',
      })
    },
    onSuccess() {
      toast.success('NFT minted!', {
        id: 'minting',
      })
    }
  })


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>HoroscopeNFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col space-y-4 items-center mt-12 text-center">
        <img src='/pngegg.png' alt='logo' className='h-36 w-36' />
        <p className='font-logo text-2xl'>Pick your zodiac sign</p>
        <select className='p-2 w-96 outline-none rounded-md shadow-md text-center'
          value={selectedSign} onChange={(e) => handleChange(e)}>
          <option value="Aries">&#x2648; Aries</option>
          <option value="Taurus">&#x2649; Taurus</option>
          <option value="Gemini">&#x264A; Gemini</option>
          <option value="Cancer">&#x264B; Cancer</option>
          <option value="Leo">&#x264C; Leo</option>
          <option value="Virgo">&#x264D; Virgo</option>
          <option value="Libra">&#x264E; Libra</option>
          <option value="Scorpio">&#x264F; Scorpio</option>
          <option value="Sagittarius">&#x2650; Sagittarius</option>
          <option value="Capricorn">&#x2651; Capricorn</option>
          <option value="Aquarius">&#x2652; Aquarius</option>
          <option value="Pisces">&#x2653; Pisces</option>
        </select>
        <div className='h-96 w-96 bg-black flex flex-col shadow-md justify-center'>
          <p className='text-white text-3xl font-serif'>{selectedSign}</p>
        </div>
        <button className='text-xl w-96 bg-purple-500 hover:bg-purple-600 transition text-white p-2 rounded-md shadow-md'
          onClick={() => mintNFT?.()}>
          Mint
        </button>
      </main>
    </div>
  )
}

export default Home
