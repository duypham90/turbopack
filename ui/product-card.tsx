import { Product } from '#/app/api/products/product'
import { ProductBestSeller } from '#/ui/product-best-seller'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = ({
  product,
  href,
}: {
  product: Product
  href: string
}) => {

  return (
    <Link href={href} className="group block">
      <div className="space-y-2">
        <div className="relative">
          {product.isBestSeller ? (
            <div className="absolute top-2 left-2 z-10 flex">
              <ProductBestSeller />
            </div>
          ) : null}
          <Image
            src={`/${product.image}`}
            width={400}
            height={400}
            className="rounded-xl grayscale group-hover:opacity-80"
            alt={product.name}
            placeholder="blur"
            blurDataURL={product.imageBlur}
          />
        </div>

        <div className="truncate text-sm font-medium text-white group-hover:text-vercel-cyan">
          {product.name}
        </div>

        {/* {product.rating ? <ProductRating rating={product.rating} /> : null} */}

        {product.discount?.percent}

        {/* <ProductSplitPayments price={price} /> */}

        {/* {product.usedPrice ? (
          <ProductUsedPrice usedPrice={product.usedPrice} />
        ) : null}

        <ProductEstimatedArrival leadTime={product.leadTime} />

        {product.stock <= 1 ? (
          <ProductLowStockWarning stock={product.stock} />
        ) : null} */}
      </div>
    </Link>
  )
}
