import { ComponentProps } from 'react'
import {
  ProductSkeletonContainer,
  SkeletonItem,
} from '../styles/components/productsSkeleton'

type ProductSkeletonProps = ComponentProps<typeof ProductSkeletonContainer>

export function ProductsSkeleton({ ...props }: ProductSkeletonProps) {
  return (
    <ProductSkeletonContainer {...props}>
      <SkeletonItem />
      <div>
        <SkeletonItem />
        <SkeletonItem />
      </div>
    </ProductSkeletonContainer>
  )
}
