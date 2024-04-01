import React, { useState } from "react";
import menuIcon from "../assets/images/menu-icon.png";

import { CgClose } from "react-icons/cg";
import Image from "next/image";
import ListMenuComponent from "./ListMenuComponent";

const MenuComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="absolute top-0 right-0 mr-4 md:mr-8 mt-4 md:mt-8">
      <div className="relative">
        {isMenuOpen ? (
          <button onClick={() => setIsMenuOpen(false)}>
            <CgClose style={{ width: 40, height: 40 }} />
          </button>
        ) : (
          <button onClick={() => setIsMenuOpen(true)}>
            <Image src={menuIcon} alt="menu icon" width={40} height={40} />
          </button>
        )}

        {isMenuOpen && (
          <ListMenuComponent />
        )}
      </div>
    </div>
  );
};

export default MenuComponent;
