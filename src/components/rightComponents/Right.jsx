import { useContext } from "react";
import RightFooter from "./RightFooter";
import RightHeader from "./RightHeader";
import RightMain from "./RightMain";
import SelectionContext from "../../context/selectionContext";

const Right = () => {
  const { rightSwitchValue } = useContext(SelectionContext);
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
          <RightFooter />
        </>
      )}
    </div>
  );
};

export default Right;
