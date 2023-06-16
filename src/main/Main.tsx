import s from './Main.module.scss'
import c from '../common/styles/styles.module.scss'

const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={`${c.container} ${c.contentSpaceAround}`}>
                <div>
                    <h3 className={s.subtitle}>HELLO, <span>MY NAME IS</span></h3>
                    <h1 className={s.headTitle}><span>MARINA </span>KUDLATSKAYA</h1>
                    <h3 className={s.subtitle}>I AM <strong>Frontend Developer</strong></h3>
                </div>
                {/*<div className={s.photo}></div>*/}
            </div>
        </div>
    );
};

export default Main;