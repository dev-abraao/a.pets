"use client";

import { useState } from "react";

type MenuItem = {
  name: string;
  target: string;
};

const arrayMenu: MenuItem[] = [
  { name: "a.pets", target: "#" },
  { name: "Entrar", target: "#" },
];

export function Header() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleItemClick = (index: number, target: string): void => {
    setActiveIndex(index);
    window.location.href = target;
  };

  return (
    <header>
      <div>
        <div>
          <nav>
            {arrayMenu.map((item: MenuItem, index: number) => (
              <button
                key={index}
                onClick={() => handleItemClick(index, item.target)}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
