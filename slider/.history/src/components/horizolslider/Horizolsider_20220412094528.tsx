import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import image1 from '../../assets/images/pexels-daria-shevtsova-1095550.jpg'

type Props = {}

const Wrapper = styled.div`
    /* width: 700px; */
    /* margin: auto; */
    /* overflow-x: scroll; */
    .overlay{
        display: flex;
        align-items: center;
    height: 500px;

        /* width: 100%; */
        /* height: 500px; */

    }
`
const Item = styled.div`
    /* position: relative;
     */
    /* margin: 0 15px; */
    .info{
        visibility: hidden;
    }
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: all .3s;
    }
    &.active{
        img{
            transform: scale(1.4);
        }
        .info{
            visibility: visible;
        }
    }
`
const Horizolsider = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const overlayRef = useRef<any>();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        beforeChange: (current: any, next: any) => {
            setActiveIndex(next)

        },
    };
    // useEffect(() => {
    //     console.log(overlayRef.current.style.transform);

    // }, [])

    return (
        <Wrapper>

            <Slider {...settings}>

                {
                    [...Array(10).keys()].map((i, index) => <div>
                        <Item className={`${index === activeIndex && "active"}`}>
                            <img src={image1} alt="" />
                            <div className="info">info {i}</div>
                        </Item>
                    </div>)
                }
            </Slider>
        </Wrapper>
    )
}
export default Horizolsider