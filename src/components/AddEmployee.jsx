import { useState } from "react";

const AddEmployee = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const newEmployee = {
      id: Date.now(),
      ...formData,
      salary: Number(formData.salary),
      skills: formData.skills.split(",").map(skill => skill.trim())
    };


    onAddEmployee(newEmployee);


    setFormData({
      name: "",
      title: "",
      salary: "",
      phone: "",
      email: "",
      animal: "",
      startDate: "",
      location: "",
      department: "",
      skills: ""
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key} style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>{key}:</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              style={{ padding: "5px" }}
            />
          </div>
        ))}
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
