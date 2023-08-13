import Image from 'next/image'

import Navbar from '../Navbar'
import PointsHistory from './components/PointsHistory'
import BuyHistory from './components/BuyHistory'

import styles from './styles.module.scss'

import photo from '@/public/assets/images/profilephoto.svg'

import { AccountContext } from '@/contexts/accountContext'
import { useContext, useEffect } from 'react'
import Footer from '../Footer'

const PointsPage = () => {

  const { name, balance, wallet } = useContext(AccountContext)

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.profileContainer}>
          <div className={styles.photo}>
            <Image width={120} src={photo} alt='Profile photo' />
          </div>

          <div className={styles.name}>
            {name}
          </div>

          <div className={styles.points}>
            Você possui: <span>{balance} SAL</span>
          </div>
        </div>

        <div className={styles.historyContainer}>
          <div className={styles.pointsHistory}>
            <div className={styles.label}>
              Histórico de pontos
            </div>

            <div className={styles.history}>
              <PointsHistory />
            </div>
          </div>

          <div className={styles.pointsHistory}>
            <div className={styles.label}>
              Histórico de compras
            </div>

            <div className={styles.history}>
              <BuyHistory />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default PointsPage