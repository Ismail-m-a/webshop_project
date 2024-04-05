// Importerar nödvändiga paket och komponenter.
import React, { useState } from 'react';
import { Button, Card, Modal, Alert } from 'react-bootstrap';
import { useCart } from "react-use-cart";

// Importerar bilder för produkter.
import necklaceImage from '../images/necklace.jpg';
import rolexWatchImage from '../images/rolexwatch.jpg';
import paintingImage from '../images/oilpainting.jpg';
import rareCoinImage from '../images/rarecoin.jpg';
import furnitureImage from '../images/furniture.jpg';
import sneakersImage from '../images/sneakers.jpg';
import woodenGuitarImage from '../images/guitar.jpg';
import typeWriterImage from '../images/typewriter.jpg';
import rareStampImage from '../images/stamp.jpg';
import crystalImage from '../images/crystal.jpg';
import pocketWatchImage from '../images/pocketwatch.jpg';
import plateImage from '../images/plate.jpg';
import rareBooksImage from '../images/rarebooks.jpg';
import vcameraImage from '../images/vcamera.jpg';
import silversetImage from '../images/silverset.jpg';
import vinylrecordsImage from '../images/vinylrecords.jpg';
import handbagiImage from '../images/handbag.jpg';
import teasetImage  from '../images/teaset.jpg';
import jewelryboxImage from '../images/jewelrybox.jpg';
import wineImage from '../images/wine.jpg';

const images = {
  'necklace.jpg': necklaceImage,
  'rolexwatch.jpg': rolexWatchImage,
  'oilpainting.jpg': paintingImage,
  'rarecoin.jpg': rareCoinImage,
  'furniture.jpg': furnitureImage,
  'sneakers.jpg': sneakersImage,
  'guitar.jpg': woodenGuitarImage,
  'typewriter.jpg': typeWriterImage,
  'stamp.jpg': rareStampImage,
  'crystal.jpg': crystalImage,
  'pocketwatch.jpg': pocketWatchImage,
  'plate.jpg': plateImage,
  'rarebooks.jpg': rareBooksImage,
  'vcamera.jpg' : vcameraImage,
  'silverset.jpg': silversetImage,
  'vinylrecords.jpg': vinylrecordsImage,
  'handbag.jpg': handbagiImage,
  'teaset.jpg': teasetImage,
  'jewelrybox.jpg': jewelryboxImage,
  'wine.jpg': wineImage,
};

function ProductItem({ item }) {
  const { addItem } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Kontrollerar att produkten och dess bild finns.
  if (!item || !item.image) {
    return <div>Item or item image is missing.</div>;
  }

   // Hämtar bildens URL från 'images'-objektet med produktbildens namn som nyckel.
  const imageUrl = images[item.image];
  if (!imageUrl) {
    console.log("Image not found for:", item.image);
    return <div>Image not found.</div>;
  }

    // Hanterar klick på "Add to cart"-knappen.
  const handleAddToCart = () => {
    const numericPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
    addItem({
      ...item,
      price: numericPrice,
      imageUrl: imageUrl
    });
    setShowNotification(true);
    
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Adjust time as needed
  };

  return (
    
    <div className="container-card">
        {showNotification && (
        <Alert variant="success" style={{ position: 'fixed', top: '56px', right: '0', zIndex: '9999', minWidth: '200px' }}>
          👆 Item added to cart! 
        </Alert>
      )}
      <Card className='card-container' style={{ width: '18rem', marginBottom: '1rem' }}>
        <Card.Img className='card-img' variant="top" src={imageUrl} onClick={() => setShowModal(true)} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
          <strong>Price:</strong> {item.price}
          </Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>Add to cart</Button>
        </Card.Body>
      </Card>

      {/* Modal för Item information när man clickar bilden, knappar */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><img className='img-modal' src={imageUrl} alt={item.name} /> </p>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Price:</strong> {item.price}</p>
          {/* kan använda vid behöv */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            handleAddToCart();
            setShowModal(false);
          }}>
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductItem;
