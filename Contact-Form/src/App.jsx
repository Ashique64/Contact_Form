import React, { useState } from 'react';
import "./App.scss";

function App() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: false,
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: '',
    });

    const validate = () => {
        let isValid = true;
        let errors = {};

        if (!formData.firstName) {
            errors.firstName = 'This field is required';
            isValid = false;
        }

        if (!formData.lastName) {
            errors.lastName = 'This field is required';
            isValid = false;
        }

        if (!formData.email) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email Address is invalid';
            isValid = false;
        }

        if (!formData.queryType) {
            errors.queryType = 'Please select a query type';
            isValid = false;
        }

        if (!formData.message) {
            errors.message = 'This field is required';
            isValid = false;
        }

        if (!formData.consent) {
            errors.consent = 'To submit this form, please consent to being contacted';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            // Handle form submission
            console.log('Form data:', formData);
            alert('Form submitted successfully!');
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <>
            <div className="container">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <h2 className="heading">Contact Us</h2>
                        <div className="full_name">
                            <div className="first">
                                <label>
                                    First Name <span style={{ color: "green" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <span className="error">{errors.firstName}</span>}
                            </div>
                            <div className="last">
                                <label>
                                    Last Name <span style={{ color: "green" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <span className="error">{errors.lastName}</span>}
                            </div>
                        </div>

                        <label>
                            Email Address <span style={{ color: "green" }}>*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}

                        <label>
                            Query Type <span style={{ color: "green" }}>*</span>
                        </label>
                        <div className="radio">
                            <div className="radio1">
                                <input
                                    type="radio"
                                    name="queryType"
                                    value="General Enquiry"
                                    checked={formData.queryType === 'General Enquiry'}
                                    onChange={handleChange}
                                />
                                <span> General Enquiry</span>
                            </div>
                            <div className="radio2">
                                <input
                                    type="radio"
                                    name="queryType"
                                    value="Support Request"
                                    checked={formData.queryType === 'Support Request'}
                                    onChange={handleChange}
                                />
                                <span> Support Request</span>
                            </div>
                        </div>
                        {errors.queryType && <span className="error">{errors.queryType}</span>}

                        <label>
                            Message <span style={{ color: "green" }}>*</span>
                        </label>
                        <input
                            className="message_box"
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}

                        <div className="check">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                            />
                            <span>
                                I consent to being contacted by the team <span style={{ color: "green" }}>*</span>
                            </span>
                        </div>
                        {errors.consent && <span className="error">{errors.consent}</span>}

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
