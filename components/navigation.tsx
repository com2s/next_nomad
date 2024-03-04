'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const path = usePathname(); // client 컴포넌트에서만 작동함
    // console.log(path)
    const [count, setCount] = useState(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link> {path === "/about-us" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us/company/sales">Sales</Link>
        </li>
        <li>
            <Link href={`/movies/${count}`}>Movies</Link>
        </li>
        <li>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
