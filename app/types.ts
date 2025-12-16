import { FormikErrors, FormikProps, FormikTouched } from "formik";
import { HTMLAttributes, InputHTMLAttributes, SVGProps } from "react";

export interface TabsProps {
  tabNames: Array<string>;
  onClickTab: (tabName: string, index?: number) => void;
  activeTab: string;
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export interface BasicFieldProps<T = any> {
  label?: string;
  required?: boolean;
  errors: FormikErrors<T>;
  touched?: FormikTouched<T>;
}

export interface InputProps<T = any>
  extends InputHTMLAttributes<HTMLInputElement>,
    BasicFieldProps<T> {
  leftIcon?: React.ReactNode;
}

export interface DropdownProps<T = any> extends BasicFieldProps<T> {
  options: Array<Option>;
  isGrey?: boolean;
  name: string;
  placeholder?: string;
  onClickOption: (option: Option) => void;
  selectedOption?:string
}

export interface Option {
  label: string;
  value: string;
  icon?: React.FC<IconProps>;
  disabled?: boolean;
}

export interface IconProps extends SVGProps<SVGSVGElement> {}

export interface PayReceiveCardProps<T, O> {
  isPay?: boolean;
  amount: number;
  inputProps?: InputProps<T>;
  dropdownProps: DropdownProps<O>;
}

export interface CryptoToCashTypes {
  amountPaid: number;
  amountReceived: number;
  cryptoCurrency: string;
  fiatCurrency: string;
  walletPaidFrom: string;
  walletPaidTo: string;
}

export type SubmitFormType<T> = (values: T) => void;

export interface RecepientDetailsProps<T> {
  onClickSubmit: SubmitFormType<T>;
  onClickBack: (step: number) => void;
  initialValues: T;
}

export interface RecepientBankDetailsFormValues {
  bank: string;
  accountNumber: string;
  accountName: string;
}
export interface RecepientContactDetailsFormValues {
  email: string;
  phoneNumber: string;
}

export type CombinedTypes = CryptoToCashTypes &
  RecepientBankDetailsFormValues &
  RecepientContactDetailsFormValues;
