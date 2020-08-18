import React from 'react';
import Banner from './banner'
import {LanguageContext} from '../language.context'

function WelcomeBanner() {
    return (
        <LanguageContext.Consumer>
            {({language}) => (
                <Banner
                title={language === "english" ? "Welcome" : "Bienvenue"}
                message={language === "english" ? "Thank you for visiting my profile!" : "Merci d'avoir visité mon profil!"}/>
            )}
        </LanguageContext.Consumer>
    );
}

export default WelcomeBanner