import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PasswordContainer = styled.div`
  padding: 40px;
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: "Roboto";
   color:white;      
  }
`
export const Text = styled.p`
  color: white;
`
export const PasswordInput = styled.input`
  width: 80%;
  align-self: center;
  margin-top: 20px;
  background-color: #edeeff;
  border: none;
  box-shadow: #434451;
  outline: none;
`
export const ErrorText = styled.p`
  color: #ef4444;
`
