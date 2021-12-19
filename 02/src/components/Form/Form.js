import React from "react";
import "./Form.css";

const Form = ({ submitFn }) => (
    <div className="form__wrapper">
        <h2 className="title">Add new account</h2>
        <form onSubmit={submitFn} className="form__form">
            <input className="form__name" placeholder="Account name" />
            <input className="form__link" placeholder="Account link" />
            <input className="form__image" placeholder="Image url" />
            <textarea className="form__description" placeholder="Description"></textarea>
            <button type="submit" className="form__button">
                Add new account
            </button>
        </form>
    </div>
);

export default Form;
