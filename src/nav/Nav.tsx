import s from './Nav.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">HOME</a>
            <a href="">SKILLS</a>
            <a href="">PROJECTS</a>
            <a href="">RESUME</a>
            <a href="">CONTACT</a>
            <div className={s.menuButton}>
                <FontAwesomeIcon icon={faBars} style={{color: "#eaeaea", width: '30px', height: '30px'}} />
            </div>
        </div>
    );
};

export default Nav;