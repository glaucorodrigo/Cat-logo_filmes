import React from "react";
import './Header.css';
import logo from '../components/imagens/logotipo.png';


export default () => {
    return (
        <header>
            <div classname="header--logo">
                <a href="/" >
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <nav>
                <li>Filmes</li>
                <li>Séries</li>
                <li>Categorias</li>
            </nav>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}