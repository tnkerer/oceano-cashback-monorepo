import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { AccountProvider } from '@/contexts/accountContext'
import { ProductsProvider } from '@/contexts/productContext'
import { CartProvider } from '@/contexts/cartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AccountProvider>
        <ProductsProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </ProductsProvider>
      </AccountProvider>
    </>
  )
}
