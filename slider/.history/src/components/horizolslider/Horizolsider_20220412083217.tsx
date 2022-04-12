import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import image1 from '../../assets/images/pexels-daria-shevtsova-1095550.jpg'
type Props = {}

const Wrapper = styled.div`
    width: 700px;
    /* margin: auto; */
    .overlay{
        display: flex;
        align-items: center;
    height: 500px;
    overflow-x: scroll;

        /* width: 100%; */
        /* height: 500px; */

    }
`
const Item = styled.div`
    position: relative;
    margin: 0 15px;
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
            width: 150px;
            height: 150px;
        }
        .info{
            visibility: visible;
        }
    }
`
const Horizolsider = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(2);
    const overlayRef = useRef<any>();
    useEffect(() => {
        console.log(overlayRef.current.style.transform);
    }, [activeIndex])

    return (
        <Wrapper>
            <div className="overlay" ref={overlayRef}>
                {
                    [...Array(10).keys()].map((i, index) => <Item onClick={() => {
                        overlayRef.current.style.transform = `translateX(${- 65 * (index + 1)}px)`

                        setActiveIndex(index)


                    }} className={`item ${index === activeIndex && "active"}`}>
                        <img src={image1} alt="" />
                        <div className='info'>
                            info {index}
                        </div>
                    </Item>)
                }

            </div>
        </Wrapper>
    )
}
export default Horizolsider