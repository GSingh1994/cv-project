import { useState, useEffect } from "react";

const Header = ({ headerValues }) => {
  const [values, setValues] = useState({
    name: "",
    website: "",
    address: "",
    email: "",
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
      <h2 className="heading">Personal details</h2>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          type="text"
        />

        <label htmlFor="website">Website:</label>
        <input
          name="website"
          value={values.website}
          onChange={handleChange}
          type="text"
        />

        <label htmlFor="address">address:</label>
        <input
          name="address"
          value={values.address}
          onChange={handleChange}
          type="text"
        />

        <label htmlFor="email">email:</label>
        <input
          name="email"
          value={values.email}
          type="email"
          onChange={handleChange}
        />
      </fieldset>
    </div>
  );
};

export default Header;
