import styled from "styled-components";

const StyledSection = styled.section`
    background-color: #ffffff;
`;

const Subheader = styled.h2`
    padding: 20px;
    border-bottom: solid 2px #ededed;
    margin: 0px;
    display: grid;
    grid-template-columns: 1fr auto auto;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }
`;

export { StyledSection, Subheader };