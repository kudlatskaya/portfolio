import React from 'react';
import s from './Header.module.scss'
import Nav from "../nav/Nav";

type HeaderPropsType = {
    handleOpen: () => void,
    open: boolean,
}

const Header = ({handleOpen, open}: HeaderPropsType) => {
    return (
        <div className={s.header}>

            <Nav  open={open} handleOpen={handleOpen}/>

        </div>
    );
};

export default Header;