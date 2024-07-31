
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import css from './ContactForm.module.css'

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});


const initialValues = {
    username: "",
    number: ""
};


const ContactForm = ({ addNewContact }) => {


    const handleSubmit = (values, actions) => {
        console.log(values);
        addNewContact({
            id: nanoid(),
            name: values.username,
            number: values.number
        });
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={css.form}>
                <label className={css.label} >Name</label>
                <Field className={css.field} type="text" name="username" />
                <ErrorMessage className={css.error} name="username" component="div" />

                <label className={css.label} >Number</label>
                <Field className={css.field} type="tel" name="number" />
                <ErrorMessage className={css.error} name="number" component="div" />

                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};


export default ContactForm

