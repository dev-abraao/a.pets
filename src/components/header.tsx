import "./header.css";
import Image from "next/image";
import Link from "next/link";
import { pacifico } from "../app/layout";

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
        <Image src="/pata.svg" alt="PataLogo" width="150" height="100"></Image>
        <Link href='/'>
          <h1 className={pacifico.className}>a.Pets</h1>
        </Link>
      <Link href="/login">
        <button className="log-in">Entrar</button>
      </Link>
    </header>
  );
}
