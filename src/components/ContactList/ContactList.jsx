import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
import { selectContacts, selectFilteredContacts } from "../../redux/selectors";

export default function TaskList() {

  // const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filteredContacts.toLocaleLowerCase())
  // );
  
  if (filteredContacts.length === 0) {
    return <p className={css.text}>No contacts found</p>;
  }
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact}  />
        </li>
      ))}
    </ul>
   );
}
