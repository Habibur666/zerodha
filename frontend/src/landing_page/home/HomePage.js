import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Education from "./Eductaion";
import Pricing from "./Pricing";
import OpenAccount from "../../OpenAccount";

export default function HomePage(){
  return(
    <>
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
    </>
  )
}