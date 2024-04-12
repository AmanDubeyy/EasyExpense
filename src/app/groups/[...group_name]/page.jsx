"use client";
import React, { useState } from "react";

function page() {
  const [groupData, setGroupData] = useState({
    _id: "abc",
    group_name: "Teen Patti",
    group_id: "abc",
  });


  const menuComponent = () => {
    switch (menuKey) {
      case 0:
        return <recentExpensesComponent />;
      case 1:
        return <balancesComponent />;
      case 2:
        return <totalBalanceComponent />;
      default:
        return <recentExpensesComponent />;
    }
  }

  const [recentExpenses, setRecentExpenses] = useState([]);

  const Menu = ["Recent Expenses", "Balances", "Total"];

  const recentExpensesComponent = () => {
    return (
      <div className="flex flex-col">

      </div>
    )
  }

  const totalBalanceComponent = () => {
    return (
      <div className="flex flex-col">

      </div>
    )
  }

  const balancesComponent = () => {
    return (
      <div className="flex flex-col">

      </div>
    )
  }

  return (
    <div className="flex flex-col bg-my-light-blue items-center">
      <h2 className="p-2 text-3xl">{groupData?.group_name}</h2>
      <div className="flex flex-row items-center p-4">
        {Object.keys(Menu).map((key) => (
          <p key={key} className="p-4 text-xl">
            {Menu[key]}
          </p>
        ))}
        <menuComponent/>
      </div>
    </div>
  );
}

export default page;
