import PropTypes from "prop-types";

export default function Person({ name, title, salary, phone, email, animal }) {
  return (
    <div className="person-card">
      <div className="person-top">
        <div className="avatar">{animal ? animal[0].toUpperCase() : "?"}</div>
        <div>
          <h2 className="person-name">{name}</h2>
          <p className="person-title">{title}</p>
        </div>
      </div>

      <ul className="person-details">
        <li><strong>Salary:</strong> {salary}</li>
        <li><strong>Phone:</strong> {phone}</li>
        <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
        <li><strong>Animal:</strong> {animal}</li>
      </ul>
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  phone: PropTypes.string,
  email: PropTypes.string,
  animal: PropTypes.string,
};
