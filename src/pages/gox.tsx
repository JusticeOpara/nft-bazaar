// import React, { useState, useEffect, useRef } from 'react';

// interface SliderProps {
//   children: React.ReactNode;
// }

// const Slider: React.FC<SliderProps> = ({ children }) => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const [currentSlidePos, setCurrentSlidePos] = useState(0);
//   const totalSliderItems = React.Children.count(children);
//   const totalVisibleItems = Number(
//     getComputedStyle(document.documentElement).getPropertyValue('--slider-item')
//   );

//   const moveSliderItem = () => {
//     if (sliderRef.current) {
//       sliderRef.current.style.transform = `translateX(-${currentSlidePos * 100}%)`;
//     }
//   };

//   const slideNext = () => {
//     setCurrentSlidePos(prevPos => (prevPos + 1) % totalSliderItems);
//   };

//   const slidePrev = () => {
//     setCurrentSlidePos(prevPos => (prevPos - 1 + totalSliderItems) % totalSliderItems);
//   };

//   useEffect(() => {
//     moveSliderItem();
//   }, [currentSlidePos]);

//   return (
//     <div className="slider">
//       <div ref={sliderRef} className="slider-container">
//         {React.Children.map(children, (child, index) => (
//           <div key={index} className="slider-item">
//             {child}
//           </div>
//         ))}
//       </div>
//       <button onClick={slidePrev}>Previous</button>
//       <button onClick={slideNext}>Next</button>
//     </div>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Image Slider</h1>
//       <Slider>
//         <img src="image1.jpg" alt="Image 1" />
//         <img src="image2.jpg" alt="Image 2" />
//         <img src="image3.jpg" alt="Image 3" />
//         {/* ... add more slider items */}
//       </Slider>
//     </div>
//   );
// };

// export default App;
