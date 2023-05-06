/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

import * as Type from '@Types/index';

export const CreditCardRegisterUpdateContext = createContext({
  update: {
    company: (arg: Type.CreditCardCompanies | undefined) => {},
    numbers: (arg: string) => {},
    expiry: (arg: string) => {},
    owner: (arg: string) => {},
    cvc: (arg: string) => {},
    alias: (arg: string) => {},
    password: {
      first: (arg: string) => {},
      second: (arg: string) => {},
    },
  },
  resetCreditCardValues: () => {},
});

export const CreditCardRegisterContext = createContext({
  creditCard: {
    company: undefined as Type.CreditCardCompanies | undefined,
    numbers: '',
    expiry: '',
    owner: '',
    cvc: '',
    alias: '',
    password: {
      first: '',
      second: '',
    },
  },

  errorMessage: {
    numbers: null as null | string,
    expiry: null as null | string,
    owner: null as null | string,
    cvc: null as null | string,
    password: null as null | string,
  },
});
