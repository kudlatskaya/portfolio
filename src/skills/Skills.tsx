import s from './Skills.module.css'
import c from '../common/styles/Container.module.css'
import Skill from "./skill/skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={c.container}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill />
                </div>
            </div>
        </div>
    );
};

export default Skills;