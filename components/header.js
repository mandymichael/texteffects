import HeaderStyles from '../styles/Header.module.css';
import LogoStyles from '../styles/Logo.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={HeaderStyles.headerContainer}>
            <Link href="/" className={`${HeaderStyles.logo} ${LogoStyles.logo}`}>
                <p className={LogoStyles.logoText}><span aria-hidden="true">TE</span> <span className="visually-hidden">Text Effects</span></p>
            </Link>

            <nav className={HeaderStyles.nav}>
                <ul className={HeaderStyles.navList}>
                    <li className={HeaderStyles.navItem}><Link href="/articles" className={HeaderStyles.navLink}>Articles</Link></li>
                    <li className={HeaderStyles.navItem}><Link href="/about" className={HeaderStyles.navLink}>About</Link></li>
                </ul>
            </nav>

            <a href="https://www.linkedin.com/in/mandykerr" target="_blank" className={HeaderStyles.contactLink}>Contact</a>
        </header>   
    )
}