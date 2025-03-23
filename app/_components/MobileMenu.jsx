"use client";

import Link from "next/link";
import { useState } from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center md:hidden">
      <button onClick={() => setIsOpen(true)}>
        <svg
          className="size-6 fill-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 88c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m0 160c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m448 160c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h400c13.3 0 24 10.7 24 24"></path>
        </svg>
      </button>
      <div
        onClick={() => setIsOpen(false)}
        className={`absolute transition-all duration-300 top-0 left-0 z-30 w-dvw h-full bg-black/85 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <ul
          className={`bg-white w-2/3 h-full transition-all duration-300 p-5 flex flex-col gap-5 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <Link href="/">خانه</Link>
          </li>
          <li>
            <Link href="/">خدمات ما</Link>
          </li>
          <li>
            <Link href="/">پروژه ها</Link>
          </li>
          <li>
            <Link href="/">درباره ما</Link>
          </li>
          <li>
            <Link href="/">تماس با ما</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
