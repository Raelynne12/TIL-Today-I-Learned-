import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import Movie from './Movie'
import axios from "axios"

export default function List() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR&page=1")
    .then((res) => setMovies(res.data.results))
  },[])
  return (
    <Container>
      <Title>
        <p className='popular'><Link to = "/movie/popular">POPULAR MOVIE</Link></p>
        <p className='now-play'><Link to = "/movie/now">NOW PLAYING</Link></p>
      </Title>
      <ul className='movie-list'>
        {
          movies.map((item, idx) => {
            return(
              <Movie movieInfo = {item} key= {idx}></Movie>
            )
          })
        }
      </ul>
    </Container>
  )
}
const Container = styled.div`
  color: #fff;
  justify-content: center;
  align-items: center;
  width: 2000px;
  height: 900px;
  margin: 100px auto;
`
const Title = styled.h2`
  display: flex;
  flex-direction: row;
  font-size: clamp(40px, 4vw, 68px);
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  justify-content: space-between;
  color:#961111;
  margin-bottom: 50px;
`
