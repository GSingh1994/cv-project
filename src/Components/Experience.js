const Experience = ({ handleChange, values }) => {
  return (
    <div className="Experience">
      <div>
        <label htmlFor="employer">Employer</label>
        <input
          name="employer"
          value={values.employer}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="jobTitle">jobTitle</label>
        <input
          name="jobTitle"
          value={values.jobTitle}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div id="date">
        <label htmlFor="startJob">From:</label>
        <input
          onChange={handleChange}
          type="month"
          name="startJob"
          value={values.startJob}
        />
      </div>
      <div id="date">
        <label htmlFor="endJob">To:</label>
        <input
          onChange={handleChange}
          type="month"
          name="endJob"
          value={values.endJob}
        />
      </div>

      {/* <label htmlFor="jobDuties">jobDuties</label>
      <textarea
        name="jobDuties"
        onChange={handleChange}
        value={values.jobDuties}
        cols="15"
        rows="5"
      ></textarea> */}
    </div>
  );
};

export default Experience;
