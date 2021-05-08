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
          <div>
            <label htmlFor="employer">Employer</label>{" "}
            <input
              name="employer"
              value={inputField.employer}
              onChange={(e) => handleChange(e, index)}
              type="text"
              // id="inline_field"
              className="nes-input is-success"
              placeholder="NES.css"
            />
          </div>

          <div>
            <label htmlFor="jobTitle">jobTitle</label>
            <input
              name="jobTitle"
              value={inputField.jobTitle}
              onChange={(e) => handleChange(e, index)}
              type="text"
              // id="inline_field"
              className="nes-input is-success"
              placeholder="NES.css"
            />
          </div>

          <div>
            <label htmlFor="startJob">From:</label>
            <input
              onChange={(e) => handleChange(e, index)}
              type="month"
              name="startJob"
              value={inputField.startJob}
              // id="inline_field"
              className="nes-input is-success"
              placeholder="NES.css"
            />
          </div>

          <div>
            <label htmlFor="endJob">To:</label>
            <input
              onChange={(e) => handleChange(e, index)}
              type="month"
              name="endJob"
              value={inputField.endJob}
              // id="inline_field"
              className="nes-input is-success"
              placeholder="NES.css"
            />
          </div>

          <label htmlFor="jobDuties">jobDuties</label>
          <textarea
            name="jobDuties"
            onChange={(e) => handleChange(e, index)}
            value={inputField.jobDuties}
            id="textarea_field"
            className="nes-textarea"
          ></textarea>

          <button
            onClick={() => removeExp(index)}
            type="button"
            className="nes-btn is-error"
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={addMoreExp} type="button" className="nes-btn is-success">
        Add
      </button>
    </div>
  );
};

export default Experience;
