import styled from "styled-components";

const StyledButtons = styled.span`
    display: flex;
    flex-wrap: wrap;
`;

const StyledButton = styled.button`
    border: none;
    color: hsl(180, 100%, 25%);
    font-size: 17px;
    background-color: transparent;
    cursor: pointer;
    margin: 10px;

    &:hover {
    color: hsl(180, 100%, 35%);
    transition: 1s;
    }

    &:active {
    outline: solid 2px #000000;
    color: hsl(180, 100%, 45%);
    }

    &:disabled {
    color: hsl(0, 0%, 70%);
    cursor: auto;
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        justify-content: center;
    }
`;

export { StyledButtons, StyledButton };