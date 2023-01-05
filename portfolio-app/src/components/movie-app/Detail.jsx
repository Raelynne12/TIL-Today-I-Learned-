import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios"
import { useParams } from 'react-router-dom'
import {Swiper, SwiperSlide} from "swiper/react"
import Profile from './Profile'
import "swiper/css"

export default function Detail() {
  const movieId = useParams().id
  const [detail, setDetail] = useState({})
  const [genres, setGenres] = useState("")
  const [cast, setCast] = useState([])

  useEffect(() => {
    axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR`)
    .then((res) => {
      setDetail(res.data)
      setGenres(res.data.genres.map(item => item.name).join("/"))
    })

    axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR`)
    .then((res) => {
      setCast(res.data.cast)
    })
  },[movieId])
  return (
    <>
      <Container>
        <div className='detail-box'>
          <div className='img-box'>
            <img src = {`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt=""></img>
            <span className='point'>{detail.vote_average}</span>
          </div>
          <div className='info'>
            <div className='title-box'>
              <h3 className='title'>{detail.original_title}</h3>
              <p className='original-title'>{detail.original_title}</p>
              <p className='open-date'>{detail.release_date}</p>
            </div>
            <div className='summary'>
              <dl>
                <dt>genre</dt>
                <dd>{genres}</dd>
              </dl>
              <dl>
                <dt>time</dt>
                <dd>{detail.runtime}</dd>
              </dl>
              <dl>
                <dt>grade</dt>
                <dd>{detail.vote_average}</dd>
              </dl>
              <dl>
                <dt>vote</dt>
                <dd>{detail.vote_count}</dd>
              </dl>
              <dl>
                <dt>summary</dt>
                <dd style={{fontFamily:`Chosunilbo_myungjo`,fontWeight:`bold` ,lineHeight:1.5, fontSize:`30px`}}>{detail.overview}</dd>
              </dl>
              <dl>
                <dt>casting(swipe)</dt>
                <dd>
                  <Swiper
                  className='cast-list'
                  spaceBetween={100}
                  slidesPerView={"auto"}>
                    {cast.map((item, idx) => {
                      return (
                        <SwiperSlide className='item'>
                          <Profile img={item.profile_path} name={item.name} key={idx} gender={item.gender} id={item.id}></Profile>
                        </SwiperSlide>
                      )
                    })}
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
  margin-left: 170px;
  margin-bottom: 40px;
  margin-right: 170px;
  background-color: #fff;
  margin-top: 160px;
  .bg{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    &:before{
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
    }
  }
  .detail-box{
    display: flex;
    align-items: flex-start;
    .img-box{
      border-radius: 0 50px 0 50px;
      border: 10px solid rgb(241,241,241);
      box-shadow: 20px 10px 10px rgba(0,0,0,0.3);
      width: 500px;
      box-sizing: border-box;
      overflow: hidden;
      flex-shrink: 0;
      img {
        vertical-align: top;
        width: 500px;
      }
    }
    .info{
      background-color: rgba(248,248,248,0.9);
      margin-left: 50px;
      flex-grow: 1;
      padding: 30px;
      border-radius: 50px 0 50px 0;
      .title-box{
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 4px dashed rgb(97,97,97);
        color: rgb(131,131,131);
        font-size: 20px;
        h3{
          font-size: 60px;
          font-weight: 700;
          margin-bottom: 10px;
          color: rgb(19,19,19);
        }
      }
      .summary{
        dl{
          padding-bottom: 15px;
          margin-bottom: 15px;
          border-bottom: 4px dashed rgb(97,97,97);
          dt{
            color: rgb(65,65,65);
            font-size: 30px;
            margin-bottom: 20px;
          }
          dd{
            color: rgb(27,27,27);
            font-size: 24px;
            font-weight: 500;
            margin-top: 10px;
          }
          .desc{
            font-size: 17px;
          }
          .cast-list{
            overflow: hidden;
            width: 2000px;
            .item{
              width: 120px;
              img{
                width: 90%;
                height: 250px;
                object-fit: cover;
              }
            }
            .profile-info{
              font-size:16px;
              text-align: center;
              margin-top: 5px;
            }
          }
          .movie-list{
            overflow: hidden;
            width: 1000px;
            .item{
              width: 120px;
              img{
                width: 100%;
                height: 300px;
                object-fit: cover;
              }
            }
            .movie-info{
              font-size: 16px;
              text-align: center;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
`
