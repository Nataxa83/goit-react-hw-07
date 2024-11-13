import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";

// import { addContact } from "../../redux/contactsSlice";
import { contactFormSchema } from "../../components/contactFormSchema";

import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import { selectContacts } from "../../redux/selectors";

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
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
    
    dispatch(addContact(newContact));
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
        <Field type="text" 
                name="name" 
                placeholder=" Jhon Smith" 
                className={css.formInput} />
        <ErrorMessage className={css.errorName} 
                        name="name" 
                        component="span" />

        <label>
          <span className={css.label}>Number</span>
        </label>
        <Field type="tel" 
                name="number" 
                placeholder="XXX-XXX-XXXX" 
                className={css.formInput} />
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
