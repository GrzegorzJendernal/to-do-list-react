import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface ListTaskProps {
	hidden?: boolean,
}

interface ContentProps {
	done?: boolean,
}

interface ButtonProps {
	toggleDone?: boolean,
	remove?: boolean,
}

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

    ${({hidden}: ListTaskProps) => hidden && css`
        display: none;
    `}
`;

const Content = styled.span`
    ${({done}: ContentProps) => done && css`
        text-decoration: line-through;
    `}
`;

const StyledLink = styled(Link)`
    color: hsl(180, 100%, 25%);
    text-decoration:none;
`;

const Button = styled.button`
    height: 30px;
    width: 30px;
    color: white;
    border: 0;
    cursor: pointer;
    transition: background 1s;
    &:active 
        {outline: solid 2px #000000};

    ${({toggleDone}: ButtonProps) => toggleDone && css`
        background: #218b21;
        &:hover 
        {background: hsl(120, 62%, 44%);}
    `}

    ${({remove}: ButtonProps) => remove && css`
        background: hsl(348, 84%, 47%);
        &:hover
        {background: hsl(348, 84%, 57%);}
    `}
`;

export { TasksList, ListTask, Content, Button, StyledLink };