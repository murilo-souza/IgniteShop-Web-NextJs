import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Button, Container, Header } from "../styles/pages/app"
import Image from "next/image"
import { Handbag } from "phosphor-react"
import { theme } from "../styles"


globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <Button>
          <Handbag size={24} weight="bold"/>
        </Button>
      </Header>

      <Component {...pageProps} />
    </Container>
    )
}

