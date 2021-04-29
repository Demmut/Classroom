import styled from 'styled-components'


export const Menu_Wrapper = styled.div`
    width: 50px;
    height: 50px;
    padding: 10px;
    background-color: #fff;
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }

    &:active {
        opacity: 1.5;
    }
`

export const Menu_Clickable = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-color: #000;

    opacity: 0.8;

    &:hover {
        opacity: 1;
    }

    &:active {
        opacity: 1.5;
    }

`
