'use client'
import React, { useEffect, useState } from 'react'

function SplitBetween() {

  const [splitType, setSplitType] = useState('equal');

  const getSplitText = () => {
    
    if (splitType == 'equal') {
      return 'Split Equally'
    } else if (splitType == 'percentage') {
      return 'split based on percentage'
    } else if (splitType == 'exact') {
      return 'split exactly'
    }

    return ""
  }

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


  const [splitAmount, setSplitAmount] = useState('');
  const [splitBetween, setSplitBetween] = useState(users)
  const [splitPercentage, setSplitPercentage] = useState('');

  const handleSplitAmountChange = (e, user) => {
    if (splitType == 'equal') {
      const newSplitBetween = [...splitBetween]

      if (splitBetween.includes(user)) {
        const idx = newSplitBetween.indexOf(user)
        newSplitBetween.splice(idx, 1);
        setSplitBetween(newSplitBetween);
      } else {
        newSplitBetween.push(user)
        setSplitBetween(newSplitBetween);
      }
    }
    else if (splitType == 'percentage') {
      const value = e.target.value;
      const newSplitPercentage = { ...splitPercentage };
      newSplitPercentage[user] = value;
      setSplitPercentage(newSplitPercentage);
    }
    else if (splitType == 'exact') {
      const value = e.target.value;
      const newSplitAmount = { ...splitAmount };
      newSplitAmount[user] = value;
      setSplitAmount(newSplitAmount);
    }

  }

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-blue focus:outline-none bg-my-light-blue">
        <div className="flex flex-col items-center rounded-3xl p-4 bg-my-light-blue border-0 border-white ">
          <div className="relative flex flex-col w-full outline-none focus:outline-none">
            <div className="flex flex-row items-center justify-between p-2 border-solid rounded-xl bg-my-blue">
              <h3 className="text-3xl font-extrabold text-white font-outline-2 text-center">
                Split Between
              </h3>
            </div>
            <div className='flex flex-row items-center justify-between p-6 text-2xl'>
              {Object.keys(splitTypeOptions).map(key => (
                <p key={key} className={`p-1 rounded-xl cursor-pointer text-my-blue ${splitType === key && 'bg-white'}`} onClick={() => setSplitType(key)}>{splitTypeOptions[key]}</p>
              ))}
            </div>
            <div className="text-center">
              {getSplitText()}
            </div>
            <div className='flex flex-col'>
              {users.map(val => (
                <div key={val} className='px-6 py-4 flex flex-row items-center justify-around'>
                  <p className="font-outline-2 text-2xl">{val}</p>
                  {
                    splitType === 'equal' && (
                      <input
                        onClick={(e) => handleSplitAmountChange(e, val)}
                        checked={splitBetween.includes(val)}
                        type='radio'
                        className='w-4 h-4 remove-arrow bg-white border-2 border-white rounded-xl outline-my-blue text-center text-black'
                      />
                    )
                  }
                  {(splitType === 'exact' || splitType === 'percentage') &&
                    <input onChange={(e) => handleSplitAmountChange(e, val)} value={splitAmount[val]}
                      type='number'
                      className='remove-arrow w-20 bg-white border-2 border-white rounded-xl outline-my-blue text-center text-black'
                    ></input>
                  }

                </div>
              ))}
            </div>
            <button className='text-my-blue text-3xl mt-6 font-outline-white-2'>Done</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplitBetween;
