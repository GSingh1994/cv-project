const Experience = ({ handleChange }) => {
  return (
    <div className="Experience">
      <h2>Work Experience</h2>
      <div>
        <label htmlFor="employer">Employer</label>
        <input name="employer" onChange={handleChange} type="text" />
      </div>
      <div>
        <label htmlFor="jobTitle">jobTitle</label>
        <input name="jobTitle" onChange={handleChange} type="text" />
      </div>
    </div>
  );
};

export default Experience;
