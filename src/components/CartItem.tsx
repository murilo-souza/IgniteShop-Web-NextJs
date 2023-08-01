import { CartItemContainer } from '../styles/components/cartItem'
import Shirt from '../assets/shirt-1.png'
import Image from 'next/image'

export function CartItem() {
  return (
    <CartItemContainer>
      <div>
        <Image src={Shirt} alt="shirt" width={100} height={90} />
      </div>
      <section>
        <h2>Camiseta Beyond the Limits</h2>
        <strong>R$ 62,90</strong>
        <span>Remover</span>
      </section>
    </CartItemContainer>
  )
}
