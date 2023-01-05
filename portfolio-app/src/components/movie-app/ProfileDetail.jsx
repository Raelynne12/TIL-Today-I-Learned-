import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import MovieItem from './MovieItem'

export default function ProfileDetail() {
  const profileId = useParams.id
  const [detail, setDetail] = useState({})
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
    .get(`https://api.themoviedb.org/3/person/${profileId}?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR`)
    .then((response)=>{
    setDetail(response.data);
    console.log(detail);
    })

    axios
    .get(`https://api.themoviedb.org/3/person/${profileId}/movie_credits?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR`)
    .then((response) => {
    setMovies(response.data.cast)
    console.log(movies)})
},[profileId])
  return (
    <>
      <Container>
        <h2>{detail.name}</h2>
        <div className='detail-box'>
          <div className='img-box'>
            <img src = {`https://image.tmdb.org/t/p/w300/${detail.profile_path}`} alt=""></img>
            <span className='point'>{detail.vote_average}</span>
          </div>
          <div className='info'>
            <div className='title-box'>
              <h3>{detail.also_known_as}</h3>
              <p className='original-title'>{detail.original_title}</p>
              <p className='open-date'>{detail.release_date}</p>
            </div>
            <div className='summary'>
              <dl>
                <dt>known for department</dt>
                <dd>{detail.known_for_department}</dd>
              </dl>
              <dl>
                <dt>birthday</dt>
                <dd>{detail.birthday}</dd>
              </dl>
              {detail.deathday && (
                <dl>
                  <dt>deathday</dt>
                  <dd>{detail.deathday}</dd>
                </dl>)}
                <dl>
                  <dt>gendder</dt>
                  <dd>{detail.gender===1?"woman":detail.gender===2?"man":"none"}</dd>
                </dl>
                <dl>
                  <dt>place of birth</dt>
                  <dd>{detail.place_of_birth}</dd>
                </dl>
                <dl>
                  <dt>popularity</dt>
                  <dd>{detail.popularity}</dd>
                </dl>
                {detail.homepage &&(
                  <dl>
                    <dt>homepage</dt>
                    <dd className='desc'><a href={detail.homepage} target="_blank" rel="noopener noreferrer">{detail.homepage}</a></dd>
                  </dl>
                )}
                <dl>
                  <dt>apparance</dt>
                  <dd>
                    <Swiper
                    className = "movie-list"
                    spaceBetween={100}
                    slidesPerView={5}>
                      {
                        movies.map((item, idx) => {
                          if(idx < 20){
                            return (
                              <SwiperSlide className='item'>
                                <MovieItem title={item.title} poster={item.poster_path} id = {item.id} key={idx}></MovieItem>
                              </SwiperSlide>
                            )
                          }
                        })
                      }
                    </Swiper>
                  </dd>
                </dl>
            </div>
          </div>
        </div>
        <div className='bg' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})`}}></div>
      </Container>
    </>
  )
}
const Container = styled.div`
  font-size: 30px;
  color: #fff;
`