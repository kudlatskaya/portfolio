import s from './Resume.module.scss';
import c from '../common/styles/styles.module.scss';
import Subtitle from "../components/subtitle/Subtitle";
import Place from "./place/Place";

const Resume = () => {
    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return (
        <div className={s.resumeBlock}>
            <div className={c.container}>
                <h2 className={c.sectionTitle}>Resume</h2>
                <Subtitle text={'MY '} primaryText={'Story'}/>
                <div className={`${s.resume} ${c.contentSpaceBetween}`}>
                    <div className={s.column}>
                        <h3 className={s.subTitle}>Education</h3>
                        <Place name={'Education1'} position={'Frontend Programming'} years={'2018 - 2020'} description={lorem}/>
                        <Place name={'Education2'} position={'Frontend Programming'} years={'2016 - 2018'} description={lorem}/>
                    </div>
                    <div className={s.column}>
                        <h3 className={s.subTitle}>Experience</h3>
                        <Place name={'Experience1'} position={'Frontend Programming'} years={'2022 - '} present={'PREZENT'} description={lorem}/>
                        <Place name={'Experience2'} position={'Frontend Programming'} years={'2020 - 2022'} description={lorem}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;