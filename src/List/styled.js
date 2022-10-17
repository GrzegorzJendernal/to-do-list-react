import styled, { css } from "styled-components";

const TasksList = styled.ul`
    list-style: none;
    padding: 10px;
    `;

const ListTask = styled.li`
    border-bottom: solid 2px #ededed;
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    grid-gap: 10px;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;`}
`;

const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;`}
`;

const Button = styled.button`
    height: 30px;
    width: 30px;
    color: white;
    border: 0px;
    cursor: pointer;
    transition: background 1s;
    &:active 
    {outline: solid 2px #000000};

    ${({ toggleDone }) => toggleDone && css`
        background: #218b21;
        &:hover 
        {background: hsl(120, 62%, 44%);}
        `}

    ${({ remove }) => remove && css`
        background: hsl(348, 84%, 47%);
        &:hover
        {background: hsl(348, 84%, 57%);}
        `}
    `;

export { TasksList, ListTask, Content, Button };