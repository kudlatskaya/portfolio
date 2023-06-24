import s from './Contacts.module.scss'
import c from '../common/styles/styles.module.scss'
import Subtitle from "../components/subtitle/Subtitle";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={c.container}>
                <h2 className={c.sectionTitle}>Contact me</h2>
                <Subtitle text={'MY '} primaryText={'Story'}/>
                <div className={s.contactForm}>
                    <form  action="">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" ></textarea>
                        <button  type={"submit"}>SEND MESSAGE</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contacts;