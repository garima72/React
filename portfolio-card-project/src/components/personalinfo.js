//components/personalinfo.js
function PersonalInfo() {
    const name = "Garima";
    const role = "Web Developer";
    const location = "Bareilly, UP";
    const email = "garima123@email.com";
return (
    <div className="personal-info">
    <h2 className="name"> {name}</h2>
    <p className="role"> {role}</p>
     <p className="location"> {location}</p>
      <p className="email"> {email}</p>
    </div>
);
}
export default PersonalInfo;
