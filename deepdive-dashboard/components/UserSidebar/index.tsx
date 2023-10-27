import Image from 'next/image'

import styles from './styles.module.scss'

import logo from '@/public/assets/brand/whitelogo.svg'
import dashboard from '@/public/assets/icons/Marketplace/dashboard.svg'
import market from '@/public/assets/icons/Marketplace/market.svg'
import arrow from '@/public/assets/icons/Marketplace/arrow.svg'
import { useState } from 'react'

const UserSidebar = () => {
  const [marketplace, setMarketplace] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image onClick={() => window.open('/discounts', '_self')} className={styles.img} src={logo} alt='Logo' width={150} />
      </div>

      <div className={styles.navigationContainer}>
        <div className={styles.option} onClick={() =>  window.open('/dashboard', '_self')}>
          <div className={styles.notChecked}>
            <div className={styles.icon}>
              <Image src={dashboard} alt='Icon' />
            </div>

            <div className={styles.text}>
              Dashboard
            </div>
          </div>
        </div>

        <div className={styles.option} onClick={() => {setMarketplace(!marketplace); window.open('/discounts', '_self')}}>
          <div className={styles.notChecked}>
            <div className={styles.icon}>
              <Image src={market} alt='Icon' />
            </div>

            <div className={styles.text}>
              Marketplace
            </div>

            <div className={styles.arrow}>
              <Image src={arrow} alt='Arrow' />
            </div>
          </div>

          {marketplace &&
            <div className={styles.checked}>
              <div className={styles.typeContainer}>
                <div className={styles.type}>
                  Tipo de produto
                </div>

                <div className={styles.type}>
                  Tipo de produto
                </div>

                <div className={styles.type}>
                  Tipo de produto
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default UserSidebar