import s from './Resume.module.scss';
import c from '../common/styles/styles.module.scss';
import Subtitle from "../components/subtitle/Subtitle";
import SimpleAccordion from "./place/SimpleAccordion";

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
                        <SimpleAccordion company={'Education1'} position={'Frontend Programming'} years={'2018-2020'} description={lorem}/>
                        <SimpleAccordion company={'Education2'} position={'Frontend Programming'} years={'2016-2018'} description={lorem}/>
                    </div>
                    <div className={s.column}>
                        <h3 className={s.subTitle}>Experience</h3>
                        <SimpleAccordion company={'Experience1'} position={'Frontend Programming'} years={'2022-PREZENT'} description={lorem}/>
                        <SimpleAccordion company={'Experience2'} position={'Frontend Programming'} years={'2020-2022'} description={lorem}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;