import s from './Contacts.module.scss'
import c from '../common/styles/styles.module.scss'
import Subtitle from "../components/subtitle/Subtitle";
import Contact from "./Contact/Contact";
import {faMap, faUser, faEnvelope, faAddressBook} from '@fortawesome/free-regular-svg-icons';

const Contacts = () => {
    const contacts = [
        {icon: faMap, name: 'Address', number: 'Minsk, Belarus'},
        {icon: faUser, name: 'Freelance', number: 'Available Right Now'},
        {icon: faEnvelope, name: 'Email', number: 'm.kudlatskaya@gmail.com'},
        {icon: faAddressBook, name: 'Phone', number: '+375 29 000 - 00 - 00'},
    ]

    return (
        <div className={s.contactsBlock}>
            <div className={c.container}>
                <h2 className={c.sectionTitle}>Contact me</h2>
                <Subtitle text={'LET\'S '} primaryText={'Talk About Ideas'}/>
                <div className={s.contacts}>
                    <div className={s.contactNumbers}>
                        {
                            contacts.map((c, index) => <Contact key={index} icon={c.icon} name={c.name}
                                                                number={c.number}/>)
                        }
                    </div>
                    <div className={s.contactForm}>
                        <form action="">
                            <div className={s.row}>
                                <div className={s.group}>
                                    <label htmlFor="">YOUR FULL NAME <span>*</span></label>
                                    <input type="text"/>
                                </div>
                                <div className={s.group}>
                                    <label htmlFor="">YOUR EMAIL ADDRESS <span>*</span></label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className={s.group}>
                                <label htmlFor="">YOUR SUBJECT <span>*</span></label>
                                <input name="" id=""></input>
                            </div>
                            <div className={s.group}>
                                <label htmlFor="">YOUR MESSAGE <span>*</span></label>
                                <textarea name="" id=""></textarea>
                            </div>
                            <div className={s.buttonDiv}>
                                <button type={"submit"}>SEND MESSAGE</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contacts;