import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

export default function MyPortfolio() {
  return (
    <>
      <High>
        <div className='movie'><Link to = "/movie/popular">Movie App</Link></div>
        <div className='youtube'><Link to = "/youtube">Youtube App</Link></div>
        <div className='netflix'><Link to = "/netflix">Netflix App</Link></div>
        <div className='mbti'><Link to = "/mbti">MBTI Test</Link></div>
      </High>
      <High>
        <div className='diary'><Link to = "/diary">Diary App</Link></div>
        <div className='todolist'><Link to = "/todo">Todo List</Link></div>
        <div className='voca'><Link to = "/voca">Voca App</Link></div>
        <div className='crawling'><Link to = "/crawling">Crawling</Link></div>
      </High>
    </>
  )
}
const High = styled.div`
  height: 500px;
  width: 3000px;
  display: flex;  
  align-items: center;
  justify-content: center;
  margin: 100px;
  .movie, .youtube, .netflix, .mbti, .voca, .diary, .todolist, .crawling{
    display: relative;
    justify-content: space-around;
    background-color: #fff;
    color: #000;
    height: 400px;
    width: 400px;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    font-size: 50px;
    line-height: 380px;
    border-radius: 20px;
    text-decoration: underline;
    text-underline-position: under;
  }
`