import styled from "styled-components"
import { Link } from 'react-router-dom'



export const Wrapper = styled.div ` 
    padding: 20px 40px;
    margin: 50px auto;
    background: linear-gradient(112.6deg, rgba(200, 200, 200, 1) 76.6%, rgba(100, 100, 100, 1) 116.3%);
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: gray;
    }
`
    
export const RouterLink = styled(Link) `
    color: black;
    font-weight: 700;
    font-size: 26px;
    text-decoration: none;

    
`