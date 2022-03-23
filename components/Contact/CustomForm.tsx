import React from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {ToastContainer, toast} from "react-toastify";

import 'react-toastify/dist/ReactToastify.min.css';

interface MyFormValues {
    name: string;
    email: string;
    message: string
}

export default function CustomForm() {
    const initialValues: MyFormValues = {name: '', email: '', message: ''};

    async function submitForm(values: MyFormValues, actions: FormikHelpers<MyFormValues>) {
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
        try {
            // TODO: Change email to infounicocavo@gmail.com
            const res = await toast.promise(
                fetch("https://formsubmit.co/ajax/40838f5535e1424aabef5f51e9273915", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })

                , {
                    pending: "Sending Message",
                    error: "Sorry, could not deliver your message please try again",
                    success: "Message delivered!"
                }, {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            console.log(res)
        } catch (e) {
            console.log("Error:", e)
        }
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={initialValues}

            onSubmit={submitForm}
            validate={values => {
                const errors: Partial<MyFormValues> = {}
                if (!values.name) {
                    errors.name = 'Required'
                }
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.message) {
                    errors.message = 'Required'
                }
                return errors;
            }}
        >
            {({
                  errors,
                  touched,
                  isSubmitting,
              }) => (
                <Form>
                    <label htmlFor="name" className="uppercase text-sm text-gray-600 font-bold">Full Name</label>
                    <Field id="name" name="name" placeholder="Name" required
                           className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && touched.name && <p>{errors.name}</p>}

                    <label htmlFor="email"
                           className="uppercase mt-4 inline-block text-sm text-gray-600 font-bold">Email</label>
                    <Field id="email" name="email" placeholder="Your contact" type="email" required
                           className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    {errors.email && touched.email && <p>{errors.email}</p>}

                    <label htmlFor="message"
                           className="uppercase mt-4 inline-block text-sm text-gray-600 font-bold">Message</label>
                    <Field id="message" name="message" placeholder="How can we help you?" as="textarea" required
                           className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    {errors.message && touched.message && <p>{errors.message}</p>}

                    <button type="submit" disabled={isSubmitting} name="submit"
                            className="mt-6 uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
                    <ToastContainer/>

                </Form>
            )}
        </Formik>
    );
}
