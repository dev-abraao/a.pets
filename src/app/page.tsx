import Image from 'next/image';
import './home.css'

export default function Home(){
    return  <>
            <div className="wrapper">
                <div className="container-info">

                    <div className='info1'>
                        <Image src='/pet2.jpg' alt='pet-image1' width={250} height={250}/>
                        <div className='info1-text'>
                            <h2>Quem somos nós?</h2>
                            <p>Nós somos a <span className='infobold'>a.pets</span>. Surgimos da <br />necessidade de encontrar lares para <br />animais em situações de desabrigo <br />de forma fácil, simples e segura!</p>
                        </div>
                    </div>
                    <div className='info2'>
                        <div className='info2-text'>
                            <h2>Como funciona?</h2>
                            <p>Para começar é simples, só cadastrar <br />sua conta e provar sua identidade, que <br />você poderá listar um bichinho, <br />ou encontrar um para chamar de seu!</p>
                        </div>
                    <Image src='/pet1.jpg' alt='pet-image1' width={250} height={250}/>
                    </div>
                </div>
                <div className="container-register">
                    abuble
                </div>
            </div>
            </>
}