import ProductElement from './ProductElement'

function Product() {
  return (
    <div className='grid grid-cols-3 grid-flow-row gap-4 px-16'>
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
    </div>
  )
}

export default Product