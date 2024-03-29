import { useContext } from "react";
import RightFooter from "./RightFooter";
import RightHeader from "./RightHeader";
import RightMain from "./RightMain";
import SelectionContext from "../../context/selectionContext";

const Right = () => {
  const { rightSwitchValue } = useContext(SelectionContext);
  return (
    <div className="w-8/12 relative bg-main-pattern bg-contain">
      {rightSwitchValue === -1 ? (
        <div>heelo</div>
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
