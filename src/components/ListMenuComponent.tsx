import React from "react";

const ListMenuComponent = () => {
  return (
    <div className="absolute h-auto right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-md animate-slide-in-right">
      <ul>
        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Opcion 1</li>
        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Opcion 2</li>
        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Opcion 3</li>
      </ul>
    </div>
  );
};

export default ListMenuComponent;
