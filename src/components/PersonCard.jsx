import { useState } from "react";
import useAxios from "../hooks/useAxios"; 

const PersonCard = ({ employee, onUpdateEmployee }) => {
  const { patch } = useAxios(); 

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    salary: employee.salary,
    location: employee.location,
    department: employee.department,
    skills: employee.skills.join(", ") 
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({
      salary: employee.salary,
      location: employee.location,
      department: employee.department,
      skills: employee.skills.join(", ")
    });
    setMessage("");
  };

  const handleSave = async () => {
    const updatedEmployee = {
      salary: Number(editData.salary),
      location: editData.location,
      department: editData.department,
      skills: editData.skills.split(",").map((s) => s.trim())
    };

    try {

      const res = await patch(
        `http://localhost:3001/employees/${employee.id}`,
        updatedEmployee
      );


      onUpdateEmployee(res.data);

      setMessage("Changes saved ✅");
      setIsEditing(false);

      setTimeout(() => setMessage(""), 3000); 
    } catch (err) {
      console.error(err);
      setMessage("Error saving changes ❌");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px", borderRadius: "8px" }}>
      <h3>{employee.name}</h3>
      <p>Title: {employee.title}</p>

      {isEditing ? (
        <>
          <div>
            <label>Salary:</label>
            <input type="number" name="salary" value={editData.salary} onChange={handleChange} />
          </div>
          <div>
            <label>Location:</label>
            <input type="text" name="location" value={editData.location} onChange={handleChange} />
          </div>
          <div>
            <label>Department:</label>
            <input type="text" name="department" value={editData.department} onChange={handleChange} />
          </div>
          <div>
            <label>Skills (comma separated):</label>
            <input type="text" name="skills" value={editData.skills} onChange={handleChange} />
          </div>

          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>Salary: {employee.salary}</p>
          <p>Location: {employee.location}</p>
          <p>Department: {employee.department}</p>
          <p>Skills: {employee.skills.join(", ")}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
};

export default PersonCard;
