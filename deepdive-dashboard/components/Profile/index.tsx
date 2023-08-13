import Image from 'next/image'
import { useState } from 'react'

import Navbar from '../Navbar'
import TextInput from '../Auth/Reusable/TextInput'

import styles from './styles.module.scss'

import photo from '@/public/assets/images/profilephoto.svg'

import { AccountContext } from '@/contexts/accountContext'

import { updateUserData, changePassword } from '@/services/api'
import Footer from '../Footer'

const ProfilePage = () => {
  const [nameInputData, setNameInputData] = useState('')
  const [emailInputData, setEmailInputData] = useState('')
  // const [passInputData, setPassInputData] = useState('')

  const [actualPassInputData, setActualPassInputData] = useState('')
  const [newPassInputData, setNewPassInputData] = useState('')
  const [againNewPassInputData, setAgainNewPassInputData] = useState('')

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const isStrongPassword = (password: string): boolean => {
    if (password.length < 8) {
      return false
    }

    let hasLowerCase = false
    let hasUpperCase = false
    let hasNumber = false

    for (let i = 0; i < password.length; i++) {
      const char = password[i]

      if (char >= 'a' && char <= 'z') {
        hasLowerCase = true
      } else if (char >= 'A' && char <= 'Z') {
        hasUpperCase = true
      } else if (char >= '0' && char <= '9') {
        hasNumber = true
      }
    }

    return hasLowerCase && hasUpperCase && hasNumber
  }

  const handlePasswordChange = () => {
    if (process.env.API_URL === undefined) {
      alert('Cant Reach API URL')
      return
    }

    if (!isStrongPassword(newPassInputData)) {
      alert('A senha não preenche todos os requisitos')
      return
    }

    if (newPassInputData !== againNewPassInputData) {
      alert('As senhas não são iguais')
      return
    }

    try {
      changePassword(process.env.API_URL, actualPassInputData, newPassInputData)
      .then(
        (response) => {
          if (response.status === 201) {
            alert('Dados atualizados com sucesso!')
            window.open('/profile', '_self')
          }
        })
      .catch(
        (error) => {
          alert(error)
        })
    } catch (error) {
      alert(error)
    }

    
    
  }

  const handleAccountUpdate = () => {
    if (process.env.API_URL === undefined) {
      alert('Cant Reach API URL')
      return
    }

    if (nameInputData === '' && emailInputData === '') {
      alert('Nenhum campo foi preenchido')
      return
    }

    if (!validateEmail(emailInputData) && emailInputData !== '') {
      alert('O email não é um email válido') // Error message should read: This is not a valid email or Email already exists
      return
    }

    try {
      updateUserData(process.env.API_URL, nameInputData, emailInputData)
      .then(
        (response) => {
          if (response.status === 201) {
            alert('Dados atualizados com sucesso!')
            window.open('/profile', '_self')
          }
        })
      .catch(
        (error) => {
          alert(error)
        })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.title}>
            Informações da conta
          </div>

          <div className={styles.description}>
            Edite seu perfil rapidamente
          </div>

          <div className={styles.photo}>
            <Image width={100} src={photo} alt='Profile photo' className={styles.image} />
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.label}>
              Nome
            </div>

            <TextInput password={false} placeholder='Nome' inputData={(inputData) => setNameInputData(inputData)} />
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.label}>
              E-mail
            </div>

            <TextInput password={false} placeholder='E-mail' inputData={(inputData) => setEmailInputData(inputData)} />
          </div>

          {/* <div className={styles.inputContainer}>
            <div className={styles.label}>
              Celular
            </div>

            <TextInput password={false} placeholder='Celular' inputData={(inputData) => setPassInputData(inputData)} isDisabled={true}/>
          </div> */}

          <div className={styles.button} onClick={handleAccountUpdate}>
            Atualizar agora
          </div>
        </div>

        <div className={styles.newPassContainer}>
          <div className={styles.title}>
            Senha
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.label}>
              Senha atual
            </div>

            <TextInput password={true} placeholder='Senha atual' inputData={(inputData) => setActualPassInputData(inputData)} />
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.label}>
              Nova senha
            </div>

            <TextInput password={false} placeholder='Senha atual' inputData={(inputData) => setNewPassInputData(inputData)} />
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.label}>
              Digite novamente a senha
            </div>

            <TextInput password={false} placeholder='Senha atual' inputData={(inputData) => setAgainNewPassInputData(inputData)} />
          </div>

          <div className={styles.button} onClick={handlePasswordChange}>
            Salvar
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default ProfilePage