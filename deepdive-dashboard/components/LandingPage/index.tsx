import Image from 'next/image'
import NavbarLandingPage from './components/NavbarLandingPage'

import styles from './styles.module.scss'

import business1 from '@/public/assets/business/business1.svg'
import business2 from '@/public/assets/business/business2.svg'
import business3 from '@/public/assets/business/business3.svg'
import business4 from '@/public/assets/business/business4.svg'
import business5 from '@/public/assets/business/business5.svg'


const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <NavbarLandingPage />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.heroContainer}>
          <div />

          <div className={styles.centerContainer}>
            <div className={styles.title}>
              Otimize sua maneira de fazer compras com a <span>deepdive</span>
            </div>

            <div className={styles.description}>
              Lorem ipsum dolor sit amet. Sed officia accusamus ex sunt rerum eos tempora asperiores sed cupiditate ipsam aut nulla incidunt est quis dolores.
            </div>

            <div className={styles.button}>
              Comece agora mesmo!
            </div>
          </div>

          <div className={styles.businessContainer}>
            <div className={styles.text}>
              Empresas que confiam em nós
            </div>

            <div className={styles.businessRow}>
              <div className={styles.business}>
                <Image src={business1} alt='Empresa' />
              </div>

              <div className={styles.business}>
                <Image src={business2} alt='Empresa' />
              </div>

              <div className={styles.business}>
                <Image src={business3} alt='Empresa' />
              </div>

              <div className={styles.business}>
                <Image src={business4} alt='Empresa' />
              </div>

              <div className={styles.business}>
                <Image src={business5} alt='Empresa' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
