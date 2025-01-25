import React, { useRef, useState } from "react";
import styles from "@/app/page.module.css";
import { useRef } from "react";

export default function ContactForm() {
  const ContactForm = useRef();
  const inputForm = {
    user_name: "",
    user_email: "",
    user_phone: "",
    artist_choice: "",
    date_choice: "",
    user_message: "",
  };

  const artist = [
    "Brain Clutter",
    "Brain Clutter",
    "Brain Clutter",
    "Brain Clutter",
    "Brain Clutter",
    "Brain Clutter",
  ];

  const preferDays = ["Today", "This week", "This weekend", "At a later date"];

  const inputValidationError = {
    user_name: true,
    user_email: false,
    user_phone: false,
    artist_choice: false,
    date_choice: false,
    user_message: false,
  };

  const validateField = (field, value) => {
    let isValid = true;
    switch (field) {
      case "user_name":
        isValid = value.trim() !== "";
        break;
      case "user_email":
        isValid = isValidEmail(value);
        break;
      case "user_phone":
        isValid = isValidPhone(value);
        break;
      case "artist_choice":
        isValid = value.trim() !== "";
        break;
      case "date_choice":
        isValid = value.trim() !== "";
        break;
      case "user_message":
        isValid = value.trim() !== "";
        break;
      default:
        break;
    }
    setValidationError((prevErrors) => ({
      ...prevErrors,
      [field]: !isValid,
    }));
  };

  // allow the user to change the value of a form field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    // Validate field after change
    validateField(name, value);
  };
  //valid email check looks for an '@' and a '.'
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  //valid phone check looks for 10 integers
  const isValidPhone = (phone) => {
    const phoneDigits = phone.replace(/\D/g, "");
    return phoneDigits.length === 10;
  };
  //check the form is valid if every validation error has been passed
  const isFormValid = () => {
    return Object.values(validationError).every((error) => !error);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      console.log("Form validation failed:", validationError, fileSizeError);
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_...", //unique emailjs code
        "template_...",
        ContactForm.current,
        "N8iJs0OwqbPvxYuRo"
      )
      .then(
        () => {
          console.log("MESSAGE SENT!");
          setMessageStatus("success");
          setIsLoading(false);
          setValidationError(inputValidationError);
          ContactForm.current.reset(); // Ensure form is reset
          setFormValues(inputForm);
        },
        (error) => {
          console.log("MESSAGE FAILED", error.text);
          setMessageStatus("error");
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      <h3 className={styles.contactUs}>Contact Us</h3>
      <form className={styles.contactForm} ref={ContactForm}>
        <label className={styles.label}>
          Name:{" "}
          {/*{validationError.user_name && (
          <p className={styles.error}>*Please enter your name*</p>
        )}*/}
        </label>
        <input
          className={styles.form}
          type="text"
          name="user_name"
          aria-label="user_name"
          required
        />
        <label className={styles.label}>Email: </label>
        <input
          className={styles.form}
          type="email"
          name="user_email"
          aria-label="user_email"
        />
        <label className={styles.label}>Phone: </label>
        <input
          className={styles.form}
          type="text"
          name="user_phone"
          aria-label="user_phone_number"
          required
        />
        <label className={styles.label}>Additional information:</label>
        <textarea
          className={styles.messageForm}
          name="message"
          aria-label="users_additional_information"
        />
        <input
          className={styles.formSubmit}
          type="submit"
          aria-label="form_submit_button"
        />
        {/*} {validationError.user_name && (
        <p className={styles.errorBottom}>*Please enter your name*</p>
      )}
      {validationError.user_email && (
        <p className={styles.errorBottom}>
          *Please enter a valid email address*
        </p>
      )}
      {validationError.user_phone && (
        <p className={styles.errorBottom}>
          *Please enter a valid phone number*
        </p>
      )}
      {messageStatus === "error" && (
        <p className={styles.errorMessage}>
          **Message failed to send. Please try again**
        </p>
      )}*/}
      </form>
    </>
  );
}
