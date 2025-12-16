import { Form, Formik } from "formik";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { recipientContactDetailsSchema } from "../utils/schema";
import { initialContactDetails } from "../utils/constants";
import GoBackBtn from "../components/GoBackBtn";
import {
  RecepientDetailsProps,
  RecepientContactDetailsFormValues,
} from "../types";
import InputField from "../components/InputField";
import Button from "../components/Button";

const RecepientContactDetails: React.FC<
  RecepientDetailsProps<RecepientContactDetailsFormValues>
> = ({ onClickSubmit, onClickBack, initialValues }) => {
  return (
    <div className="w-full">
      <div className="flex items-center w-full justify-center">
        <GoBackBtn onClick={() => onClickBack(1)} />
        <span className="font-medium text-xl mr-auto">Recipient details</span>
      </div>
      <Formik
        validationSchema={recipientContactDetailsSchema}
        initialValues={{...initialContactDetails, ...initialValues}}
        onSubmit={onClickSubmit}
      >
        {({
          values,
          setFieldValue,
          setFieldTouched,
          errors,
          touched,
          handleChange,
        }) => (
          <Form className="w-full flex flex-col gap-8">
            <InputField
              errors={errors}
              name="email"
              label="Recipient email"
              placeholder="Enter recipient email"
              value={values.email}
              touched={touched}
              onChange={handleChange}
            />
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="phoneNumber" className="text-[#013941]">
                Recipient phone number
              </label>
              <PhoneInput
                international
                defaultCountry="NG"
                value={values.phoneNumber}
                onChange={(value) => setFieldValue("phoneNumber", value)}
                onBlur={() => setFieldTouched("phoneNumber", true)}
                className="border border-[#E0E0E0] rounded-4xl px-6 py-4"
                numberInputProps={{
                  placeholder: "000 - 000 - 00000",
                  className: "outline-none",
                  id: "phoneNumber",
                }}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <span className="text-sm text-red-500">
                  {errors.phoneNumber}
                </span>
              )}
            </div>
            <Button>Next</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RecepientContactDetails;
