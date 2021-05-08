import { useState, useEffect } from "react";

const Experience = ({ experienceValues }) => {
  const [inputFields, setInputFields] = useState([
    {
      employer: "",
      jobTitle: "",
      startJob: "",
      endJob: "",
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
      {inputFields.map((inputField, index) => (
        <div key={index}>
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
            cols="15"
            rows="5"
          ></textarea>

          <button onClick={() => removeExp(index)}> - </button>
        </div>
      ))}
      <button onClick={addMoreExp}>Add</button>
    </div>
  );
};

export default Experience;
