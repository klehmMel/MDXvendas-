import Link from 'next/link'
import styles from './header.module.css'
import {IoSearch} from 'react-icons/io5'

export default function Header() {
  return (
    <header className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
            <Link href='/'>
            <span className={styles.logo1}>M</span>
            <span className={styles.logo2}>D</span>
            <span className={styles.logo3}>X</span>
            </Link>
        </div>

        {/* Busca */}
        <div className={styles.searchBar}>
            <input type="text" placeholder='Buscar "Apartamento"'/>
            <div className={styles.location}>
                <button className={styles.searchBtn}> <IoSearch size={20}/>
                </button>
            </div>
        </div>

        {/* Menu */}
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href='/signin' className={styles.loginBtn}> Login
                    </Link>
                </li>

                <li>
                    <Link href='/' className={styles.anunciarBtn}> Anunciar Grátis
                    </Link>
                </li>



            </ul>
             </nav>







    </header>
    )
}