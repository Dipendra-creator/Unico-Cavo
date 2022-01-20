import * as React from 'react';
import {Field, Form, Formik, ErrorMessage} from 'formik';

interface MyFormValues {
    name: string;
    email: string;
    message: string
}
// TODO: Fix the form
export default function CustomForm() {
    const initialValues: MyFormValues = {name: '', email: '', message: ''};
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
                const formData = {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                    "_subject": `Regarding email on ${new Date().toLocaleDateString(undefined, {timeZone: 'Asia/Kolkata'})} at
            ${new Date().toLocaleTimeString(undefined, {timeZone: 'Asia/Kolkata'})}`,
                    // Auto Response will not work due to Ajax and Captcha Disable
                    "_autoresponse": `Dear ${values.name}, we have received your mail will revert you as soon as possible`,
                    "_template": "box"
                }
                alert(values)
                console.log(formData)
                try {
                    // TODO: Change email to infounicocavo@gmail.com
                    const res = await fetch("https://formsubmit.co/ajax/40838f5535e1424aabef5f51e9273915", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    })
                } catch (e) {
                    console.log(e)
                }
                actions.setSubmitting(false);
                actions.resetForm()
            }}
            validate={values => {
                const errors = {
                    name: '',
                    email: '',
                    message: ''
                }
                if (!values.name) {
                    errors.name = 'Name required'
                }
                if (!values.message) {
                    errors.message = 'Message required'
                }
                if (!values.email) {
                    errors.email = 'Email required'
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email';
                }
                return errors
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <Form>
                    <label htmlFor="name" className="uppercase text-sm text-gray-600 font-bold">Full Name</label>
                    <Field id="name" name="name" placeholder="Name"
                           className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && touched.name && <p>{errors.name}</p>}

                    <label htmlFor="email"
                           className="uppercase mt-4 inline-block text-sm text-gray-600 font-bold">Email</label>
                    <Field id="email" name="email" placeholder="Your contact" type="email"
                           className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    {errors.email && touched.email && <p>{errors.email}</p>}

                    <label htmlFor="message"
                           className="uppercase mt-4 inline-block text-sm text-gray-600 font-bold">Message</label>
                    <Field id="message" name="message" placeholder="How can we help you?" as="textarea"
                           className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    {errors.message && touched.message && <p>{errors.message}</p>}

                    <button type="submit" disabled={isSubmitting} name="submit"
                            className="mt-6 uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}
