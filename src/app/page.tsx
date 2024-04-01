"use client";
import React from "react";
import BodyComponent from "@/components/BodyComponent";
import MenuComponent from "@/components/MenuComponent";
import DownChevronIcon from "@/components/DownChevronIcon";

const page = () => {
  return (
    <div className="relative">
      <BodyComponent />
      <MenuComponent />
      <DownChevronIcon />
    </div>
  );
};

export default page;
