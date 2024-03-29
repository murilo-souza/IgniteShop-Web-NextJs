import Image from 'next/image'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { HomeContainer, Product, SliderContainer } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Head from 'next/head'
import { Handbag } from 'phosphor-react'
import { useCart } from '../hooks/useCart'
import { IProduct } from '../context/CartContext'
import { MouseEvent, useEffect, useState } from 'react'
import { ProductsSkeleton } from '../components/ProductsSkeleton'
import useEmblaCarousel from 'embla-carousel-react'

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeOut = setTimeout(() => setIsLoading(false), 2000)

    return () => clearTimeout(timeOut)
  }, [])

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  const { addToCart, checkIfItemAlreadyExists } = useCart()

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct,
  ) {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <div style={{ overflow: 'hidden', width: '100%' }}>
        <HomeContainer>
          <div className="embla" ref={emblaRef}>
            <SliderContainer className="embla__container container">
              {isLoading ? (
                <>
                  <ProductsSkeleton className="embla__slide" />
                  <ProductsSkeleton className="embla__slide" />
                  <ProductsSkeleton className="embla__slide" />
                  <ProductsSkeleton className="embla__slide" />
                </>
              ) : (
                <>
                  {products.map((product) => {
                    return (
                      <Link
                        href={`/product/${product.id}`}
                        key={product.id}
                        prefetch={false}
                      >
                        <Product className="embla__slide">
                          <Image
                            src={product.imageUrl}
                            width={520}
                            height={480}
                            alt=""
                          />
                          <footer>
                            <div>
                              <strong>{product.name}</strong>
                              <span>{product.price}</span>
                            </div>
                            <button
                              onClick={(e) => handleAddToCart(e, product)}
                              disabled={checkIfItemAlreadyExists(product.id)}
                            >
                              <Handbag size={32} weight="bold" />
                            </button>
                          </footer>
                        </Product>
                      </Link>
                    )
                  })}
                </>
              )}
            </SliderContainer>
          </div>
        </HomeContainer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
