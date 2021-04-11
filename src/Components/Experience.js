const Experience = ({ handleChange }) => {
  return (
    <div>
      <label htmlFor="employer">Employer</label>
      <input name="employer" onChange={handleChange} type="text" />

      <label htmlFor="jobTitle">jobTitle</label>
      <input name="jobTitle" onChange={handleChange} type="text" />
      <ol></ol>
    </div>
  );
};

export default Experience;
