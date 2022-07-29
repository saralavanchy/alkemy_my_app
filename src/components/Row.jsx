import React from "react"
//space-x-2
//flex-row-reverse
//justify-end
//justify-center
//items-center
//flex-grow

const ITEM_CLASS = "border-green-700 border p-2 h-20 w-20"

const Row = () => (
  <div className="py-4 px-2 divide-y-2 border border-blue-700 rounded w-[90%] h-96 mx-5">
    <div className={`flex h-1/2 justify-between items-end`}>
      <div className={`${ITEM_CLASS}`}>1</div>
      <div className={`${ITEM_CLASS}`}>2</div>
      <div className={`${ITEM_CLASS}`}>3</div>
    </div>
    <div className={`flex h-1/2`}>
      <div className={`${ITEM_CLASS}`}>1</div>
      <div className={`${ITEM_CLASS}`}>2</div>
      <div className={`${ITEM_CLASS}`}>3</div>
    </div>
  </div>
);
export default Row;
