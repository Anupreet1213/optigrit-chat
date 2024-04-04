import { useContext, useState } from "react";
import RightFooter from "./RightFooter";
import RightHeader from "./RightHeader";
import RightMain from "./RightMain";
import SelectionContext from "../../context/selectionContext";
import { userInfo } from "../leftComponents/userInfo";

const Right = () => {
  const { rightSwitchValue } = useContext(SelectionContext);
  const [localChatMessage, setLocalChatMessage] = useState(userInfo);
  console.log(localChatMessage);
  return (
    <div
      className={`sm:w-8/12 relative bg-main-pattern bg-contain sm:block ${
        rightSwitchValue === -1 ? "hidden" : "w-full"
      }`}
    >
      {rightSwitchValue === -1 ? (
        <></>
      ) : (
        <>
          <RightHeader />
          <RightMain />
          <RightFooter setLocalChatMessage={setLocalChatMessage} />
        </>
      )}
    </div>
  );
};

export default Right;
