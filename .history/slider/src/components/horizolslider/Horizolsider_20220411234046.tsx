import React, { useState } from 'react'
import styled from 'styled-components'
import image1 from '../../assets/images/pexels-daria-shevtsova-1095550.jpg'
type Props = {}

const Wrapper = styled.div`
    width: 700px;
    /* margin: auto; */
    overflow-x: scroll;
    .overlay{
        display: flex;
        align-items: center;
        /* width: 100%; */
        /* height: 500px; */

    }
`
const Item = styled.div`
    position: relative;
    /* width: 500px; */
    margin: 0 15px;
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
    }
`
const Horizolsider = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(2)
    return (
        <Wrapper>
            <div className="overlay">
                {
                    [...Array(10).keys()].map((i, index) => <Item onClick={() => setActiveIndex(index)} className={`item ${index === activeIndex && "active"}`}>
                        <img src={image1} alt="" />
                        <div>
                            info
                        </div>
                    </Item>)
                }

                <Item className="item">
                    <img src={image1} alt="" />
                    <div>
                        info
                    </div>
                </Item>
                <Item className="item active">
                    <img src={image1} alt="" />
                    <div>
                        info
                    </div>
                </Item>
                <Item className="item">
                    <img src={image1} alt="" />
                    <div>
                        info
                    </div>
                </Item>
                <Item className="item">
                    <img src={image1} alt="" />
                    <div>
                        info
                    </div>
                </Item>
            </div>
        </Wrapper>
    )
}
export default Horizolsider