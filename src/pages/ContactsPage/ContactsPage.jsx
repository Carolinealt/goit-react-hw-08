import { useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { selectContactsList } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const contacts = useSelector(selectContactsList);
  return (
    <div>
      <ContactList />
    </div>
  );
};
export default ContactsPage;
