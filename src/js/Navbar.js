import React, {Component} from 'react';
import '../styles/Navbar.css'
import '../styles/settings.css'
import {Translate, withLocalize} from 'react-localize-redux'
import contactsTranslations from '../translations/services.json'
import Button from "./Button.js";
import logo from '../img/logo.png'
import design2 from '../img/design2.jpg'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(contactsTranslations);
    }

    render() {
        return <section>
                <div className='header row  d-flex justify-content-center align-items-center'>
                    <div className="col-12 col-sm-8 d-flex ">
                        <div className='row d-flex justify-content-around w-100'>
                            <div className="col-sm-2">
                                <Button white={true} value="Hello"/>
                            </div>
                            <div className="col-sm-2"><Button white={true} value="Hello"/></div>
                            <div className="col-sm-2"><Button white={true} value="Hello"/></div>
                            <div className="col-sm-2"><Button white={true} value="Hello"/></div>
                            <div className="col-sm-2"><img alt='' src={logo} className='img-fluid'/></div>
                            <div className="col-sm-2"><Button white={true} value="Hello"/></div>
                        </div>
                       {/*<Button white={true} value='HELLO'/>*/}
                    </div>
                </div>
            </section>;
    }
}

export default withLocalize(Navbar);