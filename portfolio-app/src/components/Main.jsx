import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
//import universe from "../assets/images/universe.jpg"

export default function Main() {
  // gsap.to(".box1", {x:650, duration:0.52, data:"about me"})
  // gsap.to(".box2", {x:-650, duration:0.5})
  const circleRef = useRef();
  const circleReff = useRef();
  // const [active, setActive] = useState(true)
  // useEffect(() => {
  //   const timeout = setTimeout(() => remove(), 1000)
  //   return () => clearTimeout(timeout)
  // },[])
  // const remove = () => {
  //   const ani = gsap.to(circleRef.current,{
  //     display:"none"
  //   })
  // }
  useEffect(() => {
    const timeout = setTimeout(() => show2(), 2000);
    return () => clearTimeout(timeout);
  }, [circleRef]);
  useEffect(() => {
    const timeout = setTimeout(() => show1(), 2200);
    return () => clearTimeout(timeout);
  }, [circleReff]);
  const show1 = () => {
    const ani = gsap.to(circleReff.current, {
      x: -750,
      y: -450,
      duration: 0.5,
      ease: "strong.inOut",
    });
    return () => {
      ani.kill();
    };
  };
  const show2 = () => {
    const ani = gsap.to(circleRef.current, {
      x: 900,
      y: 450,
      duration: 0.5,
      ease: "strong.inOut",
    });
    return () => {
      ani.kill();
    };
  };
  return (
    <Contain>
      <div className="box box1" id="box1" ref={circleRef}>
        <Link to="/about">ABOUT ME</Link>
      </div>
      <div className="box box2" ref={circleReff}>
        <Link to="/my">MY PORTFOLIO</Link>
      </div>
    </Contain>
  );
}
const Contain = styled.div`
  //background-color: #000;
  background-image: url("../assets/images/universe.jpg");
  width: 2000px;
  //height: 00px;
  display: flex;
  flex-direction: column;
  .box {
    background-color: #e2e2e2;
    width: 580px;
    height: 580px;
    border-radius: 2000px;
    color: #000000;
    text-align: center;
    align-items: center;
    text-decoration: underline;
    text-underline-position: under;
    line-height: 580px;
    font-size: 50px;
  }
  .box1 {
    margin-right: 400px;
  }
  .box2 {
    margin-left: 2350px;
  }
`;
