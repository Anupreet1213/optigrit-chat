import { useContext } from "react";
import SelectionContext from "../../context/selectionContext";
// import { userInfo } from "../leftComponents/userInfo";
// import { userInfo } from "../leftComponents/userInfo";

const RightMain = () => {
  // const [currMessage, setCurrMessage] = useState(0);
  // console.log(localChatMessage);
  const { rightSwitchValue } = useContext(SelectionContext);
  const data = JSON.parse(localStorage.getItem(rightSwitchValue));
  return (
    <div className="flex flex-col gap-4 p-4 overflow-scroll h-[80vh]">
      {data?.map((eachMessage, id) => {
        return (
          <p
            className={`w-fit px-4 py-1 rounded-lg ${
              eachMessage.type === "sender"
                ? "ml-auto bg-blue-500"
                : "bg-gray-800"
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
