import styled from "styled-components";

export const Wrapper = styled.div ` 
    width: 100%;
    height: 100px;
    display: flex;
    background-color: gray;
`

export const Avatar = styled.img ` 
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: auto 20px;
    border: 3px solid white;

`

export const Content = styled.div ` 
    height: 100%;
    margin: auto 0;
    display: grid;
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const Headline = styled.div ` 
    font-size: 16px;
    color: black;
    font-weight: bold;
`

export const User = styled.div ` 
    font-size: 22px;
    white-space: nowrap;
    font-weight: bolder;

`