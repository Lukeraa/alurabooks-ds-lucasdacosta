import React from "react"
import styled from "styled-components"


export interface AbTagProps {
    text: string,
}

const StyledTag = styled.div`
    background-color: #EB9B00;
    color: #FFF;
    padding: 24px 32px;
    font-weight: 700;
    display: inline-block;
    font-family: sans-serif;
`

export const AbTag = ({ text }: AbTagProps) => {
    return (
        <StyledTag>
            <h1>{text}</h1>
        </StyledTag>
    )
}
