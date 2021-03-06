import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';


const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem'
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem'
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem'
    }
}

const sizeStyles = css`
    ${({ size }) => css`
    height: ${sizes[size].height};
    font-size:${sizes[size].fontSize};
    `}
    `
const colorStyles = css`
    ${({ theme, color }) => {
        const selected = theme.pallete[color];
        return css`
        background:${selected};
        &:hover{
            background:${lighten(0.1, selected)}
        }
        &.active{
            background:${darken(0.1, selected)}
        }
        `
    }
    }
`
const StyledButton = styled.button`
/* 공통스타일 */
outline:none;
border:none;
border-radius:4px;
color:white;
font-weight:bold;
cursor:pointer;
padding-left:1rem;
padding-right:1rem;
&+&{
    margin-left:1rem
}

/* 크기 */
${sizeStyles}

/* 색상 */
${colorStyles}
`

function Button({ children, color, size }) {
    return (
        <StyledButton color={color} size={size}>{children}</StyledButton>
    )
}

Button.defaultProps = {
    color: 'blue',
    size: 'medium'
}

export default Button;