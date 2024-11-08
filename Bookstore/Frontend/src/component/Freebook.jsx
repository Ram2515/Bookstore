import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from './Cards';
import { useEffect } from 'react';

export default function Freebook() {

    const [book,setBook]=useState([]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        const getBook = async () => {
          try {
            const res = await axios.get("http://localhost:4000/book");

            setBook(res.data);
          } catch (error) {
            console.log(error);
          }
        };
        getBook();
      }, []);


    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
                <p>Et sea ut ipsum ipsum nonumy amet. Kasd lorem ut est elitr. Invidunt ipsum accusam erat et. At sed rebum. Was and he bidding sore so know by. Of whose her mine love parting did tear oer. Into virtues that.</p>
            </div>

            <div>
                <Slider {...settings}>
                    {book.map(item => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
