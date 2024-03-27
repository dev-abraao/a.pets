"use client";
import './Header.css'
import { useState } from "react";

type MenuItem = {
  name: string;
  target: string;
};

const arrayMenu: MenuItem[] = [
  { name: "a.pets", target: "#" },
  { name: "Entrar", target: "#" },
];

export default function Header() {
  return (
    <header>
      <h1>a.pets</h1>
    </header>
  );
}
