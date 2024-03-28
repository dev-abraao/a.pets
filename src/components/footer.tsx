import './footer.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer>
            <div className='contact-info'>
                <h1>Contate-nos ›</h1>
                <Image src='/facebook.svg' alt='facebook' width={45} height={45}></Image>
                <Image src='/instagram.svg' alt='instagram' width={45} height={45}></Image>
            </div>
        </footer>
    )
}