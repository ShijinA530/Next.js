'use client'
import { useRouter } from "next/navigation"

const OrderProduct = () => {
    const router = useRouter()
    const handleClick = () => {
        console.log('placing your order')
        router.push('/')
    }
  return (
    <div>
          <h1>Order product</h1>
          <button onClick={handleClick}>Place order</button>
    </div>
  )
}

export default OrderProduct
