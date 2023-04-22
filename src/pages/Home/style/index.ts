import styled from 'styled-components';

export const HomeLayout = styled.div`
  padding: 20px 36px;
`;

export const HomeHeader = styled.h3`
  font-size: 18px;
  line-height: 18.75px;
  margin-bottom: 25px;
`;

export const CreditCardList = styled.div`
  display: grid;
  row-gap: 40px;
  justify-items: center;
`;

export const RegisterCreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const RegisterCreditCardText = styled.span`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const RegisterCreditCardButton = styled.button`
  width: 241px;
  height: 133px;
  background-color: #e5e5e5;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
`;
