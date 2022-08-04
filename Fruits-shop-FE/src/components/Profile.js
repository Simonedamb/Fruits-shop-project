import { useSelector } from "react-redux";
import { logOutUser } from "../states/signUpSlice";
import { useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Profile = ({user,setUser}) => {
  const dispatch = useDispatch();
  const myUser = useSelector((state) => state.user.users);
  console.log(myUser);
  return (
    <div className=" text-[15px] flex text-center items-center pt-2 px-10">
      <div className="flex items-center justify-center">
        <AccountCircleIcon className="m-[7px]" />
        <h1 className="text-[25px] uppercase">{user}</h1>
        <button
          className=" mx-4 hover:bg-red-700 "
          onClick={() => setUser(null)}
        >
          <ExitToAppIcon />
        </button>
      </div>
    </div>
  );
};

export default Profile;
