import Image from 'next/image'
import { useEffect, useState, useContext, KeyboardEvent } from 'react'

import styles from './styles.module.scss'

import logo from '@/public/assets/brand/whitelogo.svg'
import magnifier from '@/public/assets/icons/magnifier.svg'
import cart from '@/public/assets/icons/cart.svg'
import profilephoto from '@/public/assets/images/profilephoto.svg'
import profileicon from '@/public/assets/icons/profile.svg'
import pointsicon from '@/public/assets/icons/points.svg'
import logouticon from '@/public/assets/icons/logout.svg'
import Cart from '../Cart'

import { AccountContext } from '@/contexts/accountContext'
import { ProductsContext } from '@/contexts/productContext'
import { CartContext } from '@/contexts/cartContext'

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [hasNotification, setHasNotification] = useState(true)
  const [productsInCart, setProductsInCart] = useState(0)

  const { name, balance } = useContext(AccountContext)
  const { query, all } = useContext(ProductsContext)
  const { myProducts } = useContext(CartContext)

  const handleEnterPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && e.shiftKey == false) {
      e.preventDefault()
      if (searchText === '') {
        all()
        return
      }
      query(searchText)
    }
  }

  const handleSearch = () => {
    if (searchText === '') {
      all()
      return
    }
    query(searchText)
  }

  useEffect(() => {
    const currentUrl = window.location.href

    if (currentUrl.includes('discounts')) {
      setSelectedOption('discounts')
    } else if (currentUrl.includes('about')) {
      setSelectedOption('about')
    }
  }, [])

  useEffect(() => {
    if (myProducts?.length > 0) {
      setHasNotification(true)
      setProductsInCart(myProducts.length)
    } else {
      setHasNotification(false)
      setProductsInCart(0)
    }
  }, [myProducts])

  return (
    <>
      {cartOpen &&
        <Cart onStateChange={(newState) => setCartOpen(newState)} />
      }

      <div className={styles.container}>
        <div className={styles.logo} onClick={() => { setSelectedOption('discounts'); window.open('/discounts', '_self') }}>
          <Image src={logo} alt='Logo' />
        </div>

        <div className={styles.optionsContainer}>
          <div
            className={
              selectedOption == 'discounts'
                ? styles.selectedOption
                : styles.option
            }
            onClick={() => { setSelectedOption('discounts'); window.open('/discounts', '_self') }}
          >
            Descontos
          </div>

          <div
            className={
              selectedOption == 'about' ? styles.selectedOption : styles.option
            }
            // eslint-disable-next-line semi
            onClick={() => { setSelectedOption('about'); window.open('/about', '_self') }}
          >
            Sobre
          </div>
        </div>

        <div className={styles.searchBar}>
          <input type='text'
            placeholder=" Pesquisar"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleEnterPress}
            className={styles.HTMLinput} />

          <div className={styles.image} onClick={handleSearch}>
            <Image src={magnifier} alt='Search' />
          </div>
        </div>

        <div className={styles.userContainer}>
          <div className={styles.cart} onClick={() => { setCartOpen(!cartOpen); setDropdown(false) }}>
            <Image src={cart} alt='Cart' /> 
            {hasNotification ? <span className={styles.cartnotification}>{productsInCart}</span> : <span className={styles.nonotification}></span>}
          </div>

          <div className={styles.profile} onClick={() => setDropdown(!dropdown)}>
            <div className={styles.photo}><Image src={profilephoto} alt='Profile photo' /></div>

            <div className={styles.infoContainer}>
              <div className={styles.name}>{name}</div>

              <div className={styles.points}>SAL: {balance}</div>
            </div>
          </div>

          {dropdown &&
            <div className={styles.dropdownContainer}>
              <div className={styles.option} onClick={() => window.open('/profile', '_self')}>
                <div className={styles.image}>
                  <Image src={profileicon} alt='Profile' />
                </div>

                <div className={styles.text}>
                  Perfil
                </div>
              </div>

              <div className={styles.option} onClick={() => window.open('/points', '_self')}>
                <div className={styles.image}>
                  <Image src={pointsicon} alt='Profile' />
                </div>

                <div className={styles.text}>
                  Pontos
                </div>
              </div>

              <div className={styles.line} />

              <div className={styles.option} onClick={() => window.open('/login', '_self')}>
                <div className={styles.image}>
                  <Image src={logouticon} alt='Profile' />
                </div>

                <div className={styles.text}>
                  Desconectar
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar
