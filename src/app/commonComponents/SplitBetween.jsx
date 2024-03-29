'use client'
import React, { useState } from 'react'

function SplitBetween() {
  const splitTypeOptions = {
    'equal': '=',
    'percentage': '%',
    'exact': '<>'
  };

  const totalAmount = 1000;
  const users = [
    'AMAN',
    'RISHU',
    'KAIM'
  ];

  const [splitType, setSplitType] = useState('equal');

  const initialSplit = {};

  users.forEach(user => {
    const amount = totalAmount / users.length;
    initialSplit[user] = parseFloat(amount).toFixed(2);
  });

  const [splitAmount, setSplitAmount] = useState(initialSplit);

  const handleSplitAmountChange = (e, user) => {
    if(splitType == 'equal'){

    }
    else if (splitType == 'percentage') {
     
    }
    else if(splitType == 'exact'){
      const value = e.target.value;
      const newSplitAmount = { ...splitAmount };
      newSplitAmount[user] = value;
      setSplitAmount(newSplitAmount);
    }
  }
}

return (
  <div>
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-blue focus:outline-none bg-my-light-blue">
      <div className="flex flex-col items-center rounded-3xl p-4 bg-my-light-blue border-0 border-white ">
        <div className="relative flex flex-col w-full outline-none focus:outline-none">
          <div className="flex flex-row items-center justify-between p-2 border-solid rounded-xl bg-my-blue">
            <h3 className="text-3xl font-extrabold text-white font-outline-2">
              Split Between
            </h3>
          </div>
          <div className='flex flex-row items-center justify-between p-6 text-2xl'>
            {Object.keys(splitTypeOptions).map(key => (
              <p key={key} className={`p-1 rounded-xl cursor-pointer text-my-blue ${splitType === key && 'bg-white'}`} onClick={() => setSplitType(key)}>{splitTypeOptions[key]}</p>
            ))}
          </div>
          <div className='flex flex-col'>
            {users.map(val => (
              <div key={val} className='px-8 py-4 flex flex-row items-center justify-around'>
                <p className="font-outline-2 text-2xl">{val}</p>
                {splitType === 'exact' &&
                  <input onChange={(e) => handleSplitAmountChange(e, val)} value={splitAmount[val]}
                    type='number'
                    className='remove-arrow w-fit bg-white border-2 border-white rounded-xl outline-my-blue text-center text-black'
                  ></input>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default SplitBetween;
