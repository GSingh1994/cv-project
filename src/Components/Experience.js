import { useState, useEffect } from "react";
import expLogo from "../assets/exp.svg";

const Experience = ({ experienceValues }) => {
  const [inputFields, setInputFields] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const values = [...inputFields];
    values[index][name] = value;
    setInputFields(values);
    if (e.target.checked) {
      values[index].endJob = "current";
    }
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
        city: "",
        province: "",
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
      <div className="logo">
        <img src={expLogo} alt="" />
        <h1 className="heading">Work Experience</h1>
      </div>
      {inputFields.map((inputField, index) => (
        <fieldset className="exp-field" key={index}>
          <button
            className="delete-btn button-clear"
            onClick={() => removeExp(index)}
          >
            DELETE
          </button>

          <label htmlFor="employer">Employer</label>
          <input
            name="employer"
            value={inputField.employer}
            onChange={(e) => handleChange(e, index)}
            type="text"
          />

          <label htmlFor="jobTitle">Job title</label>
          <input
            name="jobTitle"
            value={inputField.jobTitle}
            onChange={(e) => handleChange(e, index)}
            type="text"
          />
          <div className="form-location">
            <div>
              <label htmlFor="city">City</label>
              <input
                name="city"
                value={inputField.city}
                onChange={(e) => handleChange(e, index)}
                type="text"
              />
            </div>
            <div>
              <label htmlFor="province">Province</label>
              <input
                name="province"
                value={inputField.province}
                onChange={(e) => handleChange(e, index)}
                type="text"
              />
            </div>
          </div>
          <div className="form-time">
            <div>
              <label htmlFor="startJob">Start date</label>
              <input
                onChange={(e) => handleChange(e, index)}
                type="month"
                name="startJob"
                value={inputField.startJob}
              />
            </div>

            <div>
              <label htmlFor="endJob">End date</label>
              <input
                onChange={(e) => handleChange(e, index)}
                type="month"
                name="endJob"
                value={inputField.endJob}
              />
            </div>
          </div>
          <div className="float-right">
            <input
              onChange={(e) => handleChange(e, index)}
              type="checkbox"
              id="workHere"
            />
            <label className="label-inline" htmlFor="workHere">
              Currently work here
            </label>
          </div>
        </fieldset>
      ))}
      <button className="button-clear add-btn" onClick={addMoreExp}>
        Add
      </button>
    </div>
  );
};

export default Experience;
