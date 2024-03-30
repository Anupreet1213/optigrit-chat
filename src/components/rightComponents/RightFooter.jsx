import { useContext, useState } from "react";
import { IoSend } from "react-icons/io5";
import { userInfo } from "../leftComponents/userInfo";
import SelectionContext from "../../context/selectionContext";

const RightFooter = () => {
  const [message, setMessage] = useState(null);
  const { rightSwitchValue } = useContext(SelectionContext);

  const handleClick = () => {
    if (message) {
      userInfo[rightSwitchValue].chatMessage.push({
        str: message,
        type: "sender",
      });
    }
  };

  return (
    <div className="absolute bottom-0 w-full p-4 flex items-center justify-between bg-gray-950">
      <input
        value={message}
        type="text"
        placeholder="Message"
        className="p-3 bg-gray-800 rounded-3xl w-[95%] border-none"
        onChange={(e) => setMessage(e.target.value)}
      />
      <IoSend
        className="text-2xl text-blue-500 cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default RightFooter;
