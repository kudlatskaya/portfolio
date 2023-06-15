import s from './Footer.module.scss'
import c from '../common/styles/styles.module.scss'

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${c.container} ${s.footerBlockContainer}`}>
                <h2 className={c.title}>MARINA KUDLATSKAYA</h2>
                <div className={`${s.socialLinks} ${c.contentSpaceBetween}`}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <p className={s.copyright}>© 2023 ALL RIGHTS RESERVED</p>
            </div>
        </div>
    );
};

export default Footer;