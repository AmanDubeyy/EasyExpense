"use client";
import React, { useState } from "react";

function page() {
  const [groupData, setGroupData] = useState({
    _id: "abc",
    group_name: "Teen Patti",
    group_id: "abc",
  });

  const [recentExpenses, setRecentExpenses] = useState([]);

  const Menu = ["Recent Expenses", "Balances", "Total"];

  return (
    <div className="flex flex-col bg-my-light-blue items-center">
      <h2 className="p-2 text-3xl">{groupData?.group_name}</h2>
      <div className="flex flex-row items-center p-4">
        {Object.keys(Menu).map((key) => (
          <p key={key} className="p-4 text-xl">
            {Menu[key]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default page;
