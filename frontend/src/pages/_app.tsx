import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@components/Header'
import { WagmiConfig, createClient } from 'wagmi'
import { polygonMumbai } from "wagmi/chains"
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {

  const infuraId = process.env.NEXT_PUBLIC_INFURA_API_KEY

  const client = createClient(
    getDefaultClient({
      appName: "NFT Horoscope",
      infuraId,
      chains: [polygonMumbai]
    }),
  );

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="soft">
        <Toaster />
        <div className="bg-slate-200 min-h-screen min-w-fit">
          <Header />
          <Component {...pageProps} />
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
