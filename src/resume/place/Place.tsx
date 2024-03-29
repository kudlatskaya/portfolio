import s from './Place.module.scss'

type PlacePropsType = {
    name: string,
    position: string,
    years: string,
    present?: string,
    description: string
}

export default function Place({name, position, years, present, description}: PlacePropsType) {
    return (
        <div className={s.place}>
            <h4 className={s.placeName}>{name}</h4>
            <div className={s.history}>
                <span className={s.position}><strong>{position}</strong></span>
                <span className={s.years}>{years}<span>{present}</span></span>
            </div>
            <p className={s.description}>{description}</p>
        </div>
    );
}