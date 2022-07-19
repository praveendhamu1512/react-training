import fish from './pic/fish.jpg'
import snow from './pic/snow.jpg'
import sun from './pic/sun.jpg'

import {Carousel} from 'react-bootstrap';
const Home = () => {

  return(
 <div>
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={fish}
      alt="Fish"
    />
    <Carousel.Caption>
      <h3>Fish</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={snow}
      alt="snow"
    />
    <Carousel.Caption>
      <h3>Snow</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sun}
      alt="sun"
    />
    <Carousel.Caption>
      <h3>sun</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 </div>

  )
};

export default Home;