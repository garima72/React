// components/Avatar.js
import garima from './garima.png';
function Avatar() {
    return (
   <div className="avatar-container"> 
   <img src={garima} alt="Profile"className="avatar-image"/>
    <div className="avatar-border">

    </div>
   </div>
    );
}
export default Avatar;