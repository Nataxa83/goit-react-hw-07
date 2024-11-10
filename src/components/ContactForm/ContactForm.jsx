import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";

import { addContact } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { contactFormSchema } from "../../components/contactFormSchema";

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contactsData.items);
  const handleSubmit = (values, actions) => {

    if (contacts.some(contact => contact.number === values.number)) {
      alert("This number already exists!");
      return;
    }
    const newContact = {
      id: Date.now(),
      name: values.name,
      number: values.number,      
    }
    const action = addContact(newContact);
    dispatch(action);
    actions.resetForm();
  };
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}>
      <Form className={css.contactForm}>
        <label>
          <span className={css.label}>Name</span>
        </label>
        <Field type="text" name="name" placeholder=" Jhon Smith" className={css.formInput} />
        <ErrorMessage className={css.errorName} name="name" component="span" />

        <label>
          <span className={css.label}>Number</span>
        </label>
        <Field type="tel" name="number" placeholder="+XX XX XXX XX XX" className={css.formInput} />
        <ErrorMessage
          className={css.errorNumber}
          name="number"
          component="span"
        />

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
