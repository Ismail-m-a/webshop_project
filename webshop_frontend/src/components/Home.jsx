// Importerar nödvändiga moduler och komponenter från react-bootstrap och react-router-dom.
import Carousel from 'react-bootstrap/Carousel';
import {Accordion, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Home.css';

// Importerar bilder som ska användas i karusellen.
import firstSlideImage from '../carouselImage/first-slide.jpg';
import secondSlideImage from '../carouselImage/second-slide.jpg';
import thirdSlideImage from '../carouselImage/third-slide.jpg';
import fourthSlideImage from '../carouselImage/fourth-slide.jpg';

// En funktionell komponent för att rendera bilder i Carousel.
function CarouselImage ( { src, alt}) {
  return <img className="carousel-image" src={src} alt={alt} />
}

function Home() {
  
  return (
    <>
      <div className="content-wrapper">
        <div className="showcase">
          <div className="text">
            <h3> Welcome to Nordic Classy</h3>
            <p className='info'>
            Your premier destination for the finest Nordic-inspired goods. Nestled in the heart of [Location], our store offers a curated selection of products that embody the minimalist elegance and timeless craftsmanship of the Nordic design ethos. From luxurious home decor to exquisite fashion pieces, each item in our collection is selected for its quality, functionality, and beauty.
            <br />
            Our diverse range of products includes handcrafted furniture that combines sleek, clean lines with the warmth of natural materials, elegant home accessories that add a touch of Scandinavian serenity to any space, and fashion items that offer both style and comfort, true to the Nordic way of life. At [Store Name], we are committed to bringing you the best of Nordic design, where every purchase promises not just a product, but a piece of art that enhances your everyday living.

            Visit us at [Store Name] to discover a world of Nordic elegance. 
            Let us help you find the perfect items that reflect your taste for sophistication and minimalist beauty. <Button variant="outline-success" as={Link} to="/register"> Bli medlem</Button>
            </p>
           
              
          </div>
          <br />
        </div>
        <Carousel>  {/* Karusellen som visar olika bilder med beskrivningar. Varje Carousel.Item representerar en bild i karusellen. */}
          <Carousel.Item interval={1000}>
            <CarouselImage src={firstSlideImage} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <CarouselImage src={secondSlideImage} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage src={thirdSlideImage} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage src={fourthSlideImage} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />

      <div className="accordions-container">
        <div className="accordion-column">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>About Us</Accordion.Header>
              <Accordion.Body>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Totam rerum, inventore atque consequatur repellendus voluptatum,
                  recusandae officiis voluptate et optio eveniet nostrum ipsa fuga consectetur, 
                  asperiores adipisci cum tenetur saepe nulla similique sint sapiente iure ut eius? 
                  Repellendus, iusto nostrum. Facere, laboriosam ipsum dolor dolorem, eius culpa eligendi,
                  quos possimus ipsa expedita sapiente natus sit laborum? Molestiae assumenda qui porro ratione
                  maiores, asperiores ea consequuntur dolorum vero veritatis pariatur ad odio earum repudiandae facere
                  officiis nulla omnis doloribus rerum cumque inventore. Dolorem, nam. Itaque corrupti hic reiciendis repellendus
                  at, dolorem excepturi, sed quisquam quo enim necessitatibus, dolores nesciunt praesentium?
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="accordion-column">
          <Accordion defaultActiveKey="1" flush>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Our Products</Accordion.Header>
              <Accordion.Body>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Eum pariatur voluptate vel eos veniam culpa, similique provident, eaque maxime accusamus saepe laudantium aut. 
                  Esse tempora nulla deserunt quis earum repellat, laudantium alias amet. Aliquid voluptatibus nihil dolorem deleniti adipisci dignissimos temporibus. 
                  Laudantium fugiat dolorum, a vel necessitatibus ea! Dolorem animi error assumenda alias quibusdam quaerat voluptates inventore necessitatibus sint, 
                  nihil excepturi eveniet. Officia veniam, accusantium omnis debitis quod dolor nulla harum error laborum expedita voluptas maiores consectetur, 
                  architecto a esse, optio alias! Voluptatum totam dolorem blanditiis fuga at vero, et, quo, odio repudiandae esse facere? Quae iusto fugiat ea minima?
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
         

    </>
  );
}

export default Home;