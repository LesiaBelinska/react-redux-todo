import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";

import s from "./TodoForm.module.css";

const schema = yup.object().shape({
  todo: yup.string().min(5).required("enter a todo, this is a required field"),
});

const initialValues = {
  todo: "",
};

const todoInputId = nanoid();

const TodoForm = ({ onSubmit }) => {
    
    const handleSubmit = (values, { resetForm }) => {
        onSubmit(values.todo);
        resetForm();
    }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
          <Form
            className={s.form}
            autoComplete="off">
              <Field
                className={s.input}
                type="text"
                name="todo"
                id={todoInputId}
              />
        <ErrorMessage className={s.error} name="todo" component="div" />
        <button className={s.button} type="submit">
          add todo
        </button>
      </Form>
    </Formik>
  );
};

export default TodoForm;
