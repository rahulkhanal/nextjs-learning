import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/about/us">Us</Link>
    </nav>
  );
};

export default Nav;
