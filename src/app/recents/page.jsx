import React from "react";
import RecentListItem from "./RecentListItem";

function page() {
  const recents = [
    { description: "you added 5 rs" },
    { description: "you added 100 rs" },
    { description: "you added 100 rs" },
    { description: "you added 100 rs" },
    { description: "you added 100 rs" },
    { description: "you added 100 rs" },
    { description: "you added 100 rs" },
    { description: "you added 100 rs" },
  ];

  return (
    <div className="flex flex-col">
      <div className="font-sans font-extrabold text-4xl text-center sticky top-0 z-5 bg-black p-12 text-white">
        Recent Activity
      </div>
      <div className="">
        {recents.map((item, index) => (
          <ul key={index}>
            <RecentListItem item={item} />
          </ul>
        ))}
      </div>
    </div>
  );
}

export default page;
