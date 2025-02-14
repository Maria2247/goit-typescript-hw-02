import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import React from "react";

// // import { act } from "react";
type SearchBarProps = {
  onSubmit: (query: string) => void;
};
type FormValues = {
  query: string;
};

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const initialValues: FormValues = { query: "" };
  return (
    <header className={css.header}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          if (values.query.trim() === "") {
            toast("Oops, we can't inspire you with an empty search", {
              duration: 2000,
            });
            return;
          }
          onSubmit(values.query.trim());
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="What inspires you?"
          />
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
}

// import React from "react";

// const TestComponent: React.createElement = () => {
//   return <div>Hello, world!</div>;
// };

// export default TestComponent;
