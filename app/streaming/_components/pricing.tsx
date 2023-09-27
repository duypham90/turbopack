import type { Product } from '#/app/api/products/product'
import { Ping } from '#/ui/ping'
import { Suspense } from 'react'
import { AddToCart } from './add-to-cart'

function LoadingDots() {
  return (
    <div className="text-sm">
      <span className="space-x-0.5">
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full">
          &bull;
        </span>
        <span className="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full">
          &bull;
        </span>
      </span>
    </div>
  )
}

async function UserSpecificDetails({ productId }: { productId: string }) {
  const data = await fetch(
    `https://app-dir.vercel.app/api/products?id=${productId}&delay=5000&filter=price,usedPrice,leadTime,stock`,
    {
      // We intentionally disable Next.js Cache to better demo
      // streaming
      cache: 'no-store',
    }
  )

  if (data.status === 404) {

    return <h1>not found</h1>
  }

  const product = (await data.json()) as Product
  return (
    <>
      {product.price}
    </>
  )
}

export function Pricing({
  product,
  cartCount,
}: {
  product: Product
  cartCount: string
}) {

  return (
    <div className="space-y-4 rounded-lg bg-gray-900 p-3">
      {product.price.amount}
      <div className="relative">
        <div className="absolute top-1 -left-4">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<LoadingDots />}>
        <UserSpecificDetails productId={product.id} />
      </Suspense>

      <AddToCart initialCartCount={Number(cartCount)} />
    </div>
  )
}
