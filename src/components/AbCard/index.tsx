import React, { ReactNode } from "react"
import styled from "styled-components"


interface CardProps {
    children: ReactNode,
}

const StyledCard = styled.div`
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 551px;
    padding: 48px 32px 48px 48px;
    border-radius: 10px;
    gap 16px;
`

export const AbCard = ({ children }: CardProps) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}
