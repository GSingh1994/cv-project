import { useState, useEffect } from "react";

const Education = ({ educationValues }) => {
  const [inputFields, setInputFields] = useState([
    {
      school: "",
      degree: "",
      startSchool: "",
      endSchool: "",
    },
  ]);
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const values = [...inputFields];
    values[index][name] = value;
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
      {inputFields.map((input, index) => (
        <div key={index}>
          <label htmlFor="school">school</label>
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

          <label htmlFor="startSchool">From:</label>
          <input
            onChange={(e) => handleChange(e, index)}
            type="month"
            value={input.startSchool}
            name="startSchool"
          />

          <label htmlFor="endSchool">To:</label>
          <input
            onChange={(e) => handleChange(e, index)}
            type="month"
            value={input.endSchool}
            name="endSchool"
          />
          <button onClick={() => removeEdu(index)}> - </button>
        </div>
      ))}
      <button onClick={addMoreEdu}>Add</button>
    </div>
  );
};

export default Education;
