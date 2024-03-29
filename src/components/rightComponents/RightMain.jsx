import { useContext } from "react";
import SelectionContext from "../../context/selectionContext";
import { userInfo } from "../leftComponents/userInfo";

const RightMain = () => {
  const { rightSwitchValue } = useContext(SelectionContext);
  return (
    <div className="flex flex-col gap-4 p-4 border-red-500 border">
      {userInfo[rightSwitchValue].chatMessage.map((eachMessage, id) => {
        return (
          <p
            className={`bg-blue-500 w-fit px-4 py-1 rounded-lg ${
              eachMessage.type === "sender" ? "ml-auto" : ""
            }`}
            key={id}
          >
            {eachMessage.str}
          </p>
        );
      })}
    </div>
  );
};

export default RightMain;
