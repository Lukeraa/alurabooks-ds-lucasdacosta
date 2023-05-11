import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    background: ${props => props.btnType === 'primary' ? '#EB9B00' : '#FFF'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${props => props.btnType === 'primary' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    font-family: Poppins sans-serif;
    cursor: pointer;
    ${props => props.btnType === 'primary' ? css`
            &:hover {
                border: 2px solid #B87900;
                background: #B87900;
            }
        ` : css`
            &:hover {
                border: 2px solid #B87900;
                background: #FFF;
                color: #B87900;
            }
        `}
`;
const AbButton = ({
  text,
  btnType = 'primary',
  onClick
}) => {
  return /*#__PURE__*/React.createElement(StyledButton, {
    onClick: onClick,
    btnType: btnType
  }, text);
};

const StyledCard = styled.div`
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 551px;
    padding: 48px 32px 48px 48px;
    border-radius: 10px;
    gap 16px;
`;
const AbCard = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(StyledCard, null, children);
};

const StyledTag = styled.div`
    background-color: #EB9B00;
    color: #FFF;
    padding: 24px 32px;
    font-weight: 700;
    display: inline-block;
    font-family: sans-serif;
`;
const AbTag = ({
  text
}) => {
  return /*#__PURE__*/React.createElement(StyledTag, null, /*#__PURE__*/React.createElement("h1", null, text));
};

const StyledSection = styled.section`
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
    `;
const AbOptionGroup = ({
  options,
  onChange,
  defaultValue
}) => {
  const [select, setSelect] = useState(defaultValue ?? null);
  const whenSelect = option => {
    setSelect(option);
    if (onChange) {
      onChange(option);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, options.map(option =>
  /*#__PURE__*/
  //<StyledSection onClick={() => whenSelect(option)} key={option.id} selected={select.id == option.id}>
  React.createElement(StyledSection, {
    onClick: () => whenSelect(option),
    key: option.id,
    selected: select == null ? select == false : select.id == option.id
  }, /*#__PURE__*/React.createElement("header", null, option.title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, option.body)), /*#__PURE__*/React.createElement("footer", null, option.footer))));
};

const StyledInput = styled.input`
    background: ${props => props.darkmode ? 'transparent' : '#FFF'};
    color: #A4A4A4;
    width: 510px;
    padding: 10px 24px;
    border: 1px solid #002F52;
    border-color: ${props => props.darkmode ? '#FFF' : '#002F52'};
    border-radius: 24px;
    text-align: ${props => props.placeholderAlign};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    &:focus{
        outline: none;
    }
    ::placeholder,
    ::-webkit-input-placeholder  {
        color: ${props => props.darkmode ? '#FFF' : '#002F52'};
    }
    `;
const StyledLabel = styled.label`
    color: ${props => props.darkmode ? '#FFF' : '#002F52'};
    margin-left: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
`;
const AbInput = ({
  label,
  placeholder = "",
  placeholderAlign = "left",
  value,
  type = "text",
  darkmode = false
}) => {
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement(StyledLabel, {
    darkmode: darkmode
  }, label), /*#__PURE__*/React.createElement(StyledInput, {
    placeholder: placeholder,
    placeholderAlign: placeholderAlign,
    darkmode: darkmode,
    type: type,
    value: value
  }));
};

const StyledButton$1 = styled.button`
    background: #002F52;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: none;
    cursor: pointer;
    color: #FFF;
    width: 28px;
    height: 28px;
    border-radius: 50%;
`;
const StyledSpan = styled.span`
    font-size: 18px;
    line-height: 27px;
    display: inline-block;
    margin: 0 12px;
    color: #002F52;
    font-family: Arial, Helvetica, sans-serif;
`;
const StyledFlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StyledContainer = styled.div`
    width: 100px;
    text-align: center;
    display: inline-block;
`;
const StyledLabel$1 = styled.label`
    color: #002F52;
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 8px;
`;
const AbQuantityInput = ({
  onChange
}) => {
  const [value, setValue] = useState(1);
  useEffect(() => {
    if (onChange) {
      onChange(Number(value));
    }
  }, [value]);
  return /*#__PURE__*/React.createElement(StyledContainer, null, /*#__PURE__*/React.createElement(StyledLabel$1, null, "Quantidade"), /*#__PURE__*/React.createElement(StyledFlexContainer, null, /*#__PURE__*/React.createElement(StyledButton$1, {
    onClick: () => setValue(prev => prev - 1)
  }, "-"), /*#__PURE__*/React.createElement(StyledSpan, null, value), /*#__PURE__*/React.createElement(StyledButton$1, {
    onClick: () => setValue(prev => prev + 1)
  }, "+")));
};

const JanelaModal = styled.div`
    position: fixed;
    padding: 64px;
    background: #FFFFFF;
    box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const FundoModal = styled.div`
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: rgba(101, 101, 101, 0.85);
`;
const TituloModalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    align-items: center;
`;
const TituloModal = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #EB9B00;
    margin: 0;
`;
const BotaoFecharModal = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: #002F52;
`;
const AbModal = ({
  children,
  aberta,
  aoFechar,
  titulo
}) => {
  if (!aberta) {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FundoModal, {
    onClick: aoFechar
  }), /*#__PURE__*/React.createElement(JanelaModal, null, /*#__PURE__*/React.createElement(TituloModalWrapper, null, /*#__PURE__*/React.createElement(TituloModal, null, titulo), /*#__PURE__*/React.createElement(BotaoFecharModal, {
    onClick: aoFechar
  }, "X")), children));
};

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
const Thing = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", null, children || `the snozzberries taste like snozzberries`);
};

export { AbButton, AbCard, AbInput, AbModal, AbOptionGroup, AbQuantityInput, AbTag, Thing };
//# sourceMappingURL=alurabooks-ds-lucasdacosta.esm.js.map
