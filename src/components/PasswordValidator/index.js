import {useState} from 'react'
import {
  AppContainer,
  PasswordContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [validPassword, setValidPassword] = useState('')

  const changePassword = event => {
    setValidPassword(event.target.value)
  }
  const validText =
    validPassword.length >= 8
      ? ''
      : 'your password must be at least 8 characters'

  return (
    <AppContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password"</Text>
        <PasswordInput
          type="password"
          onChange={changePassword}
          value={validPassword}
        />
        <ErrorText>{validText} </ErrorText>
      </PasswordContainer>
    </AppContainer>
  )
}

export default PasswordValidator
