import React from 'react';
import Link from "next/link";
import {CgProfile} from "react-icons/cg";
import {MdLogout} from "react-icons/md";

import styles from './Menu.module.scss'
import {AuthService} from "@/services/auth/auth.service";

const Menu = () => {

    return (
        <nav className={styles.nav}>
            <ul>
                <Link href={'/profile'}>
                    <li>
                        <CgProfile/>Профиль
                    </li>
                </Link>
                <li onClick={() => {AuthService.logout()}}>
                    <MdLogout/>Выйти
                </li>
            </ul>
        </nav>
    );
};

export default Menu;