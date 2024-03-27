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
  return (
    <header>
      <div>
        <div>
          <nav></nav>
        </div>
      </div>
    </header>
  );
}
