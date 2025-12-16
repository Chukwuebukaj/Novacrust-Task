import { Form, Formik, FormikErrors } from "formik";
import React from "react";
import GoBackBtn from "../components/GoBackBtn";
import {
  RecepientBankDetailsFormValues,
  RecepientDetailsProps,
} from "../types";
import Dropdown from "../components/Dropdown";
import InputField from "../components/InputField";
import { initialRecepientDetails, nigerianBanks } from "../utils/constants";
import Button from "../components/Button";
import { recipientBankDetailsSchema } from "../utils/schema";

const RecepientDetails: React.FC<
  RecepientDetailsProps<RecepientBankDetailsFormValues>
> = ({ onClickSubmit, onClickBack, initialValues }) => {
  const handleChangeAcctNumber = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean
    ) => Promise<void | FormikErrors<RecepientBankDetailsFormValues>>
  ) => {
    const { name, value } = event.target;
    setFieldValue(name, value);
    setTimeout(() => {
      if (name === "accountNumber") {
        setFieldValue(
          "accountName",
          value.length === 10 ? "ODUTUGA GBEKE" : ""
        );
      }
    }, 100);
  };

  return (
    <div className="w-full">
      <div className="flex items-center w-full justify-center">
        <GoBackBtn onClick={() => onClickBack(0)} />
        <span className="font-medium text-xl mr-auto">Recipient details</span>
      </div>
      <Formik
        initialValues={{ ...initialRecepientDetails, ...initialValues }}
        validationSchema={recipientBankDetailsSchema}
        onSubmit={onClickSubmit}
        validateOnChange
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="w-full flex flex-col gap-8">
            <Dropdown
              options={nigerianBanks}
              name={"bank"}
              onClickOption={(option) => setFieldValue("bank", option.value)}
              errors={errors}
              touched={touched}
              label="Bank" selectedOption={values.bank}
            />
            <InputField
              errors={errors}
              touched={touched}
              label="Account number"
              placeholder="Enter your account number"
              value={values.accountNumber}
              onChange={(e) => handleChangeAcctNumber(e, setFieldValue)}
              name="accountNumber"
            />
            <InputField
              errors={errors}
              touched={touched}
              label="Account name"
              disabled
              value={values.accountName}
              name="accountName"
            />
            <Button>Next</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RecepientDetails;
