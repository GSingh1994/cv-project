import { useState, useEffect } from "react";
import eduLogo from "../assets/edu.svg";

const Education = ({ educationValues }) => {
  const [inputFields, setInputFields] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const values = [...inputFields];
    values[index][name] = value;
    if (e.target.checked) {
      values[index].endSchool = "current";
    }
    setInputFields(values);
  };

  useEffect(() => {
    educationValues(inputFields);
  }, [inputFields]);

  const addMoreEdu = () => {
    setInputFields([
      ...inputFields,
      {
        school: "",
        degree: "",
        startSchool: "",
        endSchool: "",
        city: "",
        province: "",
      },
    ]);
  };

  const removeEdu = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <div className="Education">
      <div className="logo">
        <img src={eduLogo} alt="" /> <h1 className="heading">Education</h1>
      </div>
      {inputFields.map((input, index) => (
        <fieldset className="edu-field" key={index}>
          <button
            className="button-clear delete-btn"
            onClick={() => removeEdu(index)}
          >
            DELETE
          </button>
          <label htmlFor="school">School:</label>
          <input
            value={input.school}
            name="school"
            onChange={(e) => handleChange(e, index)}
            type="text"
          />
          <label htmlFor="degree">degree</label>
          <input
            value={input.degree}
            name="degree"
            onChange={(e) => handleChange(e, index)}
            type="text"
          />
          <div className="form-location">
            <div>
              <label htmlFor="city">City</label>
              <input
                name="city"
                value={input.city}
                onChange={(e) => handleChange(e, index)}
                type="text"
              />
            </div>
            <div>
              <label htmlFor="province">Province</label>
              <input
                name="province"
                value={input.province}
                onChange={(e) => handleChange(e, index)}
                type="text"
              />
            </div>
          </div>
          <div className="form-time">
            <div>
              <label htmlFor="startSchool">From:</label>
              <input
                onChange={(e) => handleChange(e, index)}
                type="month"
                value={input.startSchool}
                name="startSchool"
              />
            </div>
            <div>
              <label htmlFor="endSchool">To:</label>
              <input
                onChange={(e) => handleChange(e, index)}
                type="month"
                value={input.endSchool}
                name="endSchool"
              />
            </div>
          </div>
          <div className="float-right">
            <input
              onChange={(e) => handleChange(e, index)}
              type="checkbox"
              id="studyHere"
            />
            <label className="label-inline" htmlfor="studyHere">
              Currently study here
            </label>
          </div>
        </fieldset>
      ))}
      <button className="button-clear add-btn" onClick={addMoreEdu}>
        Add
      </button>
    </div>
  );
};

export default Education;
