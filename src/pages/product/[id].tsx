import {
  ImageContainer,
  ProductContainer,
  ProductDetail,
} from '../../styles/pages/products'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'

import Head from 'next/head'
import { useCart } from '../../hooks/useCart'
import { IProduct } from '../../context/CartContext'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { checkIfItemAlreadyExists, addToCart } = useCart()

  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id)

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetail>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={checkIfItemAlreadyExists(product.id)}
            onClick={() => addToCart(product)}
          >
            {itemAlreadyInCart
              ? 'Item já está no carrinho'
              : 'Adicionar ao carrinho'}
          </button>
        </ProductDetail>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_N2HlVNxbZ0GaBt' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        numberPrice: price.unit_amount / 100,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
