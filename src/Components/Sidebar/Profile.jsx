// Icons
import ProfileIcon from "../../Icons/Profile";

// Router
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Link to="/sign-up">
      <button className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center">
        <ProfileIcon className="h-5 w-5" color="white" />
      </button>
    </Link>
  );
};

export default Profile;
