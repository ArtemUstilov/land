import React, {Component} from 'react';
import '../styles/Navbar.css'
import '../styles/settings.css'
import {Translate, withLocalize} from 'react-localize-redux'
import contactsTranslations from '../translations/navbar.json'
import Button from "./Button.js";
import logo from '../img/logoWhite.png'
import {Link} from 'react-router-dom'
import design2 from '../img/design2.jpg'
import {renderToStaticMarkup} from "react-dom/server";

class Navbar extends Component {
    constructor(props) {
        super(props);
            this.props.initialize({
                languages: [
                    {name: "Русский", code: "ru"},
                    {name: "Українська", code: "ua"}
                ],
                options: {renderToStaticMarkup}
            });
        this.props.addTranslation(contactsTranslations);
    }

    render() {
        return <section>
            <div className='header row  d-flex justify-content-center align-items-center'>
                <div className="col-12 col-sm-8 d-flex ">
                    <div className='row d-flex justify-content-around w-100'>
                        {[['nav.services','/services'],
                            ['nav.portfolio','/portfolio'],
                            ['nav.about','/about'],
                            ['logo','/'],
                            ['nav.contacts','/contacts'],
                            ['nav.call','consult']].map(x=>{
                            return <div key={x[0]} className="col-sm-2">
                                <Link to={x[1]}>
                                {x[0] === 'logo' ?
                                    <img alt='' src={logo} className='img-fluid'/> :
                                    <Button white={false} value={x[0]}/>}
                                </Link>
                            </div>
                            })}
                    </div>
                    {/*<Button white={true} value='HELLO'/>*/}
                </div>
            </div>
        </section>;
    }
}

export default withLocalize(Navbar);