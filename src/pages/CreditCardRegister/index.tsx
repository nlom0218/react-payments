import CreditCard from 'components/CreditCard';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as Type from 'types';
import creditCard from 'domains/creditCard';
import useInput from 'hooks/useInput';
import CreditCardNumberInput from './components/CreditCardNumberInput';
import CreditCardExpiryInput from './components/CreditCardExpiryInput';
import CreditCardOwnerInput from './components/CreditCardOwnerInput';
import CreditCardCVCInput from './components/CreditCardCVCInput';
import CreditCardPasswordInput from './components/CreditCardPasswordInput';
import * as S from './style';

function CreditCardRegister() {
  const navigate = useNavigate();

  const [creditCardNumber, setCreditCardNumber, numberErrorMessage] = useInput('' as string, creditCard.isValidNumber);
  const [creditCardExpiry, setCreditCardExpiry, expiryErrorMessage] = useInput('' as string, creditCard.isValidExpiry);
  const [creditCardOwner, setCreditCardOwner, ownerErrorMessage] = useInput('' as string, creditCard.isValidOwner);
  const [creditCardCVC, setCreditCardCVC, CVCErrorMessage] = useInput('' as string, creditCard.isValidCVC);
  const [creditCardPassword, setCreditCardPassword, passwordErrorMessage] = useInput<Type.CreditCardPasswordType>(
    { first: '', second: '' },
    creditCard.isValidPassword,
  );

  const [isFullFilled, setIsFullFilled] = useState(false);

  const handleSubmit = () => {
    if (!isFullFilled) return;

    const newCreditCard: Type.CreditCard = {
      number: creditCardNumber,
      expiry: creditCardExpiry,
      owner: creditCardOwner,
      cvc: creditCardCVC,
      password: {
        first: creditCardPassword.first,
        second: creditCardPassword.second,
      },
    };
    const existCreditCard = JSON.parse(localStorage.getItem('creditCards') || '[]');
    localStorage.setItem('creditCards', JSON.stringify([...existCreditCard, newCreditCard]));
    navigate('/');
  };

  useEffect(() => {
    if (creditCardExpiry === '') return setIsFullFilled(false);
    if (creditCardCVC === '') return setIsFullFilled(false);
    if (creditCardPassword.first === '' || creditCardPassword.second === '') {
      return setIsFullFilled(false);
    }
    if (numberErrorMessage || expiryErrorMessage || ownerErrorMessage || CVCErrorMessage || passwordErrorMessage) {
      return setIsFullFilled(false);
    }

    return setIsFullFilled(true);
  }, [creditCardNumber, creditCardExpiry, creditCardCVC, creditCardPassword]);

  return (
    <S.CreditCardRegisterLayout>
      <S.CreditCardRegisterTopSheet>
        <S.HomeButton type="button" onClick={() => navigate('/')}>
          {`${'<'}`}
        </S.HomeButton>
        <S.CreditCardRegisterHeader>카드 추가</S.CreditCardRegisterHeader>
      </S.CreditCardRegisterTopSheet>
      <S.PreviewCreditCard>
        <CreditCard
          fullFilled={false}
          creditCard={{
            number: creditCardNumber,
            expiry: creditCardExpiry,
            owner: creditCardOwner,
          }}
        />
      </S.PreviewCreditCard>
      <S.CreditCardRegisterForm>
        <CreditCardNumberInput
          creditCardNumber={creditCardNumber}
          setCreditCardNumber={setCreditCardNumber}
          errorMessage={numberErrorMessage}
        />
        <CreditCardExpiryInput
          creditCardExpiry={creditCardExpiry}
          setCreditCardExpiry={setCreditCardExpiry}
          errorMessage={expiryErrorMessage}
        />
        <CreditCardOwnerInput
          creditCardOwner={creditCardOwner}
          setCreditCardOwner={setCreditCardOwner}
          errorMessage={ownerErrorMessage}
        />
        <CreditCardCVCInput
          creditCardCVC={creditCardCVC}
          setCreditCardCVC={setCreditCardCVC}
          errorMessage={CVCErrorMessage}
        />
        <CreditCardPasswordInput
          creditCardPassword={creditCardPassword}
          errorMessage={passwordErrorMessage}
          setCreditCardPassword={setCreditCardPassword}
        />
        <S.ButtonWrapper>
          <S.RegisterButton disabled={!isFullFilled} type="button" onClick={() => handleSubmit()}>
            확인
          </S.RegisterButton>
        </S.ButtonWrapper>
      </S.CreditCardRegisterForm>
    </S.CreditCardRegisterLayout>
  );
}
export default CreditCardRegister;
