import s from './Footer.module.scss'
import c from '../common/styles/styles.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareInstagram, faVk, faTelegram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const icons = [faSquareInstagram, faVk, faTelegram]

    return (
        <div className={s.footerBlock}>

            <div className={`${s.socialLinks} ${c.contentSpaceBetween}`}>
                {
                    icons.map((i, index) => {
                        return <div className={s.icon}>
                            <FontAwesomeIcon key={index} icon={i} style={{color: "#eaeaea", width: '30px', height: '30px'}} />
                        </div>
                    })
                }
            </div>
            <div className={s.copyright}>© 2023 ALL RIGHTS RESERVED</div>
            <div className={s.text}>DEVELOPED BY <span>MARINA KUDLATSKAYA</span></div>

        </div>
    );
};

export default Footer;