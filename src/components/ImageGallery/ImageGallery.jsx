import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
  const prevImagesLengthRef = useRef(images.length);

  useEffect(() => {
    if (prevImagesLengthRef.current !== images.length) {
      const smoothPageScrolling = () => {
        const { height: cardHeight } = document
          .querySelector('.gallery')
          .firstElementChild.getBoundingClientRect();

        const scrollAmount = cardHeight * 3.05;
        window.scrollBy({
          top: scrollAmount,
          behavior: 'smooth',
        });
      };

      smoothPageScrolling();
    }

    prevImagesLengthRef.current = images.length;
  }, [images.length]);

  return (
    <ImageGalleryList className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;