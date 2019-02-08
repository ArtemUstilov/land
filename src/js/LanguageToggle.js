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
let MLanguageToggle = ({languages, activeLanguage, setActiveLanguage}) => {
    const getClass = (languageCode) => {
        return languageCode === activeLanguage.code ? 'active' : ''
    };
    let value =  (activeLanguage && activeLanguage.code === languages[0].code) ? 'nav.lan1': 'nav.lan2';
    return (
        <Button white={false} value={value}onclick={()=>{
            setActiveLanguage(value === 'nav.lan2' ? languages[0].code : languages[1].code)}
        }/>
    );
};
MLanguageToggle = withLocalize(MLanguageToggle)
LanguageToggle = withLocalize(MLanguageToggle)
export {LanguageToggle, MLanguageToggle}