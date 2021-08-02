import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: ${(props) => props.bgColor ? props.bgColor : '#FFED98'};
    width: ${(props) => props.wt ? props.wt : '60%'};
    height: ${(props) => props.ht ? props.ht : '45px'};
    border: none;
    border-radius: 5px;
    outline: none;
    color: ${(props) => props.color ? props.color : '#323232'};
    text-align: center;
    margin-top: ${(props)=> props.mt ? props.mt : '100px'};
    margin-bottom: ${(props)=> props.mt ? props.mt : '20px'};
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      background-color: ${(props) => props.bgColor ? props.bgColor : '#FFDF98'};
    }
`

