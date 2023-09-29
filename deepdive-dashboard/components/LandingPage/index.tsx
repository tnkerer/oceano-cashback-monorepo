import Image from 'next/image'
import NavbarLandingPage from './components/NavbarLandingPage'

import styles from './styles.module.scss'

import business1 from '@/public/assets/business/business1.svg'
import business2 from '@/public/assets/business/business2.svg'
import business3 from '@/public/assets/business/business3.svg'
import business4 from '@/public/assets/business/business4.svg'
import business5 from '@/public/assets/business/business5.svg'
import rectangle from '@/public/assets/backgrounds/rectangle.svg'
import blankphoto from '@/public/assets/images/blankphoto.svg'

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

        <div className={styles.secondSection}>
          <div className={styles.leftSide}>
            <div className={styles.textContainer}>
              <div className={styles.title}>
                Solução do problemas, enfatizando a estrutura do produto
              </div>

              <div className={styles.text}>
                Lorem ipsum dolor sit amet. Et quas magni ut tempora architecto ut perspiciatis sint et saepe obcaecati. Non quam error in molestias dignissimos ut vero praesentium sit iusto recusandae ab voluptates impedit ex iusto repellendus <br /> <br /> Lorem ipsum dolor sit amet. Et quas magni ut tempora architecto ut perspiciatis sint et saepe obcaecati. Non quam error in molestias dignissimos ut vero praesentium sit iusto recusandae ab voluptates impedit ex iusto repellendus <br /> <br />
              </div>

              <div className={styles.text}>
                Lorem ipsum dolor sit amet. Et quas magni ut tempora architecto ut perspiciatis sint et saepe obcaecati. Non quam error in molestias dignissimos ut vero praesentium sit iusto recusandae ab voluptates impedit ex iusto repellendus. Lorem ipsum dolor sit amet. Et quas magni ut tempora architecto ut perspiciatis sint et saepe obcaecati. Non quam error in molestias dignissimos ut vero praesentium sit iusto recusandae ab voluptates impedit ex iusto repellendus.
              </div>
            </div>
          </div>

          <div className={styles.rightSide}>
            <Image src={rectangle} alt='Retângulo' />
          </div>
        </div>

        <div className={styles.benefitsContainer}>
    	    <div className={styles.headContainer}>
            <div className={styles.title}>
              Nossos benefícios
            </div>

            <div className={styles.text}>
              Lorem ipsum dolor sit amet. Sed officia accusamus ex sunt rerum eos tempora asperiores sed cupiditate ipsam aut nulla incidunt est quis dolores.
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.iconContainer}>

              </div>

              <div className={styles.title}>
                Título
              </div>

              <div className={styles.boldDescription}>
                Lorem ipsum dolor sit amet. Et quas magni ut tempora architecto ut perspiciatis sint et saepe obcaecati
              </div>

              <div className={styles.lightDescription}>
                Lorem ipsum dolor sit amet. Et quas magni ut tempora architecto ut perspiciatis sint et saepe obcaecati
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconContainer}>

              </div>

              <div className={styles.title}>
                Título
              </div>

              <div className={styles.boldDescription}>
                Lorem ipsum dolor sit amet. Et quas magni ut tempora architecto ut perspiciatis sint et saepe obcaecati
              </div>

              <div className={styles.lightDescription}>
                Lorem ipsum dolor sit amet. Et quas magni ut tempora architecto ut perspiciatis sint et saepe obcaecati
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconContainer}>

              </div>

              <div className={styles.title}>
                Título
              </div>

              <div className={styles.boldDescription}>
                Lorem ipsum dolor sit amet. Et quas magni ut tempora architecto ut perspiciatis sint et saepe obcaecati
              </div>

              <div className={styles.lightDescription}>
                Lorem ipsum dolor sit amet. Et quas magni ut tempora architecto ut perspiciatis sint et saepe obcaecati
              </div>
            </div>
          </div>
        </div>

        <div className={styles.depositionsContainer}>
          <div className={styles.headContainer}>
            <div className={styles.title}>
              Nossos benefícios
            </div>

            <div className={styles.text}>
              Lorem ipsum dolor sit amet. Sed officia accusamus ex sunt rerum eos tempora asperiores sed cupiditate ipsam aut nulla incidunt est quis dolores.
            </div>
          </div>

          <div className={styles.depositions}>
            <div className={styles.deposition}>
              <div className={styles.profile}>
                <div className={styles.left}>
                  <div className={styles.photo}>
                    <Image src={blankphoto} alt='Foto' />
                  </div>
                </div>

                <div className={styles.right}>
                  <div className={styles.name}>
                    Customer Name
                  </div>

                  <div className={styles.social}>
                    @customer
                  </div>
                </div>
              </div>

              <div className={styles.text}>
                Sit amet aliquam id diam maecenas. Faucibus purus in massa tempor. Turpis egestas sed tempus urna et. Enim nunc faucibus a pellentesque sit amet. Egestas congue quisque egestas diam in. Aliquet enim tortor at auctor urna nunc id cursus metus. Morbi leo urna molestie at elementum eu facilisis sed. Purus faucibus ornare suspendisse sed nisi.
              </div>

              <div className={styles.date}>
                23, Abril - 8:13
              </div>
            </div>

            <div className={styles.deposition}>
              <div className={styles.profile}>
                <div className={styles.left}>
                  <div className={styles.photo}>
                    <Image src={blankphoto} alt='Foto' />
                  </div>
                </div>

                <div className={styles.right}>
                  <div className={styles.name}>
                    Customer Name
                  </div>

                  <div className={styles.social}>
                    @customer
                  </div>
                </div>
              </div>

              <div className={styles.text}>
                Sit amet aliquam id diam maecenas. Faucibus purus in massa tempor. Turpis egestas sed tempus urna et. Enim nunc faucibus a pellentesque sit amet. Egestas congue quisque egestas diam in. Aliquet enim tortor at auctor urna nunc id cursus metus. Morbi leo urna molestie at elementum eu facilisis sed. Purus faucibus ornare suspendisse sed nisi.
              </div>

              <div className={styles.date}>
                23, Abril - 8:13
              </div>
            </div>

            <div className={styles.deposition}>
              <div className={styles.profile}>
                <div className={styles.left}>
                  <div className={styles.photo}>
                    <Image src={blankphoto} alt='Foto' />
                  </div>
                </div>

                <div className={styles.right}>
                  <div className={styles.name}>
                    Customer Name
                  </div>

                  <div className={styles.social}>
                    @customer
                  </div>
                </div>
              </div>

              <div className={styles.text}>
                Sit amet aliquam id diam maecenas. Faucibus purus in massa tempor. Turpis egestas sed tempus urna et. Enim nunc faucibus a pellentesque sit amet. Egestas congue quisque egestas diam in. Aliquet enim tortor at auctor urna nunc id cursus metus. Morbi leo urna molestie at elementum eu facilisis sed. Purus faucibus ornare suspendisse sed nisi.
              </div>

              <div className={styles.date}>
                23, Abril - 8:13
              </div>
            </div>

            <div className={styles.deposition}>
              <div className={styles.profile}>
                <div className={styles.left}>
                  <div className={styles.photo}>
                    <Image src={blankphoto} alt='Foto' />
                  </div>
                </div>

                <div className={styles.right}>
                  <div className={styles.name}>
                    Customer Name
                  </div>

                  <div className={styles.social}>
                    @customer
                  </div>
                </div>
              </div>

              <div className={styles.text}>
                Sit amet aliquam id diam maecenas. Faucibus purus in massa tempor. Turpis egestas sed tempus urna et. Enim nunc faucibus a pellentesque sit amet. Egestas congue quisque egestas diam in. Aliquet enim tortor at auctor urna nunc id cursus metus. Morbi leo urna molestie at elementum eu facilisis sed. Purus faucibus ornare suspendisse sed nisi.
              </div>

              <div className={styles.date}>
                23, Abril - 8:13
              </div>
            </div>

            <div className={styles.deposition}>
              <div className={styles.profile}>
                <div className={styles.left}>
                  <div className={styles.photo}>
                    <Image src={blankphoto} alt='Foto' />
                  </div>
                </div>

                <div className={styles.right}>
                  <div className={styles.name}>
                    Customer Name
                  </div>

                  <div className={styles.social}>
                    @customer
                  </div>
                </div>
              </div>

              <div className={styles.text}>
                Sit amet aliquam id diam maecenas. Faucibus purus in massa tempor. Turpis egestas sed tempus urna et. Enim nunc faucibus a pellentesque sit amet. Egestas congue quisque egestas diam in. Aliquet enim tortor at auctor urna nunc id cursus metus. Morbi leo urna molestie at elementum eu facilisis sed. Purus faucibus ornare suspendisse sed nisi.
              </div>

              <div className={styles.date}>
                23, Abril - 8:13
              </div>
            </div>

            <div className={styles.deposition}>
              <div className={styles.profile}>
                <div className={styles.left}>
                  <div className={styles.photo}>
                    <Image src={blankphoto} alt='Foto' />
                  </div>
                </div>

                <div className={styles.right}>
                  <div className={styles.name}>
                    Customer Name
                  </div>

                  <div className={styles.social}>
                    @customer
                  </div>
                </div>
              </div>

              <div className={styles.text}>
                Sit amet aliquam id diam maecenas. Faucibus purus in massa tempor. Turpis egestas sed tempus urna et. Enim nunc faucibus a pellentesque sit amet. Egestas congue quisque egestas diam in. Aliquet enim tortor at auctor urna nunc id cursus metus. Morbi leo urna molestie at elementum eu facilisis sed. Purus faucibus ornare suspendisse sed nisi.
              </div>

              <div className={styles.date}>
                23, Abril - 8:13
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
