"use client";

import Image from "next/image";

const Avatar = ({ image = null }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={image || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
