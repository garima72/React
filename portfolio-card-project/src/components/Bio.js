// components/Bio.js
function Bio() {
    const biotext = "Passionate Web developer with curiosity of learning and building new things. Currently pursuing B.tech in Computer Science & Engineering";
    const skills = ["HTML","CSS","Python","C++"];
    return (
        <div className="bio-section">
            <h3> About Me </h3>
            <p className="bio-text">{biotext} </p>
            <h3> Skills </h3>
            <div className="skills-container">
                {skills.map((skill,index) => (
                  <span key={index} className="skill-tag"> { skill} </span>
                ))}
            </div>
            <div className="social-links">
    <a
        href="https://github.com/garima72"
        target="_blank"
        rel="noopener noreferrer"
    >
        GitHub
    </a>

    <a
        href="https://www.linkedin.com/in/garima-mourya-05b747384"
        target="_blank"
        rel="noopener noreferrer"
    >
        LinkedIn
    </a>
</div>
        </div>
    );
}
export default Bio;