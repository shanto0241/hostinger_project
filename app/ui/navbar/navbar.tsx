'use client'
import Link from 'next/link';
import styles from '../navbar/navbar.module.css'
import { usePathname } from 'next/navigation';



const menuItems = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Images",
        path: "/images",
    },
    {
        title: "Login",
        path: "/login",
    },
    {
        title: "Dashboard",
        path: "/dashboard",
    },
]

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className={styles.container}>
            <div className={styles.title}>Hostinger</div>
            <ul className={styles.list}>
                {menuItems.map((menu) => (<li key={menu.title}><span className={styles.menu}>
                    <Link href={menu.path} className={pathname==menu.path ? styles.active : styles.link}>{menu.title}</Link></span></li>))}

            </ul>
        </div>
    );
};

export default Navbar;