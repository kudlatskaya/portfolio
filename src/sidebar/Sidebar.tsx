import React, {FC} from 'react'
//import {NavLink, useLocation} from 'react-router-dom'
import s from './Sidebar.module.css'
// import {PATH} from '../Pages'
//import closeIcon from './closeOutline.svg'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type SidebarPropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<SidebarPropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')
    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={s.close} onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} style={{color: "#eaeaea", width: '30px', height: '30px'}} />
                </button>

                <nav  className={s.nav}>
                    <a href="">HOME</a>
                    <a href="">SKILLS</a>
                    <a href="">PROJECTS</a>
                    <a href="">RESUME</a>
                    <a href="">CONTACT</a>
                </nav>
            </aside>
        </>
    )
}
