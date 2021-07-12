import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
    <form>
        <label className="lable-1">
            Name:
            <input type="text" name="name" />
        </label>
        <label className="lable-2">
            Email:
            <input type="email" email="email" />
        </label>
        <label className="label-3">
            Contact Number:
            <input type="text" contact="contact" />
        </label>
        <input type="submit" value="Submit" />
    </form>
    );
}



export default Contact;
