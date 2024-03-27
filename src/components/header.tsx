import './header.css'
import Image from 'next/image';
import { pacifico } from '../app/layout';

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
        <Image src='/pata.svg' alt='PataLogo' width="150" height="100"></Image>
        <h1 className={pacifico.className}>a.Pets</h1>
        <button>Entrar</button>
    </header>
  );
}
