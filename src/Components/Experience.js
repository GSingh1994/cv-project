import { useState, useEffect } from "react";

const Experience = ({ experienceValues }) => {
  const [inputFields, setInputFields] = useState([
    {
      employer: "",
      jobTitle: "",
      startJob: "",
      endJob: "",
      jobDuties: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const values = [...inputFields];
    values[index][name] = value;
    setInputFields(values);
  };

  useEffect(() => {
    experienceValues(inputFields);
  }, [inputFields]);

  const addMoreExp = () => {
    setInputFields([
      ...inputFields,
      {
        employer: "",
        jobTitle: "",
        startJob: "",
        endJob: "",
        jobDuties: "",
      },
    ]);
  };

  const removeExp = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <div className="Experience">
      <h2 className="heading">Work Experience</h2>
      {inputFields.map((inputField, index) => (
        <fieldset className="exp-field" key={index}>
          <button
            className="button button-clear delete-btn"
            onClick={() => removeExp(index)}
          >
            DELETE
          </button>
          <label htmlFor="employer">
            Employer
            <input
              name="employer"
              value={inputField.employer}
              onChange={(e) => handleChange(e, index)}
              type="text"
            />
          </label>

          <label htmlFor="jobTitle">
            jobTitle
            <input
              name="jobTitle"
              value={inputField.jobTitle}
              onChange={(e) => handleChange(e, index)}
              type="text"
            />
          </label>

          <div id="date">
            <label htmlFor="startJob">From:</label>
            <input
              onChange={(e) => handleChange(e, index)}
              type="month"
              name="startJob"
              value={inputField.startJob}
            />
          </div>
          <div id="date">
            <label htmlFor="endJob">To:</label>
            <input
              onChange={(e) => handleChange(e, index)}
              type="month"
              name="endJob"
              value={inputField.endJob}
            />
          </div>
          <label htmlFor="jobDuties">jobDuties</label>
          <textarea
            name="jobDuties"
            onChange={(e) => handleChange(e, index)}
            value={inputField.jobDuties}
          ></textarea>
        </fieldset>
      ))}
      <button className="add-btn" onClick={addMoreExp}>
        Add
      </button>
    </div>
  );
};

export default Experience;
