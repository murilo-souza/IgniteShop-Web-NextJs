import { Container, ValueContainer } from '../styles/components/sidebar'
import { CartItem } from './CartItem'

export function Sidebar() {
  return (
    <Container>
      <main>
        <header>
          <h1>Sacola de compras</h1>
        </header>
        <CartItem />
        <CartItem />
        <ValueContainer></ValueContainer>
      </main>
    </Container>
  )
}
