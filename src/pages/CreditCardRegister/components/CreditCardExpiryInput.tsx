import Input from '@Components/Input';

import InputLayout from './InputLayout';
import * as S from '../style';

type Props = {
  creditCardExpiry: string;
  errorMessage: string | null;
  setCreditCardExpiry: React.Dispatch<React.SetStateAction<string>>;
};

function CreditCardExpiryInput({ creditCardExpiry, errorMessage, setCreditCardExpiry }: Props) {
  const handleChangeCreditCardExpiry = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newCardExpiry = event.target.value.replaceAll('/', '');

    if (newCardExpiry.length > 4) return;

    if (newCardExpiry.length >= 3 && newCardExpiry.length <= 4) {
      const newCardExpiryArray = newCardExpiry.split('');
      newCardExpiryArray.splice(2, 0, '/').join('');
      newCardExpiry = newCardExpiryArray.join('');
    }

    setCreditCardExpiry(newCardExpiry);
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
      <Input
        placeholder="MM/YY"
        type="string"
        value={creditCardExpiry}
        width="40%"
        textAlign="center"
        onChange={handleChangeCreditCardExpiry}
        maxLength={5}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </InputLayout>
  );
}

export default CreditCardExpiryInput;
