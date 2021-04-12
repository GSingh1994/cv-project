const Experience = ({ handleChange }) => {
  return (
    <div className="Experience">
      <div>
        <label htmlFor="employer">Employer</label>
        <input name="employer" onChange={handleChange} type="text" />
      </div>
      <div>
        <label htmlFor="jobTitle">jobTitle</label>
        <input name="jobTitle" onChange={handleChange} type="text" />
      </div>
      <div id="date">
        <label htmlFor="startJob">From:</label>
        <input
          onChange={handleChange}
          type="month"
          name="startJob"
          value="2021-01"
        />
      </div>
      <div id="date">
        <label htmlFor="endJob">To:</label>
        <input
          onChange={handleChange}
          type="month"
          name="endJob"
          value="2021-05"
        />
      </div>
      <label htmlFor="jobDuties">jobDuties</label>
      <textarea
        name="jobDuties"
        onChange={handleChange}
        cols="15"
        rows="5"
      ></textarea>
    </div>
  );
};

export default Experience;
