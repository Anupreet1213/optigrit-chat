import { useContext } from "react";
import SelectionContext from "../../context/selectionContext";
import { userInfo } from "./userInfo";

const LeftUser = ({ user, id }) => {
  const { setRightSwitchValue } = useContext(SelectionContext);

  const message = JSON.parse(localStorage.getItem(id));

  const handleClick = (id) => {
    setRightSwitchValue(id);
    if (!JSON.parse(localStorage.getItem(id))) {
      localStorage.setItem(id, JSON.stringify(userInfo[id].chatMessage));
    }
    // console.log(localStorage.getItem(id));
  };
  return (
    <div
      className="flex items-center gap-4 my-2 hover:cursor-pointer hover:bg-gray-700 transition-all rounded-sm p-2"
      onClick={() => handleClick(id)}
    >
      <img src={user.dp} alt="user" className="w-12 h-12 rounded-[50%]" />
      <div className="flex flex-col">
        <span className="text-lg">{user.name}</span>
        <span className="text-gray-500 text-sm">
          {message
            ? message[message.length - 1].str
            : userInfo[id].chatMessage[userInfo[id].chatMessage.length - 1].str}
        </span>
      </div>
    </div>
  );
};

export default LeftUser;
