import s from './Main.module.scss'
import c from '../common/styles/styles.module.scss'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${c.container} ${c.contentSpaceBetween}`}>
                <div className={s.text}>
                    <span>HELLO, MY NAME IS</span>
                    <h1>MARINA KUDLATSKAYA</h1>
                    <span>I AM Frontend Developer</span>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;