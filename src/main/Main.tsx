import s from './Main.module.css'
import c from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${c.container} ${c.spaceBetween}`}>
                <div className={s.text}>
                    <span>HELLO, MY NAME IS</span>
                    <h1>MARINA KUDLATSKAYA</h1>
                    <span>I AM Web Developer</span>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;