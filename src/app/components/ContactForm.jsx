"use client";

import emailjs from "@emailjs/browser";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.us";

import React, { useRef, useState } from "react";

import styles from "@/app/page.module.css";

export default function ContactForm() {
  const ContactForm = useRef();
  const [messageStatus, setMessageStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const inputForm = {
    user_name: "",
    user_email: "",
    user_phone: "",
    artist_choice: "",
    date_choice: "",
    user_message: "",
  };

  const [formValues, setFormValues] = useState(inputForm);

  const artists = [
    "Brain Clutter",
    "Brain Clutter",
    "Brain Clutter",
    "Brain Clutter",
    "Brain Clutter",
    "No Preference",
  ];

  const preferDays = ["Today", "This week", "This weekend", "At a later date"];

  const inputValidationError = {
    user_name: false,
    user_email: false,
    user_phone: false,
    artist_choice: false,
    date_choice: false,
    user_message: false,
  };

  const [validationError, setValidationError] = useState(inputValidationError);

  const validateAllFields = () => {
    const errors = {};
    Object.entries(formValues).forEach(([field, value]) => {
      if (field === "user_email") {
        errors[field] = !isValidEmail(value);
      } else if (field === "user_phone") {
        errors[field] = !isValidPhone(value);
      } else {
        errors[field] = value.trim() === "";
      }
    });
    setValidationError(errors);
    return errors;
  };

  // allow the user to change the value of a form field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
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

  const sendEmail = (e) => {
    e.preventDefault();

    const errors = validateAllFields();
    const isValid = Object.values(errors).every((error) => !error);

    if (!isValid) {
      console.log("Form validation failed:", validationError);
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
      <form
        className={styles.contactForm}
        ref={ContactForm}
        onSubmit={sendEmail}
        encType="multipart/form-data"
        method="post"
      >
        <label className={styles.label}>Name: </label>
        <input
          className={styles.form}
          type="text"
          name="user_name"
          aria-label="user_name"
          value={formValues.user_name}
          onChange={handleInputChange}
        />
        <label className={styles.label}>Email: </label>
        <input
          className={styles.form}
          type="email"
          name="user_email"
          aria-label="user_email"
          value={formValues.user_email}
          onChange={handleInputChange}
        />
        <label className={styles.label}>Phone: </label>
        <Cleave
          options={{ phone: true, phoneRegionCode: "US" }}
          className={styles.form}
          value={formValues.user_phone}
          onChange={(e) =>
            handleInputChange({
              target: { name: "user_phone", value: e.target.value },
            })
          }
          placeholder="(XXX) XXX-XXXX"
        />
        <label>Choose An Artist</label>
        <select
          className={styles.form}
          name="artist_choice"
          value={formValues.artist_choice}
          aria-label="artist_choice"
          onChange={(e) =>
            setFormValues((prevValues) => ({
              ...prevValues,
              artist_choice: e.target.value,
            }))
          }
        >
          <option value="">Artist of choice</option>
          {artists.map((artist, index) => (
            <option key={index} value={artist}>
              {artist}
            </option>
          ))}
        </select>

        <label>I Would Like to Get Tattooed</label>
        <select
          className={styles.form}
          name="date_choice"
          value={formValues.date_choice}
          aria-label="date_choice"
          onChange={(e) =>
            setFormValues((prevValues) => ({
              ...prevValues,
              date_choice: e.target.value,
            }))
          }
        >
          <option value="">Day of choice</option>
          {preferDays.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
        <label className={styles.label}>Additional information:</label>
        <textarea
          className={styles.messageForm}
          name="user_message"
          aria-label="users_additional_information"
          value={formValues.user_message}
          onChange={handleInputChange}
        />
        <input
          className={styles.formSubmit}
          type="submit"
          aria-label="form_submit_button"
          value={isLoading ? "Sending..." : "Send"}
          disabled={isLoading}
        />
        {validationError.user_name && (
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
        {validationError.artist_choice && (
          <p className={styles.errorBottom}>
            *Please select your artist of choice*
          </p>
        )}
        {validationError.date_choice && (
          <p className={styles.errorBottom}>*Please select a preferred date*</p>
        )}
        {validationError.user_message && (
          <p className={styles.errorBottom}>
            *Please provide us additional information about your tattoo request"
          </p>
        )}
        {messageStatus === "error" && (
          <p className={styles.errorMessage}>
            **Message failed to send. Please try again**
          </p>
        )}
      </form>
    </>
  );
}
