const Title = ({ handleChange }) => {
  return (
    <div className="Header">
      <h2>Personal details</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input name="name" onChange={handleChange} type="text" />
      </div>
      <div>
        <label htmlFor="website">Website:</label>
        <input name="website" onChange={handleChange} type="text" />
      </div>
      <div>
        <label htmlFor="address">address:</label>
        <input name="address" onChange={handleChange} type="text" />
      </div>
      <div>
        <label htmlFor="email">email:</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
    </div>
  );
};

export default Title;
