import { Formik, Form } from "formik";

export default function AppForm({
  children,
  initialValues,
  validationSchema,
  handleSubmit,
  haveRetrieveProps = false,
  enableReinitialize = false,
  ...rest
} = {}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      enableReinitialize={enableReinitialize}
    >
      {(props) => (
        <Form {...rest}>
          {!haveRetrieveProps && children}
          {haveRetrieveProps && children(props)}
        </Form>
      )}
    </Formik>
  );
}
