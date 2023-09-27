export const ProductSplitPayments = ({ price }: { price: number }) => {

  return (
    <div className="text-sm text-gray-400">
      {price}
      {price}/month for 3 months
    </div>
  )
}
