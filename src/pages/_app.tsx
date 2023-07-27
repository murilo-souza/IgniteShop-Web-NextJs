import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import Image from "next/image"
import { Handbag } from "phosphor-react"
import { theme } from "../styles"


globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <Handbag size={24} color="#FFFF"/>
      </Header>

      <Component {...pageProps} />
    </Container>
    )
}

