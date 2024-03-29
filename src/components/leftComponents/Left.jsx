import { useState } from "react";
import LeftHeader from "./LeftHeader";
import LeftUser from "./LeftUser";
import { userInfo } from "./userInfo";

const Left = () => {
  const [searchText, setSearchText] = useState(null);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };
  return (
    <div className="w-4/12 p-4 overflow-scroll bg-gray-950">
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
