import s from './Place.module.scss'

type PlacePropsType = {
    name: string,
    position: string,
    years: string,
    description: string
}

const Place = ({name, position, years, description}: PlacePropsType) => {
    return (
        <div className={s.place}>
            <h4 className={s.placeName}>{name}</h4>
            <div className={s.history}>
                <span className={s.position}>{position}</span>
                <span className={s.years}>{years}</span>
            </div>
            <p className={s.description}>{description}</p>
        </div>
    );
};

export default Place;