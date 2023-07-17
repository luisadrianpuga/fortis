import React, { useEffect, useState } from 'react';
import  Navitem from "../shared/Navitem.astro";

const Nav = () => {
    const [appLang, setAppLang] = useState(localStorage.getItem("appLang") || "en");
   
    const navItems = [
        {
            href:"#",
            textEn:"Home",
            textEs:"Inicio"
        },
        {
            href:"#services",
            textEn:"Services",
            textEs:"Servicios"
        },
        {
            href:"#about-us",
            textEn:"About us",
            textEs:"Sobre nosotros"
        },
        {
            href:"#features",
            textEn:"Features",
            textEs:"Características"
        },
        {
            href:"#contact",
            textEn:"Contact",
            textEs:"Contact"
        },
    ];

    // This useEffect will listen to changes in appLang and update it in the local storage
    useEffect(() => {
        localStorage.setItem("appLang", appLang);
    }, [appLang]);

    return (
        <ul>
            {navItems.map(item => {
                const text = appLang === "en" ? item.textEs : item.textEn;
                return <Navitem {...item} text={text} />;
            })}
        </ul>
    );
};

export default Nav;