import { Carousel } from "bootstrap"

function Brands(){

return <div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../logo/echelon_logo-01.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../logo/genesco_logo-01.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../logo/hunter_logo-01.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
}

export default Brands