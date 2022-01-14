import { useState, useEffect } from "react";
import skillLogo from "../assets/skill.svg";
export default function Skills({ skillsvalues }) {
  const [inputFields, setInputFields] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const values = [...inputFields];
    values[index][name] = value;
    setInputFields(values);
  };

  useEffect(() => {
    skillsvalues(inputFields);
  }, [inputFields]);

  const addMoreSkills = () => {
    setInputFields([
      ...inputFields,
      {
        skill: "",
      },
    ]);
  };

  const removeSkill = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <div className="Skills">
      <div className="logo">
        <img src={skillLogo} alt="" /> <h1 className="heading">Skills</h1>
      </div>

      {inputFields.map((input, index) => (
        <fieldset className="skill-field" key={index}>
          <button
            className="button-clear delete-btn"
            onClick={() => removeSkill(index)}
          >
            DELETE
          </button>
          <label htmlFor="skill">skill:</label>
          <input
            value={input.skill}
            name="skill"
            onChange={(e) => handleChange(e, index)}
            type="text"
          />
        </fieldset>
      ))}
      <button className="button-clear add-btn" onClick={addMoreSkills}>
        Add
      </button>
    </div>
  );
}
