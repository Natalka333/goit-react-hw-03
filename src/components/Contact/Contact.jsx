import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ contact, handleDelete }) => {
    return (
        <li className={css.list}>
            <div className={css.contactItem}>
                <FaUser className={css.icon} />
                <p className={css.cardName}>{contact.name}</p>
            </div>
            <div className={css.contactItem}>
                <FaPhoneAlt className={css.icon} />
                <p className={css.cardNumber}>{contact.number}</p>
            </div>
            <button className={css.button} type="button" onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
    );
}

export default Contact;
