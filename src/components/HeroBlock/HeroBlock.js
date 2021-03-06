import React from 'react';
import './HeroBlock.scss'

const HeroBlock = ({links, logos, title}) => {
    const logosImages=logos.map((logoItem, i) => <img src={logoItem} alt="partner-logo" className="hero-partners-item" key={i}/>);
    const navItems=links.map((link, i) => <a href={link.href} className="hero-navigation-item" key={i}>{link.title}</a>)
    

    return (
        <section className="hero">
        <div className='container'>
            <div className='hero-partners'>
                {logosImages}
            </div>
            <nav className='hero-navigation'>
                {navItems}
            </nav>
            <h1 className='hero-title' name="hero">{title}</h1>
            <a href="#hero" className="hero-link">Отследить</a>
        </div>
        </section>
    )
}

export default HeroBlock







