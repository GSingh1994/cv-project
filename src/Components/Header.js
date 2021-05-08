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
      <div className="nes-field is-inline">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          type="text"
          // id="inline_field"
          className="nes-input is-success"
          placeholder="NES.css"
        />
      </div>

      <div className="nes-field is-inline">
        <label htmlFor="website">Website:</label>
        <input
          name="website"
          value={values.website}
          onChange={handleChange}
          type="text"
          // id="inline_field"
          className="nes-input is-success"
          placeholder="NES.css"
        />
      </div>

      <div className="nes-field is-inline">
        <label htmlFor="address">address:</label>
        <input
          name="address"
          value={values.address}
          onChange={handleChange}
          type="text"
          // id="inline_field"
          className="nes-input is-success"
          placeholder="NES.css"
        />
      </div>

      <div className="nes-field is-inline">
        <label htmlFor="email">email:</label>
        <input
          name="email"
          value={values.email}
          type="email"
          onChange={handleChange}
          // id="inline_field"
          className="nes-input is-success"
          placeholder="NES.css"
        />
      </div>
    </div>
  );
};

export default Header;
