import React from "react";
import styled, { css } from "styled-components";


export interface AbButtonProps {
    text?: string
    btnType?: 'primary' | 'secondary'
    onClick?: () => void
}


const StyledButton = styled.button<AbButtonProps>`
    background: ${(props: AbButtonProps) => props.btnType === 'primary' ? '#EB9B00' : '#FFF'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: AbButtonProps) => props.btnType === 'primary' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    font-family: Poppins sans-serif;
    cursor: pointer;
    ${(props: AbButtonProps) => props.btnType === 'primary' 
    
        ? css`
            &:hover {
                border: 2px solid #B87900;
                background: #B87900;
            }
        `
        : css`
            &:hover {
                border: 2px solid #B87900;
                background: #FFF;
                color: #B87900;
            }
        `
    }
`
    
export const AbButton= ({ text, btnType = 'primary', onClick } : AbButtonProps) => {

    return (
        <StyledButton onClick={onClick} btnType={btnType}>
            {text}
        </StyledButton>
    )

}
