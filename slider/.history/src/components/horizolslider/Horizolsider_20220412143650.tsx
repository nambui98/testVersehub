import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import image1 from '../../assets/images/pexels-daria-shevtsova-1095550.jpg'
import image2 from '../../assets/images/pexels-ella-olsson-1640777.jpg'
import image3 from '../../assets/images/pexels-engin-akyurt-1435735.jpg'
import image4 from '../../assets/images/pexels-lisa-fotios-1279330.jpg'
import image5 from '../../assets/images/pexels-mariana-kurnyk-1775043.jpg'
import image6 from '../../assets/images/pexels-tijana-drndarski-3338681.jpg'

import { BiBasket, BiPlus } from "react-icons/bi";
type Props = {
    children: any
}
const listItem = [
    {
        id: 1,
        image: image1,
        info: [
            "Lorem ipsum dolor sit amet Soluta",
            "consectetur adipisicing elit. ",
            "veritatis tenetur.",
            "veritatis tenetur."
        ],
    },
    {
        id: 2,
        image: image2,
        info: [
            "1",
            "2"
        ],
    },
    {
        id: 3,
        image: image3,
        info: [
            "1",
            "2"
        ],
    },
    {
        id: 4,
        image: image4,
        info: [
            "1",
            "2"
        ],
    },
    {
        id: 5,
        image: image5,
        info: [
            "1",
            "2"
        ],
    }
    , {
        id: 6,
        image: image6,
        info: [
            "1",
            "2"
        ],
    }
]
const Wrapper = styled.div`
    width: 700px;
     
`
const Item = styled.div`
    /* height: 150px; */
    margin-top: 50px;
    transition: all .3s;
    position: relative;
    cursor: pointer;
    img{
        object-fit: cover;
        margin: 0 auto;
        /* width: 100px;
        height: 100px; */
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: all .3s;
    }
    .info{
        width: 200px;
        border: 2px solid #d5d5d5;
        border-radius: 10px;
        /* height: 200px; */
        transition: transform 1000s;
        visibility: hidden;
        margin-top: 50px;
        margin-left: -30px;

        ul{
            list-style: none;
            max-height: 150px;
            overflow-y: auto;

            p{
                padding: 10px;
            }
            li{
                padding: 10px;
                border-bottom: 1px solid #d5d5d5;
                
            }
        }
        &__title{
            display: flex;
            text-align: center;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #d5d5d5;
            svg{
                margin-right: 50px;
            }
        }
    }
    &.active{
        margin-top: 30px;
        img{
            transform: scale(1.4)
        }
        .info{
            visibility: visible;
            transform: translateY(0px);  
        }
    }
    &.near{
        margin-top: 40px;
        img{
            transform: scale(1.15)
        }
        

    }
`
const Horizolsider = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const settings = {
        className: "listItem",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        beforeChange: (current: any, next: any) => {
            setActiveIndex(next)
            if (current !== next) {

                setShowInfo(false)
            }
            debugger
            // setShowInfo(false)
        },
        afterChange: (index: any) => {
            // setActiveIndex(next)
        },
    };

    return (
        <div style={{ display: "flex", height: "100vh", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Wrapper>
                <Slider {...settings}>
                    {
                        listItem.map((item, index) =>
                            <Item className={`${index === activeIndex ? "active" : (activeIndex - index) === 1 || (index - activeIndex) === 1 || (index - activeIndex) + 1 === listItem.length || (index - activeIndex) === -(listItem.length - 1) ? "near" : ""}`}>
                                <img src={item.image} alt="" />

                                <div className={`info ${activeIndex === index && "active"}`}>
                                    <div className='info__title' onClick={() => {
                                        setShowInfo(!showInfo)
                                        debugger
                                    }}><BiPlus /> List item</div>
                                    {
                                        showInfo ?
                                            <ul>
                                                {
                                                    item.info.map(i => <li>
                                                        {i}
                                                    </li>)
                                                }

                                            </ul>
                                            : ""
                                    }
                                </div>
                            </Item>
                        )
                    }
                </Slider>
            </Wrapper>
        </div >
    )
}
export default Horizolsider