import { useContext } from "react";
// import UserLogo from "../../assets/user.webp";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import SelectionContext from "../../context/selectionContext";
import { userInfo } from "../leftComponents/userInfo";

const RightHeader = () => {
  const { rightSwitchValue } = useContext(SelectionContext);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-950">
      <div className="flex items-center gap-4 font-bold">
        <img
          src={userInfo[rightSwitchValue].dp}
          alt="user"
          className="w-12 h-12 rounded-[50%]"
        />
        <span>{userInfo[rightSwitchValue].name}</span>
      </div>
      <div className="flex gap-4 items-center text-xl text-blue-500">
        <IoCall />
        <FaVideo />
        <BsThreeDotsVertical />
      </div>
      {/* <TbEdit className="text-2xl" /> */}
    </div>
  );
};

export default RightHeader;
