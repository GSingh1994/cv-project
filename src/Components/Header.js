const Title = ({ handleChange, values }) => {
  return (
    <div className="Header">
      <div className="Header">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="website">Website:</label>
          <input
            name="website"
            value={values.website}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="address">address:</label>
          <input
            name="address"
            value={values.address}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input
            name="email"
            value={values.email}
            type="email"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
