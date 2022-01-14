import { useState, useEffect } from "react";
import personLogo from "../assets/person.svg";

const Header = ({ headerValues }) => {
  const [values, setValues] = useState({
    name: "",
    website: "",
    address: "",
    email: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    headerValues(values);
  }, [values]);

  return (
    <div className="Header">
      <div className="logo">
        <img src={personLogo} alt="" />
        <h1 className="heading">Personal Details</h1>
      </div>
      <fieldset>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          type="text"
        />

        <label htmlFor="website">Website</label>
        <input
          name="website"
          value={values.website}
          onChange={handleChange}
          type="text"
        />

        <label htmlFor="address">address</label>
        <input
          name="address"
          value={values.address}
          onChange={handleChange}
          type="text"
        />

        <label htmlFor="email">email</label>
        <input
          name="email"
          value={values.email}
          type="email"
          onChange={handleChange}
        />
        <label htmlFor="summary">summary</label>
        <textarea
          name="summary"
          onChange={handleChange}
          value={values.summary}
          placeholder="Your professional summary..."
        ></textarea>
      </fieldset>
    </div>
  );
};

export default Header;
