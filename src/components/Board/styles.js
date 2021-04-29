import styled from 'styled-components'


export const Bird = styled.div`
    width: ${({width})=> width + 'px'};
    height: ${({height})=> height + 'px'};
    margin: 0 auto;
    background-color: grey;
`