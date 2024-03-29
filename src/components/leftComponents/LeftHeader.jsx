import { TbEdit } from "react-icons/tb";
import UserLogo from "../../assets/user.webp";

const LeftHeader = () => {
  return (
    <div className="flex justify-between items-center pl-2">
      <img src={UserLogo} alt="user" className="w-12 h-12 rounded-[50%]" />
      <span className="font-bold text-xl">Messenger</span>
      <TbEdit className="text-2xl" />
    </div>
  );
};

export default LeftHeader;
