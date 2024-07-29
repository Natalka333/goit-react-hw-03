import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

const ContactList = ({ contacts, handleDelete }) => {
    return (
        <div className={css.container}>
            <ul className={css.section}>
                {contacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                        handleDelete={handleDelete}
                    />
                ))}

            </ul>
        </div>
    )
}

export default ContactList
