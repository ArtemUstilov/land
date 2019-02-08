import React from 'react';
import { withLocalize } from 'react-localize-redux';
import Switch from '../components/ToggleSwitch/index.js';

const LanguageToggle = ({languages, activeLanguage, setActiveLanguage}) => {
    const getClass = (languageCode) => {
        return languageCode === activeLanguage.code ? 'active' : ''
    };

    return (
        <Switch theme="default" className="d-flex" enabled={true} onStateChanged={({enabled})=>{
            setActiveLanguage(enabled? languages[0].code : languages[1].code)
        }}/>

    );
};
export default withLocalize(LanguageToggle);