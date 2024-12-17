import { MdOutlineSaveAlt, MdOutlineDelete } from "react-icons/md";

const Postmenuaction = () => {
  return (
    <div className="">
      <h1 className=" mb-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 text-sm cursor-pointer">
      <MdOutlineSaveAlt className="w-8 h-8" />
      <span>save the post</span>
      </div>

      <div className="flex items-center gap-2 text-sm cursor-pointer">
      <MdOutlineDelete className="w-8 h-8" />
      <span>delete the post</span>
      </div>

    </div>
  );
};
export default Postmenuaction;
