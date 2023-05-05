import s from './Skills.module.css'
import c from '../common/styles/styles.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    let skills: string[] = ['React', 'HTML', 'CSS']
    let descriptions: string[] = [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
    ]

    return (
        <div className={s.skillsBlock}>
            <div className={c.container}>
                <h2 className={c.title}>Skills</h2>
                <div className={`${s.skills} ${c.contentSpaceBetween}`}>
                    <Skill title={skills[0]} description={descriptions[0]}/>
                    <Skill title={skills[1]} description={descriptions[1]}/>
                    <Skill title={skills[2]} description={descriptions[2]}/>
                    <Skill title={skills[0]} description={descriptions[0]}/>
                    <Skill title={skills[1]} description={descriptions[1]}/>
                    <Skill title={skills[2]} description={descriptions[2]}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;