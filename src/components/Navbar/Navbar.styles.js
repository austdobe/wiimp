import { Link } from 'react-router-dom'
import styled from "styled-components";

export const Wrapper = styled.nav ` 
    width: 100vw;
    height: fit-content;
    display: flex;
    position: fixed;
    bottom:0;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    background-color: gray;
    color: white;
`;

export const RouterLink = styled(Link) `
    color: white;
    margin: 20px;
    padding: 10px 20px;
    border: 1px solid white;
    border-radius: 4px;
    text-decoration: none;

    &:hover {
        background-color: darkgrey;
    }

`