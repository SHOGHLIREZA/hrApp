import { useState } from "react";
import useAxios from "../hooks/useAxios"; 

const AddEmployee = ({ onAddEmployee }) => {
  const { post } = useAxios(); 

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

  const [message, setMessage] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEmployee = {
      ...formData,
      salary: Number(formData.salary),
      skills: formData.skills.split(",").map(skill => skill.trim())
    };

    try {

      const res = await post("http://localhost:3001/employees", newEmployee);
      onAddEmployee(res.data);
      setMessage("Employee added ✅");


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

      setTimeout(() => setMessage(""), 3000); // پیام بعد از 3 ثانیه پاک شود
    } catch (err) {
      console.error(err);
      setMessage("Error adding employee ❌");
    }
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
      {message && <p style={{ color: message.includes("Error") ? "red" : "green" }}>{message}</p>}
    </div>
  );
};

export default AddEmployee;
