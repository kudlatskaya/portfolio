import s from './Contacts.module.css'
import c from '../common/styles/styles.module.css'

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={c.container}>
                <h2 className={c.title}>Contact me</h2>
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