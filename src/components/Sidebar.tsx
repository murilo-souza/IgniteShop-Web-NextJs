import { Handbag, X } from 'phosphor-react'
import {
  Button,
  ButtonNav,
  CartClose,
  CartContent,
  Value,
  ValueContainer,
} from '../styles/components/sidebar'
import { CartItem } from './CartItem'
import * as Dialog from '@radix-ui/react-dialog'
import { useCart } from '../hooks/useCart'
import { useState } from 'react'
import axios from 'axios'

export function Sidebar() {
  const { cartItems, removeCartItem, cartTotal } = useCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const quantity = cartItems.length
  const formattedPrice = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal)

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonNav>
          <Handbag size={24} weight="bold" />
        </ButtonNav>
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>
          <h2>Sacola de compras</h2>
          <main>
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                imageUrl={cartItem.imageUrl}
                name={cartItem.name}
                price={cartItem.price}
                onClick={() => removeCartItem(cartItem.id)}
              />
            ))}
          </main>

          <ValueContainer>
            <Value>
              <span>Quantidade</span>
              <p>{quantity === 1 ? `${quantity} item` : `${quantity} itens`}</p>
            </Value>
            <Value>
              <h5>Valor total</h5>
              <h3>{formattedPrice}</h3>
            </Value>
            <Button
              onClick={handleCheckout}
              disabled={isCreatingCheckoutSession || quantity <= 0}
            >
              Finalizar compra
            </Button>
          </ValueContainer>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
