import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import css from "./App.module.css";

export default function App() {
  
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm  />
      <SearchBox  />
      <ContactList  />
    </>
  );
}
