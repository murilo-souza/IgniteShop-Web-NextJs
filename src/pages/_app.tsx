import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import { Sidebar } from '../components/Sidebar'
import { CartContextProvider } from '../context/CartContext'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>

          <Sidebar />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
