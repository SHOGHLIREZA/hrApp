
const PersonCard = ({ employee }) => {

  const start = new Date(employee.startDate);
  const now = new Date();
  const yearsWorked = (now - start) / (1000 * 60 * 60 * 24 * 365);


  const animalEmojis = {
    Owl: "🦉",
    Dog: "🐶",
    Cat: "🐱",
    Fox: "🦊",
    Rabbit: "🐰",
  };
  const animalEmoji = animalEmojis[employee.animal] || "🐾";

  // پیام‌های مخصوص سالگرد یا دوره‌ی آزمایشی
  let message = "";
  if (yearsWorked >= 5 && yearsWorked % 5 < 1) {
    message = "🎉 Schedule recognition meeting.";
  } else if (yearsWorked < 0.5) {
    message = "🔔 Schedule probation review.";
  }

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      margin: "10px",
      padding: "15px",
      backgroundColor: "#f9f9f9"
    }}>
      <h3>{employee.name} {animalEmoji}</h3>
      <p><strong>{employee.title}</strong> — {employee.department}</p>
      <p>📍 {employee.location}</p>
      <p>Years worked: {yearsWorked.toFixed(1)}</p>
      {message && <p>{message}</p>}
      <p>📧 {employee.email}</p>
      <p>📱 {employee.phone}</p>
      <p>💰 Salary: {employee.salary} €</p>
    </div>
  );
};

export default PersonCard;
