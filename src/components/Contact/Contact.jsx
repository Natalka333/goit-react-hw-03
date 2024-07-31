import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ contact: { id, name, number }, handleDelete }) => {
    return (
        <li className={css.list}>
            <div className={css.contactItem}>
                <FaUser className={css.icon} />
                <p className={css.cardName}>{name}</p>
            </div>
            <div className={css.contactItem}>
                <FaPhoneAlt className={css.icon} />
                <p className={css.cardNumber}>{number}</p>
            </div>
            <button className={css.button} type="button" onClick={() => handleDelete(id)}>Delete</button>
        </li>
    );
}

export default Contact;
