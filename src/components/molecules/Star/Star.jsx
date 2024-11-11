import React from 'react'
const estrellas = document.querySelectorAll('.star');
  estrellas.forEach((estrella, rating) => {
    estrella.addEventListener('click', () => {
      estrellas.forEach((starpink, rating1) => {
        if (rating1 <= rating) {
          starpink.classList.add('star-pink');
        } else {
          starpink.classList.remove('star-pink');
        }
      })
    });
  });
const Star = () => {
  return (
    <>
      <div className="star star-gray"></div>
      <div className="star star-gray"></div>
      <div className="star star-gray"></div>
      <div className="star star-gray"></div>
      <div className="star star-gray"></div>
    </>
  )
}

export default Star