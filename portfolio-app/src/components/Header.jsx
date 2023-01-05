import React from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from "react-router-dom"


export default function Header() {
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  const front = () => {
    navigate(+1)
  }
  return (
    <Container>
      <button onClick={back} className = "back">
        <i className="fa-regular fa-hand-point-left"></i>
      </button>
      <Link to ="/"><Head>Raelynne's Portfolio</Head></Link>
      <button onClick={front} className = "front">
        <i className="fa-regular fa-hand-point-right"></i>
      </button>
    </Container>
  )
}
const Container = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  background-color: #000;
  align-items: center;
  justify-content: center;
  .back{
    font-size: 20px;
    display: flex;
    color: #fff;
    border: none; 
    left: 0;
    width: 60px;
    height: 60px;
    outline: none;
    background-color: none;
    justify-content: center;
    align-items: center;
    margin-right: 140px;
    i{
      font-size: 40px;
      color: #fff;
      margin-left: 140px;
    }
  }
  .front{
    font-size: 40px;
    display: flex;
    color: #fff;
    border: none; 
    left: 0;
    width: 60px;
    height: 60px;
    outline: none;
    background-color: none;
    justify-content: center;
    align-items: center;
    margin-left: 70px;
  }
`
const Head = styled.header`
  background-color: #000;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`
