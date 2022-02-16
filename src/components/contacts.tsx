import React from 'react';

export const Contacts = () => {
    return (
        <section id="contacts">
            <div className="container contacts__container">
                <div className="contacts__block">
                    <h2 className="contacts__title">
                        Contact me
                    </h2>
                    <form>
                        <input className="contacts__line" name="e-mail" type="text" placeholder="E-mail"/>
                        <input className="contacts__line" name="phone" type="text" placeholder="Phone"/>
                        <textarea className="contacts__line" name="message">Message</textarea>
                    </form>
                    <div>
                        <button className="button contacts__button">Send message</button>
                    </div>
                </div>
            </div>
        </section>
    )
}