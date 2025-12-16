import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

export const comingSoonSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const cryptoToCashSchema = Yup.object({
  amountPaid: Yup.number()
    .typeError("Amount paid must be a number")
    .moreThan(0, "Amount paid must be greater than 0")
    .required("Amount paid is required"),

  amountReceived: Yup.number().typeError("Amount received must be a number"),
  // .moreThan(0, "Amount received must be greater than 0")
  // .required("Amount received is required"),

  walletPaidFrom: Yup.string()
    .trim()
    .required("Sender wallet address is required"),

  walletPaidTo: Yup.string()
    .trim()
    .required("Recipient wallet address is required"),

  cryptoCurrency: Yup.string().trim().required("Cryptocurrency is required"),

  fiatCurrency: Yup.string().trim().required("Fiat currency is required"),
});

export const recipientBankDetailsSchema = Yup.object({
  bank: Yup.string().trim().required("Bank is required"),

  accountNumber: Yup.string()
    .matches(/^\d{10}$/, "Account number must be 10 digits")
    .required("Account number is required"),

  accountName: Yup.string()
    .trim()
    .min(2, "Account name is too short")
    .required("Account name is required"),
});

export const recipientContactDetailsSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Email address is required"),

  phoneNumber: Yup.string()
    .required("Phone number is required")
    .test(
      "is-valid-phone",
      "Enter a valid phone number",
      (value) => !!value && isValidPhoneNumber(value)
    ),
});

export const dropdownSearchSchema = Yup.object({
  search: Yup.string()
    .trim()
    .min(1, "Type to search")
    .max(100, "Search term is too long"),
});
