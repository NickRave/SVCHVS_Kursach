import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="Footer">
            
            <nav className="NavIcons">
            <a href="https://vk.com/lvlvin"><img src={require("../assets/vk.png")} className="Icons" alt="Icons" /></a>
            <a href="https://t.me/camelFlash"><img src={require("../assets/telegram.png")} className="Icons" alt="Icons" /></a>
            <a href="/"><img src={require("../assets/tik_tok.png")} className="Icons" alt="Icons" /></a>
            
            
            
            </nav>
            <a className="Author">2002-2022 © Nikita Degterev</a>
        </footer>
    )
}