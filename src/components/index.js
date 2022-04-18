import React from "react"
import { Carousel } from "react-bootstrap"
import echelon from "../logo/echelon_logo-01.jpg"
import genesco from "../logo/genesco_logo-01.jpg"
import hunter from "../logo/hunter_logo-01.jpg"
import opry from "../logo/opry_logo-01.jpg"
import tarter from "../logo/tarter_logo-01.jpg"
import trevecca from "../logo/trevecca_logo-01.jpg"
import roka from "../logo/logo 1.jpg"
import css from "../styles/brands.module.css"

function Brands(){

return <div>
<Carousel>
  <Carousel.Item>
    <img className={css.logos}
      src={echelon}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img className={css.logos}
      src={genesco}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img className={css.logos}
      src={hunter}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img className={css.logos}
      src={opry}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img className={css.logos}
      src={tarter}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img className={css.logos}
      src={trevecca}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img className={css.logos}
      src={roka}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
}

export default Brands;