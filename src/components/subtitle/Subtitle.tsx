import s from "./Subtitle.module.scss";

type SubtitlePropsType = {
    text: string,
    primaryText: string,
}

const Subtitle = ({text, primaryText}:SubtitlePropsType) => {
    return (
        <h3 className={s.subtitle}><span>{text}</span><strong>{primaryText}</strong></h3>
    );
};

export default Subtitle;