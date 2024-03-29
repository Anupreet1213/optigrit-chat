import { IoSend } from "react-icons/io5";

const RightFooter = () => {
  return (
    <div className="absolute bottom-0 w-full p-4 flex items-center justify-between ">
      <input
        type="text"
        placeholder="Aa"
        className="p-3 bg-gray-800 rounded-3xl w-[95%] border-none"
      />
      <IoSend className="text-2xl text-blue-500" />
    </div>
  );
};

export default RightFooter;
