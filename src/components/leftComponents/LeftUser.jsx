import { useContext } from "react";
import SelectionContext from "../../context/selectionContext";

const LeftUser = ({ user, id }) => {
  const { setRightSwitchValue } = useContext(SelectionContext);
  return (
    <div
      className="flex items-center gap-4 my-2 hover:cursor-pointer hover:bg-gray-700 transition-all rounded-sm p-2"
      onClick={() => setRightSwitchValue(id)}
    >
      <img src={user.dp} alt="user" className="w-12 h-12 rounded-[50%]" />
      <div className="flex flex-col ">
        <span className="text-lg">{user.name}</span>
        <span className="text-gray-500 text-sm">{user.message}</span>
      </div>
    </div>
  );
};

export default LeftUser;
