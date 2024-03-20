
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const RecipeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplaySpeed: 5000,
    autoplay: true,
    slideToShow: 3,
    slideToScroll: 1,
  };

  return (
    
          <Slider {...settings}>
            {recipes.map((d) => (
              <div key={d.title} className="">
                <div className="text-black rounded-xl h-40 w-40 ">
                  <img
                    src={d.image}
                    alt=""
                    className="h-40 w-40  my-auto mx-auto items-center "
                  />
                </div>
                
              </div>
            ))}
          </Slider>
  )
};
const recipes = [
  { title: 'Receta 1', image: 'src/img/1.jpeg' },
  { title: 'Receta 2', image: 'src/img/2.jpg' },
  { title: 'Receta 3', image: 'src/img/3.jpg' }
  // Agrega más recetas según sea necesario
];

export default RecipeCarousel;