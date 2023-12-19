import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

import logo from '@/public/assets/brand/whitelogo.svg'
import dashboard from '@/public/assets/icons/Marketplace/dashboard.svg'
import market from '@/public/assets/icons/Marketplace/market.svg'
import arrow from '@/public/assets/icons/Marketplace/arrow.svg'
import logout from '@/public/assets/icons/logoutside.svg'
import adminicon from '@/public/assets/icons/adminicon.svg'
import dashboardicon from '@/public/assets/icons/dashboardicon.svg'

const UserSidebar = () => {
  const [marketplaceState, setMarketplaceState] = useState(false)
  const [dashboardState, setDashboardState] = useState(false)
  const [adminState, setAdminState] = useState(false)
  const [webPath, setWebPath] = useState('')

  useEffect(() => {
    setMarketplaceState(window.location.pathname == '/discounts' ? true : false)
    setDashboardState(window.location.pathname == '/points' ? true : window.location.pathname == '/profile' ? true : false)
    setAdminState(window.location.pathname == '/salespanel' ? true : window.location.pathname == '/usermanagement' ? true : window.location.pathname == '/productmanagement' ? true : false)
    setWebPath(window.location.pathname)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image onClick={() => window.open('/discounts', '_self')} className={styles.img} src={logo} alt='Logo' width={150} />
      </div>

      <div className={styles.separatorContainer}>
        <div className={styles.navigationContainer}>
          <div className={styles.option} onClick={() => window.location.pathname == '/discounts' ? null : window.open('/discounts', '_self')}>
            <div className={styles.notChecked}>
              <div className={styles.icon}>
                <Image src={market} alt='Icon' />
              </div>

              <div className={styles.text}>
                Produtos
              </div>

              <div className={styles.arrow}>
                <Image src={arrow} alt='Arrow' />
              </div>
            </div>

            {marketplaceState &&
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

          <div className={styles.option} onClick={() => window.location.pathname == '/points' ? null : window.location.pathname == '/profile' ? null : window.open('/points', '_self')}>
            <div className={styles.notChecked}>
              <div className={styles.icon}>
                <Image src={dashboardicon} alt='Icon' />
              </div>

              <div className={styles.text}>
                Dashboard
              </div>

              <div className={styles.arrow}>
                <Image src={arrow} alt='Arrow' />
              </div>
            </div>

            {dashboardState &&
              <div className={styles.checked}>
                <div className={styles.typeContainer}>
                  <div className={styles.type} onClick={() => window.location.pathname == '/profile' ? null : window.open('/profile', '_self')}>
                  {webPath == '/profile' ? <span>Editar Perfil</span> : 'Editar Perfil' } 
                  </div>
                  
                  <div className={styles.type} onClick={() => window.location.pathname == '/points' ? null : window.open('/points', '_self')}>
                  {webPath == '/points' ? <span>Pontos</span> : 'Pontos' } 
                  </div>
                </div>
              </div>
            }
          </div>

          <div className={styles.option} onClick={() => window.location.pathname == '/salespanel' ? null : window.location.pathname == '/usermanagement' ? null : window.location.pathname == '/productmanagement' ? null : window.open('/salespanel', '_self')}>
            <div className={styles.notChecked}>
              <div className={styles.icon}>
                <Image src={adminicon} alt='Icon' />
              </div>

              <div className={styles.text}>
                Administração
              </div>

              <div className={styles.arrow}>
                <Image src={arrow} alt='Arrow' />
              </div>
            </div>

            {adminState &&
              <div className={styles.checked}>
                <div className={styles.typeContainer}>
                  <div className={styles.type} onClick={() => window.location.pathname == '/salespanel' ? null : window.open('/salespanel', '_self')}>
                    Painel de Venda
                  </div>

                  <div className={styles.type} onClick={() => window.location.pathname == '/usermanagement' ? null : window.open('/usermanagement', '_self')}>
                    Gestão de Usuário
                  </div>

                  <div className={styles.type} onClick={() => window.location.pathname == '/productmanagement' ? null : window.open('/productmanagement', '_self')}>
                    Gestão de Produtos
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <div className={styles.logoutContainer}>
          <div className={styles.option}  onClick={() => window.open('/', '_self')}>
            <div className={styles.image}>
              <Image src={logout} alt='Logout' />
            </div>

            <div className={styles.text}>
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSidebar