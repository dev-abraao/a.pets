"use client";
import './header.css'
import { useState } from "react";
import Image from 'next/image'

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
        <Image src='/pata.svg' alt='PataLogo' width="150" height="100" style={{ color: "#0CBBFE"}}></Image>
        <h1>a.pets</h1>
    </header>
  );
}
