import React from 'react'
import styled from 'styled-components'
import image1 from '../../assets/images/pexels-daria-shevtsova-1095550.jpg'
type Props = {}

const Wrapper = styled.div`
    width: 100%;
    .overlay{
        display: flex;

    }
`
const Item = styled.div`
    position: relative;
    width: 30%;
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`
const Horizolsider = (props: Props) => {

    return (
        <Wrapper>
            <div className="overlay">

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