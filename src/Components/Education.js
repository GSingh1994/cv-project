const Education = ({ handleChange }) => {
  return (
    <div className="Education">
      <div>
        <label htmlFor="school">school</label>
        <input name="school" onChange={handleChange} type="text" />
      </div>
      <div>
        <label htmlFor="degree">degree</label>
        <input name="degree" onChange={handleChange} type="text" />
      </div>

      <label htmlFor="startSchool">From:</label>
      <input
        onChange={handleChange}
        type="month"
        name="startSchool"
        defaultValue="2021-05"
      />

      <label htmlFor="endSchool">To:</label>
      <input
        onChange={handleChange}
        type="month"
        name="endSchool"
        defaultValue="2021-05"
      />
    </div>
  );
};

export default Education;
