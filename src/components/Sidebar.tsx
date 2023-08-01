import { Container } from '../styles/components/sidebar'
import { CartItem } from './CartItem'

export function Sidebar() {
  return (
    <Container>
      <div>
        <header>
          <h1>Sacola de compras</h1>
        </header>
        <CartItem />
      </div>
    </Container>
  )
}
