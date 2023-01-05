import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
      <p className='footer'>CopyrightⓒRaelynne. All rights reserved.</p>
    </Container>
  )
}
const Container = styled.footer`
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
border: none;
  p{
    padding: 5px 40px;
    font-size: 20px;
    color: #fff;
  }
`
