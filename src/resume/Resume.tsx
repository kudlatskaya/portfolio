import s from './Resume.module.css'
import c from '../common/styles/Container.module.css'
import Place from "./place/Place";

const Resume = () => {
    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return (
        <div className={s.resumeBlock}>
            <div className={c.container}>
                <h2 className={c.title}>Resume</h2>
                <div className={`${s.resume} ${c.contentSpaceBetween}`}>
                    <div className={s.column}>
                        <h3 className={s.subTitle}>Education</h3>
                        <Place name={'CoderHouse Courses'} position={'Frontend Programming'} years={'2019-2021'} description={lorem}/>
                        <Place name={'CoderHouse Courses'} position={'Frontend Programming'} years={'2019-2021'} description={lorem}/>
                    </div>
                    <div className={s.column}>
                        <h3 className={s.subTitle}>Experience</h3>
                        <Place name={'CoderHouse Courses'} position={'Frontend Programming'} years={'2019-2021'} description={lorem}/>
                        <Place name={'CoderHouse Courses'} position={'Frontend Programming'} years={'2019-2021'} description={lorem}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;