import { useContext, useState } from "react";
import LeftHeader from "./LeftHeader";
import LeftUser from "./LeftUser";
import { userInfo } from "./userInfo";
import SelectionContext from "../../context/selectionContext";

const Left = () => {
  const [searchText, setSearchText] = useState(null);
  const { rightSwitchValue } = useContext(SelectionContext);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div
      className={`sm:w-4/12 p-4 overflow-scroll bg-gray-950 ${
        rightSwitchValue === -1 ? "w-full" : "sm:block hidden"
      }`}
    >
      <LeftHeader name={"heelo"} />
      <input
        value={searchText}
        type="text"
        placeholder="Search by Name"
        className="p-2 w-full border-none bg-gray-800 mt-4 rounded-sm"
        onChange={(event) => handleSearch(event)}
      />
      <div>
        {!searchText
          ? userInfo.map((eachUser, id) => {
              return <LeftUser key={id} user={eachUser} id={id} />;
            })
          : userInfo
              .filter((user) =>
                user.name.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((eachUser, id) => {
                return <LeftUser key={id} user={eachUser} id={id} />;
              })}
      </div>
    </div>
  );
};

export default Left;
