import React, {useState, useEffect} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css';

const CustomPrevArrow = (props) => {
    return (
        <div className="slick-arrow slick-prev" onClick={props.onClick}>
            
        </div>
    )
}

const CustomNextArrow = (props) => {
    return (
        <div className="slick-arrow slick-next" onClick={props.onClick}>
            
        </div>
    )
}

const Carousel = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(props.movies);
    }, [props.movies]);

    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        lazyLoad: false,
        speed: 420,
        slidesToShow: props.options.settings.slidesToShow || 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide: true,
              }
            }
          ],
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
    }

    return (
        <div>
            <Slider {...settings} >
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
                            <img
                            src={`https://image.tmdb.org/t/p/w500${
                                props.options.image.type == 'poster' ?
                                movie.poster_path : movie.backdrop_path
                            }`} 
                            alt={movie.title} />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    )

}


export default Carousel