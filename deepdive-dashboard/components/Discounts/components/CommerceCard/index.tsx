import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

import star from '@/public/assets/icons/star.svg'
import cart from '@/public/assets/icons/cart.svg'
import BuyPopup from '../BuyPopup'

interface CardData {
  id: string,
  image: string,
  productName: string,
  value: number,
  discountValue: number,
  description: string,
  starsValue: number,
  componentType: string,
  minimumPoints: number
}

const CommerceCard = ({id, image, productName, value, discountValue, description, starsValue, componentType, minimumPoints}: CardData) => {
  const [buyPopup, setBuyPopup] = useState(false)

  return (
    <>
      {buyPopup &&
        <BuyPopup
        id={id}
        image={image}
        productName={productName}
        value={value} discountValue={discountValue}
        description={description} starsValue={starsValue}
        closeFunction={(closePopup) => setBuyPopup(closePopup)}
        componentType={componentType}
        minimumPoints={minimumPoints}
        />
      }

      <div className={styles.container}>
        <div className={styles.productImage}>
          <Image src={image} alt='Foto do produto' layout='responsive' width={259} height={233} />
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.productName}>
            {productName}
          </div>

          <div className={styles.productInfo}>
            <div className={styles.points}>
              <div className={styles.value}>
                <span>{componentType == 'coupon' ? '$' : null}{value} {componentType == 'coupon' ? '-' : null} </span> {componentType == 'normal' ? 'SAL' : null}
              </div>

              {discountValue == 0 ? null :
                <>
                  {componentType == 'normal' ?
                    <div className={styles.discountValue}>
                      {discountValue}
                    </div>
                  :
                    <div className={styles.couponValue}>
                      <span>{discountValue}</span> SAL
                    </div>
                  }
                </>
              }
            </div>

            <div className={styles.description}>
              {description.slice(0, 80) + '...'}
            </div>

            <div className={styles.starsAndBuy}>
              <div className={styles.stars}>
                <div className={styles.image}>
                  <Image src={star} alt='Estrelas' />
                </div>

                <div className={styles.starsValue}>
                  {starsValue}
                </div>
              </div>

              <div className={styles.buy} onClick={() => setBuyPopup(true)}>
                <Image src={cart} alt='Comprar' style={{marginLeft: '-2px'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommerceCard