import React from "react";

function RecentListItem({item}) {
  return (
    <div className="m-12 flex flex-row justify-items-center items-center">
      <img
        className="rounded-full max-h-20 aspect-square"
        src="data:image/png;base64,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"
        alt="profile_img"
      />
      <div className="m-5 flex flex-col">
        <p className="text-base font-bold">Aman</p>
        <p>added 50 rs in teen patti</p>
      </div>
    </div>
  );
}

export default RecentListItem;
