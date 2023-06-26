import s from './Contact.module.scss'
import c from '../../common/styles/styles.module.scss'
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type ContactPropstype = {
    icon: IconDefinition,
    name: string,
    number: string,
}

const Contact = ({icon, name, number}: ContactPropstype) => {
    return (
        <div className={s.contact}>
            <div className={c.icon}>
                <FontAwesomeIcon icon={icon} style={{color: '#eaeaea', height: '20px', width: '20px'}}/>
            </div>
            <div className={s.contactDescription}>
                <p className={s.contactName}><strong>{name}</strong></p>
                <p>{number}</p>
            </div>
        </div>
    );
};

export default Contact;