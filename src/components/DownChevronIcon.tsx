import Image from "next/image";
import React from "react";
import chevronIcon from "../assets/images/chevron-up.png";

const DownChevronIcon = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 md:mb-8">
      <div className="chevron-icon-container">
        <Image src={chevronIcon} alt="chevron icon" width={40} height={40} />
      </div>
    </div>
  );
};

export default DownChevronIcon;
