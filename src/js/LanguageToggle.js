import React from 'react';
import { withLocalize } from 'react-localize-redux';
import Switch from '../components/ToggleSwitch/index.js';
import Button from './Button.js'

let LanguageToggle = ({languages, activeLanguage, setActiveLanguage}) => {
    const getClass = (languageCode) => {
        return languageCode === activeLanguage.code ? 'active' : ''
    };

    return (
        <Switch theme="default" className="d-flex" enabled={true} onStateChanged={({enabled})=>{
            setActiveLanguage(enabled? languages[0].code : languages[1].code)
        }}/>

    );
};
let clicked = false;
let MLanguageToggle = ({languages, activeLanguage, setActiveLanguage}) => {
    const getClass = (languageCode) => {
        return languageCode === activeLanguage.code ? 'active' : ''
    };
    let value =  (activeLanguage && activeLanguage.code === languages[0].code) ? 'nav.lan2': 'nav.lan1';
    if(!clicked)setTimeout(()=>{if(document.getElementById('toggle'))document.getElementById('toggle').click(); clicked = true;}, 0 );
    return (
        <Button white={false} id='toggle' classes='no-border nav-text' value={'nav.lan1'}onclick={()=>{
            setActiveLanguage(value === 'nav.lan2' ? languages[1].code : languages[0].code)}
        }/>
    );
};
MLanguageToggle = withLocalize(MLanguageToggle)
LanguageToggle = withLocalize(MLanguageToggle)
export {LanguageToggle, MLanguageToggle}
