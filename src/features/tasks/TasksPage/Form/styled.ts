import styled from "styled-components";

const StyledForm = styled.form`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

const FormButton = styled.button`
    color: #ffffff;
    background-color: teal;
    padding: 10px;
    border: 0;
    cursor: pointer;

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transition: 1s;
        transform: scale(1.15);
    }

    &:active {
        outline: solid 2px #000000
    }
`;

export { StyledForm, FormButton };