import { Link } from 'react-router-dom'

import styled from "styled-components"


export const Wrapper = styled.div ` 
    padding: 10px 20px;
    display: flex;
    vertical-align: middle;
    text-align: center;
    align-items: center;
    justify-content: center;

`
    
export const RouterLink = styled(Link) `
    color: black;
    width: 80%;
    background-color: lightgray;
    padding: 30px 60px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 26px;
    text-decoration: none;

    &:hover {
        background-color: gray;
        cursor: pointer;
    }
`