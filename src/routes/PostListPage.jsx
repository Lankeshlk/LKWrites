import { useState } from "react";
import Postlist from "../components/Postlist";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-xl md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="">
          <Postlist />
          <Postlist />
          <Postlist />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
            <SideMenu/>
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
