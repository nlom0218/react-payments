import Input from '@Components/Input';

import InputLayout from './InputLayout';
import * as S from '../style';

type Props = {
  creditCardCVC: string;
  errorMessage: string | null;
  setCreditCardCVC: React.Dispatch<React.SetStateAction<string>>;
};

function CreditCardCVCInput({ creditCardCVC, errorMessage, setCreditCardCVC }: Props) {
  const handleChangeCreditCardCVC = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCVC = event.target.value;
    // if (newCVC.length <= 3) {
    setCreditCardCVC(newCVC);
    // }
  };

  const handleGuideMessage = () => {
    window.alert('카드 뒷면에 입력된 마지막 숫자 3자리를 입력해주세요.');
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <S.CreditCardRegisterLabel>보안 코드(CVC/CVV)</S.CreditCardRegisterLabel>
      <S.CVCInputLayout>
        <Input
          type="password"
          value={creditCardCVC}
          width="72px"
          textAlign="center"
          onChange={handleChangeCreditCardCVC}
          maxLength={3}
        />
        <S.GuideMessage onClick={handleGuideMessage}>?</S.GuideMessage>
      </S.CVCInputLayout>
    </InputLayout>
  );
}

export default CreditCardCVCInput;
