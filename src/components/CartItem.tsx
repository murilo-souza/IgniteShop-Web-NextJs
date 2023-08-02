import { CartItemContainer } from '../styles/components/cartItem'
import Image from 'next/image'

interface CartItemProps {
  name: string
  price: string
  imageUrl: string
  onClick: () => void
}

export function CartItem({ name, price, imageUrl, onClick }: CartItemProps) {
  return (
    <CartItemContainer>
      <div>
        <Image src={imageUrl} alt="shirt" width={100} height={93} />
      </div>
      <section>
        <h2>{name}</h2>
        <strong>R$ {price}</strong>
        <button onClick={onClick}>Remover</button>
      </section>
    </CartItemContainer>
  )
}
