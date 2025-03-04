import styled from 'styled-components';

import { CreditCardLayoutStyleProps } from './type';

export const CreditCardLayout = styled.div<CreditCardLayoutStyleProps>`
  width: 213px;
  height: 133px;
  display: grid;
  grid-template-rows: 30px 45px 1fr;
  align-items: center;
  background: linear-gradient(${(props) => `${props.backgroundColor}, ${props.gradientColor}`});
  color: ${(props) => props.fontColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 14px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 3px;
  border: ${(props) => (props.isValid ? '' : '2px solid red')};
`;

export const CreditCardCompanyName = styled.span`
  align-self: flex-start;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.085em;
`;

export const CreditCardICChip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
`;

export const CreditCardInfoLayout = styled.div`
  align-self: flex-end;
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 12px;
  align-items: center;
  min-width: 100%;
`;

export const CreditCardContainer = styled.div`
  min-width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 165px auto;
  column-gap: 10px;
`;

export const CreditCardNumber = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5px;
  justify-items: flex-start;
`;

export const CreditCardBox = styled.div`
  display: flex;
  align-items: start;
  letter-spacing: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
