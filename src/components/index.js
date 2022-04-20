import React, {Component} from "react"
import Slider from "react-slick"
import echelon from "../logo/echelon_logo-01.jpg"
import genesco from "../logo/genesco_logo-01.jpg"
import hunter from "../logo/hunter_logo-01.jpg"
import opry from "../logo/opry_logo-01.jpg"
import tarter from "../logo/tarter_logo-01.jpg"
import trevecca from "../logo/trevecca_logo-01.jpg"
import roka from "../logo/logo 1.jpg"
import css from "../styles/brands.module.css"



export default class Brands extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div >
            <img className={css.logos} src={echelon} alt="echelon logo"/>
          </div>
          <div >
          <img className={css.logos} src={genesco} alt="genesco logo"/>
          </div>
          <div >
          <img className={css.logos} src={hunter} alt="hunter logo"/>
          </div>
          <div >
          <img className={css.logos} src={opry} alt="opry logo"/>
          </div>
          <div >
          <img className={css.logos} src={tarter} alt="tarter logo"/>
          </div>
          <div >
          <img className={css.logos} src={trevecca} alt="trevecca logo"/>
          </div>
          <div >
          <img className={css.logos} src={roka} alt="roka logo"/>
          </div>
        </Slider>
      </div>
    );
  }
}
