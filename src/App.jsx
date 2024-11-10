import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import css from "./App.module.css";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm  />
      <SearchBox  />
      <ContactList  />
    </>
  );
}
