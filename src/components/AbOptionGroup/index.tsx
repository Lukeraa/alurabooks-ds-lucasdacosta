import React, { useState } from "react";
import styled from "styled-components";


const StyledSection = styled.section<{ selected: boolean }>`
    width: 194px;
    height: 88px;
    background: ${props => props.selected ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFF'};
    border: 1px solid;
    border-color: ${props => props.selected ? '#002F52' : '#EB9B00'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    gap: 8px+;
    cursor: pointer;
    header {
        color: ${props => props.selected ? '#FFF' : '#EB9B00'};
    }
    strong {
        color: ${props => props.selected ? '#FFF' : '#EB9B00'};
        font-weight: 700;
        font-size: 16px;
    }
    footer {
        color: ${props => props.selected ? '#FFF' : '#rgba(0, 0, 0, .54)'};
    }
    `


export interface AbOptionGroupBase {
    id: number
    title: string
    body: string
    footer: string
}

export interface AbOptionGroupProps {
    options: AbOptionGroupBase[]
    defaultValue?: AbOptionGroupBase | null
    onChange?: (option: AbOptionGroupBase) => void
}

export const AbOptionGroup = ({ options, onChange, defaultValue } : AbOptionGroupProps) => {
    const [select, setSelect] = useState<AbOptionGroupBase | null>(defaultValue ?? null)
    const whenSelect = (option: AbOptionGroupBase): void => {
        setSelect(option)
        if (onChange) {
            onChange(option)
        }
    }

    return (
        <>
            {options.map(option => 
                //<StyledSection onClick={() => whenSelect(option)} key={option.id} selected={select.id == option.id}>
                <StyledSection onClick={() => whenSelect(option)} key={option.id} selected={select == null ? select==false : select.id == option.id}>
                    <header>
                        {option.title}
                    </header>
                    <div>
                        <strong>
                            {option.body}
                        </strong>
                    </div>
                    <footer>
                        {option.footer}
                    </footer>
                </StyledSection>
            )}
        </>       
    )
}
