import React from 'react'
import styled from 'styled-components'
import image1 from '../../assets/images/pexels-daria-shevtsova-1095550.jpg'
type Props = {}

const Wrapper = styled.div`
    width: 100%;

`
const Horizolsider = (props: Props) => {

    return (
        <Wrapper>
            <div className="item">
                <img src={image1} alt="" />
                <div>
                    info
                </div>
            </div>
        </Wrapper>
    )
}
export default Horizolsider