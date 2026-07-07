import { useState } from "react";


function Header() {
    const [navbar,setNavbar] = useState(false);
    function setShow(){
        setNavbar(!navbar);
    }
    const stylenav ={
        display:navbar?"block":"none"
    }
    return (
        <header className="head">
            <p onClick={ setShow  }><i className="ri-menu-line"></i></p>
            <ul className="name">
                <li><button>R</button>Ramkumar.S</li>
            </ul>
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#certificates">Certfications</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="show" style={stylenav}>
                <p onClick={ setShow }>X</p>
                <ul className="nav2">
                    <li><a href="#home" onClick={ setShow }>Home</a></li>
                    <li><a href="#about" onClick={ setShow }>About</a></li>
                    <li><a href="#skills" onClick={ setShow }>Skills</a></li>
                    <li><a href="#projects" onClick={ setShow }>Projects</a></li>
                    <li><a href="#certificates" onClick={ setShow }>Certfications</a></li>
                    <li><a href="#contact" onClick={ setShow }>Contact</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;