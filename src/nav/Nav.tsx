import s from './Nav.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

type NavPropsType = {
    handleOpen: () => void,
    open: boolean,
}

const Nav = ({handleOpen, open}: NavPropsType) => {
    return (
        <div className={s.nav}>
            <a href="">HOME</a>
            <a href="">SKILLS</a>
            <a href="">PROJECTS</a>
            <a href="">RESUME</a>
            <a href="">CONTACT</a>
            {
                !open && (
                    <button className={s.menuButton} onClick={handleOpen}>
                        <FontAwesomeIcon icon={faBars} style={{color: "#eaeaea", width: '30px', height: '30px'}}/>
                    </button>
                )
            }
        </div>
    );
};

export default Nav;