import PayReceiveCard from "../components/PayReceiveCard";
import { Form, Formik } from "formik";
import {
  cryptoCurrencies,
  fiatOptions,
  initialContactDetails,
  initialCryptoToCashValues,
  initialRecepientDetails,
  walletOptions,
} from "../utils/constants";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import { cryptoToCashSchema } from "../utils/schema";
import { useEffect, useState } from "react";
import RecepientDetails from "./RecepientDetails";
import RecepientContactDetails from "./RecepientContactDetails";
import TxSummary from "./TxSummary";
import { useRouter, useSearchParams } from "next/navigation";
import SuccessPage from "./SuccessPage";
import { CombinedTypes } from "../types";
import { convertCryptoToNaira } from "../utils/helpers";

const CryptoToCash = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [formValues, setFormValues] = useState<CombinedTypes>({
    ...initialCryptoToCashValues,
    ...initialRecepientDetails,
    ...initialContactDetails,
  });
  const params = new URLSearchParams(searchParams.toString());

  const handleSubmit = <T,>(values: T) => {
    setFormValues((prev) => ({ ...prev, ...(values as CombinedTypes) }));
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    params.set("step", `${currentIndex + 1}`);
    push(`?${params.toString()}`);

    return () => {
      push("/");
    };
  }, [currentIndex]);

  // if (currentIndex === 1)
  //   return (
  //     <RecepientDetails
  //       onClickBack={setCurrentIndex}
  //       onClickSubmit={handleSubmit}
  //       initialValues={formValues}
  //     />
  //   );
  if (currentIndex === 2)
    return (
      <RecepientContactDetails
        onClickSubmit={handleSubmit}
        onClickBack={setCurrentIndex}
        initialValues={formValues}
      />
    );
  if (currentIndex === 3)
    return (
      <TxSummary
        onClickBack={setCurrentIndex}
        amountPaid={formValues.amountPaid}
        cryptoCurrency={formValues.cryptoCurrency}
        walletPaidFrom={formValues.walletPaidFrom}
        onClickSubmit={handleSubmit}
      />
    );
  if (currentIndex === 1)
    return (
      <SuccessPage
        onClickBack={(idx) => {
          setCurrentIndex(idx);
          setFormValues({
            ...initialCryptoToCashValues,
            ...initialRecepientDetails,
            ...initialContactDetails,
          });
        }}
      />
    );

  return (
    <div className="w-full">
      <Formik
        initialValues={{ ...initialCryptoToCashValues, ...formValues }}
        validationSchema={cryptoToCashSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldValue,
          setValues,
        }) => (
          <Form className="w-full flex flex-col gap-6">
            <PayReceiveCard
              isPay
              amount={values.amountPaid}
              inputProps={{
                name: "amountPaid",
                errors,
                touched,
                className:
                  "border-0 font-semibold text-2xl !text-[#000E10] !p-0 !rounded-none w-3/4!",
                onChange: (e) => {
                  handleChange(e);
                  setTimeout(() => {
                    setFieldValue("amountReceived", 0);
                    setFieldValue("fiatCurrency", "");
                  }, 100);
                },
              }}
              dropdownProps={{
                errors,
                touched,
                options: cryptoCurrencies,
                selectedOption: values.cryptoCurrency,
                isGrey: true,
                name: "cryptoCurrency",
                onClickOption(option) {
                  setValues({
                    ...values,
                    cryptoCurrency: option.value,
                    amountReceived: 0,
                    fiatCurrency: "",
                  });
                },
              }}
            />
            <PayReceiveCard
              key={`${values.amountPaid}${values.cryptoCurrency}`}
              amount={values.amountReceived}
              dropdownProps={{
                errors,
                touched,
                options: fiatOptions,
                isGrey: true,
                name: "fiatCurrency",
                selectedOption: values.fiatCurrency,
                onClickOption(option) {
                  setFieldValue("fiatCurrency", option.value);
                  setFieldValue(
                    "amountReceived",
                    convertCryptoToNaira(
                      values.cryptoCurrency,
                      values.amountPaid
                    )
                  );
                },
              }}
            />
            <Dropdown
              options={walletOptions}
              errors={errors}
              touched={touched}
              name={"walletPaidFrom"}
              placeholder="Select an option"
              label="Pay from"
              onClickOption={(option) =>
                setFieldValue("walletPaidFrom", option.value)
              }
              selectedOption={values.walletPaidFrom}
            />
            <Dropdown
              options={walletOptions}
              errors={errors}
              touched={touched}
              name={"walletPaidTo"}
              placeholder="Select an option"
              label="Pay to"
              onClickOption={(option) =>
                setFieldValue("walletPaidTo", option.value)
              }
              selectedOption={values.walletPaidTo}
            />
            <Button>Convert now</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CryptoToCash;
