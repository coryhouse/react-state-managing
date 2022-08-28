import React, { useState } from "react";
import { saveShippingAddress } from "./services/shippingService";
import { useCart } from "./cartContext";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

// Declaring outside component to avoid recreation on each render
const emptyAddress = {
  city: "",
  country: "",
};

const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

const checkoutSchema = Yup.object().shape({
  city: Yup.string().required("City is required."),
  country: Yup.string().required("Country is required"),
});

export default function Checkout() {
  const { dispatch } = useCart();
  const [saveError, setSaveError] = useState(null);

  function getErrors(address) {
    const result = {};
    if (!address.city) result.city = "City is required.";
    if (!address.country) result.country = "Country is required.";
    return result;
  }

  async function handleSubmit(address, formikProps) {
    const { setStatus, setSubmitting } = formikProps;
    try {
      await saveShippingAddress(address);
      dispatch({ type: "empty" });
      setSubmitting(false);
      setStatus(STATUS.COMPLETED);
    } catch (err) {
      setSaveError(err);
    }
  }

  return (
    <Formik
      initialValues={emptyAddress}
      // validate={getErrors}           // Uncomment this to use our existing validation logic instead
      validationSchema={checkoutSchema} // Using YUP for validation
      onSubmit={handleSubmit}
    >
      {({
        errors,
        isValid,
        status = STATUS.IDLE,
        /* and other goodies */
      }) => {
        if (saveError) throw saveError;
        if (status === STATUS.COMPLETED) return <h1>Thanks for shopping!</h1>;

        return (
          <Form>
            <h1>Shipping Info</h1>
            {!isValid && status === STATUS.SUBMITTED && (
              <div role="alert">
                <p>Please fix the following errors:</p>
                <ul>
                  {Object.keys(errors).map((key) => {
                    return <li key={key}>{errors[key]}</li>;
                  })}
                </ul>
              </div>
            )}

            <div>
              <label htmlFor="city">City</label>
              <br />
              <Field type="text" name="city" />
              <ErrorMessage role="alert" name="city" component="p" />
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <br />
              <Field as="select" name="country">
                <option value="">Select Country</option>
                <option value="China">China</option>
                <option value="India">India</option>
                <option value="United Kingodom">United Kingdom</option>
                <option value="USA">USA</option>
              </Field>
              <ErrorMessage role="alert" name="country" component="p" />
            </div>

            <div>
              <input
                type="submit"
                className="btn btn-primary"
                value="Save Shipping Info"
                disabled={status === STATUS.SUBMITTING}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
