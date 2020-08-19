import React from 'react';
import Banner from './banner'
import {LanguageContext} from '../language.context'

function WelcomeBanner() {
    return (
        <LanguageContext.Consumer>
            {({language}) => (
                <Banner
                title={language === "english" ? "Welcome" : "bienvenu"} />
            )}
        </LanguageContext.Consumer>
    );
}

export default WelcomeBanner