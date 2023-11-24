import React, {useState, useEffect} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(props.movies);
    }, [props.movies]);


    const handleClick = (id) => {
        navigate('/movie-details', { state: { id } });
    }

    const settings = {
        dots: props.options.settings.dots,
        arrows: props.options.settings.arrows,
        autoplay: props.options.settings.autoplay,
        infinite: true,
        centerMode: true,
        lazyLoad: false,
        speed: 420,
        slidesToShow: props.options.settings.slidesToShow,
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
        nextArrow: <CustomNextArrow />
    }

    return (
        <div>
            <Slider {...settings} className=''>
                {movies.map((movie) => (
                    <div key={movie.id} className="hover:cursor-pointer">
                        <img
                        src={`https://image.tmdb.org/t/p/${props.options.image.width}${
                            props.options.image.type == 'poster' ?
                            movie.poster_path : movie.backdrop_path
                        }`} 
                        alt={movie.title}
                        onClick={() => handleClick(movie.id)} />
                        
                    </div>
                ))}
            </Slider>
        </div>
    )

}


export default Carousel