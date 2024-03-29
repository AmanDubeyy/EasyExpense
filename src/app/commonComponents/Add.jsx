"use client";

import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  const [paidBy, setPaidBy] = useState("");
  const [splitBetween, setSplitBetween] = useState("");

  const members = ["Person 1", "Person 2", "Person 3"];

  const handlePaidByChange = (event) => {
    setPaidBy(event.target.value);
  };

  const handleSplitBetweenChange = (event) => {
    setSplitBetween(event.target.value);
  };

  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-blue focus:outline-none bg-my-light-blue">
          <div className="flex flex-col items-center rounded-3xl p-4 bg-my-light-blue border-0 border-white ">
            <div className="relative flex flex-col w-full outline-none focus:outline-none">
              <div className="flex flex-row items-center justify-between p-2 border-solid rounded-xl bg-my-blue">
                <h3 className="text-3xl font-extrabold text-white font-outline-2">
                  Add Expense
                </h3>
                {/* <button
                  className="text-white font-extrabold text-3xl close-button border-2 border-white rounded-full"
                  onClick={() => setShowModal(false)}
                >x
                </button> */}
              </div>
              <form className="m-4 flex flex-col items-center">
                <label className="p-2 text-2xl font-bold font-outline-white-2 text-my-blue">Title</label>
                <input type="text" className="rounded-xl focus:outline-my-blue"></input>
                <label className="p-2 text-2xl font-bold font-outline-white-2 text-my-blue">Paid by</label>
                <input type="text" className="rounded-xl focus:outline-my-blue"></input>
                <label className="p-2 text-2xl font-bold font-outline-white-2 text-my-blue">Split Between</label>
                <input type="text" className="rounded-xl focus:outline-my-blue"></input>
                <button type="submit" className="mt-6 p-2 rounded-xl bg-my-blue text-3xl font-outline-2">Save</button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
