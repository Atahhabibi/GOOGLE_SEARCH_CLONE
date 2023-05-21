import { TbGridDots } from "react-icons/tb";
import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";
import './Profile.css'
import { useAuth0 } from "@auth0/auth0-react";

const ProfileIcon = () => {
  const { logout } = useAuth0();
  const { user } = useAuth0();


  return (
    <div className="flex gap-2">
      <div className="navigation">
        <div className="button">
          <img src={user?.picture}  />
          <div className="logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LOGOUT</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;
