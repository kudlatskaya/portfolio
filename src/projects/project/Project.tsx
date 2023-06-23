import s from './Project.module.scss'
import c from '../../common/styles/styles.module.scss'

type ProjectPropsType = {
    title: string,
    description: string,
    url: string,
}

const Project = ({title, description, url}: ProjectPropsType) => {

    return (
        <div className={s.project}>
            <div className={s.projectImg} style={{backgroundImage: `url(${url})`}}></div>
            <div className={s.projectText}>
                <h3 className={c.subtitle}><span>{title}</span></h3>
                <p className={s.description}>{description}</p>
            </div>
            <div className={s.more}>
                <a  href="">See project</a>
            </div>
        </div>
    );
};

export default Project;