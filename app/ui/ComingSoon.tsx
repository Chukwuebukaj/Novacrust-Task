import React from "react";
import { TabsProps } from "../types";
import Button from "../components/Button";
import { Form, Formik } from "formik";
import { comingSoonSchema } from "../utils/schema";
import InputField from "../components/InputField";
import { toast } from "react-toastify";

const ComingSoon: React.FC<Pick<TabsProps, "activeTab">> = ({ activeTab }) => {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <h1 className="text-[#013941] font-medium text-3xl">Coming Soon!</h1>
      <div className="text-[#4F4F4F] text-[20px] flex flex-col items-center">
        <p>{activeTab} is almost here.</p>
        <p>Enter your email and we’ll let you know the moment it’s live.</p>
      </div>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={comingSoonSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          toast("Submitted successfully!", { type: "success" });
        }}
      >
        {({ touched, errors, handleChange, values }) => (
          <Form className="w-full">
            <InputField
              touched={touched}
              errors={errors}
              name="email"
              label={"Email"}
              type="email"
              required
              value={values.email}
              onChange={handleChange}
            />
            <Button className="mt-10">Update me</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ComingSoon;
