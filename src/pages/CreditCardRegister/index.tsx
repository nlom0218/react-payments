import { useModal } from 'noah-modal';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@Components/Button';
import CreditCard from '@Components/CreditCard';
import Header from '@Components/Header';

import useCreditCardValidation from '@Hooks/useCreditCardValidation';

import { CreditCardRegisterContext } from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

import scrollWindow from '@Utils/scrollWindow';

import { PATH_ALIAS } from '@Constants/routes';

import CreditCardCVCInput from './CreditCardCVCInput';
import CreditCardExpiryInput from './CreditCardExpiryInput';
import CreditCardNumberInput from './CreditCardNumberInput';
import CreditCardOwnerInput from './CreditCardOwnerInput';
import CreditCardPasswordInput from './CreditCardPasswordInput';
import * as S from './style';

function CreditCardRegister() {
  const navigate = useNavigate();

  const { creditCard, errorMessage } = useContext(CreditCardRegisterContext);

  const { openModal } = useModal();
  const isValid = useCreditCardValidation(creditCard, Object.values(errorMessage));

  const handleSubmit = () => {
    if (!isValid) return;
    if (!creditCard.company) return;

    navigate(PATH_ALIAS.alias);
  };

  const handleClickSelectCreditCompanyButton = () => {
    openModal('creditCardCompany');
  };

  useEffect(() => {
    scrollWindow.toTop();
    if (!creditCard.company) {
      openModal('creditCardCompany');
    }
  }, []);

  return (
    <>
      <Header title="카드 추가" hasBackButton />
      <S.CreditCardRegister>
        <S.PreviewCreditCard>
          <CreditCard
            fullFilled={false}
            numbers={creditCard.numbers}
            expiry={creditCard.expiry}
            owner={creditCard.owner}
            company={creditCard.company}
          />
          <S.ReSelectCardCompanyButton onClick={handleClickSelectCreditCompanyButton}>
            {creditCard.company ? '카드 재선택' : '카드 선택'}
          </S.ReSelectCardCompanyButton>
        </S.PreviewCreditCard>
        <S.CreditCardRegisterForm>
          <CreditCardNumberInput />
          <CreditCardExpiryInput />
          <CreditCardOwnerInput />
          <CreditCardCVCInput />
          <CreditCardPasswordInput />
          <S.ButtonWrapper>
            <Button disabled={!isValid} type="button" handleClick={handleSubmit} text="다음" />
          </S.ButtonWrapper>
        </S.CreditCardRegisterForm>
      </S.CreditCardRegister>
    </>
  );
}
export default CreditCardRegister;
